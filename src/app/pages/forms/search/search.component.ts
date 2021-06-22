import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Question } from '../../entity/question';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  onChartInit(ec) {
    this.gCharts = ec;
  }

  searchQuestion = '';
  gCharts;
  graphData = [
    // {
    //   'relation': '症状',
    //   'content': '头晕',
    // },
    // {
    //   'relation': '症状',
    //   'content': '头痛',
    // },
    // {
    //   'relation': '吃什么',
    //   'content': '心脏病药',
    // },
    // {
    //   'relation': '看什么',
    //   'content': '心脏病医生',
    // },
    // {
    //   'relation': '怎么办',
    //   'content': '给自己买好棺材',
    // },
  ];

  randomHexColor(): string {
    let hex = Math.floor(Math.random() * 16777216).toString(16);
    while (hex.length < 6) {
      hex = '0' + hex;
    }
    return '#' + hex;
  }

  generateGraphData(inputData, queryItself): any {
    const data = [];
    const links = [];
    data.push({name: queryItself});
    for (const item of inputData) {
      data.push({name: item.content, itemStyle: {color: this.randomHexColor()}});
    }
    for (const item of inputData) {
      links.push({source: queryItself, target: item.content, labelText: item.relation});
    }
    return [data, links];
  }
  visData = this.generateGraphData(this.graphData, this.searchQuestion)[0];
  visLinks = this.generateGraphData(this.graphData, this.searchQuestion)[1];

  option = {
    title: {
      text: 'Knowledge Graph',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'force',
        symbolSize: 65,
        edgeLength: [150, 100],
        focusNodeAdjacency: true,
        force: {
          repulsion: 2500,
        },
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 10],
        edgeLabel: {
          fontSize: 10,
          normal: {
            show: true,
            formatter: function (param) {
              return param.data.labelText;
            },
          },
        },
        data: this.visData,
        // links: [],
        links: this.visLinks,
        lineStyle: {
          opacity: 0.9,
          width: 5,
          curveness: 0,
        },
      },
    ],
  };

  answerTitle = 'Ask anything!';
  answer = ['Feel free to ask question here. You can also support this website if you want.'];
  validRes = false;

  initAns = {
    answerTitle: 'Ask anything!',
    answer: ['Feel free to ask question here. You can also support this website if you want.'],
    validRes: false,
  };

  errorAns = {
    answerTitle: 'Something went wrong!',
    answer: ['Please retry.'],
    validRes: false,
  };

  notValidAns = {
    answerTitle: 'Not a valid question!',
    answer: ['Please type a valid question here.'],
    validRes: false,
  };

  validQuestion;

  constructor(private routeInfo: ActivatedRoute, private searchService: SearchService,
              private toastrService: NbToastrService, private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    const q = this.routeInfo.snapshot.queryParams['question'];
    this.searchQuestion = q ? q : '';
    if (this.searchQuestion !== '') {
      this.submitSearch();
    }
  }

  setAns(ans): void {
    this.answerTitle = ans.answerTitle;
    this.answer = ans.answer;
    this.validRes = ans.validRes;
  }

  async submitSearch(): Promise<any> {
    if (this.searchQuestion === '') {
      this.setAns(this.initAns);
      return;
    }

    const resp: any = await this.searchService.getAnswer(this.searchQuestion);
    if (resp.msg.toLowerCase() !== 'ok') {
      this.showToast('warning', 'Query failed', 'Please check your network or login again');
    } else if (resp.data.result.toLowerCase() !== 'ok') {
      this.showToast('warning', 'Query failed', 'Please try another question');
      this.setAns(this.notValidAns);
    } else {
      this.showToast('success', 'Query success', '');
      const resData = resp.data;
      const rawAns = resData.answer[0].substring(resData.answer[0].indexOf('：') + 1).split('；');
      this.validQuestion = new Question(resData.description, resData.param1, resData.type,
        rawAns);
      localStorage.setItem('searchQuestion', JSON.stringify(this.validQuestion));
      this.answerTitle = resData.answer.length === 1 ? resData.description : this.searchQuestion;
      this.answer = resData.answer;
      this.validRes = resData.answer.length === 1;
    }

    const token = localStorage.getItem('token');
    const params = new HttpParams().set('query', this.searchQuestion);
    this.http.get<any>( '/api/kg/queryRelation', {params, headers : {'token': token}}).subscribe(
      res => {
        this.graphData = res.data.answer;
        this.visData = this.generateGraphData(this.graphData, this.searchQuestion)[0];
        this.visLinks = this.generateGraphData(this.graphData, this.searchQuestion)[1];
        this.option.series[0].data = this.visData;
        this.option.series[0].links = this.visLinks;
        this.gCharts.setOption(this.option);
        // echarts.getInstance(this.gCharts).setOption(this.option);
      },
      err => {
        this.showToast('warning', 'Get log detail failed', '');
      },
    );
  }

  modifyAnswer(): void {
    this.router.navigateByUrl('/pages/support?isUpdate=true');
  }

  deleteQuestion(): void {
    const token = localStorage.getItem('token');
    const req = {
      query: this.searchQuestion,
    };
    this.http.post<any>( '/api/kg/delete', req, {headers : {'token': token}}).subscribe(
      res => {
        this.showToast('success', 'Delete success', '');
        setTimeout(() => {
          this.searchQuestion = '';
          this.submitSearch();
        }, 500);
      },
      err => {
        this.showToast('warning', 'Delete failed', '');
      },
    );
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: false,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };
    const titleContent = title ? `${title}` : '';
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}

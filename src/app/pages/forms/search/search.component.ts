import { Component, Inject, OnInit} from '@angular/core';
import { SearchService } from './search.service';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Question } from '../../entity/question';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  option = {
    title: {
      text: 'Graph 简单示例',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'force',
        symbolSize: 25,
        force: {
          repulsion: 1000,
        },
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 5],
        edgeLabel: {
          fontSize: 10,
        },
        data: [{
          name: '节点1',
        }, {
          name: '节点2',
        }, {
          name: '节点3',
        }, {
          name: '节点4',
        }],
        // links: [],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true,
          },
          lineStyle: {
            width: 5,
            curveness: 0.2,
          },
        }, {
          source: '节点2',
          target: '节点1',
          label: {
            show: true,
          },
          lineStyle: {
            curveness: 0.2,
          },
        }, {
          source: '节点1',
          target: '节点3',
        }, {
          source: '节点2',
          target: '节点3',
        }, {
          source: '节点2',
          target: '节点4',
        }, {
          source: '节点1',
          target: '节点4',
        }],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };

  searchQuestion = '';
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
  }

  modifyAnswer(): void {
    // console.log('modify answer called');
    this.router.navigateByUrl('/pages/support?isUpdate=true');
  }

  deleteQuestion(): void {
    // console.log('delete question called');
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

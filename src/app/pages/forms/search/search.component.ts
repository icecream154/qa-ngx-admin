import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import { SearchService } from './search.service';
import { of as observableOf } from 'rxjs';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Question } from '../../entity/question';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchQuestion = '';
  answerTitle = 'Ask anything!';
  answer = ['Feel free to ask question here. You can also support this website if you want.'];
  validRes = false;

  errorAns = {
    answerTitle: 'Something went wrong!',
    answer: ['Please retry.'],
    valid: false,
  };

  notValidAns = {
    answerTitle: 'Not a valid question!',
    answer: ['Please type a valid question here.'],
    valid: false,
  };

  validQuestion;

  constructor(private routeInfo: ActivatedRoute, private searchService: SearchService,
              private toastrService: NbToastrService, private router: Router) { }

  ngOnInit(): void {
    const q = this.routeInfo.snapshot.queryParams['question'];
    this.searchQuestion = q ? q : '';
    if (this.searchQuestion !== '') {
      this.submitSearch();
    }
  }

  async submitSearch(): Promise<any> {
    const resp: any = await this.searchService.getAnswer(this.searchQuestion);
    if (resp.msg.toLowerCase() !== 'ok') {
      this.showToast('warning', 'Query failed', 'Please check your network or login again');
    } else if (resp.data.result.toLowerCase() !== 'ok') {
      this.showToast('warning', 'Query failed', 'Please try another question');
      this.answerTitle = this.notValidAns.answerTitle;
      this.answer = this.notValidAns.answer;
      this.validRes = this.notValidAns.valid;
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

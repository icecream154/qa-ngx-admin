import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Question} from '../../entity/question';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngx-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {

  isUpdate: boolean;
  rawAnswer: string;
  question: Question = new Question('', '', '', []);
  constructor(private routeInfo: ActivatedRoute, private toastrService: NbToastrService, private http: HttpClient) { }

  ngOnInit(): void {
    this.isUpdate = this.routeInfo.snapshot.queryParams['isUpdate'] === 'true';
    if (this.isUpdate) {
      const quesObj = JSON.parse(localStorage.getItem('searchQuestion'));
      this.question = new Question(quesObj.description, quesObj.param1, quesObj.type, quesObj.answer);
      this.updateAttr();
    }
  }

  submit() {
    const token = localStorage.getItem('token');
    this.updateQues();
    const req = {
      type: this.question.type,
      param1: this.question.param1,
      param2: this.question.answer,
    };
    this.http.post<any>( '/api/kg/new', req, {headers : {'token': token}}).subscribe(
      res => {
        this.showToast('success', 'Commit success', '');
        this.resetForm();
      },
      err => {
        this.showToast('warning', 'Commit failed', 'Please check your network.');
      },
    );
  }

  private resetForm() {
    this.question = new Question('', '', '', []);
    this.updateAttr();
  }

  private updateAttr() {
    this.rawAnswer = this.question.flattenAnswer();
  }

  private updateQues() {
    this.question.parseAnswer(this.rawAnswer);
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-list',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute, private http: HttpClient, private toastrService: NbToastrService) {}

  ngOnInit(): void {
    let qid = this.routeInfo.snapshot.queryParams['qid'];
    if (!qid) qid = 1;
    this.qid = qid;

    const token = localStorage.getItem('token');
    const params = new HttpParams().set('qid', this.qid.toString(10)).set('topk', '1000');
    const that = this;
    this.http.get<any>( '/api/user/questiondetail', {params, headers : {'token': token}}).subscribe(
      res => {
        that.title = res.questions.title;
        that.detail = res.questions.detail;
        that.answers = res.answers;
      },
      err => {
        this.showToast('warning', 'Get question detail failed', 'Please check your network.');
      },
    );
  }

  qid: number = 1;
  title: string = 'What \'s your question?';
  detail: string = 'This is the detail information of the question.';
  // /usr/local/bin/node
  answers = [
    {id: 0, email: 'fake@fake.com', title: 'title', detail: 'details', type: 'answer', qid: 2, time: null},
  ];

  userAnswer: string = '';

  submitAns() {
    if (this.userAnswer === '') return;
    const token = localStorage.getItem('token');
    const req = {
      email: JSON.parse(localStorage.getItem('user')).email,
      qid: this.qid,
      answer: this.userAnswer,
    };
    this.http.post<any>( '/api/user/reply', req, {headers : {'token': token}}).subscribe(
      res => {
        this.showToast('success', 'Commit success', '');
        setTimeout(() => { location.reload(); }, 500);
      },
      err => {
        this.showToast('warning', 'Commit failed', 'Please check your network.');
      },
    );
  }

  getCardSize(content) {
    if (content.length > 300) return 'small';
    return 'tiny';
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss'],
})
export class AskQuestionComponent implements OnInit {

  title: string = '';
  detail: string = '';
  constructor(private routeInfo: ActivatedRoute, private toastrService: NbToastrService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  askQuestion() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const req = {
      email: user.email,
      title: this.title,
      detail: this.detail,
    };
    if (this.title !== '') {
      this.http.post<any>( '/api/user/newquestion', req, {headers : {'token': token}}).subscribe(
        res => {
          this.showToast('success', 'Commit success', '');
          this.resetForm();
        },
        err => {
          this.showToast('warning', 'Commit failed', 'Please check your network.');
        },
      );
    }
  }

  private resetForm() {
    this.title = '';
    this.detail = '';
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

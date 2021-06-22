import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-list',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute, private http: HttpClient, private toastrService: NbToastrService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    this.username = user.fullName;
    this.email = user.email;
    const params = new HttpParams().set('lognum', '1000').set('email', this.email);
    this.http.get<any>( '/api/user/logs', {params, headers : {'token': token}}).subscribe(
      res => {
        console.log(res);
        this.logs = res.logs;
      },
      err => {
        this.showToast('warning', 'Get log detail failed', '');
      },
    );
  }

  username: string = 'Default Name';
  email: string = 'defaultName@google.com';
  // /usr/local/bin/node
  logs = [
    {type: 'update', query: 'What\'s your name?', time: '2021-06-01', ext_info: 'This is the new answer.'},
  ];

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of as observableOf } from 'rxjs';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';

@Injectable()
export class AuthService {

  private _authUrl = '/api/auth/';
  constructor(private http: HttpClient, private router: Router,
              private toastrService: NbToastrService) {}

  fetchUser() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token == null || user == null) {
      localStorage.setItem('token', null);
      localStorage.setItem('user', null);
      this.router.navigateByUrl('/auth/login').then(r => {});
    } else {
      // console.log(JSON.parse(user));
      return observableOf(JSON.parse(user));
    }
  }

  register(user) {
    this.http.post<any>(this._authUrl + 'register', user).subscribe(
      res => {
        // console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
        this.showToast('success', 'Register success', 'You will be redirected to search page.');
        setTimeout(
          function () {},
          1500);
        this.router.navigateByUrl('/pages/search').then(r => {
          this.showToast('warning', 'Navigate failed', 'Please go to the login page.');
        });
      },
      err => {
        // console.log(err);
        this.showToast('warning', 'Register failed', 'Your email may have been registered.');
      },
    );
  }

  login(user) {
    this.http.post<any>(this._authUrl + 'login', user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.showToast('success', 'Log success', 'You will be redirected to search page.');
        setTimeout(
          function () {},
          1500);
        this.router.navigateByUrl('/pages/search').then(r => {
          this.showToast('warning', 'Navigate failed', 'Please refresh the page.');
        });
      },
      err => {
        // console.log(err);
        this.showToast('warning', 'Log failed', 'Please check your email and password.');
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

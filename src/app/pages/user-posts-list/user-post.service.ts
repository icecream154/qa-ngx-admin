import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class UserPost {
  id: number;
  qid: number;
  email: string;
  title: string;
  detail: string;
  type: string;
}

@Injectable()
export class PostFetcher {

  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<UserPost[]> {
    pageSize = 5;
    const token = localStorage.getItem('token');
    return this.http
      .get<UserPost[]>('/api/user/allquestions?pageSize=' + pageSize + '&pageNum=' + page, {headers: {'token': token}})
      .pipe(
        delay(1500),
      );
  }
}

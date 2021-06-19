import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {Question} from '../../entity/question';

export class QueryPost {
  title: string;
  link: string;
  creator: string;
  text: string;
}

@Injectable()
export class QueryFetcher {

  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<Question[]> {
    pageSize = 5;
    const token = localStorage.getItem('token');
    return this.http
      .get<Question[]>('/api/kg/popular?pageSize=' + pageSize + '&pageNum=' + page, {headers: {'token': token}})
      .pipe(
        delay(1500),
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchService {

  private _queryUrl = '/api/kg/query';
  constructor(private http: HttpClient) { }

  getAnswer(question) {
    const token = localStorage.getItem('token');
    const params = new HttpParams().set('query', question);
    return this.http.get<any>(this._queryUrl, {params, headers: {'token': token}}).toPromise();
  }
}

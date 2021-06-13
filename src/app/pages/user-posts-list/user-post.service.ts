import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class UserPost {
  id: number;
  question: string;
  shortAnswer: string;
}

@Injectable()
export class PostFetcher {

  constructor(private http: HttpClient) {}

  load(page: number, pageSize: number): Observable<UserPost[]> {
    const startIndex = ((page - 1) % 7) * pageSize;

    return this.http
      .get<UserPost[]>('assets/data/user-posts.json')
      .pipe(
        map(news => news.splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}

import { Component, Input, OnInit} from '@angular/core';

import { Question } from '../../../entity/question';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-queries-post',
  templateUrl: 'queries-post.component.html',
})
export class QueriesPostComponent {

  @Input() post: Question;
  rawAns = '';

  constructor(private router: Router) {}

  toDetail(): void {
    this.router.navigateByUrl('/pages/search?question=' + this.post.description);
  }
  // fetchAnswer(): void {
  //   const that = this;
  //   const token = localStorage.getItem('token');
  //   const params = new HttpParams().set('query', this.post.description);
  //   this.http.get<any>( '/api/kg/query', {params, headers : {'token': token}}).subscribe(
  //     res => {
  //       that.post.answer = res.data.answer;
  //       that.rawAns = that.post.flattenAnswer();
  //     },
  //     err => {
  //       that.post.answer = ['answer not found'];
  //     },
  //   );
  // }
}

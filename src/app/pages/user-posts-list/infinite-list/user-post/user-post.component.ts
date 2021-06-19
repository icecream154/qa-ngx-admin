import { Component, Input } from '@angular/core';

import { UserPost } from '../../user-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-post',
  templateUrl: 'user-post.component.html',
})
export class UserPostComponent {

  constructor(private router: Router) {}

  @Input() post: UserPost;

  toShowDetail(id) {
    this.router.navigateByUrl('/pages/post-detail?qid=' + id);
  }
}

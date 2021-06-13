import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostFetcher } from '../user-post.service';

@Component({
  selector: 'ngx-user-post-list',
  templateUrl: 'user-post-infinite-list.component.html',
  styleUrls: ['user-post-infinite-list.component.scss'],
})
export class UserPostInfiniteListComponent {
  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private postFetcher: PostFetcher, private router: Router) {}

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.postFetcher.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextQueries => {
        cardData.placeholders = [];
        cardData.news.push(...nextQueries);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  toAskQuestion() {
    this.router.navigateByUrl('/pages/ask-question').then(r => {});
  }
}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { RecommendComponent } from './forms/recommend/recommend.component';
import { SearchComponent } from './forms/search/search.component';
import { SupportComponent } from './forms/support/support.component';
import { UserPostsComponent } from './user-posts-list/user-post.component';
import { AskQuestionComponent } from './forms/ask-question/ask-question.component';
import { PostDetailComponent } from './forms/post-detail/post-detail.component';
import { HistoryComponent } from './forms/history/history.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'recommend',
      component: RecommendComponent,
    },
    {
      path: 'support',
      component: SupportComponent,
    },
    {
      path: 'history',
      component: HistoryComponent,
    },
    {
      path: 'user-posts',
      component: UserPostsComponent,
    },
    {
      path: 'ask-question',
      component: AskQuestionComponent,
    },
    {
      path: 'post-detail',
      component: PostDetailComponent,
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

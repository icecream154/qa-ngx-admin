import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { RecommendComponent } from './forms/recommend/recommend.component';
import { SearchComponent } from './forms/search/search.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { SupportComponent } from './forms/support/support.component';
import { UserPostsComponent } from './user-posts-list/user-post.component';
import { AskQuestionComponent } from './forms/ask-question/ask-question.component';
import { PostDetailComponent } from './forms/post-detail/post-detail.component';

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
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

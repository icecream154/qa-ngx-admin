import { NgModule } from '@angular/core';
import {
  NbCardModule, NbCheckboxModule, NbListModule, NbMenuModule,
  NbActionsModule,
  NbButtonModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule, NbCardComponent,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { RecommendComponent } from './recommend/recommend.component';
import { QueriesPostComponent } from './recommend/infinite-list/queries-post/queries-post.component';
import { QueriesPostPlaceholderComponent } from './recommend/infinite-list/queries-post-placeholder/queries-post-placeholder.component';
import { QueryFetcher } from './recommend/recommend.service';
import { InfiniteListComponent } from './recommend/infinite-list/infinite-list.component';
import { AuthService } from '../auth/services/auth.service';
import { SearchService } from './forms/search/search.service';
import { FormsModule } from '@angular/forms';
import { PostFetcher } from './user-posts-list/user-post.service';
import { UserPostsComponent } from './user-posts-list/user-post.component';
import { UserPostComponent } from './user-posts-list/infinite-list/user-post/user-post.component';
import { UserPostPlaceholderComponent } from './user-posts-list/infinite-list/user-post-placeholder/user-post-placeholder.component';
import { UserPostInfiniteListComponent } from './user-posts-list/infinite-list/user-post-infinite-list.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbListModule,
    NbCardModule,
    NbCheckboxModule,
    FormsModule,
    // NbActionsModule,
    // NbButtonModule,
    // NbDatepickerModule, NbIconModule,
    // NbInputModule,
    // NbRadioModule,
    // NbSelectModule,
    // NbUserModule,
  ],
  declarations: [
    PagesComponent,
    RecommendComponent,
    QueriesPostComponent,
    QueriesPostPlaceholderComponent,
    InfiniteListComponent,
    UserPostsComponent,
    UserPostComponent,
    UserPostPlaceholderComponent,
    UserPostInfiniteListComponent,
  ],
  providers: [
    QueryFetcher,
    AuthService,
    SearchService,
    PostFetcher,
  ],
})
export class PagesModule {
}

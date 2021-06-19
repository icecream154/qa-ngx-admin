import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule, NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { SupportComponent } from './support/support.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { SearchComponent } from './search/search.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RecommendComponent } from './recommend/recommend.component';
import { QueriesPostComponent } from './recommend/infinite-list/queries-post/queries-post.component';
import { QueriesPostPlaceholderComponent } from './recommend/infinite-list/queries-post-placeholder/queries-post-placeholder.component';
import { InfiniteListComponent } from './recommend/infinite-list/infinite-list.component';
import { QueryFetcher } from './recommend/recommend.service';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    TextFieldModule,
    NbListModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    SupportComponent,
    SearchComponent,
    AskQuestionComponent,
    PostDetailComponent,
    RecommendComponent,
    QueriesPostComponent,
    QueriesPostPlaceholderComponent,
    InfiniteListComponent,
    RecommendComponent,
  ],
  providers: [
    QueryFetcher,
  ],
})
export class FormsModule { }

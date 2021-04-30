import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchQuestion = '';
  answerTitle = 'Ask anything!';
  answerContent = 'Feel free to ask question here. You can also support this website if you want.';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  submitSearch(): void {
    this.searchService.getAnswer(this.searchQuestion).subscribe((ans: any) => {
      ans = JSON.parse(ans);
      this.answerTitle = ans.answerTitle;
      this.answerContent = ans.answerContent;
    });
  }

}

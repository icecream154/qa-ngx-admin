import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';

@Injectable()
export class SearchService {

  constructor() { }

  getAnswer(question) {
    const emptyAns = {
      answerTitle: 'Ask anything!',
      answerContent: 'Feel free to ask question here. You can also support this website if you want.',
    };
    if (question === '') {
      return observableOf(JSON.stringify(emptyAns));
    } else {
      const fakeAns = {
        answerTitle: 'Result for ' + question,
        answerContent: 'Sorry! We cannot match any answer for this question. You can support your answer if you have' +
          ' already solved this problem.',
      };
      return observableOf(JSON.stringify(fakeAns));
    }
  }
}

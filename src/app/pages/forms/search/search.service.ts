import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';

@Injectable()
export class SearchService {

  constructor() { }

  getAnswer(question) {
    const emptyAns = {
      answerTitle: 'Not a valid question!',
      answerContent: 'Please type a valid question here.',
      valid: false,
    };
    if (question === '') {
      return observableOf(JSON.stringify(emptyAns));
    } else {
      const fakeAns = {
        answerTitle: 'Result for ' + question,
        answerContent: 'Sorry! We cannot match any answer for this question. You can support your answer if you have' +
          ' already solved this problem.',
        valid: true,
      };
      return observableOf(JSON.stringify(fakeAns));
    }
  }
}

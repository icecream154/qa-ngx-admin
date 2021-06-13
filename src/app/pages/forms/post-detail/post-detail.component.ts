import { Component } from '@angular/core';
@Component({
  selector: 'ngx-list',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.scss'],
})
export class PostDetailComponent {

  question: string = 'What \'s your question?';
  detail: string = 'This is the detail information of the question.';

  answers: { name: string, email: string, content: string}[] = [
    { name: 'Carla Espinosa', email: 'Nurse@qa.com', content: 'This is content from Carla Espinosa. I believe this is a very hard question to hard because the question actually ask nothing and even ask the people who should answer the question what the question is. What a stupid question it is!'},
    { name: 'Bob Kelso', email: 'DoctorMedicine@qa.com', content: 'This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso. This is content from Bob Kelso.'},
    { name: 'Janitor', email: 'Janitor@qa.com', content: 'This is content from Janitor.'},
    { name: 'Perry Cox', email: 'Perry@qa.com', content: 'This is content from Perry Cox.'},
    { name: 'Ben Sullivan', email: 'CarpenterPhotographer@qa.com', content: 'This is content from Ben Sullivan.'},
  ];

  getCardSize(content) {
    if (content.length > 300) return 'small';
    return 'tiny';
  }
}

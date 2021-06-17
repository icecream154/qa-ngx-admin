export class Question {
  public description: string;
  public param1: string;
  public type: string;
  public answer: string[];
  public hot: number = 0;

  constructor(description: string, param1: string, type: string, answer: string[]) {
    this.description = description;
    this.param1 = param1;
    this.type = type;
    this.answer = answer;
  }

  public flattenAnswer(): string {
    let res = '';
    for (const answerEntry of this.answer) {
      res += answerEntry;
      res += '；';
    }
    return res;
  }

  public parseAnswer(flattenAns: string) {
    this.answer = flattenAns.split('；');
  }
}

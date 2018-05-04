export class Article {
  public done: boolean = false;
  constructor(public title: string, public teaser: string, public author: string, public body: string, public views: number, public imgURL: string){}
}

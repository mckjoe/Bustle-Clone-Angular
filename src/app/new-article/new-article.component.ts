import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  @Output() sendArticle = new EventEmitter();
  submitForm(title: string, teaser: string, author: string, body: string, views: string, imgURL: string) {
  let newArticle: Article = new Article(title, teaser, author, body, parseInt(views), imgURL);
  }
  constructor() { }



}

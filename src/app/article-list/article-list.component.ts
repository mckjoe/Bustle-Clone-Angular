import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() childArticleList: Article[];
  @Output() clickSender = new EventEmitter();

  toggleDone(clickedArticle: Article, setRemove: boolean) {
    clickedArticle.done = setRemove;
  }



  viewButtonClicked(articleToView: Article) {
    this.clickSender.emit(articleToView);
    articleToView.views +=1;
  }

  viewsColor(currentArticle){
    if (currentArticle.views > 5) {
      return "lots-of-views";
    } else {
      return "normal-views";
    }
  }
}

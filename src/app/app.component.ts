import { Component } from '@angular/core';
import { Article } from './models/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstArticle: Article = new Article("Example Title", "Welcome to bustleClone the website!", "Joseph McKinney", "This webpage is a webpage that allows users to view articles.  This is a pretend article that you are reading right now it has no relevence.")
}

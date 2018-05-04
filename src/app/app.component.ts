import { Component } from '@angular/core';
import { Article } from './models/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    new Article("Example Title", "Welcome to bustleClone the website!", "Joseph McKinney", "This webpage is a webpage that allows users to view articles.  This is a pretend article that you are reading right now it has no relevence.", 7),
    new Article("Example 2", "this is another example", "Random Author", "This is another pretend article, hopefully it has been for of education", 23),
    new Article("Example 3", "This is a third example", "Joseph Author", "this is the body of this new third article that people can read", 9)
  ];

  viewArticle() {
    alert("you asked to view this article");
  }

  viewsColor(currentArticle){
    if (currentArticle.views > 15) {
      return "lots-of-views";
    } else {
      return "normal-views";
    }
  }

}

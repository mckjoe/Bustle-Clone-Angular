import { Component } from '@angular/core';
import { Article } from './models/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterArticleList: Article[] = [
    new Article("Example Title", "Welcome to bustleClone the website!", "Joseph McKinney", "This webpage is a webpage that allows users to view articles.  This is a pretend article that you are reading right now it has no relevence.", 7, "https://www.askideas.com/media/12/I-Just-Like-To-Smile-Funny-Random-Funny-Random.jpg"),
    new Article("Example 2", "this is another example", "Random Author", "This is another pretend article, hopefully it has been for of education", 23,"https://www.askideas.com/media/47/Eating-Watermelon-Like-A-Boss-Funny-Cool-Meme-Image.jpg"),
    new Article("Example 3", "This is a third example", "Joseph Author", "this is the body of this new third article that people canread", 9, "https://i.pinimg.com/originals/c5/ed/51/c5ed51d5b025bec3105a83978b4d049a.jpg"),
    new Article("Example Title", "Welcome to bustleClone the website!", "Joseph McKinney", "This webpage is a webpage that allows users to view articles.  This is a pretend article that you are reading right now it has no relevence.", 7, "https://ruinmyweek.com/wp-content/uploads/2016/05/the-best-funny-pictures-of-happy-birthday-monkey-smile.jpg"),
    new Article("Example 2", "this is another example", "Random Author", "This is another pretend article, hopefully it has been for of education", 23, "https://i.pinimg.com/736x/7a/f1/7f/7af17f1662cea39fa3254e30b08bf305--funny-scary-pictures-pictures-of.jpg"),
    new Article("Example 3", "This is a third example", "Joseph Author", "this is the body of this new third article that people can read", 9, "https://i.pinimg.com/originals/84/b1/56/84b1566907247c580d75f7ac181af34d.jpg")
  ];
  addArticle(newArticle: Article) {
    this.masterArticleList.push(newArticle);
  }
  selectedArticle = null;

  viewArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
  }

  finishedViewing(){
    this.selectedArticle = null;
  }
}

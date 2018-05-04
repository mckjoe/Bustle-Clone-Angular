import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RemovePipe } from './remove.pipe'
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    NewArticleComponent,
    RemovePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

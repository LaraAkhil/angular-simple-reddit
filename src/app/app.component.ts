import { Component } from "@angular/core";
import { Article } from "./article/article.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("google", "http://www.google.com", 20),
      new Article("bing", "http://www.bing.com", 10),
      new Article("reddit", "http://www.reddit.com", 30)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}

import { ArticleService } from './../service/article.service';
import { Article } from './../model/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  article: Article[];
  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.article = this.service.getAll();
  }

}

import { Article } from './../model/article';
import { ArticleService } from './../service/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
  providers: [ArticleService]
})
export class ArticleViewComponent implements OnInit {
  article: Article;
  sub: any;
  constructor(private route: ActivatedRoute,
    private service: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const url = String(params['url']);
      this.article = this.service.get(url);
      console.log(this.article);
    });
  }

}

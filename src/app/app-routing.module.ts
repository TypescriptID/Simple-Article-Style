import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: ':url', component: ArticleViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Article } from './../model/article';
import { Injectable } from '@angular/core';

const ARTICLE: Article[] = [
  {
    id: 1,
    url: 'Angular-Vue-React-Technology',
    title: 'Angular, Vue, & React Technology',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-1.jpg'
  },
  {
    id: 2,
    url: 'Angular-technology',
    title: 'Angular technology',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-2.png'
  },
  {
    id: 3,
    url: 'Angular-BackboneJs-EmberJs-technology',
    title: 'Angular, BackboneJs, & EmberJs technology',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-3.png'
  },
  {
    id: 4,
    url: 'AngularJs-By-Google-For-Developers',
    title: 'AngularJs By Google For Developers',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-4.png'
  },
  {
    id: 5,
    url: 'Angular-Vs-React-Technology',
    title: 'Angular Vs React Technology',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-5.png'
  },
  {
    id: 6,
    url: 'JavaScript-Language',
    title: 'JavaScript Language',
    // tslint:disable-next-line:max-line-length
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda sapiente officia, veritatis quo nisi libero saepe. Aut quas quisquam, alias qui suscipit ab. Nostrum ducimus neque dignissimos nemo libero.',
    img: 'assets/images/angular-6.png'
  }
];

@Injectable()
export class ArticleService {
  constructor() { }

  getAll(): Article[] {
    return ARTICLE;
  }

  get(url: string): Article {
    console.log(url);
    return ARTICLE.find(i => i.url === url);
  }
}

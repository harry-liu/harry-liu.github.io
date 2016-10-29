import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div class="container">
    <h1>{{title}}</h1>
    <a routerLink="/blogs">Blogs</a>
    <a routerLink="/cv">CV</a>
    <br>
    <router-outlet></router-outlet>
</div>

  `
})
export class AppComponent {
    title = 'Harry\'s Blog';

}
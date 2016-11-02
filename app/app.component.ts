import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<div class="container">
    <div class="nav">
        <h1>{{title}}</h1>
        <a routerLink="/blogs">Blogs</a>
        <a routerLink="/cv">CV</a>
        <br>
    </div>
    <router-outlet></router-outlet>
</div>
  `,
    styles:[`
.nav{
    position: fixed;
    left:0;
    top:40%;
    z-index: 100;
}
`],
})
export class AppComponent {
    title = 'Harry\'s Blog';
}
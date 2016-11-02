import { Component } from '@angular/core';
import {Animations} from "./animations";
@Component({
  selector: 'my-app',
  template: `
<div class="container">
    <div class="nav" [@menuAnimation]="menuState">
        <h1>{{title}}</h1>
        <a routerLink="/blogs">Blogs</a>
        <a routerLink="/cv">CV</a>
        <br>
    </div>
    <button (click)="toggleMenu()" class="btn showMenuBtn">{{menuWord}}</button>
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

.showMenuBtn{
    position: fixed;
    left:15px;
    top:15px;
    z-index: 100;
}
`],
    animations:Animations.menu
})
export class AppComponent {
    title = 'Harry\'s Blog';
    menuState:string = 'hide';
    menuWord:string = '显示菜单';
    toggleMenu(){
        if(this.menuState == 'show'){
            this.menuState = 'hide';
            this.menuWord = '隐藏菜单';
        }
        else {
            this.menuState = 'show';
            this.menuWord = '显示菜单';
        }
    }
}
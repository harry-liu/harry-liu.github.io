import {Component, trigger, style, state, transition, animate} from '@angular/core';
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
    animations:[trigger('menuAnimation',[
        state('hide',style({
            opacity:0,
            transform: 'translateX(-100%)'
        })),
        state('show',style({
            opacity:1,
            transform: 'translateX(0)'
        })),
        transition('hide => show',
            animate('500ms ease-in')
        ),
        transition('show => hide',
            animate('500ms ease-in')
        ),
    ])]
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
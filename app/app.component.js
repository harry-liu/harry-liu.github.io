"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var animations_1 = require("./animations");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Harry\'s Blog';
        this.menuState = 'hide';
        this.menuWord = '显示菜单';
    }
    AppComponent.prototype.toggleMenu = function () {
        if (this.menuState == 'show') {
            this.menuState = 'hide';
            this.menuWord = '隐藏菜单';
        }
        else {
            this.menuState = 'show';
            this.menuWord = '显示菜单';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"container\">\n    <div class=\"nav\" [@menuAnimation]=\"menuState\">\n        <h1>{{title}}</h1>\n        <a routerLink=\"/blogs\">Blogs</a>\n        <a routerLink=\"/cv\">CV</a>\n        <br>\n    </div>\n    <button (click)=\"toggleMenu()\" class=\"btn showMenuBtn\">{{menuWord}}</button>\n    <router-outlet></router-outlet>\n</div>\n  ",
            styles: ["\n.nav{\n    position: fixed;\n    left:0;\n    top:40%;\n    z-index: 100;\n}\n\n.showMenuBtn{\n    position: fixed;\n    left:15px;\n    top:15px;\n    z-index: 100;\n}\n"],
            animations: [animations_1.Animations.menu]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
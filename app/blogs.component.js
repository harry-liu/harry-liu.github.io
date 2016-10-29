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
var BlogsComponent = (function () {
    function BlogsComponent() {
    }
    Object.defineProperty(BlogsComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], BlogsComponent.prototype, "routeAnimation", null);
    BlogsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'views/blogs.view.html',
            styleUrls: ['views/blogs.view.css'],
            //host: { '[@routeAnimation]': 'true' },
            animations: animations_1.Animations.page
        }), 
        __metadata('design:paramtypes', [])
    ], BlogsComponent);
    return BlogsComponent;
}());
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map
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
/**
 * Created by harryliu on 28/10/16.
 */
var core_1 = require('@angular/core');
var animations_1 = require("./animations");
var CvComponent = (function () {
    function CvComponent() {
        this.currentSection = 1;
    }
    Object.defineProperty(CvComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CvComponent.prototype.changeTab = function (id) {
        this.currentSection = id;
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], CvComponent.prototype, "routeAnimation", null);
    CvComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'views/cv.view.html',
            styleUrls: ['views/cv.view.css'],
            animations: [animations_1.Animations.page, animations_1.Animations.tab]
        }), 
        __metadata('design:paramtypes', [])
    ], CvComponent);
    return CvComponent;
}());
exports.CvComponent = CvComponent;
//# sourceMappingURL=cv.component.js.map
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
 * Created by harryliu on 31/10/16.
 */
var core_1 = require("@angular/core");
var ArrowUpComponent = (function () {
    function ArrowUpComponent() {
    }
    ArrowUpComponent = __decorate([
        core_1.Component({
            selector: 'arrow-up',
            template: "\n        <div class=\"up\">\n            up\n        </div>    \n    ",
            styles: ["\n        .up{\n            background-color: black;\n            color:white;\n            width:100px;\n            height: 100px;\n        }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], ArrowUpComponent);
    return ArrowUpComponent;
}());
exports.ArrowUpComponent = ArrowUpComponent;
//# sourceMappingURL=arrow-up.component.js.map
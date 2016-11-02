"use strict";
/**
 * Created by harryliu on 28/10/16.
 */
var core_1 = require('@angular/core');
var Animations = (function () {
    function Animations() {
    }
    Animations.page = [
        core_1.trigger('routeAnimation', [
            core_1.state('*', core_1.style({
                opacity: 1
            })),
            core_1.transition('void => *', [
                core_1.style({
                    transform: 'translateX(-100%)',
                    opacity: 0
                }),
                core_1.animate(500)
            ]),
            core_1.transition('* => void', [
                core_1.animate(500, core_1.style({
                    transform: 'translateX(100%)',
                    opacity: 0
                }))
            ])
        ])
    ];
    Animations.menu = [
        core_1.trigger('menuAnimation', [
            core_1.state('hide', core_1.style({
                opacity: 0,
                transform: 'translateX(-100%)'
            })),
            core_1.state('show', core_1.style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            core_1.transition('hide => show', core_1.animate('500ms ease-in')),
            core_1.transition('show => hide', core_1.animate('500ms ease-in')),
        ])
    ];
    Animations.tab = [
        core_1.trigger('tabAnimation', [
            core_1.transition(':enter', [
                core_1.style({ opacity: 0 }),
                core_1.animate(500, core_1.style({ opacity: 1 }))
            ]),
            core_1.transition(':leave', [
                core_1.animate(500, core_1.style({ opacity: 0 }))
            ])
        ])
    ];
    return Animations;
}());
exports.Animations = Animations;
//# sourceMappingURL=animations.js.map
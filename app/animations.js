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
                transform: 'translateX(0)',
                opacity: 1
            })),
            core_1.transition('void => *', [
                core_1.style({ transform: 'translateX(-100%)', opacity: 0 }),
                core_1.animate(500)
            ]),
            core_1.transition('* => void', [
                core_1.animate(500, core_1.style({ transform: 'translateX(100%)', opacity: 0 }))
            ])
        ])
    ];
    return Animations;
}());
exports.Animations = Animations;
//# sourceMappingURL=animations.js.map
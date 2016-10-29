/**
 * Created by harryliu on 28/10/16.
 */
import {style, animate, transition, state, trigger} from '@angular/core';

export class Animations {
    static page = [
        trigger('routeAnimation', [
            state('*', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({transform: 'translateX(-100%)',opacity: 0}),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%)',opacity: 0}))
            ])
        ])
    ];
}

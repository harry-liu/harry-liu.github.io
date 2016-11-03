/**
 * Created by harryliu on 28/10/16.
 */
import {style, animate, transition, state, trigger} from '@angular/core';

export class Animations {
    static page = trigger('routeAnimation', [
            state('*', style({
                opacity: 1
            })),
            transition('void => *', [
                style({
                        transform: 'translateX(-100%)',
                        opacity: 0
                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({
                    transform: 'translateX(100%)',
                    opacity: 0
                }))
            ])
        ]);
    static menu = trigger('menuAnimation',[
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
        ]);
    static tab = trigger('tabAnimation',[
            transition('void => *', [   // :enter is alias to 'void => *'
                style({opacity:0}),
                animate(500, style({opacity:1}))
            ]),
            transition('* => void', [    // :leave is alias to '* => void'
                animate(500, style({opacity:0}))
            ])
        ]);

}

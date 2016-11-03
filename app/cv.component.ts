/**
 * Created by harryliu on 28/10/16.
 */
import {Component, HostBinding, trigger, style, state, transition, animate} from '@angular/core';
import {Animations} from "./animations";
@Component({
    moduleId:module.id,
    templateUrl:'views/cv.view.html',
    styleUrls:['views/cv.view.css'],
    animations: [trigger('routeAnimation', [
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
    ]),
        trigger('tabAnimation',[
            transition('void => *', [   // :enter is alias to 'void => *'
                style({opacity:0}),
                animate(500, style({opacity:1}))
            ]),
            transition('* => void', [    // :leave is alias to '* => void'
                animate(500, style({opacity:0}))
            ])
        ])]
})

export class CvComponent{
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    currentSection:number = 1;

    changeTab(id:number){
        this.currentSection = id;
    }
}
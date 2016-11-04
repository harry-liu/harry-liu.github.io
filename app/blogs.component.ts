import {Component, HostBinding, trigger, style, state, transition, animate} from '@angular/core';

@Component({
    templateUrl: 'views/blogs.view.html',
    styleUrls: ['views/blogs.view.css'],
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
    ])],
})

export class BlogsComponent {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
}

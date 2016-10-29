import {Component, HostBinding} from '@angular/core';
import {Animations} from "./animations";

@Component({
    moduleId:module.id,
    templateUrl: 'views/blogs.view.html',
    styleUrls: ['views/blogs.view.css'],
    //host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class BlogsComponent {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
}

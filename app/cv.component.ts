/**
 * Created by harryliu on 28/10/16.
 */
import {Component, HostBinding} from '@angular/core';
import {Animations} from "./animations";
@Component({
    moduleId:module.id,
    templateUrl:'views/cv.view.html',
    styleUrls:['views/cv.view.css'],
    animations: [Animations.page,Animations.tab]
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
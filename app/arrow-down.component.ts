/**
 * Created by harryliu on 31/10/16.
 */
import {Component} from "@angular/core";
@Component({
    selector:'arrow-down',
    template:`
        <div class="down" (click)="down()">
            down
        </div>
    `,
    styles:[`
        .down{
            width: 100px;
            height: 100px;
            background-color: black;
            color:white;
        }
    `],
})

export class ArrowDownComponent{
    value:number = 1;
    down(){
        this.value++;
    }
}
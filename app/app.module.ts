import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { BlogsComponent }     from './blogs.component';
import {CvComponent} from "./cv.component";
import {ArrowUpComponent} from "./arrow-up.component";
import {ArrowDownComponent} from "./arrow-down.component";

@NgModule({
  imports:      [ 
  	BrowserModule ,
    FormsModule,
    routing
    ],
  declarations: [
      AppComponent,
      BlogsComponent,
      CvComponent,
      ArrowUpComponent,
      ArrowDownComponent
   	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

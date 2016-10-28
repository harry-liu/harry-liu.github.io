import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { BlogsComponent }     from './blogs.component';
import {CvComponent} from "./cv.component";

@NgModule({
  imports:      [ 
  	BrowserModule ,
    FormsModule,
    routing
    ],
  declarations: [
      AppComponent,
      BlogsComponent,
      CvComponent
   	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

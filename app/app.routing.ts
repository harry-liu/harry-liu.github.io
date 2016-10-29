import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent }      from './blogs.component';
import {CvComponent} from "./cv.component";

const appRoutes: Routes = [
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'cv',
        component: CvComponent
    },
    {
        path:'',
        redirectTo:'/blogs',
        pathMatch:'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
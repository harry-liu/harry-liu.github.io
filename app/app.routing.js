"use strict";
var router_1 = require('@angular/router');
var blogs_component_1 = require('./blogs.component');
var cv_component_1 = require("./cv.component");
var appRoutes = [
    {
        path: 'blogs',
        component: blogs_component_1.BlogsComponent
    },
    {
        path: 'cv',
        component: cv_component_1.CvComponent
    },
    {
        path: '',
        redirectTo: '/blogs',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
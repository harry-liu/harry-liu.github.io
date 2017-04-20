/**
 * Created by harryliu on 20/4/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import section1 from '../pages/section1.vue'

Vue.use(VueRouter);

const routes=[
    {path: '/section1',name:'section1',component:section1},
    {path: '*',name:'home',component:section1}
];

const router = new VueRouter({
    routes
});

export default router;
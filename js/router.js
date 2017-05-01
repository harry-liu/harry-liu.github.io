/**
 * Created by harryliu on 20/4/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import section1 from '../pages/section1.vue'
import section2 from '../pages/section2.vue'
import section3 from '../pages/section3.vue'
import section4 from '../pages/section4.vue'


Vue.use(VueRouter);

const routes=[
    {path: '/section1',name:'section1',component:section1},
    {path: '/section2',name:'section2',component:section2},
    {path: '/section3',name:'section3',component:section3},
    {path: '/section4',name:'section4',component:section4},
    {path: '*',redirect: { name: 'section1' }}
];

const router = new VueRouter({
    routes
});

export default router;
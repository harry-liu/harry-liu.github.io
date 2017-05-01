/**
 * Created by harryliu on 16/4/17.
 */

import Vue from 'vue';
import router from './router.js'

let cv = new Vue({
    el:'#cv',
    router:router,
    //render:h=>h()
    // data:{
    //     showSection:1
    // },
    // created(){
    //     let current = window.location.hash;
    //     let section = current.substr(current.length-1);
    //     if(section>0&&section<5){
    //         this.showSection = section;
    //     }
    //     else {
    //         window.location.hash = 'section1';
    //     }
    // },
    methods:{
        changeShowSection:function () {
            let currentSection = this.$route.name.substr(this.$route.name.length-1);
            let nextSection = Number(currentSection)+1;
            console.log(nextSection);
            this.$router.push('/section'+nextSection)
        }
    }
});
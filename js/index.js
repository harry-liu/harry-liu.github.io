/**
 * Created by harryliu on 16/4/17.
 */



let cv = new Vue({
    el:'#cv',
    data:{
        showSection:1
    },
    created(){
        let current = window.location.hash;
        let section = current.substr(current.length-1);
        if(section>0&&section<5){
            this.showSection = section;
        }
        else {
            window.location.hash = 'section1';
        }
    },
    methods:{
        changeShowSection:function () {
            if(this.showSection == 4){
                this.showSection = 1;
                window.location.hash = 'section'+this.showSection;
            }
            else {
                this.showSection++
                window.location.hash = 'section'+this.showSection;
            }
        }
    }
})
/**
 * Created by harryliu on 18/4/17.
 */
import Vue from 'vue';
export default Vue.component('canvas-dot-line',{
    template:`<canvas class="dot-line-canvas"></canvas>`,
    mounted(){
        //console.log(this.$el)
        class Circle{
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.r = Math.random() * 14 + 1;
                this._mx = Math.random() * 2 - 1;
                this._my = Math.random() * 2 - 1;
            }

            drawCircle(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, 360);
                ctx.closePath();
                ctx.fillStyle = 'rgba(111, 111, 111, 0.2)';
                ctx.fill();
            }

            drawLine(ctx, _circle) {
                let dx = this.x - _circle.x;
                let dy = this.y - _circle.y;
                let d = Math.sqrt(dx * dx + dy * dy);
                if(d < 150) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);//起始点
                    ctx.lineTo(_circle.x, _circle.y);//终点
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(204, 204, 204, 0.1)';
                    ctx.stroke();
                }
            }

            move(w, h) {
                this._mx = (this.x < w && this.x > 0) ? this._mx: ( - this._mx);
                this._my = (this.y < h && this.y > 0) ? this._my: ( - this._my);
                this.x += this._mx/2;
                this.y += this._my/2;
            }

        }

        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        let canvas = this.$el;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext('2d');
        let w = canvas.width;
        let h = canvas.height;
        let circles = [];
        let draw = function () {
            ctx.clearRect(0,0,w,h);
            for(let i = 0; i < circles.length; i++) {
                circles[i].move(w, h);
                circles[i].drawCircle(ctx);
                for(let j = i + 1; j < circles.length; j++) {
                    circles[i].drawLine(ctx, circles[j])
                }
            }
            requestAnimationFrame(draw);
        }

        let init = function(num){
            for(var i = 0; i < num; i ++){
                circles.push(new Circle(Math.random() * w, Math.random() * h));
            }
            draw();
        }

        init(80);
    }
});
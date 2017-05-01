<template>
    <div class="section" id="section1">
        <canvas-dot-line></canvas-dot-line>
        <div class="content">
            <h1>Harry Liu</h1>
            <br>
            <h1>Front-end Developer</h1>
        </div>
    </div>
</template>

<script>
    import canvasDotLine from '../components/canvas-dot-line'
    export default {
        name:'section1',
        components:{
            canvasDotLine
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
    }
</style>
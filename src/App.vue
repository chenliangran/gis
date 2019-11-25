<template>
  <div id="app">
    <cms-top style="pointer-events: none;"></cms-top>
    <c-map></c-map>
    <canvas id="bg_canvas" width="100%" height="100%"/>
    <!-- <cms-footer></cms-footer> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CMap from './components/Map';
import cmsFooter from './view/footer/footer.vue'
import cmsTop from './view/top/top.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    CMap,
    cmsFooter,
    cmsTop
  },
    mounted(){
        var dv = document.getElementById('dv');
        var x = 0;
        var y = 0;
        var l = 0;
        var t = 0;
        var isDown = false;
//鼠标按下事件
        dv.onmousedown = function(e) {
            //获取x坐标和y坐标
            x = e.clientX;
            y = e.clientY;

            //获取左部和顶部的偏移量
            l = dv.offsetLeft;
            t = dv.offsetTop;
            //开关打开
            isDown = true;
            //设置样式
            dv.style.cursor = 'move';
        }
//鼠标移动
        window.onmousemove = function(e) {
            if (isDown == false) {
                return;
            }
            //获取x和y
            var nx = e.clientX;
            var ny = e.clientY;
            //计算移动后的左偏移量和顶部的偏移量
            var nl = nx - (x - l);
            var nt = ny - (y - t);

            dv.style.left = nl + 'px';
            dv.style.top = nt + 'px';
        }
//鼠标抬起事件
        dv.onmouseup = function() {
            //开关关闭
            isDown = false;
            dv.style.cursor = 'default';
        }
    }
}
</script>

<style>
@import './assets/base.less';
.myMaps{
  position: fixed;
  width: 100%;
  height: 100%;
}
#app{
  position: fixed;
  width: 100%;
  height: 100%;
}
#bg_canvas {
  position: absolute;
  z-index: 500;
  left: 0;
  top: 0;
}
body, html {
  width: 100%;
  height: 100%;
}
</style>

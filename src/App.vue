<template>
  <div id="app">
    <cms-top style="pointer-events: none;"></cms-top>
    <c-map></c-map>
    <!-- <canvas id="bg_canvas" width="100%" height="100%"/> -->
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

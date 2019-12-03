import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import scroll from 'vue-seamless-scroll'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(scroll);


const hostMap = {
  development:'http://127.0.0.1',
  production:window.location.origin
}

Vue.prototype.Urls = {
  host:hostMap[process.env.NODE_ENV]
}



new Vue({
  render: h => h(App),
}).$mount('#app')

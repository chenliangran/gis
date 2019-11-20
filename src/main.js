import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;



const hostMap = {
  development:'http://127.0.0.1:10000',
  production:window.location.origin
}

Vue.prototype.Urls = {
  host:hostMap[process.env.NODE_ENV]
}



new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入配置
import './permission'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入配置
import './permission'

// import squaregrid from '@/components/componentscom/squaregrid/index.vue'
// Vue.component('squaregrid',squaregrid)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

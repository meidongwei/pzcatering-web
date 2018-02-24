// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入 iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

// 引入 vuex
import store from './store/index.js'

import Bus from './bus.js'
Vue.use(Bus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

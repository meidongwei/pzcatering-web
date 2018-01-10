import Vue from 'vue'
import Router from 'vue-router'
import zuzhi from '@/pages/zuzhi'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/zuzhi',
      name: 'zuzhi',
      component: zuzhi
    }
  ]
})

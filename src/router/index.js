import Vue from 'vue'
import Router from 'vue-router'

import zuzhi from '@/pages/zuzhi'
import user from '@/pages/user'
import yunying from '@/pages/yunying'
import guazhang from '@/pages/guazhang'
import kuaichong from '@/pages/kuaichong'
import member from '@/pages/member'
import jinxiaocun from '@/pages/jinxiaocun'
import baobiao from '@/pages/baobiao'

import shanghuzongbu from '@/pages/zuzhi/shanghuzongbu'
import shanghu from '@/pages/zuzhi/shanghuzongbu/shanghu'
import pinpai from '@/pages/zuzhi/shanghuzongbu/pinpai'
import quyu from '@/pages/zuzhi/shanghuzongbu/quyu'

import mendian from '@/pages/zuzhi/mendian'
import mendianleibie from '@/pages/zuzhi/mendian/mendianleibie'
import mendianguanli from '@/pages/zuzhi/mendian/mendianguanli'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/zuzhi/shanghuzongbu/shanghu'
    },
    {
      path: '/zuzhi',
      name: 'zuzhi',
      component: zuzhi,
      redirect: '/zuzhi/shanghuzongbu/shanghu',
      children: [
        {
          path: 'shanghuzongbu',
          name: 'shanghuzongbu',
          component: shanghuzongbu,
          redirect: '/zuzhi/shanghuzongbu/shanghu',
          children: [
            {
              path: 'shanghu',
              name: 'shanghu',
              component: shanghu
            },
            {
              path: 'pinpai',
              name: 'pinpai',
              component: pinpai
            },
            {
              path: 'quyu',
              name: 'quyu',
              component: quyu
            }
          ]
        },
        {
          path: 'mendian',
          name: 'mendian',
          component: mendian,
          redirect: '/zuzhi/mendian/mendianleibie',
          children: [
            {
              path: 'mendianleibie',
              name: 'mendianleibie',
              component: mendianleibie
            },
            {
              path: 'mendianguanli',
              name: 'mendianguanli',
              component: mendianguanli
            }
          ]
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/yunying',
      name: 'yunying',
      component: yunying
    },
    {
      path: '/guazhang',
      name: 'guazhang',
      component: guazhang
    },
    {
      path: '/kuaichong',
      name: 'kuaichong',
      component: kuaichong
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/jinxiaocun',
      name: 'jinxiaocun',
      component: jinxiaocun
    },
    {
      path: '/baobiao',
      name: 'baobiao',
      component: baobiao
    }
  ]
})

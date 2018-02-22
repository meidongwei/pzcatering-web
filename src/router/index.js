import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import layout from '@/components/layout'

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

import yewuguize from '@/pages/member/yewuguize'
import huiyuandengji from '@/pages/member/yewuguize/huiyuandengji'
import jifenguize from '@/pages/member/yewuguize/jifenguize'
import yucunguize from '@/pages/member/yewuguize/yucunguize'
import xiaofeiyanzheng from '@/pages/member/yewuguize/xiaofeiyanzheng'
import erweima from '@/pages/member/yewuguize/erweima'

import huiyuanguanli from '@/pages/member/huiyuanguanli'
import huiyuanyingxiao from '@/pages/member/huiyuanyingxiao'
import shenqingshitika from '@/pages/member/shenqingshitika'
import duanxinzhanghu from '@/pages/member/duanxinzhanghu'
import gongzhonghaoshezhi from '@/pages/member/gongzhonghaoshezhi'
import yingxiaobaobiao from '@/pages/member/yingxiaobaobiao'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      redirect: '/layout/zuzhi/shanghuzongbu/shanghu',
      children: [
        {
          path: 'zuzhi',
          name: 'zuzhi',
          component: zuzhi,
          redirect: 'zuzhi/shanghuzongbu/shanghu',
          children: [
            {
              path: 'shanghuzongbu',
              name: 'shanghuzongbu',
              component: shanghuzongbu,
              redirect: 'shanghuzongbu/shanghu',
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
              redirect: 'mendian/mendianleibie',
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
          path: 'user',
          name: 'user',
          component: user
        },
        {
          path: 'yunying',
          name: 'yunying',
          component: yunying
        },
        {
          path: 'guazhang',
          name: 'guazhang',
          component: guazhang
        },
        {
          path: 'kuaichong',
          name: 'kuaichong',
          component: kuaichong
        },
        {
          path: 'member',
          name: 'member',
          component: member,
          redirect: 'member/yewuguize/huiyuandengji',
          children: [
            {
              path: 'yewuguize',
              name: 'yewuguize',
              component: yewuguize,
              redirect: 'yewuguize/huiyuandengji',
              children: [
                {
                  path: 'huiyuandengji',
                  name: 'huiyuandengji',
                  component: huiyuandengji
                },
                {
                  path: 'jifenguize',
                  name: 'jifenguize',
                  component: jifenguize
                },
                {
                  path: 'yucunguize',
                  name: 'yucunguize',
                  component: yucunguize
                },
                {
                  path: 'xiaofeiyanzheng',
                  name: 'xiaofeiyanzheng',
                  component: xiaofeiyanzheng
                },
                {
                  path: 'erweima',
                  name: 'erweima',
                  component: erweima
                }
              ]
            },
            {
              path: 'huiyuanguanli',
              name: 'huiyuanguanli',
              component: huiyuanguanli
              // redirect: 'huiyuanguanli/mendianleibie',
              // children: [
              //   {
              //     path: 'mendianleibie',
              //     name: 'mendianleibie',
              //     component: mendianleibie
              //   }
              // ]
            }
          ]
        },
        {
          path: 'jinxiaocun',
          name: 'jinxiaocun',
          component: jinxiaocun
        },
        {
          path: 'baobiao',
          name: 'baobiao',
          component: baobiao
        }
      ]
    }
  ]
})

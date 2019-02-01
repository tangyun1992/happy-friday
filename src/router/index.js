import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/page/login/index'], resolve),
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/page/home/index'], resolve),
      children: [
        {
          path: '/homePage',
          name: 'homePage',
          component: resolve => require(['@/page/home-page/index'], resolve),
        },
        {
          path: '/processList',
          name: 'processList',
          component: resolve => require(['@/page/custom-list/process-list/index'], resolve),
        },
      ]
    },
  ]
})

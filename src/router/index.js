import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/index'
import home from '@/page/home/index'
import custom from '@/page/custom-list/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/custom',
          name: 'custom',
          component: custom,
        },

      ]
    },
  ]
})

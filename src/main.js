// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'


import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个

// 引入mockjs
require('./mock/index')
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'
import lodash from 'lodash'
import 'font-awesome/scss/font-awesome.scss'
import './styles/styles.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$api = api
Vue.prototype._ = lodash

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

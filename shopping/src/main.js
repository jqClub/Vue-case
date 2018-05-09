// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import App from './App'
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios

// 设置axios请求的token
//axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
////设置请求头
//axios.defaults.headers.get["Content-type"] = "application/json"


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>',
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//import App from './App'
//import router from './router'
//
//Vue.config.productionTip = false
//
///* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//components: { App },
//template: '<App/>'
//})

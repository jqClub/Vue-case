// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

////第一种全局引入css： 
////在main.js中
//import './common/index.css' //注意'./'一定要加不然会报错
//
////第一种全局引入js： 
////在main.js中
//import common from '../static/common.js' //注意路径
//Vue.prototype.$common = common

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

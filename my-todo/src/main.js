// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

////12.10新增引入sweetalert弹窗(引入的组件，在手机上显示不兼容，使用下面的弹窗)
//import VueSweetAlert from 'vue-sweetalert'
//Vue.use(VueSweetAlert)，

//12.10新增，引入vue弹窗
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)
Vue.use(Loading)


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

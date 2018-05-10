// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  //ES6语法兼容
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'   //公共样式文件
import fastclick from 'fastclick'   //处理移动端click事件300毫秒延迟
fastclick.attach(document.body)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
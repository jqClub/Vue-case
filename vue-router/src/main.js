// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var log = console.log.bind(console)
//全局钩子
router.beforeEach((to, from, next) => {
    // do something 
    next();
});
router.afterEach((to, from, next) => {
//  console.log('成功浏览到: ' + transition.to.path)
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

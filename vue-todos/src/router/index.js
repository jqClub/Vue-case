import Vue from 'vue'
import Router from 'vue-router'
import Layouts  from '@/components/layouts'

import todo from '@/components/todo'

Vue.use(Router)

//12.04新增，这里是配置路由的写法
export default new Router({
  routes: [{
    path: '/',
    name: 'Layouts',
    component: Layouts,
    children: [{
      path: '/todo/:id',
      name: 'todo',
      component: todo
    }]
  }]
})

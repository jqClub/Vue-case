import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '../pages/index'
import detailpage from '../pages/detail'
import count from '../pages/detail/count'
import forecast from '../pages/detail/forecast'
import analysis from '../pages/detail/analysis'
import publish from '../pages/detail/publish'

import orderList from '../pages/orderList'
//import VueResource from'vue-resource'

Vue.use(Router)
//Vue.use(VueResource)

export default new Router({
    mode: 'history', //增加这个可以去掉地址中的#号
    routes: [{
            path: '/',
            name: 'indexpage',
            component: indexpage
        },
        {
            path: '/orderList',
            name: 'orderList',
            component: orderList
        },
        {
            path: '/detail/',
            name: 'detailpage',
            component: detailpage,
            redirect: '/detail/forecast',
            children: [
            {
                //不能加斜线，否则是从根目录开始访问的
                path: 'forecast',
                name: 'forecast',
                component: forecast
            },
            {
                //不能加斜线，否则是从根目录开始访问的
                path: 'count',
                name: 'count',
                component: count
            },
            {
                //不能加斜线，否则是从根目录开始访问的
                path: 'analysis',
                name: 'analysis',
                component: analysis
            },
            {
                //不能加斜线，否则是从根目录开始访问的
                path: 'publish',
                name: 'publish',
                component: publish
            },       
            ],
        }
    ]
})
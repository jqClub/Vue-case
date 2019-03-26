var log = console.log.bind(console)

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//12.05新增一个路由
import user from '@/components/user'

Vue.use(Router)

//12.05这里是2个嵌套组件
const UserProfile = {
  template: '<div>UserProfile</div>'
}
const UserPosts = {
  template: '<div>UserPosts</div>'
}

var router = new Router({
//	mode:'history',
  routes: [
    {
      path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
			//这里是“命名视图”的使用方法
			components: {
				default: HelloWorld,
        a: UserProfile,
        b: UserPosts
			}
    },
    //重定向
    {
    	path: '/a', 
			redirect: { 
				path: '/user/1',
				component: user,
			},
    },

    {
    	path: '/user', 
			redirect: { 
				path: '/user/1',
				component: user,
			},
    },
    //动态路由的使用
    { 
    	path: '/user/:id', 
    	name: 'user',
    	component: user,
    	children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        },
      ],
      beforeEnter(to,from,next){
        console.log('router beforeEnter');
        next();
    	},
    },
  ]
})

//这里是页面中所有的路由信息
export default router

// 全局钩子
router.beforeEach((to,from,next)=>{
    console.log('global beforeEach')
    next();
});

router.beforeResolve((to,from,next)=>{
    console.log('global beforeResolve')
    next();
});

router.afterEach((to,from,next)=>{
    console.log('global afterEach')
});

# vue-axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

//////////////////////////////////////////////

//	@author: 姜奇 (604799292@qq.com) 2018.12.05
//	@version: 1.0.0.1  2018.12.05   使用vue_router
							1.0.0.2  2018.12.06   新增_导航钩子备注
							1.0.0.3  2018.12.06   新增_备注信息
					
//////////////////////////////////////////////
//网址：https://segmentfault.com/a/1190000011122991
//参考：https://juejin.im/entry/597ab13d5188253e0a62efcb
//vue-router中的导航钩子按定义位置不同(执行时机也不同)分为全局钩子、路由级钩子和组件级钩子。
//
//全局钩子
//全局钩子有三个，分别是beforeEach、beforeResolve和afterEach，在路由实例对象注册使用；
//
//路由级钩子
//路由级钩子有beforeEnter，在路由配置项中项定义；
//
//组件级钩子
//组件级钩子有beforeRouteEnter、beforeRouteUpdate和beforeRouteLeave，在组件属性中定义；

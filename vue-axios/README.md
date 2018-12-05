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
//	@version: 1.0.0.1  2018.12.05   引入_vue-axios模块（接入自己的api）
			  			1.0.0.2  2018.12.05   新增_修改api.js里的response返回，加上了JSON.parse处理返回的数据
							1.0.0.3  2018.12.05  新增_axios的使用备注（见下面）
							
//////////////////////////////////////////////
参考:https://juejin.im/post/5ae432aaf265da0b9c1063c8
使用的接口地址：https://easy-mock.com/mock/5c05f3b4119ec9640d826f40/example/mock


//12.05，使用axios的方法
1.复制http整个文件夹

2.在main.js里添加
// 导入 http 文件夹下的 index.js
// 此时可以直接在 Vue 原型上调用 $api 了
import api from './http/index'
Vue.use(api)

3.在组件中使用
this.$api.mock().then(res => {
		
})
1）mock是在http/interface.js中的接口。
2）如果需要先在页面中使用，需要先去添加api的地址。

# vue-todos

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
//	@author: 姜奇 (604799292@qq.com) 2018.12.06
//	@version: 1.0.0.1  2018.12.06   新增_引入外部css和js文件
			  1.0.0.2  2018.12.06   新增_切换主题的功能
			  1.0.0.3  2018.12.06   新增_添加+完成+删除功能
			  1.0.0.4  2018.12.06   新增_缓存在本地的功能
			  1.0.0.5  2018.12.06   新增_使用深度监听todos的改变，不用再每个函数中去添加到缓存里面
			  //重构，抽离出组件
			  my-todo-1.0.0.6  2018.12.07   修改_处理列表超长，被挤出去的样式问题
			  my-todo-1.0.0.7  2018.12.07   修改_文字过长，多余的显示成省略号
				

//////////////////////////////////////////////
//1.<!--组件中template，最外层只能由一个标签包裹-->
//2.不建议在methods中，使用箭头函数,打印的2个this值不同。应该使用第二种方法
//methods: {
//	showMenu: () => {
//		//console.log(this)
//	}
//	// 主题设置
//	showMenu() {
//		//console.log(this)
//	},
//},
//3.设置自定义属性
//:data-index='index'
//4.阻止点击事件冒泡
//v-on:click.stop="deleteThis"
//5.深度监听
////监听属性，在todos改变的时候，去缓存在本地，就不用在每次都去更新
//watch: {
//		//需要使用深度监听对象里的改变值
//		todos: {
//	    deep: true,
//	    handler(val){
//	        this.saveLocal(val)
//	    }
//	  },
//},
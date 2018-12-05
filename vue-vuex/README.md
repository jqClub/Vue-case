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
//	@version: 1.0.0.1  2018.12.05   引入_vuex模块
			  1.0.0.2  2018.12.05   新增_vuex使用方法在文件中查看

							
//////////////////////////////////////////////
父子组件相互传值：http://www.cnblogs.com/wisewrong/p/6266038.html

参考:https://www.jianshu.com/p/92b70dcb2410

需要先安装vuex模块：npm install --save vuex
//12.05，使用vuex的方法
1.复制src/store整个文件夹

2.在main.js里（通过在根实例中注册 store 选项）
import store from './store'
new Vue({
//...
  store,
//...
})

3.在组件中使用script文件
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
	name: 'hello',
	data() {
	    return {
	        msg: 'A Vuex Example Project !'
	    }
	},
	computed: {
	  // 使用对象展开运算符将 getter 混入 computed 对象中
	    ...mapGetters([
	      'count',
	      'recentHistory',
	    ])
	 },
	methods: {
		...mapActions([
	      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
	
	      // `mapActions` 也支持载荷：
	      'decrement', // 将 `this.decrement(amount)` 映射为 `this.$store.dispatch('decrement', amount)`
	      'incrementIfOdd',
	      'incrementAsync',
	    ]),
	},
	created() {
		//12.05新增_也可以通过下面的方法去获取到全局的count值
		var count = this.$store.state.count
	},
}

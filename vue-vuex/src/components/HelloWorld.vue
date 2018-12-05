<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{count}}</h2>
        <h3>最近记录：{{recentHistory}}</h3>
        <button @click="increment">加1</button>
        <button @click="decrement">减1</button>
        <button @click="incrementIfOdd">奇数加1</button>
        <button @click="incrementAsync">异步加1</button>
        <button @click="incrementTest">测试使用</button>
    </div>
</template>
<script>
	var log = console.log.bind(console)
	
import {
    mapGetters,
    mapActions,
    
    mapState,
} from 'vuex'

export default {
	name: 'hello',
	data() {
	    return {
	        msg: 'A Vuex Example Project !',
	    }
	},
	computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'count',
      'recentHistory',
    ])
//		...mapState([
//			'count',
//	    'history',
//		])
  },
//	methods: mapActions([
//	    'increment',
//	    'decrement',
//	    'incrementIfOdd',
//	    'incrementAsync'
//	]),
	methods: {
		...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'decrement', // 将 `this.decrement(amount)` 映射为 `this.$store.dispatch('decrement', amount)`
      'incrementIfOdd',
      'incrementAsync',
    ]),
    incrementTest: function() {
    	//1.通过属性去访问
//  	var count = this.$store.getters.count
//			var countNew = this.$store.getters.countNew(12)

//			var count = this.$store.getters.count
//  	log(222222222, count)
			
//			this.$store.commit('testcrement', {
//				num: 10
//			})

//				this.$store.dispatch('increment')	 //调用的是actions里的函数

//				this.$store.dispatch('incrementIfOdd', {
//					num: 10,
//				})
					this.$store.dispatch('actionB')
    },
	},
	created() {
		//12.05新增_可以通过下面的方法去获取到全局的count值
			var count = this.$store.state.count	
	},

}
</script>
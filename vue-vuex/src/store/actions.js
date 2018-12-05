//不改变状态，只提交(commit) mutation。
var log = console.log.bind(console)

//export const increment = ({ commit }) => commit('increment', {
//	amount: 1,
//})
//类似于下面的函数，context是一个对象
export const increment = function(context) {
	log('store', context)
	context.commit('increment', {
		amount: 1,
	})
}

export const decrement = ({ commit }) => commit('decrement')



export const incrementIfOdd = ({ commit, state }, payload) => {
	//payload是传递过去的值
    if ((state.count + 1) % 2 === 0) {
    	commit('increment', {
			amount: 1,
		})
    }
}

export const incrementAsync = ({ commit }) => {
    setTimeout(() => {
        commit('decrement')
    }, 1000)
}

////////////////////////////////////////
//组合actions的方法
export const actionA =  ({ commit }) =>  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('testcrement')
        resolve('a')
      }, 1000)
    })
  }
//先调用actionA的方法，再去调用
export const actionB = ({ dispatch, commit }) => {
    return dispatch('actionA').then(() => {
      commit('testcrement')
      log(22222222222)
    })
  }


//12.05备注
//Action 类似于 mutation，不同在于：
//
//Action 提交的是 mutation，而不是直接变更状态。
//Action 可以包含任意异步操作。
//1.分发Action
//this.$store.dispatch('increment')	

//2.也是可以使用载荷方式(payload)

//3.使用mapActions 辅助函数去使用
//import { mapActions } from 'vuex'
//
//export default {
//// ...
//methods: {
//  ...mapActions([
//    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
//
//    // `mapActions` 也支持载荷：
//    'incrementIfOdd' // 将 `this.incrementIfOdd(amount)` 映射为 `this.$store.dispatch('incrementIfOdd', amount)`
//  ]),
//}
//}

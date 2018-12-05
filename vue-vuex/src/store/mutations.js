//修改的方法
var log = console.log.bind(console)

//你不能直接调用一个 mutation increment。
//这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
//store.commit('increment'),通过这个方法来 触发状态变更。
//用于操作state的唯一途径
//mutation 必须是同步函数
//为了处理异步操作，让我们来看一看 Action。
export const increment = (state, payload) => {
//  state.count++;
	if(payload) {
		state.count += payload.amount
	}
    state.history.push('increment');
}

export const decrement = state => {
    state.count--;
    state.history.push('decrement');
}

//2.提交载荷（Payload），可以向store传入额外的参数
//调用的方法如下：
//this.$store.commit('testcrement', {
//				num: 10
//			})
export const testcrement = (state, payload) => {
	//payload是一个对象
	if(payload) {
		state.count += payload.num
	}
}

//mutation 必须是同步函数（都是同步事务）
//12.05备注：更改store中的状态“唯一”的方法就是提交mutation
//Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
//1.调用的方法：通过commit
//this.$store.commit('decrement')

//2.提交载荷（Payload），可以向store传入额外的参数
//this.$store.commit('testcrement', {
//				num: 10
//			})

//3.使用mapMutations辅助函数
//import { mapMutations } from 'vuex'
//
//export default {
//// ...
//methods: {
//  ...mapMutations([
//    'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
//
//    // `mapMutations` 也支持载荷：
//    'testcrement' // 将 `this.testcrement(amount)` 映射为 `this.$store.commit('testcrement', amount)`
//  ]),
//}
//}

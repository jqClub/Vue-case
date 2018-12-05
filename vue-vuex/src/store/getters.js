//Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
var log = console.log.bind(console)

//1.通过属性访问----var count = this.$store.state.count
export const count = (state) => {
	//这里可以使用this，获取到其他的计算属性
	var otherData = this.num()
	log('otherData', otherData)
	return state.count //当前数值
}

//这里是获取数据的方法
const limit = 5
export const recentHistory = state => { //近期历史记录
    const end = state.history.length
    const begin = end - limit < 0 ? 0 : end - limit
    return state.history
        .slice(begin, end)
        .toString()
        .replace(/,/g, ', ')
}

//////////////////////////////////
//访问其他参数
export const num = (state) => {
	return 1
}

//2.通过方法访问（id 是传过来的值）---var countNew = this.$store.getters.countNew(12)
export const countNew = (state) => (id) => {
	return state.count + id
}

//12.05备注：Getter访问的方法：
//1.通过属性访问 ： var count = this.$store.getters.count（通过在根实例中注册 store 选项）

//2.通过方法访问： var countNew = this.$store.getters.countNew(12)

//3.mapGetters 辅助参数：
//import { mapGetters } from 'vuex'
//
//export default {
//// ...
//computed: {
//// 使用对象展开运算符将 getter 混入 computed 对象中,就可以使用count和recentHistory这些值了
//  ...mapGetters([
//		'count',
//		'recentHistory',
//    // ...
//  ])
//}
//}

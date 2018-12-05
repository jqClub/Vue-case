import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)//如果使用全局的 script 标签，则无须如此（手动安装）。

//设置所有的需要统一管理的值
const state = {
  count: 0,
  history: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
<template>
	<!--最外层只能由一个div包裹-->
  <div>
  	<div class="todo-left theme-0" data-ind='0'>
        <div class="logo">
            <img src="../assets/rabbit.jpg" alt="logo">
        </div>
        <div class="theme">
            主题
        </div>
        <div class="theme-color">
            <div class="themeL">
                <span class="circle theme-0" data-index='0'></span>
            </div>
            <div class="themeL">
                <span class="circle theme-1" data-index='1'></span>
            </div>
            <div class="themeL">
                <span class="circle theme-2" data-index='2'></span>
            </div>
        </div>

    </div>
    <div id="todo">
        <div class="viewpart">
            <div class="newTask">
                <input  id='id-input-todo' type="text" placeholder="在此输入待办事项">
                <span  id='id-button-add' class="btn add">添加事项</span>
            </div>
            <div class="todos" id="id-div-container">

            </div>
        </div>
    </div>
  </div>
</template>

<script>
		/*第二种，在组件中引入外部js文件*/
	import common from '../../static/common.js' //注意路径
	
export default {
  name: 'HelloWorld',
  data () {
    return {
//    msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function() {
  	var that = this
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

<template>
	<!--最外层只能由一个div包裹-->
  <div>
  	<div class="todo-left" :class="themes[themeNum]" data-ind='{themeNum}'>
        <div class="logo">
          <img src="../assets/rabbit.jpg" alt="logo">
        </div>
        <div class="theme" @click="showMenu">
					主题
        </div>
        <div class="theme-color" v-bind:class="{ show: showTheme }">
        	<div class="themeL" v-for="(item, index) in 3">
					    <span class="circle" :class="themes[index]" @click="showLight"  :data-index='index'></span>
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
	var log = common.log
	
export default {
  name: 'HelloWorld',
  data () {
    return {
			showTheme: false,
			themeNum: 0,
			themes: {
				0: 'theme-0',
				1: 'theme-1',
				2: 'theme-2',
			}
    }
  },
  created: function() {
  	var that = this
  },
  methods: {
// 主题设置
		showMenu() {
			var that = this
			var showTheme = that.showTheme
			that.showTheme = !showTheme
		},
		// 鼠标点击切换样式
		showLight(e) {
			var that = this
			var index = e.target.dataset.index
			that.themeNum = index
		},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

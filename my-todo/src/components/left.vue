<template>
  <div class="todo-left" :class="themes[themeNum]" data-ind='{themeNum}'>
        <div class="logo">
          <img src="../assets/rabbit.jpg" alt="logo">
        </div>
        <div class="theme" @click="showMenu">
					{{title}}
        </div>
        <div class="theme-color" v-bind:class="{ show: showTheme }">
        	<div class="themeL" v-for="(item, index) in 3">
			    	<span class="circle" :class="themes[index]" @click="showLight"  :data-index='index'></span>
					</div>
        </div>
    </div>
</template>

<script>
/*第二种，在组件中引入外部js文件*/
import common from '../../static/common.js' //注意路径
var log = common.log
	
export default {
  name: 'left',
  //12.07新增,父组件向子组件传递数据
  props: ['title'],
  
  data () {
    return {
    	//是否显示出切换主题的状态栏
			showTheme: false,
			themeNum: 0,
			themes: {
				0: 'theme-0',
				1: 'theme-1',
				2: 'theme-2',
			},
    }
  },
  created: function() {
  	var that = this
  },
  methods: {
// 主题设置
		showMenu() {
			var that = this
//			var showTheme = that.showTheme
//			that.showTheme = !showTheme		
			
			//12.07新增,通过事件向父级发送消息--这里只是用来测试的
			//第一个值:是在父级上需要监听的事件,第二个:值是需要传给父级的值
			that.$emit('enlarge-text', that._data)
		},
		// 鼠标点击切换样式
		showLight(e) {
			var that = this
			var index = e.target.dataset.index
			that.themeNum = index
		},
		
		//这里是子组件切换的效果
		toggle() {
			var that = this
			var showTheme = that.showTheme
			that.showTheme = !showTheme	
		},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

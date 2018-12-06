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
                <input id='id-input-todo' v-model="message" placeholder="在此输入待办事项">
                <span id='id-button-add' @click="todoAdd" class="btn add">添加事项</span>
            </div>
            <div class="todos" id="id-div-container">
							<div v-for="(item, index) in todos" class="todoUl" @click="todoDone" :data-ind="index">
		            <span class="todoState" :class="{ finished: item.finish }" :data-ind="index"></span>
		            <span class="content todo-done" :class="{ active: item.finish }" :data-ind="index">{{item.task}}</span>
		            <span class="timeAt" :data-ind="index">创建时间：{{item.createAt}}</span>
		            <span v-on:click.stop="deleteThis" class="btn del todo-delete" :data-ind="index">删除</span>
			        </div>
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
			},
			
			//用户输入的内容
			message: '',
			//下面的列表内容
			todos: [],
    }
  },
  created: function() {
  	var that = this
  	
    //12.06新增，获取本地数据
    that.todos = that.loadTodos()
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
		//新增一条数据
		todoAdd() {
			var that = this
			//获取用户输入的内容
			var todo = that.message
	    var a = {
	        task: todo,
	        finish: 0,
	        createAt: common.timeChange()
	    }
      that.todos.push(a)
      //清空原来的输入框
      that.message = '' 
      
//    //缓存在本地
//    that.saveLocal()
		},
		todoDone(e) {
			var that = this
			var ind = e.target.dataset.ind
			log(ind)
//			修改样式
			var todo = that.todos[ind]
			that.todos[ind].finish = !todo.finish
			log(1111111111111111111, that.todos)
//			//缓存在本地
//			that.saveLocal()
		},
		deleteThis(e) {
			var that = this
			var ind = e.target.dataset.ind
			that.todos.splice(ind, 1)
			
//			//缓存在本地
//			that.saveLocal()
		},
		//缓存数据在本地
		saveLocal() {
			var that = this
			log('saveLocal', that.todos)
			var todos = that.todos
			var s = JSON.stringify(todos)
    	localStorage.savedTodos = s
		},
		// 载入所有存储在 localStorage 里面的 todo
 		loadTodos() {
		    var s = localStorage.savedTodos
		    // 第一次打开的时候, 还没有存储这个数据, s 是 undefined
		    if (s == undefined) {
		        return []
		    } else {
		        var ts = JSON.parse(s)
		        return ts
		    }
		},
  },
  
  //监听属性，在todos改变的时候，去缓存在本地，就不用在每次都去更新
  watch: {
		//需要使用深度监听对象里的改变值
		todos: {
	    deep: true,
	    handler(val){
	        this.saveLocal(val)
	    }
	  },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

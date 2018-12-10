<template>
	<!--最外层只能由一个div包裹-->
  <div>
    <!--左边的组件-->
    <left v-on:enlarge-text="showMenu" v-bind:title="leftTitle" ref="left"></left>
    
    <div id="todo" class="">
        <div class="viewpart">
            <!--<div class="newTask">
                <input id='id-input-todo' v-model="message" placeholder="在此输入待办事项">
                <span id='id-button-add' @click="todoAdd" class="btn add">添加事项</span>
            </div>-->
            <!--12.07todo-input输入组件-->
            <totoInput @add-this="todoAdd"></totoInput>
            <div class="todos" id="id-div-container">
				<div v-if="todos.length" style="margin-bottom: 100px;">
					<div v-for="(item, index) in todos" :key="index" class="todoUl" @click="todoDone" :data-ind="index">
						<!--12.07引入todo的列表组件-->
						<todo :item="item" :index="index" v-on:delete-this="deleteThis"></todo>
			            <!--<span class="todoState" :class="{ finished: item.finish }" :data-ind="index"></span>
			            <span class="content todo-done textOmit" :class="{ active: item.finish }" :data-ind="index">{{item.task}}</span>
			            <span class="timeAt" :data-ind="index">创建时间：{{item.createAt}}</span>
			            <span v-on:click.stop="deleteThis" class="btn del todo-delete" :data-ind="index">删除</span>-->
			        </div>
				</div>
				<!--12.10新增_处理列表为空时的提示信息-->
		        <div v-else class="list-empty">待办列表为空，快去添加吧</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
		/*第二种，在组件中引入外部js文件*/
	import common from '../../static/common.js' //注意路径
	var log = common.log
	
	//12.07新增_引入左边的组件
	import left from './left';
	
	//12.07新增_引入右边的列表组件
	import todo from './todo';
	
	//12.10新增_引入todo-input输入组件
	import totoInput from './totoInput';
	
export default {
  name: 'HelloWorld',
  data () {
    return {
    	leftTitle: '主题',
    	leftObj: {
    		title: '主题',
    		show: false,
    	},
		//用户输入的内容
		message: '',
		//下面的列表内容
		todos: [],
    }
  },
  //12.07新增_引入组件
  components: {
    left,
    todo,
    totoInput,
  },
  
  created: function() {
  	var that = this
  	
    //12.06新增，获取本地数据
    that.todos = that.loadTodos()
  },
  methods: {
  	// 主题设置
		showMenu(enlargeAmount) {
			var that = this
//			var showTheme = that.showTheme
//			that.showTheme = !showTheme
			
//			log(22222222222, enlargeAmount.showTheme)
			//可以通过$refs拿到子组件的事件
			that.$refs.left.toggle();
		},
		// 鼠标点击切换样式
		showLight(e) {
			var that = this
			var index = e.target.dataset.index
			that.themeNum = index
		},
		//新增一条数据
		todoAdd(todo) {
			var that = this
			//12.10修改，通过组件来传递数据(//获取用户输入的内容)
			log('从todoInput传递过来的数据', todo)
		    var a = {
		        task: todo,
		        finish: 0,
		        createAt: common.timeChange()
		    }
			that.todos.push(a)
//			//获取用户输入的内容
//			var todo = that.message
//		    var a = {
//		        task: todo,
//		        finish: 0,
//		        createAt: common.timeChange()
//		    }
//			that.todos.push(a)
//			//清空原来的输入框
//			that.message = '' 
		},
		todoDone(e) {
			var that = this
			var ind = e.target.dataset.ind
			log(ind)
//			修改样式
			var todo = that.todos[ind]
			that.todos[ind].finish = !todo.finish
		},
//		deleteThis(e) {
//			var that = this
//			var ind = e.target.dataset.ind
//			that.todos.splice(ind, 1)
//		},
		deleteThis(ind) {
			var that = this
//			ind是子组件传递过去的值
			that.todos.splice(ind, 1)
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

<template>
  <div class="newTask">
	    <input id='id-input-todo' v-model="message" placeholder="在此输入待办事项">
	    <span id='id-button-add' @click="todoAdd" class="btn add">添加事项</span>
	</div>
</template>

<script>
		/*第二种，在组件中引入外部js文件*/
	import common from '../../static/common.js' //注意路径
	var log = common.log
	
export default {
  name: 'todoInput',
  //12.07新增,父组件向子组件传递数据
  props: [],
  
  data () {
    return {
    	//用户输入的内容
			message: '',
    }
  },
  created: function() {
  	var that = this
  },
  methods: {		
		todoAdd() {
			var that = this
			var message = that.message
			//清空原来的输入框
			that.message = '' 
			
			that.$emit('add-this', message)
		},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

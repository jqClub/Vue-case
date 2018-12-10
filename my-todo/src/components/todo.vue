<template>
  <div>
  	<span class="todoState" :class="{ finished: item.finish }" :data-ind="index"></span>
    <span class="content todo-done textOmit" :class="{ active: item.finish }" :data-ind="index">{{item.task}}</span>
    <span class="timeAt" :data-ind="index">创建时间：{{item.createAt}}</span>
    <span @click.stop="deleteThis" class="btn del todo-delete" :data-ind="index">删除</span>
  </div>
</template>

<script>
		/*第二种，在组件中引入外部js文件*/
	import common from '../../static/common.js' //注意路径
	var log = common.log
	
export default {
  name: 'todo',
  //12.07新增,父组件向子组件传递数据
  props: ['item', 'index'],
  
  data () {
    return {}
  },
  created: function() {
  	var that = this
  },
  methods: {
		//删除当前的记录
		deleteThis(e) {
			var that = this
			var ind = e.target.dataset.ind
			that.$emit('delete-this', ind)
		},
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*第二种，在组件中引入外部css文件*/
@import '../common/index.css';
</style>

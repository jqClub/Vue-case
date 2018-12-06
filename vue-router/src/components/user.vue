<template>
  <div class="hello">
	    {{ $route.params.id }}
	    123456
	    <router-view></router-view>
  </div>
</template>

<script>
var log = console.log.bind(console)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
  	
	},
	//这里使用监听属性来，刷新页面
	watch:{
　　　　　$route(curVal,oldVal){
　　　　　　　console.log(curVal,oldVal);
					var newId = curVal.params.id
					//这里改变了地址，监听变化，从而去修改
					log('newId', newId)
　　　　　},　　　
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

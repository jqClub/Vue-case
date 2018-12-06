<template>
  <div class="hello">
	    <!--页面导航元素，默认被渲染为a标签-->
	    <!--<router-link to="user">toUser</router-link>-->
	    
	    <!--
	    	这里的可以传参数,可以跳到/user/123下
	    	等于下面的方式: this.$router.push({ name: 'user', params: { id: 123 }})
	    -->
	    <router-link :to="{ name: 'user', params: { id: 123 }}">toUser</router-link>
	    
	    <button @click="gotoParams">点我</button>
	    <!--路由渲染出口，路由匹配到的组件内容全部渲染到该节点下-->
	    <router-view></router-view>
  </div>
</template>

<script>
var log = console.log.bind(console)
	
export default {
//name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 在 `methods` 对象中定义方法
  methods: {
    gotoParams: function (event) {
    	//说明调用的方法和<router-link :to="{ name: 'user', params: { id: 123 }}">toUser</router-link>作用相同
      this.$router.push({ name: 'user', params: { id: 123 }})
      
			//使用下面的，点击返回的时候，会回到/user页面
//			this.$router.replace({ name: 'user', params: { id: 123 }})
      log(this.$router.history)
    },
  },
  
	beforeRouteEnter (to, from, next) {
	    console.log('component beforeRouteEnter');
	    next();
	},
	beforeRouteUpdate (to, from, next) {
	    console.log('component beforeRouteUpdate');
	    next();
	},
	beforeRouteLeave(to,from,next){
	    console.log('component beforeRouteLeave');
	    next();
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

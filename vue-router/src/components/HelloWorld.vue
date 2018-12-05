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
//	log(1, to) 
//  log(1, from)
//  log(1, next)
//  log(1, this)
//  // 在渲染该组件的对应路由被 confirm 前调用
//  // 不！能！获取组件实例 `this`
//  // 因为当钩子执行前，组件实例还没被创建
    next()
},
beforeRouteUpdate (to, from, next) {
		log(2, to) 
    log(2, from)
    log(2, next)
//  log(2, this)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
},
beforeRouteLeave (to, from, next) {
	log(3, to) 
    log(3, from)
    log(3, next)
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
}
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

<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>	
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family:"Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
}
#app {
    position: relative;
    width: 500px;
    height: 90vh;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 10px;
    /**/
    /*background: blue;*/
    margin-top: 10px;

}
</style>

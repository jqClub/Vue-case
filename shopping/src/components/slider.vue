<template>
    <div class="slide-show" @mouseout="runInv" @mouseover="clearInv">
        <div class="slide-img">
             <a :href="slides[nowIndex].href">
                 <!--切换图片时的动画效果-->
                 <transition name="slide-trans">
                     <img v-if="isShow" :src="slides[nowIndex].src" alt="" />
                 </transition>
                 <transition name="slide-trans-old">
                     <img v-if="!isShow" :src="slides[nowIndex].src" alt="" />
                 </transition>
                    <!--<img :src="slides[nowIndex].src" alt="" />-->
                </a> 
            <h2>{{slides[nowIndex].title}}</h2>
            <ul class="slide-pages">
                <li @click="goTo(prevIndex)">&lt;</li>
                <li v-for="(item, index) in slides" @click="goTo(index)">
                    <!--a标签不加href，表示不跳转-->
                    <a :class="{on: index == nowIndex}">{{ index + 1 }}</a>
                </li>
                <li @click="goTo(nextIndex)">&gt;</li>
            </ul>
        </div>
       
    </div>
</template>

<script>
export default {
props: {
    slides: {
        type: Array,
        default: [],
    },
    inv: {
        type: Number,
        default: 1000,
    }
},
data() {
    return {
        nowIndex: 0,
        isShow: true,
    }
},
computed: {
    prevIndex() {
//      log(this.nowIndex)
        var index = this.nowIndex
        var len = this.slides.length
       if(index == 0) {
         return len - 1
       } else {
          return index - 1 
       } 
    },
    nextIndex() {
        var index = this.nowIndex
        var len = this.slides.length
       if(index == len - 1) {
         return 0
       } else {
          return index + 1
       } 
    }
},
methods: {
   goTo(index) {
//     this.nowIndex = index
       this.isShow = false
       setTimeout(() => {
           this.isShow = true
         this.nowIndex = index
         //子组件向父组件传事件
        this.$emit('onchange', index)
       }, 10)  
   },
   runInv () {
       this.invid = setInterval(() => {
//         log(111111)
          this.goTo(this.nextIndex) 
       }, this.inv)
   },
   clearInv() {
//     log(this.invid)
       clearInterval(this.invid)
   }
},
mounted() {
    this.runInv()
}
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>

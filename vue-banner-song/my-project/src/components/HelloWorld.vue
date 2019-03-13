<template>
  	<!--猜歌内容-->
		<div class="song_page opacityDown" >	
			<!-- 音乐 + 得分 -->
			<div class="page_top opacityDown display_flex">
				<div class="myScore" >
					<div data-type="addMoney" class="buttonStyle_new display_flex maincolor_04 your-style">
						<img data-type="addMoney" v-bind:class="{ Shaking2: is_share_reward_two }" src="../assets/images/ynfu1.png" mode="widthFix" style="width: 54px; height: 54px;" ></img>
						<div data-type="addMoney"  v-bind:class="{ transformScale: is_share_reward_two }" style="font-size: 60px; transition: all 0.1s; margin: 0 5px 0 12px;">{{money}}</div>
					</div>
				</div>
				
				
				
				<div class="pass_box maincolor_fff display_flex scaleAM" v-if="subject.pass" style="div-align: center; position: relative; z-index: 2;  font-size: 32px; margin-bottom: 12px;">第<div class="your-style" style="font-size: 60px; margin: 0 4px 6px 12px; color: #FAE530;">{{subject.pass}}</div>首</div>

				<div class="idiom_mus scaleAM maincolor_bg_fff" style="overflow: hidden; margin-top: 20px;">
					<div class="img_bg flex_center" style="width:360px;height: 360px; border-radius: 50%; flex-direction: row;">
						<img v-bind:class="{ imgRotate: style }" class="mus_bg" src="https://static.zuiqiangyingyu.cn/wechatApp/banma_song/src/public/images/music.gif" mode="widthFix"></img>

						<div v-on:click="dealVideo" class="mus_op_new display_flex" style="z-index: 10; " hover-class="none">
							<img v-if="style" src="../assets/images/stop.png" mode="widthFix" style="width: 100px; height: 100px;" ></img>
							<img v-else src="../assets/images/play.png" mode="widthFix" style="width: 100px; height: 100px;"></img>
						</div>
					</div>
				</div>
			</div>
			
			
			<!-- 分享和求助 -->
			<div class="pro_help"  style="margin-top: 20px;">
				<!--提示-->
				<button class="help_blo display_flex maincolor_fff  "  >
					<img class="hint" src="../assets/images/tiui.png" mode="widthFix" style="margin-right: 10px;"></img>
					<div>提示{{ prompt_need_score  || 0}}</div>
					<img class="ynfu2" src="../assets/images/ynfu2.png" mode="widthFix" style="margin-left: 10px;"></img>
					<div v-bind:class="{ ShangfuxiaoshiAM: is_coufen }" class="maincolor_04  absolute_left" style="position: absolute;top: -48px; opacity: 0;">{{ prompt_need_score  || 0}}</div>

					<div v-if="hintData.hintStyle == 1"  class="absolute_left sign_hint1 ">
						<div class="display_flex " style="position: relative;">
							<div class="hint1_text " style="margin-top: 15px;">不懂可以使用提示</div>
							<img class="hint1" src="../assets/images/hint11109.png"  mode="widthFix"></img>
						</div>
					</div>
				</button>
				
				
				<!-- 11.15新增，分享看答案的功能 -->
				<button  class="help_blo display_flex help_share maincolor_fff" open-type="share" data-type="addMoney"  style="margin-left: 24px;" hover-class="none" form-type="submit">
					<img data-type="addMoney" class="helpStyle" src="../assets/images/share.png" mode="widthFix" style="margin-right: 10px;"></img>
					<div v-if="!show_share"  data-type="addMoney">分享看答案</div>
					<div v-else data-type="addMoney">求助好友</div>
					
					<div v-if="hintData.hintStyle == 2" data-type="addMoney" class="absolute_left sign_hint1 ">
						<div class="display_flex " style="position: relative;">
							<div class="hint1_text " style="margin-top: 15px;">点击分享即可得答案</div>
							<img class="hint1" src="../assets/images/hint11109.png"  mode="widthFix"></img>
						</div>
					</div>
				</button>
			</div>
			
			
						<!--答题窗-->
			<!--11.20修改，样式问题-->
			<div  style="display: flex; align-items:center; margin-top: 20rpx;">
				<div class="display_flex idiom_inputbox">
					<div v-for="(item, idx) in input_list"  :key="idx" >
					  	<button v-bind:class="{ dd: error }" class="display_flex idiom_input  scaleAM" >
							<text style="font-weight: 600; font-weight:bold;">{{ item.code }}</text>
						</button>
					</div>
				</div>
				<button>
					<img class="idiom_inputbutton"  data-type="delete" src="../assets/img/reset.png" style="width: 40rpx;" ></img>
				</button>
			</div>
			
			
			<!--10.24修改答题按钮为10个-->
			<div class="link" style="margin-top: 20rpx;" >
				<div  v-for="(item, idx) in button_list" >
				  <!--11.05新增，点击后，显示一个灰色的按钮样式-->
				   <button class="display_flex answerButton link_child" v-bind:class="{ hide_button: !item.state, link_child_right: (idx+1) % 5,  link_child_top : (idx+1) > 5 }">
				  	<div  v-bind:class="{ displayNone: !item.state }" style=" font-weight: 600; font-weight:bold;">{{ item.code }}</div>
				  	<!--11.05引导点击第一个按钮-->
				  	<!--<div v-if="!hasClick && idx == indexNow"  >
				  		<image class="finger"  src="https://static.zuiqiangyingyu.cn/admin/1812/bdcg_hint_hand.png"  mode="widthFix"></image>
				  		<div class="circle" ></div>
				  	</div>-->
				  </button>
				</div>
			</div>
			
			
			
		</div>
</template>

<script>
import '../assets/css/index.css'
var log = console.log.bind(console)
	
export default {
  name: 'HelloWorld',
  data () {
    return {
		      is_share_reward_two: false,  //顶部音符，是否出现抖动的效果
		      //当前题目数
		      subject: {
		      	pass: 1,
		      },
		      style: true, //设置样式
		      money: 25, //音符数量
		      prompt_need_score: -30,  //需要扣除的音符数量
		      is_coufen: false,  //显示扣除的动效
		      hintData: {
		      	hintStyle: 0,  //显示那个提示信息
		      },
		      show_share: true,  //显示分享的内容
		      
		      input_list: [1, 2, 3, 4,],  //输入框的数量
		      
		      error: false,  //是否是错误
		      //所有的题目选项
		      button_list: [{"state":1,"targeid":0,"code":"恭"},{"state":1,"targeid":1,"code":"我"},{"state":1,"targeid":2,"code":"然"},{"state":1,"targeid":3,"code":"忽"},{"state":1,"targeid":4,"code":"不"},{"state":1,"targeid":5,"code":"酷"},{"state":1,"targeid":6,"code":"之"},{"state":1,"targeid":7,"code":"意"},{"state":1,"targeid":8,"code":"灯"},{"state":1,"targeid":9,"code":"间"}],
		}
  },
  methods: {
  	//07.19修改，处理音频状态
	dealVideo: function() {
		var that = this
		//获取当前的播放状态
		var videoStyle = that.style
		
		console.log('-当前的播放状态-', videoStyle)
		that.hintData.hintStyle = true
		that.style = !videoStyle
	},
	
//  设置data的值，setData
//	setData: function(obj) {
//		var that = this
//		var names = Object.keys(obj)
//		for(var i = 0; i < names.length; i++) {
//			var key = names[i]
//			var value = obj[key]
//			//设置用户的值
//			that[key] = value
//		}
//	},
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

.transformScale {
	transform:scale(1.3);
}

/*12.12新增一个旋转的动效*/
@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}
.imgRotate{
-webkit-transform: rotate(360deg);
animation: rotation 4s linear infinite;
-moz-animation: rotation 4s linear infinite;
-webkit-animation: rotation 4s linear infinite;
-o-animation: rotation 4s linear infinite;
}

.displayNone {
	display: none;
}
</style>

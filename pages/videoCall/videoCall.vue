<template>
	<view class="content">
<!-- 		<label>房间号：</label> <input v-model="room" class="input" type="number" placeholder="请输入房间号" />
		<label>用户名：</label> <input v-model="account" class="input" placeholder="请输入用户名" /> -->
<!-- 		<button type="primary" plain="true" @click="showVideoCall()">开启视频呼叫</button>
		<button type="primary" plain="true" @click="showComingVideoCall()">开启视频接听/挂断通话</button> -->
		<input type="text" v-model="message"/> <button @click="sendMessage">发送</button>
		<button @click="handleVideo">视频通话</button>
		<view v-for="(msgItem,msgIndex) in messages" :key="msgIndex">{{msgItem}}</view>
	</view>
</template>

<script>
	import GoEasy from '../../lib/goeasy-1.1.1.js'
	// #ifdef APP-PLUS
		const modal = uni.requireNativePlugin('modal');
		const dcRichAlert = uni.requireNativePlugin('TENCENT-CALL');
	// #endif
	export default {
		data() {
			return {
				room:'',
				account:'',
				message:'',
				messages:[],
			}
		},
		onLoad() {
			this.goeasy = GoEasy({
				host: 'hangzhou.goeasy.io',
				appkey: 'BC-02bec98de3094032ba2d31171d1a20d8',
				onConnected: function () {
					console.log("GoEasy connect successfully.")
				},
				onDisconnected: function () {
					console.log("GoEasy disconnected.")
				},
				onConnectFailed: function (error) {
					uni.showToast({
						icon: "none",
						title: "连接失败，请检查您的appkey和host配置.",
						duration: 6000
					});
				}
			});
			this.onSubscribe();
		},
		methods: {
			// #ifdef APP-PLUS
			onSubscribe () {//订阅消息
				let self = this;
				//订阅接收消息的通道
				this.goeasy.subscribe({
				    channel: "my_channel",
				    onMessage: function (message) {
						console.log(message);
						if(message.content  === 'video'){
							self.showComingVideoCall();
							return;
						}
				        self.unshiftMessage(message.content);
				    },
				    onSuccess: function () {
						self.unshiftMessage("订阅成功")
				    }
				});
			},
			unshiftMessage(content){
				let formattedTime=new Date().formatDate("hh:mm");
				let message=formattedTime +''+content;
				this.messages.unshift(message);
			},
			sendMessage(){
				if(this.message.trim()!==''){
					let self=this;
					this.goeasy.publish({
						channel:'my_channel',
						message:this.message,
						onSuccess:function(){
							self.message='';
						},
						onFailed:function(error){
							self.unshiftMessage('发送失败，请检查您的appkey和host配置.');
						}
					})
				}
			},
			handleVideo(){
				let self=this;
				this.message='video';
				this.goeasy.publish({
					channel:'my_channel',
					message:this.message,
					onSuccess:function(){
						self.showVideoCall();
						self.message='';
					},
					onFailed:function(error){
						self.unshiftMessage('发送失败，请检查您的appkey和host配置.');
					}
				})
			},
			showComingVideoCall() {
	 			dcRichAlert.startComingCallPage({
					roomid: "1",
					accountid: "chenguocan",
					name: "chenguocan",
					avatar: "https://mirror-gold-cdn.xitu.io/172985f929655a68c96?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1",
					appid: "1400446069",
					appsign: "eJwtzEELgjAYxvHvsqshb3OuJXjwIhVCRSJdxU17MXU4J0X03TP1*Pz*8HxImtzcUfUkINQFspk3StUOWOLMxUO1le2KvF2rkXWuNUoSbBkAYxz4finqpbFXk-u*TwFg0QGbv3Fg3KOCrmqwms6jarQmztLL7lo7vaXCKZ*1unvZaYiTqOkKj8cHKs7HtwjJ9wd0HzLz",
					calltype: "1",
					beauty: "1",
					whiteness: "1",
					ruddiness: "1"
				}, result => {
					const msg = JSON.stringify(result);
					modal.toast({
						duration: 1000
					});
				})  
			},		
			showVideoCall() {
 			 	dcRichAlert.startInviteCallPage({
					roomid: "1",
					accountid: "chenguocan",
					name: "chenguocan",
					avatar: "https://mirror-gold-cdn.xitu.io/172985f929655a68c96?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1",
					appid: "1400446069",
					appsign: "eJwtzEELgjAYxvHvsqshb3OuJXjwIhVCRSJdxU17MXU4J0X03TP1*Pz*8HxImtzcUfUkINQFspk3StUOWOLMxUO1le2KvF2rkXWuNUoSbBkAYxz4finqpbFXk-u*TwFg0QGbv3Fg3KOCrmqwms6jarQmztLL7lo7vaXCKZ*1unvZaYiTqOkKj8cHKs7HtwjJ9wd0HzLz",
					calltype: "1",
					beauty: "1",
					whiteness: "1",
					ruddiness: "1"
				}, result => {
					const msg = JSON.stringify(result);
					modal.toast({
						duration: 1000
					});
				}) 
			}	 
			// #endif
		}
}
</script>

<style>

</style>

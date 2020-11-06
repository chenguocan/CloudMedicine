<template>
	<view class="content">
<!-- 		<label>房间号：</label> <input v-model="room" class="input" type="number" placeholder="请输入房间号" />
		<label>用户名：</label> <input v-model="account" class="input" placeholder="请输入用户名" /> -->
		<button type="primary" plain="true" @click="showVideoCall()">开启视频呼叫</button>
		<button type="primary" plain="true" @click="showComingVideoCall()">开启视频接听/挂断通话</button>
	</view>
</template>

<script>
	// #ifdef APP-PLUS
		const modal = uni.requireNativePlugin('modal');
		const dcRichAlert = uni.requireNativePlugin('TENCENT-CALL');
	// #endif
	export default {
		data() {
			return {
				room:'',
				account:'',
			}
		},
		onLoad() {

		},
		methods: {
			// #ifdef APP-PLUS
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

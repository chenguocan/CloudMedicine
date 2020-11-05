<template>
	<view class="head">
		<slot></slot>
		<!--logo-->
		<view class="logo">
			<image class="logo-img" src="../static/images/logo.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.head{
	position: relative;
}
.head{
	top:0;
	height: 50%;
	background-color: #b04b87;
}
.head>.logo{
	display: flex;
	justify-content: center;
	padding-top:200rpx;
}
.head>.logo>.logo-img{
	height: 140rpx;
	width: 340rpx;
}
</style>

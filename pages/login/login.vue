<template>
	<view class="login-interface">
		<view class="head">
			<navigator class="register">注册</navigator>
			<!--logo-->
			<view class="logo">
				<image class="logo-img" src="../../static/images/logo.png"></image>
			</view>
		</view>
		<view class="login-block">
			<!--登录表单-->
			<form class="login-form">
				<view class="telephone-item">
					<i class="iconfont icon-yonghuquanxian"></i>
					<input type="text" class="telephone" placeholder="请输入手机号"  />
				</view>
				<view class="password-item">
					<i class="iconfont icon-suo"></i>
					<input type="text" class="password" placeholder="请输入密码" />	
				</view>
				<!--登录按钮-->
				<button class="login">登录</button>
				<navigator class="forgot">忘记密码?</navigator>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/*头部背景-logo*/
.login-interface{
	height: 100%;
}
.login-interface>.head{
	position: relative;
}
.login-interface>.head>.register{
	position: absolute;
	right: 70rpx;
	top:60rpx;
	color: white;
}
.login-interface>.head{
	top:0;
	height: 50%;
	background-color: #b04b87;
}
.login-interface>.head>.logo{
	display: flex;
	justify-content: center;
	padding-top:200rpx;
}
.login-interface>.head>.logo>.logo-img{
	height: 140rpx;
	width: 340rpx;
}
/*登录表单*/
.login-block{
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
}
.login-block>.login-form{
	position: absolute;
	width: 600rpx;
	height: 460rpx;
	margin:0 50rpx;
	display: block;
	border-radius: 3px;
	box-shadow: 1px 1px 5px #818181;
	background-color: white;
	transform: translateY(-50%);
}
.telephone-item,.password-item{
	display: flex;
	border:1px solid #e4e4e4;
	align-items: center;
	margin:43rpx 40rpx;
	padding:15rpx;
}
.telephone,.password{
	margin-left: 20rpx;
	font-size: 14px;
}
.iconfont{
	font-size: 26px;
	color: #b04b87;
	font-weight: bold;
}
.login{
	width: 520rpx;
	height: 80rpx;
	border-radius: 0;
	color:white;
	text-align: center;
	letter-spacing:20px;
	text-indent: 20px;
	line-height: 80rpx;
	background-color: #b04b87;
}
.forgot{
	font-size: 12px;
	float: right;
	margin:20rpx 40rpx 0 0;
}
</style>

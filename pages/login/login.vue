<template>
	<view class="login-interface">
		<HeadPage>
			<navigator class="register" url="../register/register">注册</navigator>
		</HeadPage>		
		<view class="login-block">
			<!--登录表单-->
			<form class="login-form">
				<view class="telephone-item">
					<i class="iconfont icon-user"></i>
					<input type="text" class="telephone" placeholder="请输入手机号"  />
				</view>
				<view class="password-item">
					<i class="iconfont icon-lock"></i>
					<input type="text" class="password" placeholder="请输入密码" />	
					<i class="iconfont icon-close-eye"></i>
				</view>
				<!--登录按钮-->
				<button class="login" @click="toIndex">登录</button>
				<navigator class="forgot">忘记密码?</navigator>
			</form>
		</view>
	</view>
</template>

<script>
	import HeadPage from "@/components/HeadPage.vue";
	export default {
		components:{
			HeadPage,
		},
		data() {
			return {
				
			}
		},
		methods: {
			toIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped>
/*头部背景-logo*/
.login-interface{
	height: 100%;
}
.login-interface .register{
	position: absolute;
	right: 70rpx;
	top:60rpx;
	color: white;
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
	margin:0 30rpx;
	font-size: 14px;
}
.iconfont{
	font-size: 26px;
	color: #b04b87;
	font-weight: bold;
}
.icon-close-eye{
	display: block;
	font-weight: normal;
	color: gray;
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

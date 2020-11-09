<template>
	<view class="register">
		<HeadPage></HeadPage>
		
		<view class="register-block">
			<form class="register-form">
				<view class="form-item">
					<label for="telephone">手机号</label>
					<input type="text" id="telephone" placeholder="请输入手机号"    />
				</view>
				<view class="form-item">
					<label for="name">姓名</label>
					<input type="text" id="name" placeholder="请输入姓名" />
				</view>
				<view class="form-item">
					<label for="idCard">证件号</label>
					<input type="text" id="idCard" placeholder="请输入证件号"  />
				</view>
				<view class="form-item">
					<label for="password">密码</label>
					<input type="text" id="idCard" placeholder="6-20位数字和字母" />
				</view>
				<view class="form-item">
					<label for="code">验证码</label>
					<input type="text" id="code" placeholder="请输入验证码"  />
					<button class="getCode">获取验证码</button>
				</view>
			</form>
		</view>
		<button class="submitRegister" @click="toRegister">注册</button>
	</view>
</template>

<script>
	import HeadPage from "@/components/HeadPage.vue"
	export default {
		components:{
			HeadPage,
		},
		data() {
			return {
				telephone:'',
				name:'',
				idCard:'',
				password:'',
				code:'',
			}
		},
		methods: {
			validator(){
				
			},
			toRegister(){
				
			}
		}
	}
</script>

<style>
.register{
	height: 100%;
	background-color: #e1e1e1;
}
.form-item{
	display: flex;
	align-items: center;
	height: 100rpx;
	width: 100%;
	background-color: white;
	border-bottom: 1px solid #e0e0e0;
}
.register-block{
	transform: translateY(-50%);
}
.form-item label{
	width: 100rpx;
	height:60rpx;
	line-height:60rpx;
	vertical-align: middle;
	text-align: justify;
	text-align-last: justify;
	margin:0 60rpx 0 60rpx;
	color:#b04b87;
	font-weight: bold;
	white-space: nowrap;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.form-item input{
	font-size: 13px;
}
.getCode{
	width: 180rpx;
	height: 60rpx;
	border-radius: 0px;
	background-color:#ea9a00;
	color:white;
	font-size: 12px;
	white-space: nowrap;
	margin-right: 70rpx;
}
.submitRegister{
	width: 620rpx;
	border-radius: 0;
	background-color: #b04b87;
	color:white;
	text-align: center;
	letter-spacing:20px;
	text-indent: 20px;
	line-height: 80rpx;
	transform: translateY(-210rpx);
}
</style>

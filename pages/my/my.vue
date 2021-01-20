<template>
	<view class="page">
		<view class='header'>
			<view class="header-option">
				<view class="options">
						<image class="icon" src="../../static/icon/setting.png"></image>
				</view>
			</view>
			<view class="my-detail">
				<u-avatar :src="src" size="120"></u-avatar>
				<view class="desc">
					<view class="name">
						陈国灿
					</view>
					<view class="to-person">
						<view>个人信息</view>
						<view>
							<i class="iconfont icon-right"></i>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="message">
			<view class="msg-num" v-for="(item,index) in messageList" :key="index">
				<view class="num">
					{{item.num || 0}}
				</view>
				<view class="msg-type">
					{{item.type}}
				</view>
			</view>
		</view>
		<view class="menu-list">
			<view class="menu-item" v-for="(item,index) in menuList" :key="index" :class="{classify:(index+1)%4===0}">
				{{item}}
			</view>
			<view class="menu-item">
				<navigator url="../liveRoom/liveRoom">
					视频
				</navigator>
			</view>
		</view>
<!-- 		<navigator url="../videoCall/videoCall">
			直播
		</navigator> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				messageList:[{
					num:1,
					type:'预约'
				},{
					num:2,
					type:'关注'
				},{
					num:3,
					type:'回复'
				}],
				menuList:["我的预约","我的咨询","我的支付","我的收藏","我的设备","我的服务","推送管理","紧急联系人","商城订单"]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.page{
	width: 100%;
	height: 100%;
	background: #e1e1e1;
}

.header{
	width: 100%;
	background-color: #b04b87;
	height: 370rpx;
	.header-option{
		position: relative;
		padding-top: 90rpx;
		display:flex;
		align-items: center;
	}
	.options{
		display: flex;
		position: absolute;
		right: 20rpx;
		.icon{
			width: 40rpx;
			height: 40rpx;
		}
		
	}
}
.my-detail{
	display: flex;
	align-items: center;
	height: 290rpx;
	margin-left: 30rpx;
	.desc{
		margin-left: 20rpx;
		color:white;
		.name{
			font-weight: 700;
			font-size: 36rpx;
			margin-bottom: 10rpx;
		}
		.to-person{
			height: 50rpx;
			display: flex;
			font-size: 30rpx;
			align-items: flex-end;
			width: 200rpx;
			justify-content: space-between;
		}
	}
}
.message{
	height: 200rpx;
	padding: 0 15rpx;
	background: white;
	display: flex;
	margin-bottom: 30rpx;
	.msg-num{
		width: 240rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.num{
			margin:35rpx 0rpx;
			font-weight: 700;
			color: $cloud-color;
			font-size: 48rpx;
		}
	}
}
.menu-list{
	.menu-item{
		height: 70rpx;
		background: white;
		border-bottom: 1px solid #f8f8f8;
		padding:0 88rpx;
		line-height: 70rpx;
		color:$cloud-color;
	}
}
.classify{
	margin-bottom: 30rpx;
}
</style>

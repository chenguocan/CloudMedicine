<template>
	<view>
		<view class="header">
			<view class="search">
				<u-icon name="search" color="#c8c9c9" size="40" ></u-icon>
				<u-input v-model="value" :type="type" height="60rpx" placeholder="搜索心仪商品"  />
			</view>
			<view class="scan">
				<u-icon name="scan" color="#c8c9c9" size="55"></u-icon>
			</view>
		</view>
		<view>
			<swiper class="swiper-banner" indicator-dots>
				<swiper-item  v-for="(item,index) in bannerList" :key="index">
					<image class="banner" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="shop">
			<view class="shop-list" v-for="item in 5" :key="item">
				<view class="medicine-bg">
					<image class="medicine-img" src="../../static/images/midicine.png"></image>
				</view>
				<view class="detail">
					<view class="characteristic">
						<view class="char-list">
							进口
						</view>
						<view class="char-list">
							特价
						</view>
					</view>
					<view class="medicine-name">
						进口抗癌药
					</view>
					<view class="medicine-price">
						￥399
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				bannerList:['../../static/images/banner.png','../../static/images/banner.png','../../static/images/banner.png'],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.header{
	height: 170rpx;
	background-color: #b04b87;
	display: flex;
	justify-content: center;
	position: relative;
	.search{
		padding: 0 70rpx;
		background: white;
		display: flex;
		align-items: center;
		align-self: flex-end;
		margin-bottom: 35rpx;
		border-radius: 8rpx;
		width: 520rpx;
		height: 60rpx;
	}
	.scan{
		position: absolute;
		bottom:35rpx;
		right: 30rpx;
	}
}
.banner{
	width: 100%;
	height: 570rpx;
}
.swiper-banner{
	width: 100%;
	height: 600rpx;
}
.shop{
	margin: 20rpx;
	display: flex;
	flex-wrap: wrap;
	.shop-list{
		width: 340rpx;
		height: 500rpx;
		margin-bottom: 20rpx;
		.medicine-bg{
			height: 340rpx;
			background: #eeeeee;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.medicine-img{
				height: 210rpx;
				width: 290rpx;
			}
		}
		.detail{
			display: flex;
			flex-direction: column;
			.medicine-name{
				font-weight: 700;
			}
			.medicine-price{
				color:#8a2929;
				font-weight: 700;
			}
			.characteristic{
				display: flex;
				margin-top: 10rpx;
				margin-bottom: 15rpx;
				.char-list{
					text-align: center;
					width: 80rpx;
					height: 40rpx;
					border-radius: 5rpx;
					background: #e87b7e;
					color:white;
					margin-right: 10rpx;
				}
			}
		}
		
	}
}
.shop-list:nth-child(odd){
	margin-right: 28rpx;
}
</style>

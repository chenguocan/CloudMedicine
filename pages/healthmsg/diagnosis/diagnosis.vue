<template>
	<view>
		<view class="header">
			<view class="select-city">
				上海
			</view>
			<view class="search">
				<u-icon name="search" color="#c8c9c9" size="60" ></u-icon>
				<u-input v-model="value" :type="type" height="60rpx" placeholder="请输入医生名、科室名、医院名称"  />
			</view>
		</view>
		<view class="hospital">
			<scroll-view scroll-x="true" class="hospital-list" enable-flex="true">
				<view class="hospital-item"  v-for="(item,index) in hospitalList" :key="index">
					<image class="hospital-img" :src="item.image"/>
					<view class="hospital-name">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="select-list">
			<view class="options">
				<view class="title">
					全部医院
				</view>
				<view class="select">
					<view class="order">
						默认排序
						<i class="iconfont icon-morenpaixu1"></i>
					</view>
					<view class="order">
						筛选
						<i class="iconfont icon-shaixuan"></i>
					</view>
				</view>
			</view>
			<view class="select-item" v-for="(item,index) in 6" :key="item" @click="toOrder">
				<view class="select-img">
					<image class="select-image"  src="http://121.4.13.106/images/hospital.png"/>
				</view>
				<view class="select-desc">
					<view class="select-name">
						复旦大学xxxx医院
					</view>
					<view class="select-num">
						医生数110
					</view>
					<view class="select-level">
						三级甲等
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
				value:'',
				type:'text',
				hospitalList:[{
					name:'上海市瑞金医院',
					image:'http://121.4.13.106/images/hospital.png',
				},{
					name:'上海市第六人民医院',
					image:'http://121.4.13.106/images/hospital2.png',
				},{
					name:'上海市第六人民医院',
					image:'http://121.4.13.106/images/hospital2.png',
				}]
			}
		},
		methods: {
			toOrder(){
				uni.navigateTo({
					url:'../order/order'
				})
			}
		}
	}
</script>

<style lang="scss">
.header{
	display: flex;
	align-items: center;
	height: 150rpx;
	background: #b04b87;
	.select-city{
		margin:0 30rpx;
		color:white;
		font-size: 31rpx;
	}
	.search{
		display: flex;
		align-items: center;
		padding: 0 70rpx 0 20rpx;
		background: white;
		display: flex;
		border-radius: 8rpx;
		width: 520rpx;
		height: 75rpx;
	}
}
.hospital{
	height: 270rpx;
	background: #b04b87;
	display: flex;
	align-items: center;
	.hospital-list{
		display: flex;
		.hospital-item{
			display: flex;
			flex-direction: column;
			width: 244rpx;
			height: 181rpx;
			margin-right: 20rpx;
			.hospital-img{
				width: 244rpx;
				height: 181rpx;
			}
			.hospital-name{
				color: white;
				margin-top: 10rpx;
				text-align: center;
				font-size: 20rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
}
::v-deep .uni-scroll-view-content{
	display: flex;
}
.select-list{
	.select-item{
		height: 225rpx;
		border-bottom: 1px solid #f8f8f8;
		display: flex;
		align-items: center;
		.select-desc{
			height: 145rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.select-name{
				font-size: 32rpx;
				font-weight: 700;
			}
			.select-num{
				color:#ababab;
			}
		}
		.select-img{
			width: 247rpx;
			height: 225rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.select-image{
				width: 195rpx;
				height: 145rpx;
			}
		}
	}
	.options{
		border-bottom: 1px solid #f8f8f8;
		.title{
			font-size: 37rpx;
			font-weight: 700;
			color:$cloud-color;
			
		}
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx 0 20rpx;
		height: 100rpx;
		align-items: center;
		.select{
			display: flex;
			align-items: center;
			font-size: 30rpx;
			.order{
				display: flex;
				align-items: center;
				margin-right: 20rpx;
			}
			.iconfont{
				margin-left: 10rpx;
				font-size: 20rpx;
				color:#cfcfcf;
			}
		}
	}
}
</style>

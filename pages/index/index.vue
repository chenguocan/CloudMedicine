<template>
	<view>
		<view class='header'>
			<view class="header-option">
				<view class="position">
					上海
				</view>
				<view class="title">
					西太云医
				</view>
				<view class="options">
						<image class="icon" src="../../static/icon/scan.png" />
						<image class="icon notify" src="../../static/icon/notify.png" />
				</view>
			</view>
		</view>
		<view class="health-control">
			<view class="control-list" v-for="(item,index) in controlList" :key="index">
				<image class="health-img" :src="item.image">
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="health-measure">
			<view class="measure-list"  >
				<view class="measure-item" v-for="(item,index) in measureList" :key="index">
					<image class="health-img" :src="item.image">
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="symptom-introduction">
			<view class="symptom-desc">
				<view class="symptom-img">
					<image class="symptom-img"  src="../../static/icon/oldman.png"/>
				</view>
				<view class="desc">
					<view class="title">
						老年慢性眩晕与疼痛类疾病的防治
					</view>
					<view class="symptom">
						老年性眩晕通常表现为眩晕感、平衡紊乱 及失衡感。患者睁眼时感觉自身旋转、晃 动，犹如坐车船一般。
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
				room:'',
				account:'',
				controlList:[{
					image:'../../static/icon/measure.png',
					title:'体征测量'
				},{
					image:'../../static/icon/manager.png',
					title:'慢性病管理'
				},{
					image:'../../static/icon/record.png',
					title:'健康档案'
				}],
				measureList:[{
					image:'../../static/icon/treatment.png',
					title:'专家诊疗'
				},{
					image:'../../static/icon/crisis.png',
					title:'危机管理'
				},{
					image:'../../static/icon/information.png',
					title:'健康资讯'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.header{
	width: 100%;
	background-color: #b04b87;
	height: 450rpx;
	.header-option{
		position: relative;
		padding-top: 50rpx;
		display:flex;
		align-items: center;
		.position{
			color:white;
			position: absolute;
			left: 20rpx;
		}
	}
	.title{
		margin: 0 auto;
		color:white;
	}
	.options{
		display: flex;
		position: absolute;
		right: 0;
		.icon{
			width: 40rpx;
			height: 40rpx;
		}
		.notify{
			margin: 0 20rpx;
		}
		
	}
}
.health-control{
	display: flex;
	.control-list{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 180rpx;
		margin-left: 55rpx;
		transform: translateY(-50%);
		background-color: white;
		box-shadow: 0px 0px 3px #aaaaaa;
		border-radius: 6rpx;
		font-size: 16rpx;
	}
}
.health-img{
		width: 75rpx;
		height: 75rpx;
		margin-bottom: 10rpx;
}
.health-measure{
	display: flex;
	justify-content: center;
	.measure-list{
		display: flex;
		width: 660rpx;
		height: 185rpx;
		background-color: white;
		box-shadow: 0px 0px 3px #aaaaaa;
		border-radius: 6rpx;
		.measure-item{
			font-size: 16rpx;
			width:320rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
}
.symptom-introduction{
	display: flex;
	justify-content: center;
}
.symptom-desc{
	width: 660rpx;
	height: 185rpx;
	margin-top: 30rpx;
	display: flex;
	.symptom-img{
		width: 210rpx;
		height: 160rpx;
	}
	.desc{
		margin-left: 20rpx;
		align-self: flex-start;
		.title{
			width: 400rpx;
			font-weight: 700;
			color:#6a6a6a;
			font-size: 24rpx;
			border-bottom: 1px solid #e7e7e7;
			overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
		}
		.symptom{
			color:#959595;
			font-size: 14rpx;
		}
	}
}
</style>

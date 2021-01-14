<template>
	<view>
		<view class="test">
			<view class="my-require">
				我的设备
			</view>
			<view v-if="isBind===false" @click="isBind=true">
				<image style="width: 105rpx;height: 105rpx;" src="../../../static/icon/scan2.png"/>
			</view>
			<view v-else class="require-img">
				<image style="width: 50rpx;height: 100rpx;" src="../../../static/icon/require.png"/>
			</view>
			<view class="msg">
				<view class="require">{{isBind?'型号:ABC-111':'暂无设备'}}</view>
				<view >{{isBind?'设备ID:ABC-111':'请扫描二维码'}}</view>
			</view>
		</view>
		<view class="survey">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isBind:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.test{
	height: 330rpx;
	display: flex;
	align-items: center;
	color:white;
	background-color: #b04b87;
	.my-require{
		margin:0 110rpx 0 45rpx;
	}
	.msg{
		margin-left: 35rpx;
	}
	.require-img{
		width: 130rpx;
		height: 130rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid white;
		border-radius: 50%;
	}
}
</style>

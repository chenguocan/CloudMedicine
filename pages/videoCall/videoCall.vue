<template>
	<view class="content" @click="xxx">
		视频
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onLoad() {
			
		},
		methods: {
			xxx(){
				uni.navigateTo({
					url:'../xxx/xxx'
				})
			}
		}
}
</script>

<style>
</style>
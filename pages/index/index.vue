<template>
	<view>
		首页
	<Tab></Tab>
	</view>
</template>

<script>
	
	import Tab from "../../components/Tab.vue"
	// #ifdef APP-PLUS
		const modal = uni.requireNativePlugin('modal');
		const dcRichAlert = uni.requireNativePlugin('TENCENT-CALL');
	// #endif
	export default {
		components:{
			Tab
		},
		data() {
			return {
				room:'',
				account:'',
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>

</style>

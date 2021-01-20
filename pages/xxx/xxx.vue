<template>
	<view>
		<view @click="xxx">
			视频通话
		</view>
	</view>
</template>

<script>
	const call=uni.requireNativePlugin('Html5App-TencentCall'); 
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			xxx(){
				call.openCall({
						"userid": "huang",
						"roomid": 1234,
						"usersig": "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwhmliXnpUInilOzEgoLMFCUrQxMDAxNzMwMjQ4hMakVBZlEqUNzU1NTIwMAAIlqSmQsSMzM0sLA0NjIyg5qSmQ4019EvO8LA0jU31yUrRj-C3dfEPMgiudwwxL0y1LE03d-ANS-HN6vc1LfQ19TTVqkWAEVwMRo_",
						isShowBackIcon:1,
						setBeautyStyle:{"beautyStyle":1,beautyLevel:6,whitenessLevel:4,ruddinessLevel:3},
						videoFps:15,
						videoBitrate:600,
						buttons:{"float":0,"beauty":0,"videoEnable":1,"mic":1,"camera":0}
					}, ret => {
						
						console.log(JSON.stringify(ret));
					});
			}
		}
	}
</script>

<style>

</style>

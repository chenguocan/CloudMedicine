<template>
	<view class="tab-bar">
		<ul class="tab-list">
			<li v-for="tabItem in tabList" class="tab-item" :key="tabItem.id">
				<view  open-type="navigate" class="tab-nav" @click="switchTab(tabItem.page)">
					<image  src="../static/icon/cloud-doctor.png" class="tab-img"></image>
					<text class="tab-font">{{tabItem.text}}</text>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{
						id:1,
						page:"../index/index",
						source:"../static/icon/cloud-doctor.png",
						text:'首页'
					},
					{
						id:2,
						page:'../shop/shop',
						source:"../static/icon/shop.png",
						text:'商城'
					},
					{
						id:3,
						page:'../homeDoctor/homeDoctor',
						source:'../static/icon/home-doctor.png',
						text:'家庭医生'
					},
					{
						id:4,
						page:'../home/home',
						source:'../static/icon/home.png',
						text:'家庭'
					},
					{
						id:5,
						page:'../my/my',
						source:'../static/icon/my.png',
						text:'我的'
					},
				]
			};
		},
		methods:{
			switchTab(url){
				console.log(url);
				uni.navigateTo({
					url,
					success() {
						console.log("123");
					},
					fail(err) {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style>
ul,li{
	list-style: none;
	margin: 0;
	padding: 0;
}
.tab-bar{
	font-size: 12px;
	color:black;
	width: 100%;
	border-top: 1px solid #f5f5f5;
	box-shadow: 1px 1px 3px gray;
	position: absolute;
	bottom:0;
}
.tab-bar>.tab-list{
	display: flex;
}
.tab-img{
	width: 35px;
	height: 30px;
	
}
.tab-item{
	display: flex;
	margin: 5px 20px;
}
.tab-nav{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.tab-font{
	width: 30px;
	margin-top: 3px;
	white-space: nowrap;
}
</style>

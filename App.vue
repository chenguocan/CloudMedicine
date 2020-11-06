<script>
	export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		plus.navigator.closeSplashscreen();
			// app启动时打开启动广告页
			var w = plus.webview.open('hybrid/html/advertise/advertise.html','本地地址',
			{ top: 0, bottom: 0, zindex: 999 },'fade-in',5);
			
			//设置定时器，4s后关闭启动广告页
			setTimeout(function() {
				plus.webview.close(w);
			}, 4000);
		// #endif
		}
		
	}

</script>

<style>
		@import url("/static/icon/iconfont.css");
page{
	height: 100%;
	width: 100%;
}
</style>

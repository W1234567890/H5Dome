<template>	
	<div class="bj">
		<div class="box">
			<img src="https://opres.gongyujia.com/H5/zeroAct/introduction03.png" class="ban" @click="down"/>
			<img src="https://opres.gongyujia.com/H5/zeroAct/introduction04.png" class="share ban" @click="share"/>
		</div>
		<img src="https://opres.gongyujia.com/H5/zeroAct/box.jpg" class="bjBox" />
		<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="close" @click="close"/>
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"中秋礼品券",	
			imgUrl: 'http://papastyle.cn/images/logo.jpg',
		}
	},
	beforeMount(){		
		document.title = this.title;
		document.imgUrl =  this.imgUrl;// 分享图标
	},
	mounted() {	
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    };
        $(function () {
			//判断页面高度
			var h = $(window).height();
			$(".bj").css("height",h);				
        });			
    },	
    methods: {
		down(){
			window.location.href= 'http://android.myapp.com/myapp/detail.htm?apkName=com.gongyujia.app&ADTAG=mobile';
		},
		share(){
			$('.bjBox').show();
			$('.close').show();
		},
		close(){
			$('.bjBox').hide();
			$('.close').hide();
		}
	},
}
</script>

<style scoped>
.bj{position: relative;width:100%;}
.box{width: 100%;position: relative;height: 100%;background: url('https://opres.gongyujia.com/H5/zeroAct/introduction01.png') no-repeat scroll transparent;background-size: 100% 100%;}
.topBanner,.ban{width: 100%;position: relative;}
.ban{width: 50%;z-index: 2;position: fixed;bottom: 10%;left: 25%;}
.share{position: fixed;bottom: 1%;}
.bjBox{position: fixed;top: 0;opacity: .8;z-index: 5;width: 100%;display: none;}
.close{width: 10%;height: auto!important;z-index: 10;position: fixed;bottom: 18%;left: 45%;display: none;}
</style>
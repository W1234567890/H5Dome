<template>	
	<div class="bj">
		<img v-lazy="instructions01" class="topBanner"/>
		<img v-lazy="instructions02" />
		<img v-lazy="instructions03" />
	<!--	<img src="https://opres.gongyujia.com/H5/instructions/instructions04.jpg"/>-->
		<div class="eq">
			<img src="https://opres.gongyujia.com/H5/instructions/instructions06.png"/>
			<img src="https://opres.gongyujia.com/H5/instructions/instructions07.png"/>
			<img src="https://opres.gongyujia.com/H5/instructions/instructions08.png"/>
		</div>
		<img v-lazy="instructions05" />		
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"App使用指南",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			instructions01:"https://opres.gongyujia.com/H5/instructions/instructions01.jpg",
			instructions02:"https://opres.gongyujia.com/H5/instructions/instructions02.jpg",
			instructions03:"https://opres.gongyujia.com/H5/instructions/instructions03.jpg",
			instructions05:"https://opres.gongyujia.com/H5/instructions/instructions05.jpg",
			shareInfo:{
			   "share_title":"教你一分钟，找到心中满意的家",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/instructions",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"下载公寓家，一步到位，轻松住好房",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},
	beforeMount(){		
		document.title = this.title;
	},
	mounted() {	
		$(function () {
			//判断页面高度
			var h=$(window).height();
			$(".npText").height(h);							           
        });	
        let that = this;
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"教你一分钟，找到心中满意的家",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/instructions",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"下载公寓家，一步到位，轻松住好房",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
		};
    	data =  JSON.stringify(data);
		if(isAndroid){			
			android.showShareButton(data);
			//that.setclick(null);
		}else if(isiOS){			
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				//that.setclick(bridge);							
	       	})
		};
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    }     			
    },	
    methods: {	
		setupWebViewJavascriptBridge(callback) {
	        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
	        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
	        window.WVJBCallbacks = [callback];
	        var WVJBIframe = document.createElement('iframe');
	        WVJBIframe.style.display = 'none';
	        WVJBIframe.src = 'https://__bridge_loaded__';
	        document.documentElement.appendChild(WVJBIframe);
	        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
	    },	
	}
}
</script>

<style scoped>
.bj{background-color: #fff7e4;}
.topBanner{width: 100%;position: relative;}
.eq{width: 85%;margin-left: 7.5%;}
.eq>img:first-of-type{margin-left: 4%;width: 27.25%;}
.eq>img{width: 28%;margin-right: 2%;margin-left: 2%;}
.eq>img:last-of-type{margin-right: 0;width: 27.5%;}
</style>
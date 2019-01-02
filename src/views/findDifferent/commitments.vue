<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close" v-if="topBanner"/>
		<img src="https://opres.gongyujia.com/H5/different/commitments16.jpg" class="npText topBanner" v-if="topBanner"/>
		<div class="commitBanner">
			<p class="titBanner">媒体经常在报道各种因为甲醛问题导致的纠纷。</p>
			<p class="titBanner">不合格的材料，不负责的清理以及怠慢的售后服务令每一次租房都心惊胆战，担心自己和家人的健康受到危害。</p>				
			<p class="titBanner">那么你是不是怕了??往下看，我们提供你最安心的房源。不能贵，但要精致！</p>
			<a >
				<img src="https://opres.gongyujia.com/H5/different/commitments02.jpg" class="userH"/>				
				<p class="bannerText">面对上海严重的空气污染，我们为每一套房源配备了智能氧吧除雾霾空气净化器，选材非常严格：兔宝宝的生态板，立邦净味系列涂料，租客一旦有需求，我们会第一时间派师傅上门检查维修。所有房源都会在入住之前做一遍甲醛清理，并出具“权威CMA资质检查报告”</p>
				<h3 class="userName">--徽小二</h3>
				<video id="video" poster="http://restest.gongyujia.com/app/special/commitmentsMVbj01.jpg" src="http://restest.gongyujia.com/app/special/WXR.mp4" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="true" width="100%" height="220" style="border-radius: 2%;"></video>
				<img src="https://opres.gongyujia.com/H5/different/commitments04.jpg" class="houseBan" @click="openBrandMain" id="234" />
				<img src="https://opres.gongyujia.com/H5/different/commitments05.jpg" class="houseBan" @click="openBrandMain" id="234" />
			</a>			
		</div>
		
		<div class="commitBanner">
			<a >
				<img src="https://opres.gongyujia.com/H5/different/commitments06.jpg" class="userH"/>				
				<p class="bannerText">我们的每套房子都是用环保家具装修，小维修2小时内响应，大维修24小时内响应，每套房子都经过权威的空气质量检测，保证租客入住的安全舒心</p>
				<h3 class="userName">--盼达公寓</h3>
				<img src="https://opres.gongyujia.com/H5/different/commitments07.jpg" class="houseBan" @click="openBrandMain" id="226"  />
				<img src="https://opres.gongyujia.com/H5/different/commitments08.jpg" class="houseBan" @click="openBrandMain" id="226"  />
			</a>			
		</div>
		
		<div class="commitBanner">
			<a >
				<img src="https://opres.gongyujia.com/H5/different/commitments09.jpg" class="userH"/>
				<p class="bannerText">24小时贴心管家服务，帮助解决任何居住中的疑问</br>
	  								  24小时物业服务，任何问题都会有专人第一时间回应与处理。</br>
									    我们有完善的施工验收机制，以及相关的有资质的机构的检测。</p>
				<h3 class="userName">--昔舍</h3>					    
				<img src="https://opres.gongyujia.com/H5/different/commitments10.jpg" class="houseBan" @click="openBrandMain" id="247" />
				<img src="https://opres.gongyujia.com/H5/different/commitments11.jpg" class="houseBan" @click="openBrandMain" id="247" />
			</a>				
		</div>
		
		<div class="commitBanner">
			<a >
				<img src="https://opres.gongyujia.com/H5/different/commitments12.jpg" class="userH"/>				
				<p class="bannerText">提供459项房屋安全工程检查，在用户入住前我们会对每套房源进行深度开荒保洁、全屋消毒除螨，并提供空气净化及智能检测系统以及厨房水净化系统来确保租客的安全健康</p>				
				<h3 class="userName">--优帕克</h3>
				<video id="video" poster="http://restest.gongyujia.com/app/special/commitmentsMVbj02.jpg" src="http://gmas4c9cgtpb77bm74v.exp.bcevod.com/mda-hfmgrq3qxvr1ezhk/mda-hfmgrq3qxvr1ezhk.mp4" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="true" width="100%" height="220" style="border-radius: 2%;"></video>
				<img src="https://opres.gongyujia.com/H5/different/commitments14.jpg" class="houseBan" @click="openBrandMain" id="219" />
				<img src="https://opres.gongyujia.com/H5/different/commitments15.jpg" class="houseBan last" @click="openBrandMain" id="219" />
			</a>				
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut" v-if="showPrises"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
			type:"",
			showPrises:true,
			showTitle:false,
			title:"房东的安心承诺",			
			data:{},
			topBanner:true,
			shareInfo:{
			   "share_title":"房东的安心承诺",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/commitmentsNew",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"担心自己和家人的健康收到危害？我们提供给你最安心的房源。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},	
    beforeMount(){	
    	document.title = this.title;
    	var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       
	        this.showPrises = false;	  
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrises = false;	  
		}
		this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
    	}
	},
    mounted() {
        let that = this;
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"房东的安心承诺",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/commitmentsNew",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"担心自己和家人的健康收到危害？我们提供给你最安心的房源。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    	data =  JSON.stringify(data);
		if(isAndroid){			
			//android.showShareButton(data);
			that.setclick(null);
		}else if(isiOS){	
			$('.shareBut').css('margin','15px 35% 450px')
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        //bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				that.setclick(bridge);							
	       	})
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
	    setclick(bridge){	
        	let that = this;			
			document.getElementById('shareBut').onclick = function(e){
				//let data = that.shareInfo;	
				let data ={
					   "share_title":"房东的安心承诺",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/commitmentsNew",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"担心自己和家人的健康收到危害？我们提供给你最安心的房源。",      //副标题
					   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
					   "mini_name":"",           //分享小程序使用的原始id
					   "mini_path":"", //分享小程序使用的页面路径
					};
		    	data =  JSON.stringify(data);		    	
				var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
				if(isAndroid){
					android.openShare(data);			           		        
		        }else if(isiOS){
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {})		        				
			    }
			}
        }, 
		//品牌馆
		openBrandMain(e){
			var brand_id = e.target.id;
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(isAndroid){
				android.openBrandMain(brand_id);	
			}else if(isiOS){			              		
	            var message = {
	                'methodName' : 'openBrandMain',	
	                'params' : {
	                    'brand_id':brand_id,		                   
	                },
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		        		        
	        }				
		},
		close(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			if(isAndroid){
				android.close();				
			}else if(isiOS){			              		
	            var message = {
	                'methodName' : 'close',		               
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		           		       
	        };				
		},	
    }
}
</script>
<style scoped>
.close{position: absolute;top: 12px;right: 12px;width: 25px;}
.shareBut{width: 30%;margin: 15px 35% 45px;}
.titBanner{ color: #838383;font-size: .85em;margin: 15px 0 20px 0;line-height: 27px;text-align: left;}	
</style>
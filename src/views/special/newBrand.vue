<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises"/>
		<img class="ejBanner" src="https://opres.gongyujia.com/H5/different/brand01.jpg" />
		<div class="ejAllContent">
			<img src="https://opres.gongyujia.com/H5/different/brand02.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/brand03.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand04.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand05.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand06.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand07.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand08.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand09.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/brand10.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand11.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand12.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand13.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand14.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand15.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand16.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/brand17.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand18.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand19.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand20.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/brand21.jpg" @click="openBrandMain" id="216"/>
		</div>
		<div class="footerEjA" v-if="showPrise">
			<div class="ftTit">
				<h1>更多设计范文章</h1>				
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<!--<swiper ref="mySwiper">
						<swiper-slide>-->
							<a @click="openNewBrowser" id="http://special.gongyujia.com/#/design">								
				   				<img src="https://opres.gongyujia.com/H5/different/brand22.jpg" class="" id="http://special.gongyujia.com/#/design"/>		
							</a>							
						<!--</swiper-slide>						
					</swiper>-->
					<div class="swiper-pagination"></div>
				</div>				
			</div>
		</div>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"设计范放空",
			imgState:1,
			lengthBanner:"",
			imgState:1,
          	lengthBanner:0,
          	showPrise:true,
          	showPrises:true,
			houseSwiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,		           
	            slidesPerView : 1.25,
				spaceBetween: 20,
	            autoplayDisableOnInteraction : false,		           
				onSlideChangeStart:swiper=>{
					this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;
					if(this.page>this.imgState){
                    	this.imgState=this.page;
                    }
                },
           },
           shareInfo:{
			   "share_title":"爆改300+套老房子后，这个爆红网络的设计师告诉你，生活就该不将就",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/newBrand",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"无关空间大小，只要曾为你遮风挡雨，便是家的意味。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},		   
    beforeMount(){	
    	let that = this;
    	document.title = this.title;
    	var ua = window.navigator.userAgent.toLowerCase();
    	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器  
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
	        this.showPrise = false;	  
	        this.showPrises = false;	  
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrise = false;	
			this.showPrises = false;	  
		}else if(isAndroid){
			this.showPrises = false;	
		}
	},
    mounted() {	
		let that = this;
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	   	};      	
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){					
		}else{
			let data = {
				   "share_title":"设计范放空",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/newBrand",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"搜房比价公寓家一下,公寓家注册有礼",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				};
	    	data =  JSON.stringify(data);
			if(isAndroid){
				this.showPrises = false;
				android.showShareButton(data);
				//that.setclick(null);
			}else if(isiOS){
				this.showPrises = false;
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
					//that.setclick(bridge);							
		       	})
			}
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
			document.getElementById('share').onclick = function(e){
				//let data = that.shareInfo;
				let data = {
				   "share_title":"设计范放空",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/newBrand",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"搜房比价公寓家一下,公寓家注册有礼",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				};
	    		data =  JSON.stringify(data);		    	
				var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
				if(isAndroid){
					this.showPrises = false;
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
		openNewBrowser(e){
			var brand_url = e.target.id;
			var ua = window.navigator.userAgent.toLowerCase();
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
		        //微信环境
		        wx.miniProgram.getEnv(function (res) {
				    if (res.miniprogram) {
				      wx.miniProgram.switchTab({url: 'pages/list/listDetailOthers/listDetailOthers'});
				      wx.miniProgram.postMessage({data: {id: houseId}}); // 传的参数
				    }
				});
		    }else if(isAndroid){
				android.openNewBrowser(brand_url);	
			}else if(isiOS){			              		
	            var message = {
	                'methodName' : 'openNewBrowser',	
	                'params' : {
	                    'url':brand_url,		                   
	                },
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		        		        
	        }	
		},
    },
}
</script>
<style scoped>
swiper-slide{margin-right: 0;}	
.ejBanner{width: 100%;position: relative;}
.ejAllContent{width: 100%;}
.ejAllContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.ejAllTit{width: 100%;height: 1em;text-align: center;font-size: 1.75em;line-height: 1em;margin-bottom: 4px;}
.ejAllTit>img{width: .55em;height: .2em;vertical-align: middle;}
.ejAllTit>h3{display: inline-block;font-weight: 600;font-size: 1em;vertical-align: middle;color: #333;}
.ejAllContent .txtB{margin: 23px 3.7% 23px 3.7%;}
.ejAllContent .txtBann{margin: 23px 3.7% 0px 3.7%;}
.ejAllContent .textBord{border-bottom: 1px solid #f9f9f9;margin-bottom: 22px;}
.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin:15px 0;width: 100%;}
.bHse>a>img{margin-left: 3.7%;width: 50%;}
</style>
<template>
	<div class="bj">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises"/>
		<div class="dsTop">
			<img class="ejBanner" src="https://opres.gongyujia.com/H5/stylist/stylist01.jpg" />
			<img class="dsText" src="https://opres.gongyujia.com/H5/stylist/stylist02.jpg"/>
		</div>
		
		<div class="ejAllContent">					
			<img src="https://opres.gongyujia.com/H5/stylist/stylist03.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist04.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist05.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist06.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist07.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist08.jpg" />	
			<img src="https://opres.gongyujia.com/H5/stylist/stylist09.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist10.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist11.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist12.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist13.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist14.jpg" />	
			<img src="https://opres.gongyujia.com/H5/stylist/stylist15.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist16.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist17.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist18.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist19.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist20.jpg" />	
			<img src="https://opres.gongyujia.com/H5/stylist/stylist21.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist22.jpg" />
			<img src="https://opres.gongyujia.com/H5/stylist/stylist23.jpg" />	
		</div>
		<div class="footerEjA" v-if="showPrise">
			<div class="ftTit">
				<h1>更多设计范文章</h1>				
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">
						<swiper-slide>
							<a @click="openNewBrowser" id="http://special.gongyujia.com/#/panDa">								
				   				<img src="https://opres.gongyujia.com/H5/stylist/stylist24.jpg" class="" id="http://special.gongyujia.com/#/panDa"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="http://special.gongyujia.com/#/newBrand">								
				   				<img src="https://opres.gongyujia.com/H5/panDa/panda15.jpg" class="" id="http://special.gongyujia.com/#/newBrand"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="http://special.gongyujia.com/#/design">								
				   				<img src="https://opres.gongyujia.com/H5/different/brand22.jpg" class="" id="http://special.gongyujia.com/#/design"/>		
							</a>							
						</swiper-slide>	
																		
					</swiper>
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
			showPrises:true,
			title:"设计范",
			showPrise:true,
			imgState:1,
          	lengthBanner:0,
			houseSwiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,		           
	            slidesPerView : 2.15,
				spaceBetween: 16,
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
			   "share_title":"左手情怀，右手舒适，我愿住进这样的老房子",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/stylist",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"每一栋房子都是独一无二的存在，越老越弥足珍贵。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},
	beforeMount(){   	
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
				   "share_title":"左手情怀，右手舒适，我愿住进这样的老房子",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/stylist",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"每一栋房子都是独一无二的存在，越老越弥足珍贵。",      //副标题
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
					   "share_title":"左手情怀，右手舒适，我愿住进这样的老房子",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/stylist",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"每一栋房子都是独一无二的存在，越老越弥足珍贵。",      //副标题
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
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
		        $('.footerEjA').hide();
		        $('.ejAllContent').hide();
			}else{
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
    }
}
</script>
<style scoped>
.bj{margin-bottom: 20px;}
swiper-slide{margin-right: 0;}	
.ejBanner{width: 100%;position: relative;}
.ejAllContent{width: 100%;}
.ejAllContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.ejAllTit{width: 100%;height: 1em;text-align: center;font-size: 1.75em;line-height: 1em;margin-bottom: 4px;}
.ejAllTit>img{width: .55em;height: .2em;vertical-align: middle;}
.ejAllTit>h3{display: inline-block;font-weight: 600;font-size: 1em;vertical-align: middle;color: #333;}

.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin:15px 0;width: 100%;}
.bHse>a{float: left;width: 46%;}
.bHse>a>img{width: 100%;}
  
.bHse{width: 100%;display: inline-block;margin-left: 3.2%;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height: auto!important;display: block;border-top-left-radius: 5px;border-top-right-radius: 5px;}
.desHouse{width: 100%;height: auto!important;}
.desHouse>img{width: 100%;height: auto!important;}
.des{position: relative;width: 92.7%;margin-top: 12px;line-height: 15px;padding-bottom: 13px;text-align: left;margin-left: 3.7%;}
.desHcont .bHMP{margin-left: .85em;margin-top: 6px;}
.desHcont .bHGP{margin-left: .85em;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.desHcont{width: 92.6%;margin-left: 3.7%;position: relative;bottom: 30px;border-radius: 5px;box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);}
.Hcont{padding-bottom: 10px;background-color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #666;font-size: 1.2em;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHMP{height: 1.5em;line-height: 1.5em;font-size: .9em;color: #b6b6b6;margin: 6px 0 0 .15em;}
.Hcont .bHM{margin-left: 1.5%;font-size: 1em;color: #000;margin-top: 5px}
.Hcont .bHMs{margin-right: 3.7%;text-align: right;color: #2eb6b5;margin-top: 5px;font-size: .85em;}
.Hcont .bHMs>span:last-of-type{color: #2eb6b5;margin: 0 0 0 6px;font-size: 1.25em;}
.Hcont .bHGP{margin-left: .85em;line-height: 1.5em;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHGP>img{width: 1em;height: 1em;vertical-align: middle;}
.Hcont .bHGP>span{margin-left: 2px;color: #959595;font-size: .85em;vertical-align: middle;width: 90%;height: 24px;display: inline-block;}
.dsTop{width: 100%;}
.dt{margin-top: -16px;}
.dsText{width: 92.6%;margin-left: 3.7%;height: auto!important;position: relative;bottom: 22px;border-radius: 5px;box-shadow:0 5px 5px rgba(0, 0, 0, 0.2);}
.designContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.designContent>img:last-of-type{padding-bottom: 6px;}
.recommendHouse{width: 100%;}
.recommendHouse>h1{width: 92.6%;height: 1.25em;line-height: 1.5em;font-size: 1.2em;font-weight: bolder;margin-left:3.7%;color: #333;margin-bottom: 10px;}
.point{width: 100%;text-align: center;margin: 1em 0 1.5em;}
.fH{width: 100%;}
.oneB{margin: 0;}
</style>
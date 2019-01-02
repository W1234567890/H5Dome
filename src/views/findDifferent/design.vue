<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises"/>
		<div class="dsTop">
			<img class="ejBanner" src="https://opres.gongyujia.com/H5/different/design01.jpg" />
			<img class="dsText" src="https://opres.gongyujia.com/H5/different/design02.jpg"/>
		</div>
		
		<div class="ejAllContent">					
			<img src="https://opres.gongyujia.com/H5/different/design03.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/design04.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/design05.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/design06.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/design07.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/design08.jpg" />
			<div class="recommendHouse">
				<h1>立即入住</h1>
				<div class="point" style="display: none;"><img src="https://opres.gongyujia.com/H5/different/design09.png"></div>
				<a @click="openHouseDetail" id="24583450">
					<div class="des desHouse" id="24583450">
						<img src="https://opres.gongyujia.com/H5/different/design10.jpg" id="24583450"/>							
						<div class="houseTit" id="24583450">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24583450" />
							<p id="24583450">黄浦区丰裕里二室新式里弄</p>						
							<span id="24583450"><span id="24583450">¥ 11000</span>/月</span> 						
						</div>						
					</div>	
				</a>
			</div>
		</div>
		<div class="footerEjA">
			<div class="ftTit">
				<h1>好房推荐</h1>
				<span>周边租房推荐</span>
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">						
						<swiper-slide>
							<a @click="openHouseDetail" id="24570346">
								<div class="bH" id="24570346">
						   			<div class="hImg1" id="24570346">
						   				<img src="https://opres.gongyujia.com/H5/different/957.jpg" class="" id="24570346"/>
						   			</div>
						   			<div class="Hcont" id="24570346">
						   				<h1 id="24570346">长宁区新华世纪园三室公寓</h1>			   				
						   				<div class="bHMP" id="24570346">
						   					<span id="24570346">3室2厅2卫</span> | <span id="24570346">160</span>平米<span> | </span><span>17/30层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24570346">¥ <span id="24570346">21500</span>元/月</p>
						   			</div>		
						   		</div>
							</a>					
						</swiper-slide>
						<swiper-slide>
							<a  @click="openHouseDetail" id="24593206">
								<div class="bH" id="24593206">
						   			<div class="hImg1" id="24593206">
						   				<img src="https://opres.gongyujia.com/H5/different/43833.jpg" class="" id="24593206"/>
						   			</div>
						   			<div class="Hcont" id="24593206">
						   				<h1 id="24593206">长宁区中镇小区二室老公房</h1>			   				
						   				<div class="bHMP" id="24593206">
						   					<span id="24593206">2室1厅1卫</span> | <span id="24593206">56</span>平米<span> | </span><span id="24593206">2/6层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24593206">¥ <span id="24593206">11500</span>元/月</p>
						   			</div>		
						   		</div>
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
			title:"设计范",
			imgState:1,
          	lengthBanner:0,          	
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
                }
	        },
	        showPrise:true,
	        showPrises:true,
	        shareInfo:{
			   "share_title":'“表里不一”，在这里成为褒义词',        //分享标题
			   "share_url":"http://special.gongyujia.com/#/design",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"老洋房换新颜，外表其貌不扬，步入其中，就会发现另一个天地。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},	
	beforeMount(){	
		let that = this;
	  	document.title = this.title;
//  	var ua = window.navigator.userAgent.toLowerCase();
//  	var u = navigator.userAgent, app = navigator.appVersion; 
//		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
//		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       
//	        this.showPrises = false;	  
//		}else if(ua.match(/Alipay/i) == "alipay"){
//			this.showPrises = false;	  
//		}else if(isAndroid){
//			this.showPrises = false;	
//		}
		this.weixinAndPay();   	
	},
	mounted(){		      
        $(function () {
			//判断页面高度
			var h=$(window).height();
			$(".npText").height(h);							           
        });
        let that = this;	
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    };
        $(function () {
			var h1=-$(".tanBg001").height()/2;
			var h2=-$(".tanBg002").height()/3;
			$(".tanBg001").css("margin-top",h1);
			$(".tanBg002").css("margin-top",h2);				
        });	       
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data ={
			   "share_title":'“表里不一”，在这里成为褒义词',        //分享标题
			   "share_url":"http://special.gongyujia.com/#/design",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"老洋房换新颜，外表其貌不扬，步入其中，就会发现另一个天地。",      //副标题
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
				this.bg = bridge;
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
		//打开房源详情页
	    openHouseDetail(e){
	    	var houseId = e.target.id;
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			if(isAndroid){
				android.openHouseDetail(houseId);				
			}else if(isiOS){			   		            	           
	            var message = {
	                'methodName' : 'openHouseDetail',	
	                'params' : {
	                    'house_id':houseId,		                   
	                },
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
	        }			
		},
    },
}
</script>
<style scoped>
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
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 10px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
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
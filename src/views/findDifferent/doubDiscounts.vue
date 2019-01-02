<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
		<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts01.jpg"/>
		<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts02.png" class="titBanner"/>
		<div class="ctHouse">
			<ul class="idHouses">
				<li class="cont" @click="openHouseDetail" id="24586492">					
					<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0ac4fad2aed.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24586492"/>
					<div class="houseTit" id="24586492">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24586492"/>
						<p id="24586492">浦东新区v领地青年公寓一室公寓</p>
						<span id="24586492"><span id="24586492">¥ 2800</span>/月</span>								
					</div>					
				</li>				
				<li class="cont" @click="openHouseDetail" id="24592900">
					<a>
						<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0acabc6cade.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24592900"/>
						<div class="houseTit" id="24592900">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24592900"/>
							<p id="24592900">闵行区V领地青年创客社区一室公寓</p>
							<span id="24592900"><span id="24568384">¥ 3260</span>/月</span>   						
						</div>
					</a>						
				</li> 				
				<div class="showListHouses" @click="showHouse">展示更多优惠房源<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts04.png" /></div>				
				<div class="hiddenList">
					<li class="cont" @click="openHouseDetail" id="24580282">					
						<img src="http://images.gongyujia.com/upload/house/user/29102/20171222/5a3c9b8fdd544.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24580282"/>
						<div class="houseTit" id="24580282">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24580282"/>
							<p id="24580282">闵行区V领地一室公寓</p>
							<span id="24580282"><span id="24580282">¥ 1700</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="24578914">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/29102/20171223/5a3e3f45d24a1.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24578914"/>
							<div class="houseTit" id="24578914">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24578914"/>
								<p id="24578914">闵行区V领地一室公寓</p>
								<span id="24578914"><span id="24578914">¥ 1750</span>/月</span>   						
							</div>
						</a>						
					</li> 					
					<li class="cont" @click="openHouseDetail" id="27528484">					
						<img src="http://images.gongyujia.com/upload/house/user/29102/20180113/5a59a013a27c9.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="27528484"/>
						<div class="houseTit" id="27528484">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="27528484"/>
							<p id="27528484">闵行区V领地一室公寓</p>
							<span id="27528484"><span id="27528484">¥ 1960</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="27528502">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180126/5a6aa9a012aeb.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="27528502"/>
							<div class="houseTit" id="27528502">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="27528502"/>
								<p id="27528502">闵行区V领地一室公寓</p>
								<span id="27528502"><span id="27528502">¥ 1560</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont" @click="openHouseDetail" id="24588058">					
						<img src="http://images.gongyujia.com/upload/house/user/29102/20180113/5a59a013a27c9.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24588058"/>
						<div class="houseTit" id="24588058">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24588058"/>
							<p id="24588058">闵行区V领地一室公寓</p>
							<span id="24588058"><span id="24588058">¥ 1750</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="24591442">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0ac33173d9c.jpeg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24591442"/>
							<div class="houseTit" id="24591442">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24591442"/>
								<p id="24591442">闵行区V领地一室公寓</p>
								<span id="24591442"><span id="24591442">¥ 1750</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont" @click="openHouseDetail" id="24579958">					
						<img src="http://images.gongyujia.com/upload/house/user/85171/20180820/5b7a775f4696a.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24579958"/>
						<div class="houseTit" id="24579958">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24579958"/>
							<p id="24579958">普陀区莲花公寓一室公寓</p>
							<span id="24579958"><span id="24579958">¥ 3500</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="24587716">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180820/5b7a8ad3bc80a.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24587716"/>
							<div class="houseTit" id="24587716">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24587716"/>
								<p id="24587716">闵行区虹许路一室酒店式公寓</p>
								<span id="24587716"><span id="24587716">¥ 5000</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont" @click="openHouseDetail" id="24572974">					
						<img src="http://images.gongyujia.com/upload/house/user/85171/20180821/5b7b7a80d2396.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24572974"/>
						<div class="houseTit" id="24572974">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24572974"/>
							<p id="24572974">闵行区合川路一室公寓</p>
							<span id="24572974"><span id="24572974">¥ 3300</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="24568510">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180825/5b80f954e9820.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24568510"/>
							<div class="houseTit" id="24568510">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24568510"/>
								<p id="24568510">浦东新区V领地青年社区(银山路社区)一室公寓</p>
								<span id="24568510"><span id="24568510">¥ 3560</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont" @click="openHouseDetail" id="24586564">					
						<img src="http://images.gongyujia.com/upload/house/user/85171/20180821/5b7b7a80d2396.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24586564"/>
						<div class="houseTit" id="24586564">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24586564"/>
							<p id="24586564">浦东新区v领地青年公寓一室公寓</p>
							<span id="24586564"><span id="24586564">¥ 3300</span>/月</span>								
						</div>					
					</li>				
					<li class="cont" @click="openHouseDetail" id="24576016">
						<a>
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180825/5b80fe8e5f7b2.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24576016"/>
							<div class="houseTit" id="24572974">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24576016"/>
								<p id="24576016">浦东新区锦绣东路一室公寓</p>
								<span id="24576016"><span id="24576016">¥ 2900</span>/月</span>   						
							</div>
						</a>						
					</li>										
				</div>
			</ul>    
		</div>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"双节钜惠",			
			data:{},
			showPrise:true,
			shareInfo:{
			   "share_title":"双节钜惠",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/doubDiscounts",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"搜房比价公寓家一下,公寓家注册有礼",      //副标题
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
	        this.showPrise = false;	      
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrise = false;			
		}
	},
    mounted() {
        $(function () {
			//判断页面高度
			var h=$(window).height();
//			$(".bcy").height(h);							           
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
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"双节钜惠",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/doubDiscounts",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"搜房比价公寓家一下,公寓家注册有礼",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
		data = JSON.stringify(data);
		if(isAndroid){
			this.showPrise = false;
			android.showShareButton(data);
			//that.setclick(null);
		}else if(isiOS){			
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        //bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				that.setclick(bridge);							
	       	})
		}
    },
    methods: {		
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
		showHouse(){
			$('.hiddenList').show();
			$('.showListHouses').hide();
		},
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
					   "share_title":"双节钜惠",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/doubDiscounts",          //链接
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
					android.openShare(data);			           		        
		        }else if(isiOS){
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {})
			    }
			}
        }  
    },
}
</script>
<style lang='scss' scoped>
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 18px;z-index: 10;}
.bcy{width: 100%;padding-bottom: 40px;background: url('~src/assets/img/doubDiscounts/doubDiscounts03.jpg') no-repeat scroll transparent;background-size: 100% 100%;}
.titBanner{width: 92.6%;margin-left: 3.7%;margin-top: -28%;}
.ctHouse{width: 92.6%;margin-left: 3.7%;background-color: #fff;margin-top: 10px;border-radius: 7px;padding-bottom: 20px;}
.idHouses{width: 95%;margin-left: 2.5%;padding-top: .5%;}
.housesImg{border-radius: 7px;}
.showListHouses{background-color: #f6f6f6;color: #ccc;width: 60%;margin-left: 20%;text-align: center;height: 30px;line-height: 30px;font-size: .85em;margin-top: 10px;}
.showListHouses >img{width: 15px;height: 8px;margin-left: 8px;}
.hiddenList{display: none;}
</style>
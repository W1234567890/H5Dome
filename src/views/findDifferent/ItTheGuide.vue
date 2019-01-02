<template>
	<div>
		<a href="#lk"><img src="https://opres.gongyujia.com/H5/different/ItTheGuide01.jpg" class="topBanner"/></a>
		<div class="houseBanner" id="lk">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide02.jpg" class="titBanner" />    			
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24573208">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/ItTheGuide03.jpg" class="houseImg" id="24573208"/>
						<div class="houseTit" id="24573208">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg"  id="24573208"/>
							<p id="24573208">闵行区V领地一室公寓</p>						
							<span id="24573208"><span id="24573208">¥ 5500</span>/月</span>															
						</div>
					</a>
				</li>
				<li class="cont" @click="openHouseDetail" id="24593530">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/ItTheGuide04.jpg" class="houseImg" id="24593530"/>
						<div class="houseTit" id="24593530">
							<img id="24593530" src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" /> 	
							<p id="24593530">闵行区恺顿国际服务式一室酒店式公寓</p>							
							<span id="24593530"><span id="24593530">¥ 12000</span>/月</span>						
						</div>
					</a>					
				</li>				 				
			</ul>    			
		</div>
		
		<div class="houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide06.jpg" class="titBanner"/>    			
			<ul class="ctBOX">				
				<li class="cont" @click="openHouseDetail" id="24580732">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/ItTheGuide08.jpg" class="houseImg" id="24580732"/>
						<div class="houseTit" id="24580732">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24580732"/>
							<p id="24580732">静安区南阳路183弄一室公寓</p>
							<span id="24580732"><span id="24580732">¥ 18000</span>/月</span>  						
						</div>
					</a>							
				</li>
				<li class="cont" @click="openHouseDetail" id="24584944">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu09.jpg" class="houseImg" id="24584944"/>
						<div class="houseTit" id="24584944">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24584944" />
							<p id="24584944">静安区静安四季苑一室公寓</p>
							<span id="24584944"><span id="24584944">¥ 18000</span>/月</span>   						
						</div>
					</a>							
				</li>    				
			</ul>    			
		</div>
		
		<div class="houseBanner last">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide10.jpg" class="titBanner"/>    			
			<ul class="ctBOX">				
				<li class="cont" @click="openHouseDetail" id="24583774">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/ItTheGuide12.jpg" class="houseImg" id="24583774"/>
						<div class="houseTit" id="24583774">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24583774"/>
							<p id="24583774">黄浦区东淮海公寓三室公寓</p>
							<span id="24583774"><span id="24583774">¥ 23800</span>/月</span> 						
						</div>
					</a>				
				</li>				 				
			</ul>    			
		</div>
	</div>
</template> 
<script>
	export default {
		data(){
			return {
				showTitle:false,
				title:"互联网从业者租房指南",			
				data:{},
				shareInfo:{
				   "share_title":"互联网从业者租房指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/ItTheGuide",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "subtitle":"这里的房子方便加班，更方便加班后回家补觉，挽救发际线！",      //副标题
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
//	        $(function () {
//				//判断页面高度
//				var h=$(window).height();
//				$(".npText").height(h);							           
//	        });	
            let that = this;
	        var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data = {
				   "share_title":"互联网从业者租房指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/ItTheGuide",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"这里的房子方便加班，更方便加班后回家补觉，挽救发际线！",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				}
	    	data =  JSON.stringify(data);
			if(isAndroid){			
				android.showShareButton(data);
				//that.setclick(null);
			}else if(isiOS){			
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
					//that.setclick(bridge);							
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
	    }
	}
</script>
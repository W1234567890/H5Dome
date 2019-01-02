<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close"/>
		<img src="https://opres.gongyujia.com/H5/different/ItTheGuide14.jpg" class="topBanner"/>
		<div class="houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide02.jpg" class="titBanner" />    			
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 23478394">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
						<div class="houseList"  :id="im.house_oid"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
							<p class="houseTit"  :id="im.house_oid">{{im.house_name}}</p>	
							<p class="contTit"  :id="im.house_oid">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 23477512">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
						<div class="houseList"  :id="im.house_oid"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
							<p class="houseTit"  :id="im.house_oid">{{im.house_name}}</p>	
							<p class="contTit"  :id="im.house_oid">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>							 				
			</ul>    			
		</div>
		
		<div class="houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide06.jpg" class="titBanner"/>    			
			<ul class="ctBOX">	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 23477476">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
						<div class="houseList"  :id="im.house_oid"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
							<p class="houseTit"  :id="im.house_oid">{{im.house_name}}</p>	
							<p class="contTit"  :id="im.house_oid">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 22404028">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
						<div class="houseList"  :id="im.house_oid"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
							<p class="houseTit"  :id="im.house_oid">{{im.house_name}}</p>	
							<p class="contTit"  :id="im.house_oid">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>				  				
			</ul>    			
		</div>
		
		<div class="houseBanner last">
			<img src="https://opres.gongyujia.com/H5/different/ItTheGuide10.jpg" class="titBanner"/>    			
			<ul class="ctBOX">	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 22403650">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
						<div class="houseList"  :id="im.house_oid"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
							<p class="houseTit"  :id="im.house_oid">{{im.house_name}}</p>	
							<p class="contTit"  :id="im.house_oid">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>							 				
			</ul>    			
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut" v-if="showPrises"/>	
	</div>
</template> 
<script>
	export default {
		data(){
			return {
				showTitle:false,
				showPrises:true,
				title:"互联网从业者租房指南",			
				data:{},
				shareInfo:{
				   "share_title":"互联网从业者租房指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/ItTheGuideHZNew",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "subtitle":"这里的房子方便加班，更方便加班后回家补觉，挽救发际线！",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				},
				houseList:[],
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
		},
	    mounted() {
	        $(function () {
				//判断页面高度
				var h=$(window).height();
				$(".npText").height(h);							           
	        });	
            let that = this;
            that.init();
	        var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data = {
				   "share_title":"互联网从业者租房指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/ItTheGuideHZNew",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"这里的房子方便加班，更方便加班后回家补觉，挽救发际线！",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				}
	    	data =  JSON.stringify(data);
			if(isAndroid){			
				///android.showShareButton(data);
				that.setclick(null);
			}else if(isiOS){			
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
					let data = {
						  "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
						   "share_url":"https://special.gongyujia.com/#/ItTheGuideHZNew",          //链接
						   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
						   "share_subtitle":"这里的房子方便加班，更方便加班后回家补觉，挽救发际线！",      //副标题
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
			init(){
				var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
				let url = "Specials/house_list_it",
				    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"0571","g_uid":"","channel":"","app_device":"","package_name":""};																		
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							var u = navigator.userAgent, app = navigator.appVersion; 
							var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
							var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
							let that = this;
							console.log(res.content)						
							for(var i = 0; i < res.content.length; i++){								
								if(isAndroid){
									res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_m_w'; 
								}else if(isiOS){
									res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_m'; 
								}								
								that.houseList.push(res.content[i]);	
							}					
						},
						error:( res)=>{
							alert(res)							
						}
					})
				});
			},
	    }
	}
</script>
<style scoped>
.houseBjImg{width: 100%;height: 224px;border-radius: 7px;}
.close{position: absolute;top: 12px;right: 12px;width: 25px;}
.titBanner{ color: #666;font-size: .85em;line-height: 27px;text-align: left;}	
.titText{font-size: 1em;font-weight: 700;}
.titText>span{font-size: 1em;font-weight: 700;}
.cont{position: relative;margin-top: 20px;}
.houseList{position: absolute;top: 63%;width: 100%;height:40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.houseTit{margin:0;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-top:5px;color: #666;font-size: .75em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{margin-top: 2px;height:14px;color: #666;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 68%;left: 77%;}
.price>span{font-size: 1.35em;}
.shareBut{width: 30%;margin: 15px 35%;}
</style>
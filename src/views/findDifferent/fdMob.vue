<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close"/>
		<img src="https://opres.gongyujia.com/H5/different/servicesStu20.jpg" class="npText topBanner"/>
		<div class="houseBanner">
			<p class="titBanner">毕业是一场人生的洗礼，人生因为毕业而更加完整。</p>
			<p class="titBanner">每年的毕业季过后，大批量的莘莘学子蜕变成为白领，书包变成了电脑包、校园变成了写字楼，不论是同一个城市还是漂流到了异乡，在领到人生第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？</p>
			<img src="https://opres.gongyujia.com/H5/different/servicesStu02.jpg" class="titHead"/>
			<p class="titText">人生第一次租公寓,</br><span>不能贵，但要精致！</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24572038">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24583864">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24587716">
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
			<img src="https://opres.gongyujia.com/H5/different/servicesStu07.jpg" class="titHead topLeng"/>
			<p class="titText">交通便利才能提升幸福感,</br>
			<span>靠近地铁的公寓会让你工作生活两不误</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24583882">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24575818">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24589696">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24587680">
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
			<img src="https://opres.gongyujia.com/H5/different/servicesStu12.jpg" class="titHead"/>
			<p class="titText">让生活自由呼吸,</br>
			<span> 押一付一,告别月光族。</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24591892">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24571012">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24583108">
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
			<img src="https://opres.gongyujia.com/H5/different/servicesStu16.jpg" class="titHead"/>
			<p class="titText">押金减免,</br>
			<span>又给自己多了一个剁手理由</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24584278">
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
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24569932">
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
			title:"学生党晋升小白领",			
			data:{},
			showPrises:true,
			houseList:[],
			shareInfo:{
			   "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/fdMob",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"在领到第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？",      //副标题
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
	},
    mounted() {      
        let that = this;
        that.init();
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/fdMob",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"在领到第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？",      //副标题
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
				let data = {
					  "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/fdMob",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"在领到第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？",      //副标题
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
			let url = "Specials/house_list_find",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":""};																		
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
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 20px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 20px;}
.titText{font-size: 1em;font-weight: 700;}
.titText>span{font-size: 1em;font-weight: 700;}
.cont{position: relative;margin-top: 20px;}
.houseList{position: absolute;top: 63%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
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
   
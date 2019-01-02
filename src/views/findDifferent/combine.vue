<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close" v-if="topBanner"/>
		<img src="https://opres.gongyujia.com/H5/combine/combine01.jpg" class="npText topBanner" v-if="topBanner"/>
		<div class="houseBanner">
			<p class="titBanner">结束了一天的忙碌，拖着疲倦的身体回到自己的小窝，一扇房门，内外是两个世界。</p>
			<p class="titBanner">门外是高楼林立华灯璀璨的现代都市，车水马龙霓虹闪烁，路上行人提着包包步履匆匆，为生存奔波于城市各个角落。</p>
			<p class="titBanner">门内是轻松舒适的温馨小窝，软软的大床上歪着几只玩偶，书桌边摆着一盆生机盎然的绿萝，暖暖的灯光照亮屋内，喵喵叫的猫咪亲昵地迎上来蹭裤脚。</p>
			
			<img src="https://opres.gongyujia.com/H5/combine/combine02.png" class="titTops"/>
			<p class="titText">打造美好租住生活</p>		
			<p class="tit">生活，不仅是一茶一饭一张床，也是流动在房间里的爵士乐，是冬日午后温暖的阳光。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 41921000">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 41980660">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 43242450">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>				
			</ul>    			
			
			<p class="tit">美好生活，优雅品味，在于桌上的鲜花，墙上的挂画，也在于每一个精致的小细节。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 42419785">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 43105250">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 42565450">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>				
			</ul>
			
			<p class="tit">约三五好友，烧烤火锅小龙虾，喝酒开黑狼人杀。美好生活，和美好的人创造美好故事。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 44189700">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 42419785">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseLists" :key="key" v-if="im.house_oid == 43127330">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>
						<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.address}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>				
			</ul>			
		</div>
		<div class="footerEjA">
			<div class="ftTit">
				<h1>好房推荐</h1>
				<span>周边租房推荐</span>
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">
						<swiper-slide v-for="(im,key) in houseList" :key="key">
							<a @click="openHouseDetail" :id="im.house_oid" class="imgPost" :align="im.isautotrophy">
								<img v-lazy="im.cover_pic" class="housesImg"  :id="im.house_oid" :align="im.isautotrophy"/>
								<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOvers" v-if='im.status == 1'/>
								<div class="housesList"  :id="im.house_oid" :align="im.isautotrophy"></div>
								<span class="prices"  id="im.house_oid" :align="im.isautotrophy"><span>¥{{im.price}}/</span>月</span>	
								<div class="housesCont" @click="openHouseDetail"  :id="im.house_oid" :align="im.isautotrophy">		
									<p class="houseTit"  :id="im.house_oid" :align="im.isautotrophy">{{im.title}}</p>	
									<p class="contTit"  :id="im.house_oid" :align="im.isautotrophy">{{im.subtitleNew}}</p>
									<div class="houseGPS"  :id="im.house_oid" :align="im.isautotrophy">			
										<img src="https://opres.gongyujia.com/H5/GPS.png"/>
										<span>{{im.address}}</span>		
									</div>							
								</div>								
							</a>							
						</swiper-slide>							
					</swiper>
					<div class="swiper-pagination"></div>
				</div>				
			</div>
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut" v-if="showPrises"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"设计范",			
			data:{},
			topBanner:true,
			showPrises:true,
			houseList:[],
			houseLists:[],
			type:"",	
			shareInfo:{
			   "share_title":"租房生活,也可以很美好",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/combine",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"轻轻松松，打造专属你的美好生活。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			},
			houseSwiperOption: {
				direction:'horizontal',
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: false,           
	            slidesPerView : 1.25,
				spaceBetween: 20,
				speed:300,//滑动速度
	            autoplayDisableOnInteraction : false,		           				
            },
            functions:{
			   "login_event":"login_event",        
			   "logout_event":"logout_event" ,
			   "page_pause_event":"page_pause_event",
			   "page_resume_event":"page_resume_event",
			   "page_destroy_event":"page_destroy_event",
			   "share_result_event":"share_result_event"        
			},
		}
	},	
//	created(){
//		let that = this;
//		//声明暴露给Android调用的方法
//		window["share_result_event"] = that.share_result_event;
//		var u = navigator.userAgent, app = navigator.appVersion; 
//		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
//		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
//		if(isAndroid){
//			console.log(that.functions)		
//			let functions =  JSON.stringify(that.functions);	
//			android.setCallback(functions);		
//		}else if(isiOS){
//			console.log(that.functions)				
//			that.setupWebViewJavascriptBridge(function(bridge) {
//				bridge.registerHandler('share_result_event', function(data, responseCallback) {					
//					that.share_result_event(data);				
//					responseCallback(data)
//				});
//				bridge.callHandler('setCallback', that.functions, function responseCallback(responseData) {})			
//	        })
//		}
//	},
    beforeMount(){	
    	let that = this;
    	document.title = this.title;
		var ua = window.navigator.userAgent.toLowerCase();
		var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
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
//		else if(isAndroid){
//			this.topBanner = false;
//		}else if(isiOS){
//			this.topBanner = false;
//		}
		var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		if(isiOS){	
			$('.shareBut').css('margin','15px 35% 450px')
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        //bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				that.setclick(bridge);							
	       	})
		}
	},
    mounted() {      
        let that = this;
        that.init();
        that.initBot();
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"租房生活,也可以很美好",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/combine",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"轻轻松松，打造专属你的美好生活。",   //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    	data =  JSON.stringify(data);
		if(isAndroid){			
			//android.showShareButton(data);
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
					   "share_title":"租房生活,也可以很美好",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/combine",          //链接          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"轻轻松松，打造专属你的美好生活。",   //副标题
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
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {
		        		that.share_result_event(rest)
		        	})
			    }
			}
        },  
		//打开房源详情页
	    openHouseDetail(e){
	    	console.log(e)
	    	var houseId = e.target.id;
	    	var price_count = e.target.align;    
	    	console.log(price_count)
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 				
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
				if(price_count == "-1"){
					wx.miniProgram.navigateTo({url: '/pages/list/listDetail/listDetail?id='+ houseId});
				}else{
					wx.miniProgram.navigateTo({url: '/pages/list/listDetailOthers/listDetailOthers?id='+ houseId});	
				}								    				  	
			}else{
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
			let url = "Specials/getHouseList",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":"1"};
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						console.log(res.content)						
						for(var i = 0; i < res.content.length; i++){								
							if(isAndroid){
								res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_m_w'; 
							}else if(isiOS){
								res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_m'; 
							}								
							that.houseLists.push(res.content[i]);	
						}					
					},
					error:( res)=>{
						alert(res)							
					}
				})
			});
		},
		initBot(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
			let url = "Specials/getHouseList",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":"2"};
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
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
		login_event:function(){
			alert(1);
		},
		logout_event:function(){
			alert(2);
		},
		page_pause_event:function(){
			alert(3);
		},
		page_resume_event:function(){
			alert(4);
		},
		page_destroy_event:function(){
			alert(5);
		},
		share_result_event:function(var1){
			alert(JSON.stringify(var1));
		},
    }
}
</script>
<style scoped>
swiper-slide{margin-right: 0;}	
.housesImg{width: 100%;height: 185px;border-radius: 7px;position: relative; margin-top: 10px;}
.close{position: absolute;top: 16px;right: 12px;width: 25px;}
.titTop{margin-top: 20px;width: 85px;}
.titTops{margin-top: 20px;width: 70px;}
.timD{color: #666;font-size: .85em;text-align: left;}
.timD>span{color: #333;font-size: .95em;font-weight: 600;margin-left: 5px;}
.text{color: #333;font-size: .85em;margin: 15px 0 15px 0;line-height: 20px;text-align: left;font-weight: 600;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.tit{ color: #666;font-size: .85em;margin: 30px 0 15px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 10px;width: 100%;border-radius: 7px;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 42%;right: 4%}
.price>span{font-size: 1.25em;}
.shareBut{width: 30%;margin: 15px 35%;}

.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 15px;margin-bottom: 10px;}

.imgPost{margin-left: 3.7%;position: relative;}


.houseBjImg{width: 100%;height: 224px;border-radius: 7px;}
.close{position: absolute;top: 12px;right: 12px;width: 25px;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 20px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 20px;}
.titText{font-size: 1em;font-weight: 700;}
.titText>span{font-size: 1em;font-weight: 700;}
.cont{position: relative;margin-top: 20px;}
.houseList{position: absolute;top: 63%;left:0;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.housesList{position: absolute;bottom: 21%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.housesCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;margin-left: 4.7%;}

.houseTit{margin:0;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-top:5px;color: #666;font-size: .75em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{margin-top: 2px;height:14px;color: #666;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 68%;left: 73%;}
.price>span{font-size: 1.35em;}

.prices{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 52%;left: 73%;}
.prices>span{font-size: 1.35em;}

.soldOvers{width: 50px;position: absolute; bottom: 178px;left: 0;}
.soldOver{width: 50px;position: absolute;top: -10px;left: 0;}
.shareBut{width: 30%;margin: 15px 35%;}
</style>
   
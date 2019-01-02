<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>		
		<img src="https://opres.gongyujia.com/H5/goodHouse/goodhouse01.jpg"/>				
		
		<div class="ctHouse">
			<p class="tit">超大窗户，采光极好，可以躺在床上懒洋洋地晒太阳。现代风和北欧风糅合的恰到好处，既精致又利落，还带着几分漫不经心。位于大悦城商圈，靠近四川北路，是理想的居住地。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24583234">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>
				<p class="tit">简约的家具，淡雅的颜色，清浅不失暖意的灯光。这间位于瑞金一路的老洋房有着一种静美的气质，使身处其中的人感到心神安宁，十分放松。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 43560895">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<p class="tit">有着复古的海派范儿，装饰华丽优雅，色彩浓烈有腔调，一桌一椅一床一凳仿佛都在讲述过去的故事。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24587122">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>	
				<p class="tit">位于静安寺附近，地理位置相当便利。墙面地面大面积使用暖色，各种区域性照明保证了室内光线的充足，即使在阴雨绵绵的日子，屋内也依旧温暖明亮。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27639364">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<p class="tit">位于徐汇商圈，周边商业繁华。房间小巧精致，室内布局合理。鹅黄色沙发为原本柔和的室内色彩增加了几分明快。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 41920990">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>					
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				
				<p class="tit">占了足一面墙的超大落地窗，白天尽享明媚阳光，夜晚俯瞰璀璨灯火。宜家风家具清新十足，点缀其间的黄铜小件别有一番风雅情致。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24588634">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>	
				<p class="tit">棕色灰色与白色巧妙混搭，配上不同风格的家具，低调而优雅。室外小阳台增加了房间的通风与采光，可以坐在外面吹着小风喝咖啡，享受独居生活的惬意。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 42040965">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<p class="tit">靠近中兴路，比邻多个商圈，生活十分便利。房间功能区划分明确，橘色系与白色交织出一个明丽柔美的居住空间。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 42012905">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<p class="tit">大量原木元素的运用，彰显着满满生命力。玻璃推拉门为房间带来了更充沛的阳光，随处可见的白纱垂幔既分隔了空间，又显得十分轻盈。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 41458500">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>							
					</a>					
				</li>
				<p class="tit">蓝色地毯黄色抱枕，看起来活泼又轻快。清新简约的宜家风家具，让整个空间更加轻盈。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27628618">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
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
		<img :src="Img"  class="footerImg"/>	
		<img src="https://opres.gongyujia.com/H5/goodHouse/goodhouse02.png" class="shareBut" id="shareBut" v-if="showPrises"/>	
		<img :src="footerImg"  class="footerImg"/>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			showPrises:true,
			title:"沪上秋季好房大赏",			
			data:{},
			showPrise:false,
			bjList:[],
			houseList:[],
			houseNub:"",
			Img:'https://opres.gongyujia.com/H5/goodHouse/goodhouse04.jpg',
			footerImg:'https://opres.gongyujia.com/H5/goodHouse/goodhouse03.png',
			certift:'',			
			successLoadImg:"https://opres.gongyujia.com/H5/default.png",
			shareInfo:{
			   "share_title":"沪上秋季好房大赏",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/goodHouse",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":" 好看又好住，才是好房子。本期秋季好房，带你领略秋韵风情。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/goodHouse&newsTitle=沪上秋季好房大赏&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
		}
	},	
	beforeMount(){	
    	document.title = this.title;   
	 	let that = this;	
	   	var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境			
	        this.showPrises = false;	      
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrises = false;			
		}else{
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data = {
			   "share_title":"沪上秋季好房大赏",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/goodHouseWB",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":" 好看又好住，才是好房子。本期秋季好房，带你领略秋韵风情。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/goodHouse&newsTitle=沪上秋季好房大赏&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
			};
			data = JSON.stringify(data);
			if(isAndroid){
				android.showShareButton(data);			
			}else if(isiOS){	
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})												
		       	})
			}
		}
	},
    mounted() {    	
    	this.init();  	

        let that = this;
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    }; 
	   	var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境			
	        this.showPrises = false;	      
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrises = false;			
		}else{
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data = {
			   "share_title":"沪上秋季好房大赏",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/goodHouseWB",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":" 好看又好住，才是好房子。本期秋季好房，带你领略秋韵风情。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/goodHouse&newsTitle=沪上秋季好房大赏&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
			};
			data = JSON.stringify(data);
			if(isAndroid){
				this.showPrise = false;				
				that.setclick(null);
			}else if(isiOS){	
				this.showPrise = false;
				that.setupWebViewJavascriptBridge(function(bridge) {														      
					that.setclick(bridge);							
		       	})
			}
		}
    },
    methods: {		
		//打开房源详情页
	    openHouseDetail(e){
	    	var houseId = e.target.id;
	    	var price_count = e.target.align;    
	    	console.log(price_count)
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 				
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
				if(price_count == 1){
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
					   "share_title":"沪上秋季好房大赏",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/goodHouseWB",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":" 好看又好住，才是好房子。本期秋季好房，带你领略秋韵风情。",      //副标题
					   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
					   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
					   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/goodHouse&newsTitle=沪上秋季好房大赏&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
			let url = "Specials/getHouseList",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":3};																		
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
		}		
    },
}
</script>
<style lang='scss' scoped>
.bcy{width: 100%;background-color: #fdf3ec;/*background: url('~src/assets/img/doubDiscounts/doubDiscounts03.jpg') no-repeat scroll transparent;background-size: 100% 100%;*/}

.ctHouse{width: 92.6%;margin-left: 3.7%;padding-bottom: 20px;}
.titTop{margin-top: 20px;width: 85px;}
.titTops{margin-top: 20px;width: 70px;}
.timD{color: #666;font-size: .85em;text-align: left;}
.timD>span{color: #333;font-size: .95em;font-weight: 600;margin-left: 5px;}
.text{color: #333;font-size: .85em;margin: 15px 0 15px 0;line-height: 20px;text-align: left;font-weight: 600;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.tit{ color: #445d8b;font-size: .85em;margin: 40px 0 15px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 10px;width: 100%;border-radius: 7px;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 42%;right: 4%}
.price>span{font-size: 1.25em;}


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
.houseList{position: absolute;top: 63%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.housesList{position: absolute;bottom: 21%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;margin-left: 3.7%;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.housesCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;margin-left: 4.7%;}

.houseTit{margin:0;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-top:5px;color: #666;font-size: .75em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{margin-top: 2px;height:14px;color: #666;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 68%;left: 75%;}
.price>span{font-size: 1.35em;}

.prices{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 52%;left: 75%;}
.prices>span{font-size: 1.35em;}

.soldOvers{width: 50px;position: absolute; bottom: 178px;left: 0;}
.soldOver{width: 50px;position: absolute;top: -10px;left: 0;}
.shareBut{width: 30%;margin: 15px 35% -8%;}
</style>
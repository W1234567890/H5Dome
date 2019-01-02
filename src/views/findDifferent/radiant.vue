<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>		
		<img src="https://opres.gongyujia.com/H5/radiant/radiant01.jpg"/>				
		
		<div class="ctHouse">
			<p class="tit">据说，南方人和北方人之间最大的误解可能是——南方人以为北方人抗冻，北方人以为南方冬天很暖和。如果说北方冬天的寒冷是物理攻击，南方冬天的湿冷就是魔法攻击。</p>
			<p class="tit">阴冷潮湿的南方冬天，需要地暖来拯救。</p>			
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27601204">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">地暖采用低温辐射的原理，先加热水泥层，再通过热辐射加热室内空气。铺设了地暖的房间中，地板温度可以到达35度左右，室内温度可以达到18到25度，整个房间给人一种头凉脚暖的舒适感觉。这也恰好符合了人体中医学及现代医学的理念。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24573604">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">中医《脉法》有言："圣人寒头暖足，治病者取有余而补不足也。"</p>
				<p class="tit">从中医的角度来说，"头为诸阳之会",人体六条阳经全都上升至头部,胸上至头的阳气最为充足,也较为耐寒。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27677272">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">而"阴脉者集于足下而聚于足心"，因此"寒易从脚起"，且脚冷冷全身，足部若不注意保暖，寒邪易从足部入侵，进而影响到身体的其他部位。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 46351730">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">而从现代医学的角度来看，头离心脏比较近，身体能量的供给比较充足。脚离心脏较远，身体能量和养分不能及时输送，所以脚暖能加速全身血液循环，以保证身体养分及时供给下肢。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27588190">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>					
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				
				<p class="tit">与传统取暖方式相比，地暖拥有有更多的优势：静音、加热均匀、使用寿命长、更有利于人体健康，既不会烘的人口干舌燥，也不会热的人脸颊通红。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 48324565">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">此外，地暖会让室内温度均衡适中，热空气自然上升，不易造成污浊空气对流，室内空气更洁净。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27758236">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">地暖的地面层及混凝土层有强大的蓄热能力，在间隙供暖的条件下，室内温度变化缓慢，感觉很自然，不会出现因升温过快而有的不舒适感。</p>
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 45145055">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid" :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>{{im.price}}</span>/月</span>	
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
				<p class="tit">雨雪交加的冬季，铺设地暖的屋子仍旧温暖如春，舒适宜人。尽管地暖也有着诸如造价较高等缺点，但瑕不掩瑜，地暖已逐渐成为人们追求生活品质的上佳之选。</p>
				
			</ul>			
		</div>		
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
		
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			showPrises:true,
			title:'漫漫寒冬里的"超级英雄"',			
			data:{},
			showPrise:false,
			bjList:[],
			houseList:[],
			houseNub:"",
			Img:'https://opres.gongyujia.com/H5/goodHouse/goodhouse04.jpg',
			
			certift:'',			
			successLoadImg:"https://opres.gongyujia.com/H5/default.png",
			shareInfo:{
			   "share_title":'漫漫寒冬里的"超级英雄"',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/radiant",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"阴冷潮湿的南方冬天，我这条命是地暖给的。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/radiant&newsTitle=漫漫寒冬里的"+"超级英雄"+"&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
			   "share_title":'漫漫寒冬里的"超级英雄"',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/radiant",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"阴冷潮湿的南方冬天，我这条命是地暖给的。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/radiant&newsTitle=漫漫寒冬里的"+"超级英雄"+"&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
			   "share_title":'漫漫寒冬里的"超级英雄"',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/radiant",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"阴冷潮湿的南方冬天，我这条命是地暖给的。",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/radiant&newsTitle=漫漫寒冬里的"+"超级英雄"+"&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
					   "share_title":'漫漫寒冬里的"超级英雄"',        //分享标题
					   "share_url":"https://special.gongyujia.com/#/radiant",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"阴冷潮湿的南方冬天，我这条命是地暖给的。",      //副标题
					   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
					   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
					   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/radiant&newsTitle=漫漫寒冬里的"+"超级英雄"+"&posterImg=https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png", //分享小程序使用的页面路径
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
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":5};																		
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
.bcy{width: 100%;background-color: #fff;/*background: url('~src/assets/img/doubDiscounts/doubDiscounts03.jpg') no-repeat scroll transparent;background-size: 100% 100%;*/}

.ctHouse{width: 92.6%;margin-left: 3.7%;padding-bottom: 20px;}
.titTop{margin-top: 20px;width: 85px;}
.titTops{margin-top: 20px;width: 70px;}
.timD{color: #666;font-size: .85em;text-align: left;}
.timD>span{color: #333;font-size: .95em;font-weight: 600;margin-left: 5px;}
.text{color: #333;font-size: .85em;margin: 15px 0 15px 0;line-height: 20px;text-align: left;font-weight: 600;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.tit{ color: #838383;font-size: .85em;margin: 40px 0 15px 0;line-height: 27px;text-align: left;}	
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

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 68%;left: 68%;}
.price>span{font-size: 1.35em;}

.prices{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 52%;left: 75%;}
.prices>span{font-size: 1.35em;}

.soldOvers{width: 50px;position: absolute; bottom: 178px;left: 0;}
.soldOver{width: 50px;position: absolute;top: -10px;left: 0;}
.shareBut{width: 30%;margin: 15px 35% 45px;}
</style>
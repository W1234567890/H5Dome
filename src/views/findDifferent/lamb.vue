<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close" v-if="topBanner"/>
		<img src="https://opres.gongyujia.com/H5/lamb/lamb01.jpg" class="npText topBanner" v-if="topBanner"/>
		<div class="houseBanner">
			<p class="titBanner">"陇馔有熊腊，秦烹唯羊羹。"</p>
			<p class="titBanner">羊蝎子锅，肉嫩，汤鲜，髓如脂。</p>
			<p class="titBanner">寒冷的天气里，没有什么比一锅热腾腾的羊蝎子更来得温暖。</p>
			<p class="titBanner">吃羊蝎子，或二人同行，或三五好友小聚，吃肉喝汤，吮骨吸髓，弃筷用手，大快朵颐，热腾腾的锅子里羊汤咕嘟，雾蒙蒙的白汽中肉香四溢，边吃边聊，轻松说笑，好不惬意。</p>
			<img v-lazy="lamb02" class="titHead"/>				
			<p class="titBanner">本期为大家推荐北京及上海两地的几家人气羊蝎子火锅店，排名不分先后。</p>
			
			<img src="https://opres.gongyujia.com/H5/lamb/lamb02.jpg" class="titTop"/>
			<p class="titText">老诚一锅·双榆树店</p>					
			<p class="timD">推荐菜:<span>有机羊蝎子、羊蝎羊尾锅、面片、冻豆腐、招牌葱油饼、洛神酸梅汤</span></p>
			<img v-lazy="lamb03" class="titHead"/>				
			<p class="timD">老饕点评:<span>不用多说，我认为老诚一锅是北京羊蝎子第一名。现在菜单改了，口味没有变。羊蝎子大锅一锅3斤半，羊肉软嫩，没有膻气，汤汁香辣，非常入味。餐前送水果和热茶，葱花饼特别好吃。</span></p>
			<p class="timD">地址:<span>双榆树北里甲18号</span></p>
			<img src="https://opres.gongyujia.com/H5/lamb/lamb03.jpg" class="titTop"/>
			<p class="titText">祥域斋涮羊肉</p>					
			<p class="timD">推荐菜:<span>手切鲜羊肉、铜锅羊蝎子、爆肚、炸烧饼、炸松肉、炸咯吱、麻酱小料</span></p>
			<img v-lazy="lamb04" class="titHead"/>				
			<p class="timD">老饕点评:<span>家门口的涮肉小馆，常年人气爆棚。装修很普通，但味道是正宗的北京味儿。铜锅白汤羊蝎子，肉质弹嫩不塞牙。汤头提升了羊肉的鲜，又不会遮盖原味，常来的大家伙儿就好这口鲜香。</span></p>
			<p class="timD">地址:<span>旧鼓楼大街双寺胡同1号院</span></p>
			
			<img src="https://opres.gongyujia.com/H5/lamb/lamb04.jpg" class="titTop"/>
			<p class="titText">芦月轩羊蝎子·管庄店</p>					
			<p class="timD">推荐菜:<span>普通羊蝎子、炸腐竹、臭豆腐的炸馒头、宽粉、大拌菜、自制现磨豆腐</span></p>
			<img v-lazy="lamb05" class="titHead"/>				
			<p class="timD">老饕点评:<span>要是没记错，这家开了得有十年。自打在他家吃过后，再瞧不上别家羊蝎子。装修算得上讲究，店面很大。但饭点来依旧要排队。精品羊蝎子是一直以来的经典，肉食者的不二选择。</span></p>
			<p class="timD">地址:<span>管庄东里中国建材研究总院院内</span></p>			
			<img src="https://opres.gongyujia.com/H5/lamb/lamb05.jpg" class="titTop"/>
			<p class="titText">颐品居热气羊肉馆·乌鲁木齐中路店</p>					
			<p class="timD">推荐菜:<span>红烧羊蝎子、热气羊肉、红烧羊肉、豆腐衣、冻豆腐、炸豆皮、花生腐乳酱</span></p>
			<img v-lazy="lamb06" class="titHead"/>				
			<p class="timD">老饕点评:<span>近几年吃羊肉最多的地方，羊蝎子口味比起北京略有不同，花椒味没那么重，有一点点的甜，蛮适合上海人的口味。炭火铜锅够厚重，秘制小料够滋味。羊肉随叫随切，口感很嫩很嗲。</span></p>
			<p class="timD">地址:<span>乌鲁木齐中路352号。</span></p>
			
			<img src="https://opres.gongyujia.com/H5/lamb/lamb06.jpg" class="bannerTit"/>
			<p class="titText">褚记好骨气养生骨头锅·延长店</p>					
			<p class="timD">推荐菜:<span>养生骨头锅、羊蝎子、厚百叶、十三香小龙虾、撒尿牛娃、酸梅汁</span></p>
			<img v-lazy="lamb07" class="titHead"/>				
			<p class="timD">老饕点评:<span>上菜很快，羊蝎子锅分量十足，性价比很高。羊蝎子味道鲜美，锅里的配菜也十分入味。天冷的时候来一口羊肉，真的美滋滋。他家的养生骨头锅也很不错，值得一试。</span></p>
			<p class="timD">地址:<span>延长中路581号启光艾加大厦</span></p>
			<img src="https://opres.gongyujia.com/H5/lamb/lamb07.jpg" class="titTop"/>
			<p class="titText">胡氏羊蝎子热气羊肉·蓝村路店</p>					
			<p class="timD">推荐菜:<span>羊蝎子、生蚝、十三香龙虾、咸蛋黄龙虾、蒜蓉茄子、清蒸大闸蟹、椒盐富贵虾</span></p>
			<img v-lazy="lamb08" class="titHead"/>				
			<p class="timD">老饕点评:<span>冬令进补，是吃羊肉的好时节。胡氏羊蝎子火锅有口皆碑，门口一排排北方涮火锅的炉子霸气十足。羊蝎子肉很多，啃着很爽。锅底味道浓郁，红汤比清汤好吃，能尝到各种香料的味道。适合和家人朋友一起来吃，性价比高。</span></p>
			<p class="timD">地址:<span>蓝村路516号。</span></p>
			<p class="titBanner">"围炉聚炊欢呼处，百味消融小釜中。"</p>
			<p class="titBanner">一锅热辣鲜香的羊蝎子，是寒夜里热乎的念想，也是人世间热闹的生活。</p>
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
							<a @click="openHouseDetail" :id="im.house_id" class="imgPost">
								<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_id"/>
								<div class="houseList"  :id="im.house_id"></div>
								<span class="price"  id="im.house_id"><span>{{im.price}}</span></span>	
								<div class="houseCont" @click="openHouseDetail"  :id="im.house_id">		
									<p class="houseTit"  :id="im.house_id">{{im.title}}</p>	
									<p class="contTit"  :id="im.house_id">{{im.subtitle}}</p>
									<div class="houseGPS"  :id="im.house_id">			
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
			title:"就爱这一锅人间烟火味儿",			
			data:{},
			topBanner:true,
			showPrises:true,
			houseList:[],
			lamb02:'https://opres.gongyujia.com/H5/lamb/lamb08.gif',
			lamb03:'https://opres.gongyujia.com/H5/lamb/lamb09.gif',
			lamb04:'https://opres.gongyujia.com/H5/lamb/lamb10.gif',
			lamb05:'https://opres.gongyujia.com/H5/lamb/lamb11.gif',
			lamb06:'https://opres.gongyujia.com/H5/lamb/lamb12.gif',
			lamb07:"https://opres.gongyujia.com/H5/lamb/lamb13.gif",
			lamb08:'https://opres.gongyujia.com/H5/lamb/lamb14.gif',		
			shareInfo:{
			   "share_title":"一锅温暖  治愈你的心",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/lamb",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"一锅热腾腾的羊蝎子，给你温暖的慰藉，给你饱足的幸福。",      //副标题
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
		
		this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
    	}
    	
  	
	},
    mounted() {   
        let that = this;
        that.init();
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"一锅温暖  治愈你的心",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/lamb",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"一锅热腾腾的羊蝎子，给你温暖的慰藉，给你饱足的幸福。",   //副标题
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
					   "share_title":"一锅温暖  治愈你的心",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/lamb",          //链接          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"一锅热腾腾的羊蝎子，给你温暖的慰藉，给你饱足的幸福。",   //副标题
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
			let url = "house_list",
			    	data = { "filter_type":"normal","district_id":"","page_size":12, "page":1,"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":""};																																		
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						console.log(res.content.house_list)						
						for(var i = 0; i < res.content.house_list.length; i++){								
							if(isAndroid){
								res.content.house_list[i].cover_pic = "https://res.gongyujia.com/"+res.content.house_list[i].cover_pic +'@!form_m_w'; 
							}else if(isiOS){
								res.content.house_list[i].cover_pic = "https://res.gongyujia.com/"+res.content.house_list[i].cover_pic +'@!form_m'; 
							}								
							that.houseList.push(res.content.house_list[i]);	
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
swiper-slide{margin-right: 0;}	
.houseBjImg{width: 100%;height: 185px;border-radius: 7px;position: relative;}
.close{position: absolute;top: 16px;right: 12px;width: 25px;}
.titTop{margin-top: 20px;width: 85px;}
.bannerTit{margin-top: 20px;width: 120px;}
.timD{color: #666;font-size: .85em;text-align: left; margin: 15px 0;}
.timD>span{color: #333;font-size: 1em;font-weight: 600;line-height: 25px;margin-left: 5px;}
.text{color: #333;font-size: .85em;margin: 15px 0 15px 0;line-height: 20px;text-align: left;font-weight: 600;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 10px;width: 100%;border-radius: 7px;}
.titText{font-size: 1em;font-weight: 700;}
.titText>span{font-size: 1em;font-weight: 700;}
.cont{position: relative;margin-top: 20px;}
.houseList{position: absolute;bottom: 23%;left: 0%;width: 100%;height:40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.houseTit{margin: 0 0 0 3.7%;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-left: 3.7%;margin-top:5px;color: #666;font-size: .75em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{margin-left: 3.7%;text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{margin-top: 2px;height:14px;color: #666;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;bottom: 42%;right: 4%}
.price>span{font-size: 1.25em;}
.shareBut{width: 30%;margin: 15px 35% 45px;}

.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 15px;margin-bottom: 10px;}

.imgPost{margin-left: 3.7%;position: relative;}
</style>
   
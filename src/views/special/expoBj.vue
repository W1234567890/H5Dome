<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close"/>
		<img src="https://opres.gongyujia.com/H5/expo/expo01.jpg" class="npText topBanner"/>
		<div class="houseBanner">
			<p class="titBanner">首届中国国际进口博览会将有约100多个国家和地区的企业参展，目前已有2800多家企业签约确定参展，其中超过160家世界500强和行业龙头将会参加展会，企业商业展区面积将达到27万平方米。</p>
			<img v-lazy="expo02" class="titHead"/>
			<p class="titBanner">从高空中俯瞰国家会展中心，形态像一片象征幸运的“四叶草”</p>
			<p class="timD">时间:<span>2018年11月5日-10日</span></p>
			<p class="timD">地点:<span>上海国家会展中心</span></p>
			<p class="text">博览会一共分为国家展、企业展和虹桥国际经贸论坛三大部分。</p>
			<img src="https://opres.gongyujia.com/H5/expo/expo03.jpg" class="titTop"/>
			<p class="titText">国家贸易投资综合展</p>
			<img v-lazy="expo03" class="titHead"/>
			<p class="titBanner">国家贸易投资综合展也称“国家展”，可以被看作一个小型的“世博会”。会展总面积约3万平方米，已经有80个国家和地区确认参展。展会邀请相关国家展示贸易投资领域的有关情况，旨在平等、开放、合作展示各国发展成就。包括货物贸易、服务贸易、产业状况、投资旅游以及各国有特色的产品。需要注意的是，现场只展示不成交。</p>
			<img src="https://opres.gongyujia.com/H5/expo/expo05.jpg" class="titTop"/>
			<p class="titText">企业商业展</p>
			<p class="titBanner">相当于进口型的“广交会”，是中国积极扩大进口的重要平台和载体。企业展一共分为七大展区，其中包括消费电子及家电、服装服饰及日用消费品、汽车、智能及高端装备、食品及农产品、医疗器械及医药保健。参展企业既有高精尖科技的龙头老大，也有满足老百姓消费升级需求的实用厂商，还有许多家企业战士全球首发产品或者最新的研发成果。</p>
			<img v-lazy="expo04" class="titHead"/>
			<p class="titBanner">上述6个展区展出的都是“有形”的实物展品，而服务贸易展区展出的则主要是新兴技术、服务外包、文化教育、创意设计、旅游服务、物流服务和综合服务等七大类“无形展品”。该展区内共将汇集90个国家和地区的450余家国外服务贸易领军企业参展，其中世界500强企业16家，整个展区面积3万平方米。虽然看不见、摸不着，但其实这些“无形展品”也始终贯穿于我们的生活中。</p>
			<p class="titBanner">比如，想知道我们买的进口红酒、食品到底靠不靠谱，就必须得靠检验检疫领域用检测数据“说话”，而该领域内最前沿研究成果就将在进口博览会上进行展示，如何将“无形”化为“可视”，让非专业观众也能轻松“get”，十分值得期待。</p>
			<img src="https://opres.gongyujia.com/H5/expo/expo07.jpg" class="titTop"/>
			<p class="titText">虹桥国际贸易论坛</p>
			<img v-lazy="expo05" class="titHead"/>
			<p class="titBanner">国家会展中心（上海）商业广场引进了一波特色餐饮店，展会期间国家会展中心内餐饮店铺将达到100家。</p>
			<img v-lazy="expo06" class="titHead"/>
			<img v-lazy="expo07" class="titHead"/>
			<img v-lazy="expo08" class="titHead"/>
			<p class="titBanner">10月20日下午4点40分，价值2亿元人民币的AW189直升机从马来西亚总共跨越近3000公里飞抵上海高东机场停机坪，该直升机将于进口博览会期间开启其“中国首秀”。</p>		
			<img src="https://opres.gongyujia.com/H5/expo/expo12.jpg" class="titTop"/>
			<p class="titText">交通提示</p>			
			<p class="titBanner">进博会期间，会展周边小汽车停车位数量有限，仅提供给部分参展商预约使用。因此，未预约到停车位的车辆不能驶入，前往国家会展中心的市民可选择地铁、公交等公共交通方式。</p>
			<p class="titBanner">请尽可能通过地铁到达2号线徐泾东站或10号线转17号线诸光路站到达国家会展中心，71路中运量部分线路会展期间也将延伸至国家会展中心。</p>
			<p class="titBanner">市民可选择71路中运量以及197路、青浦20路、710路、865路、1503路、1511路、徐泾4路、徐泾5路、青浦25路、706路、1512路、徐泾2路、173路、虹桥商务区1路、闵行28路、797路等公交线路出行。</p>
			<p class="text">其它方面提示:</p>
			<p class="titBanner">1.进口博览会期间，会有临时交通管制。同时，会展期间国家会展中心及周边车流较大，本市道路交通也面临巨大压力。请市民合理规划出行时间和线路，尽可能乘坐地铁、公交等集约公共交通出行。</p>
			<p class="titBanner">2.延安高架G50沪渝高速是进出国家会展中心的主要通道，又是联系虹桥枢纽的重要通道。进博会期间，建议前往虹桥枢纽乘坐火车或飞机的旅客，尽量提前出行，避免因道路交通拥堵而误点。</p>
			<p class="titBanner">3.地铁2号线是市中心通往国家会展中心最为便捷的轨道交通，进口博览会期间，客流压力大，站点排队时间长，建议市民可选择地铁10号线换乘17号线的方式前往国家会展中心。</p>
			
			<img src="https://opres.gongyujia.com/H5/expo/expo13.jpg" class="titTop"/>
			<p class="titText">进博会每日主题</p>
			<img v-lazy="expo09" class="titHead"/>
			<img v-lazy="expo10" class="titHead"/>
			<img v-lazy="expo11" class="titHead"/>
			<p class="titBanner">距中国国际进口博览会开幕，<br />已经进入倒计时！<br />随着各单位紧锣密鼓的会前准备，<br />进博会的神秘面纱即将揭开。<br />你是不是也非常期待这场举世瞩目的盛宴？<br />小编整理了进博会场馆附近的房源，<br />选择你的方式开始pick吧！</p>
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
								<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"/>
								<div class="houseList"  :id="im.house_oid"></div>
								<span class="price"  id="im.house_oid"><span>{{im.price}}</span></span>	
								<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid">		
									<p class="houseTit"  :id="im.house_oid">{{im.title}}</p>	
									<p class="contTit"  :id="im.house_oid">{{im.subtitle}}</p>
									<div class="houseGPS"  :id="im.house_oid">			
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
			title:"中国国际进博会参观指南",			
			data:{},
			showPrises:true,
			houseList:[],
			expo02:'https://opres.gongyujia.com/H5/expo/expo02.jpg',
			expo03:'https://opres.gongyujia.com/H5/expo/expo04.jpg',
			expo04:'https://opres.gongyujia.com/H5/expo/expo06.jpg',
			expo05:'https://opres.gongyujia.com/H5/expo/expo08.jpg',
			expo06:'https://opres.gongyujia.com/H5/expo/expo09.jpg',
			expo07:"https://opres.gongyujia.com/H5/expo/expo10.jpg",
			expo08:'https://opres.gongyujia.com/H5/expo/expo11.jpg',	
			expo09:'https://opres.gongyujia.com/H5/expo/expo14.jpg',	
			expo10:'https://opres.gongyujia.com/H5/expo/expo15.jpg',	
			expo11:'https://opres.gongyujia.com/H5/expo/expo16.jpg',	
			shareInfo:{
			   "share_title":"进博会，我们准备好了",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/expoBj",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"让我们一起整装待发……",      //副标题
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
	},
    mounted() {      
        let that = this;
        that.init();
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"进博会，我们准备好了",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/expoBj",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"让我们一起整装待发……",   //副标题
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
					   "share_title":"进博会，我们准备好了",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/expoBj",          //链接          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"让我们一起整装待发……",   //副标题
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
			    	data = { "filter_type":"normal","district_id":"","page_size":12, "page":1,"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","location":"31.196105,121.3084"};																		
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						console.log(res.content)										
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
.timD{color: #666;font-size: .85em;text-align: left;}
.timD>span{color: #333;font-size: .95em;font-weight: 600;margin-left: 5px;}
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
.shareBut{width: 30%;margin: 15px 35%;}

.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 15px;margin-bottom: 10px;}

.imgPost{margin-left: 3.7%;position: relative;}
</style>
   
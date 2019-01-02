<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises" />
		<a href="#lk"><img src="https://opres.gongyujia.com/H5/mapping/mapping01.jpg" class="npText bannerImg" v-if="topBanner"/></a>		
  		<div class="typhoonPd" id="lk"> 			
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping02.jpg" class="top"/>
  			<p>五十年代，刚从“跑马厅”改建而来的人民公园是当时首选的“情操”圣地。对普通市民开放，让此地成为“情操”圣地。环境优雅，园内小河环绕，河上有十座小桥，桥旁各式凉亭、石亭等。1953年，又在公园的南部新增辟了一个荷花池。1959年，在小河中备木制手划小艇供游人划船。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping03.jpg" />
  			<p>那时夏天有夜公园，草地上到处都是一对对谈恋爱的，而且我记得人民公园的草地晚上很黑，所以一对对恋人之间即使距离很近，也好像都是目中无人，各自谈各自的，包括亲热，那时夏天经常去，但还是不敢太放肆。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping04.jpg" />  			
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping05.jpg" class="top"/>
  			<p>公园走累了，南京西路上一条马路之隔，对面就是大光明电影院，进去吹吹空调歇歇脚，蓓蒂的爸爸妈妈就在此地因此结缘。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping06.jpg" /> 			
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping07.jpg" class="top"/>
  			<p>大光明电影院，享有“远东第一影院”的盛名，它始建于1928年，由中国商人高永清与美国人亚伯特•华纳（全世界最大的电影公司华纳兄弟的创始人）合资成立。京剧大师梅兰芳亲自为大光明电影院的开张剪彩；1933年，由著名的匈牙利建筑师邬达克设计重建。大光明电影院是亚洲第一座宽银幕电影院和亚洲第一座立体声电影院。</p>
  			<p>多少老一辈上海人，只要一提到看电影，脑海里第一反应就是南京西路大光明电影院。小时候暑假经常和同学去看电影、老早和女朋友荡马路走到此地，二毛五分一张电影票，看什么电影其实无所谓，关键是和谁一起看……</p>
  			<p>这里几乎承载了一代上海人的美好回忆。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping08.jpg" />  		
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping09.jpg" class="top"/>
  			<p>沿南京西路一路向西，直到陕西北路口。时光倒流三十年，这里没有恒隆、没有中信泰富，泰康食品商店人头攒动。揭开大口玻璃瓶酸牛奶纸盖，舌头轻轻一舔，微酸，乳香扑鼻……此时此地的上海，可以任意地挥霍时光。</p>
  			<p>路口的西南角便是张爱玲喜欢的平安电影院：“灰红暗黄二色砖砌的门面，有一种针织粗呢的温暖感。”这是小说《色 • 戒》里的原话。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping10.jpg" />
  			<p>1925年建成的平安大楼，大楼的主层为八层楼层的美式公寓，多元建筑风格，公寓为沿街周边式建筑。朝陕西北路与南京西路对称延展的两侧为二层是当时为数不多的多层带电楼公寓。标准层每层是一梯四户不过这水泥楼梯远远不及花园洋房里的雕花楼梯精致。平安大楼底层前身为“安凯第商场”，三十年代是西班牙驻沪领事馆所在。1939年美商雷电华影片公司将此地改建为平安大戏院，建国后改名为平安电影院。门面不大，只占转角的一开间。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping11.jpg" />
  			<p>今天，当年看过的电影情节忘记得一干二净，平安电影院也不知所踪，玻璃瓶装酸奶早已被塑料盒子代替，当年一起看电影的人也可能随之烟消云散。</p>
  			<p>现在的上海多了一份活力，或许少了那一点雅致，只要心中依旧留存这一份情怀就足矣。</p>
  			<img src="https://opres.gongyujia.com/H5/mapping/mapping12.jpg" />
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
							<a @click="openHouseDetail" :id="im.house_id">
								<div  class="bH" :id="im.house_id">
						   			<div class="hImg1" :id="im.house_id">						   			
						   				<img v-lazy="im.cover_pic" :id="im.house_id" :align="im.price_count" />					   			
						   			</div>
						   			<div  class="Hcont" :id="im.house_id"  :align="im.price_count">
						   				<h1 :id="im.house_id"  :align="im.price_count">{{im.title}}</h1>			   										   								   				
						   				<p class="bHM" :id="im.house_id"  :align="im.price_count">{{im.price}}</p>
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
			type:"",
			topBanner:true,
			showTitle:false,
			title:"上海映象-静安篇",
			houseList:[],			
			imgState:1,
			price_count:"",
			showPrises:false,
			lengthBanner:0,
			bj:'https://opres.gongyujia.com/H5/default.png',
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
            shareInfo:{
			   "share_title":"老上海映象-静安篇",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/mapping",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"人民公园划船，大光明电影院，平安电影院",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},		   
    beforeMount(){	
    	document.title = this.title;
    	this.weixinAndPay();
    	this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
    	}
	},
    mounted() {
    	let that = this;
        this.init();   
    },
    methods: {	   	
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
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
			let url = "house_list",
			    	data = { "filter_type":"normal","district_id":"806","page_size":30, "page":1,"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":""};																		
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
					   "share_title":"老上海映象-静安篇",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/mapping",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"人民公园划船，大光明电影院，平安电影院",      //副标题
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
    }
}
</script>
<style scoped>
swiper-slide{margin-right: 0;}	
.top{margin-top: 20px;}
.ejBanner{width: 100%;position: relative;}
.ejAllContent{width: 100%;}
.ejAllContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.ejAllTit{width: 100%;height: 1em;text-align: center;font-size: 1.75em;line-height: 1em;margin-bottom: 4px;}
.ejAllTit>img{width: .55em;height: .2em;vertical-align: middle;}
.ejAllTit>h3{display: inline-block;font-weight: 600;font-size: 1em;vertical-align: middle;color: #333;}
.ejAllContent .txtB{margin: 0 3.7%;}
.ejAllContent .txtBann{margin: 23px 3.7% 0px 3.7%;}
.ejAllContent .textBord{border-bottom: 1px solid #f9f9f9;margin-bottom: 22px;}
.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 10px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height:190px;display: block;border-top-left-radius: 5px;border-top-right-radius: 5px;}
.Hcont{width: 100%;padding-bottom: 10px;background-color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #666;font-size: 1.2em;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHM{font-size: 1em;color: #000;margin-top: 5px}
.gifImg{width: 92.6%;margin-left: 3.7%;margin-top: 15px;}
.gifImg>p{width: 48%;float: left;font-size: .9em;color: #666;line-height: 1.75em;}
.gifImg>p>span{font-size: 1.25em;font-weight: 600;color: #333;margin-right: 10px;}
.gifImg>img{width: 52%;}
.gifImgR{width: 92.6%;margin-left: 3.7%;margin-top: 20px;clear:both;}
.gifImgR>p{width: 48%;font-size: .9em;color: #666;line-height: 1.75em;float: right}
.gifImgR>p>span{font-size: 1.25em;font-weight: 600;color: #333;margin-right: 10px;}
.gifImgR>img{width: 48%;}
.gifTop>p{line-height: 1.475em;}

.bannerImg{ width: 100%;}
.typhoonPd{ margin: 0 15px;}
.typhoonPd img{ width: 100%;}
.typhoonPd p{ color: #333333; font-size: .85em; margin: 25px 0; line-height: 25px;}

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

</style>
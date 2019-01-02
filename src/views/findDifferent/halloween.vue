<template>
	<div>
		<img src="https://opres.gongyujia.com/H5/close.png" class="close" @click="close"/>
		<img src="https://opres.gongyujia.com/H5/halloween/halloween01.jpg" class="npText topBanner"/>
		<div class="houseBanner">
			<p class="titBanner">朋友已经收到了网购的COS服，准备去参加万圣节前夜的恐怖大游行。</p>
			<p class="titBanner">"服化假毛备全套，参与者太多，不拼都没人注意你。"她一边蹲着拆包裹一边这样说。</p>
			<p class="titBanner">然而，从过往经验来看，想在万圣节博出位，只靠装神弄鬼根本不行，电锯狂人绷带护士都是老掉牙的梗，裂口女一出门就能在街角酒吧门口碰见5个同胞姐妹。</p>
			<img v-lazy="halloween02" class="titHead"/>
			<p class="titBanner">与其在秋夜街头瑟瑟发抖，不如约朋友在家开万圣节轰趴。</p>
			<p class="titBanner">关于万圣节的来源说法多种多样，古凯尔特人认为寒冬在这一夜降临，中世纪的基督教会宣布这一天为圣徒之日，爱尔兰人相信这一天撒旦受到了捉弄并大开地狱之门。南瓜、十字架、骷髅、幽灵都是万圣节的代表符号，也是派对必备元素。</p>		
			<img v-lazy="halloween03" class="titHead"/>		
			<p class="titBanner">南瓜灯是每年万圣节的传统手工环节，制作很简单，前提是你有耐心一点点挖空一个南瓜。</p>
			<p class="titBanner">再把5毛钱1根的白蜡烛用牙签固定在雕好的南瓜里，就大功告成。不用担心失火——除非你把南瓜灯摆在窗帘下面。</p>		
			<img v-lazy="halloween04" class="titHead"/>	
			<p class="titBanner">	根据森政弘在1969年提出的恐怖谷理论，类人物体往往能制造悚效果，比如鬼娃恰吉。</p>
			<p class="titBanner">但关于万圣节派对，稻草人毫无疑问是最复古的选择。</p>
		    <p class="titBanner">作为南瓜灯的好搭档，稻草人总是在昏暗墙角不声不响静静站着。有人喝大了跟它打招呼，会得到一个扭曲的微笑作为回应。对它视若无睹的人可能会被人从背后拍拍肩，转过头却只看到一个僵硬静立的稻草人。</p>
			<img v-lazy="halloween05" class="titHead"/>	
			<p class="titBanner">常言道，每一个成功的派对背后都有一个伟大的餐桌，摆满美食以及餐桌花。万圣节的餐桌不欢迎红玫瑰更不欢迎康乃馨，向日葵才是万圣节餐桌花最抢眼的主角。每一个植物大战僵尸玩家都深谙向日葵的重要性。</p>
			<p class="titBanner">没有向日葵的生命一片虚无。疯狂的戴夫这样说。</p>
			<img v-lazy="halloween06" class="titHead"/>
			<p class="titBanner">对于蜘蛛和蝙蝠而言，万圣节是它们的幸运日。</p>
			<p class="titBanner">每个万圣节party都少不了这对小吉祥物。蝙蝠挂件悬在门框上，蜘蛛拉网布满天花板，所有路过者都会向它们投来充满爱意的温柔眼光。</p>
			<p class="titBanner">但如果聚会途中蜘蛛掉下来，女巫的尖叫可能会掀翻你的屋顶。</p>
			<img v-lazy="halloween07" class="titHead"/>
			<p class="titBanner">如果你已经心猿意马，决意如法炮制举办一场万圣节轰趴，切记，为你的派对准备好热腾腾的苹果派。</p>
			<img v-lazy="halloween08" class="titHead"/>
			<p class="titBanner">这一天无论是谁大驾光临，你都可以邀请他们坐下来吃点东西，喝上一杯。</p>
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut" v-if="showPrises"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"万圣节特辑",			
			data:{},
			showPrises:true,
			houseList:[],
			halloween02:'https://opres.gongyujia.com/H5/halloween/halloween02.gif',
			halloween03:'https://opres.gongyujia.com/H5/halloween/halloween03.gif',
			halloween04:'https://opres.gongyujia.com/H5/halloween/halloween04.jpg',
			halloween05:'https://opres.gongyujia.com/H5/halloween/halloween05.jpg',
			halloween06:'https://opres.gongyujia.com/H5/halloween/halloween06.jpg',
			halloween07:"https://opres.gongyujia.com/H5/halloween/halloween07.gif",
			halloween08:'https://opres.gongyujia.com/H5/halloween/halloween08.gif',	
			shareInfo:{
			   "share_title":"万圣节特辑:狠人都住闹鬼的房间",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/halloween",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"在那闹鬼的房间里，住着最狠最酷最有格调的人",      //副标题
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
			   "share_title":"万圣节特辑:狠人都住闹鬼的房间",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/halloween",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"在那闹鬼的房间里，住着最狠最酷最有格调的人",      //副标题
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
					  "share_title":"在那闹鬼的房间里，住着最狠最酷最有格调的人",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/halloween",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"在那闹鬼的房间里，住着最狠最酷最有格调的人",      //副标题
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
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 10px;width: 100%;border-radius: 7px;}
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
   
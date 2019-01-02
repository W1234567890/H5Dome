<template>
	<div class="bjs">
		<div class="bannerList">
			<img v-lazy="topBanner" />
			<div>
				<a href="javascript:;" class="yellowBtn" @click="yellowBtn">活动需知</a>
				<a href="javascript:;" class="lightYellowBtn" @click="lightYellowBtn">关于冠寓</a>				
			</div>
		</div>
		<table class="cityList" >
			<tr>
				<!--<th><a href="javascript:;"  id="021" @click="code()" class="cur">上海</a></th>
				<th><a href="javascript:;"  id="010" @click="code()">北京</a></th>-->
				<th><a href="javascript:;"  id="020" @click="code22()" class="cur">广州</a></th>
				<th><a href="javascript:;"  id="0755" @click="code22()">深圳</a></th>
				<th><a href="javascript:;"  id="028" @click="code22()">成都</a></th>
				<!--<th><a href="javascript:;"  id="0571" @click="code()">杭州</a></th>-->
			</tr>
		</table>
		<div class="wm30">
			<div class="activeList" v-if="areaCode == '021'">					
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in sh" :key="key" v-if="it.length!=1"  :class="tempArr[key]?'cur':''" id="sh">{{it}}</a>												
			</div>
			<div class="activeList" v-else-if="areaCode == '010'">
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in bj" :key="key" v-if="it.length!=1" :class="tempArr[key]?'cur':''"  id="bj">{{it}}</a>												
			</div>
			<div class="activeList" v-else-if="areaCode == '020'">					
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in gz" :key="key" v-if="it.length!=1"  :class="tempArr[key]?'cur':''" id="gz">{{it}}</a>												
			</div>
			<div class="activeList" v-else-if="areaCode == '0755'" > 
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in sz" :key="key" v-if="it.length!=1" :class="tempArr[key]?'cur':''"  id="sz">{{it}}</a>												
			</div>
			<div class="activeList cds" v-else-if="areaCode == '028'">					
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in cd" :key="key" v-if="it.length!=1"  :class="tempArr[key]?'cur':''" id="cd">{{it}}</a>												
			</div>
			<div class="activeList" v-else-if="areaCode == '0571'">
				<a href="javascript:;" :lang = 'it' @click="discount()" :tabIndex="key" v-for="(it,key) in hz" :key="key" v-if="it.length!=1" :class="tempArr[key]?'cur':''"  id="hz">{{it}}</a>												
			</div>
		</div>
		<div class="houseListPd">
			<div class="houseList"  v-for="(im,key) in houseLists" :key="key">
				<div class="houseListMessage" :id="im.house_id" >
					<span class="anCard" :id="im.house_id" v-if="im.status"><img src="https://opres.gongyujia.com/H5/guanHouse/axz.png"></img></span>
					<div class="houseImg"><img v-lazy="im.pic_path" :id="im.house_id" @click="openHouseDetail"/></div>
					<div class="messageBottomPd" :id="im.house_id" @click="openHouseDetail">
						<h4 :id="im.house_id">{{im.house_name}}</h4>
						<p :id="im.house_id">{{im.subtitle}}</p>
						<p :id="im.house_id"><span class="redCard" :id="im.house_id">{{im.discount}}</span></p>
						<p :id="im.house_id"><span class="redPrice" :id="im.house_id">{{im.price}}</span><!--/月--></p>
						
					</div>
					<a :href="'tel:' + im.phone">
						<img src="https://opres.gongyujia.com/H5/guanHouse/ding.png">
					</a>
				</div>
			</div>		
		</div>
			<p class="lastWord" v-if="scloll">- - - -不要再拉啦，到底了- - - -</p>
			
			<p class="mark" @click="delBtn"></p>
			<div class="tanBg tanBg01">
				<div class="tanBgPd">
					<a href="javascript:;" @click="delBtn"><img src="https://opres.gongyujia.com/H5/guanHouse/close.png"></a>
					<h4>活动需知</h4>
					<p><span>1.</span>活动促销仅限新签约用户。</p>
					<p><span>2.</span>活动页面展示价格为优惠前价格,具体折扣及优惠额度请拨打各房源咨询电话。</p>
					<p><span>3.</span>活动时间2018.11.19-2018.11.30，其中上海、北京、杭州2018.11.22结束。</p>
				</div>
			</div>
			<div class="tanBg tanBg02">
				<div class="tanBgPd">
					<a href="javascript:;" @click="delBtn"><img src="https://opres.gongyujia.com/H5/guanHouse/close.png"></a>
					<h4>关于冠寓</h4>
					<p style="padding: 0;">冠寓是龙湖地产推出的长租公寓品牌，定位为青年生活社区，打造一个以长租公寓为核心，融合居住、社交、商业、娱乐、生活服务等功能在内的多元化社区。</p>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:"冠寓感恩节特惠",
				houseLists:[],
				dis:[],
				tel:"",
				scloll:false,
				sh:[],
				bj:[],
				gz:[],
				hz:[],
				cd:[],
				sz:[],
				tempArr:[],
				local:false,
				showBj:false,
				showGZ:false,
				showSZ:false,
				showHZ:false,
				showCD:false,
				areaCode:"020",	
				disct:[],
				disSting:"",
				curT:false,
				topBanner:'https://opres.gongyujia.com/H5/guanHouse/banner.jpg',
				shareInfo:{
				   "share_title":"冠寓6城好房感恩特惠,最高立省3600元",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/guanHouse?type=1",          //链接
				   "share_image":"https://opres.gongyujia.com/H5/guanHouse/bannerwx.jpg",        //图片
				   "subtitle":" 最高立省3600元",      //副标题
				   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
				   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/guanHouse&newsTitle=冠寓感恩节特惠&posterImg=https://opres.gongyujia.com/H5/guanHouse/bannerwx.jpg", //分享小程序使用的页面路径
				},
				type:"",
			}
		},
		beforeMount(){	
	    	document.title = this.title;
	    	this.type = this.$route.query.type;	
		},
		mounted() {  			
			//this.handleScroll();
	        let that = this;
	        that.init(this.areaCode,"");  
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
				   "share_title":"冠寓6城好房感恩特惠,最高立省3600元",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/guanHouse?type=1",          //链接
				   "share_image":"https://opres.gongyujia.com/H5/guanHouse/bannerwx.jpg",        //图片
				   "share_subtitle":"最高立省3600元",      //副标题
				   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
				   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/guanHouse&newsTitle=冠寓感恩节特惠&posterImg=https://opres.gongyujia.com/H5/guanHouse/bannerwx.jpg", //分享小程序使用的页面路径
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
		methods:{
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
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
//					alert(this.type == "1" + " " + this.type)
					if(this.type == 1){
						window.location.href = 'https://special.gongyujia.com/downloadApp/index.html';						
					}else{
						wx.miniProgram.navigateTo({url: '/pages/list/listDetail/listDetail?id='+ houseId});							
					}															    				  	
				}				
			},
			yellowBtn(){
				$(".tanBg01").fadeIn();
				$(".mark").fadeIn();
			},
			lightYellowBtn(){
				$(".tanBg02").fadeIn();
				$(".mark").fadeIn();
			},
			delBtn(){
				$(".tanBg01").fadeOut();
				$(".tanBg02").fadeOut();
				$(".mark").fadeOut();
			},
			init(areaCode,disString){
				let that = this;
				that.houseLists = []; //存储房源
		    	that.sh=[];
				that.bj=[];
				that.gz=[];
				that.hz=[];
				that.cd=[];
				that.sz=[];
				var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
				let url = "specials/guan_yu",
				    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":areaCode,"g_uid":"","channel":"","app_device":"","package_name":"","discount":disString};
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							console.log(res.content)									
							for(var i = 0; i < res.content.house.length; i++){								
								if(isAndroid){
									res.content.house[i].pic_path = "https://res.gongyujia.com/"+res.content.house[i].pic_path +'@!form_m_w'; 
								}else if(isiOS){
									res.content.house[i].pic_path = "https://res.gongyujia.com/"+res.content.house[i].pic_path +'@!form_m'; 
								}								
								that.houseLists.push(res.content.house[i]);	
							}	
							
							for(var i = 0; i < res.content.dis["028"].length; i++){	
								if(res.content.dis["028"].length == 1){
									
								}else{									
									that.cd.push(res.content.dis["028"][i]);
								}																										
							}
						
							for(var i = 0; i < res.content.dis["010"].length; i++){	
								if(res.content.dis["010"].length == 1){
									
								}else{
									that.bj.push(res.content.dis["010"][i]);
								}
							}
							for(var i = 0; i < res.content.dis["020"].length; i++){		
								if(res.content.dis["020"].length == 1){
									
								}else{
									that.gz.push(res.content.dis["020"][i]);
								}
							}
							for(var i = 0; i < res.content.dis["021"].length; i++){	
								if(res.content.dis["021"].length == 1){
									
								}else{
									that.sh.push(res.content.dis["021"][i]);									
								}																
							}
							for(var i = 0; i < res.content.dis["0571"].length; i++){
								if(res.content.dis["0571"].length == 1){
									
								}else{
									that.hz.push(res.content.dis["0571"][i]);
								}
							}
							for(var i = 0; i < res.content.dis["0755"].length; i++){	
								if(res.content.dis["0755"].length == 1){
									
								}else{
									that.sz.push(res.content.dis["0755"][i]);
								}
							}																			
							//that.cd.push(res.content.dis["028"]);						
							this.scloll = true;
						},
						error:( res)=>{
							alert(res)							
						}
					})
				});
			},
			code(e){
		    	e = window.event || e;
		    	console.log(e)		    	
		    	this.areaCode = e.target.id; //城市id
		    	this.init(this.areaCode,"");
		    	this.local = true;
		    	this.disct = [];
		    	this.disSting ='';
		    	this.tempArr = [];
		    	if(this.areaCode == "021"){		    			    	
		    		$('.cityList th a').removeClass('cur');	
		    		this.scloll = false;
		    		$('.cityList th a').eq(0).addClass('cur');  		
		    	}else if(this.areaCode == "010"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(1).addClass('cur');  		
		    	}else if(this.areaCode == "020"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(2).addClass('cur');  		
		    	}else if(this.areaCode == "0755"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(3).addClass('cur');  		
		    	}else if(this.areaCode == "028"){	    			
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(4).addClass('cur');  		
		    	}else if(this.areaCode == "0571"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(5).addClass('cur');  		
		    	}	
		  	 },
		  	 code22(e){
		    	e = window.event || e;
		    	console.log(e)		    	
		    	this.areaCode = e.target.id; //城市id
		    	this.init(this.areaCode,"");
		    	this.local = true;
		    	this.disct = [];
		    	this.disSting ='';
		    	this.tempArr = [];
		    	if(this.areaCode == "020"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(0).addClass('cur');  		
		    	}else if(this.areaCode == "0755"){
		    		this.scloll = false;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(1).addClass('cur');  		
		    	}else if(this.areaCode == "028"){
		    		this.scloll = false;
		    		this.wm30 = true;
		    		$('.cityList th a').removeClass('cur');	 
		    		$('.cityList th a').eq(2).addClass('cur');  		
		    	}
		  	 },
		   	discount(e){		   		
	   			e = window.event || e;
	   			this.scloll = false;
		    	if(this.areaCode == "021"){		    		
		    		for(var i = 0;i < this.sh.length;i++){
		    			this.tempArr.push(false);
		    		}		    		
		    	}else if(this.areaCode == "010"){
		    		for(var i = 0;i < this.bj.length;i++){
		    			this.tempArr.push(false);
		    		}		
		    	}else if(this.areaCode == "020"){
		    		for(var i = 0;i < this.gz.length;i++){
		    			this.tempArr.push(false);
		    		}	 		
		    	}else if(this.areaCode == "0755"){
		    		for(var i = 0;i < this.sz.length;i++){
		    			this.tempArr.push(false);
		    		}	
		    	}else if(this.areaCode == "028"){
		    		for(var i = 0;i < this.cd.length;i++){
		    			this.tempArr.push(false);
		    		}	
		    		console.log(this.cd.length)  		
		    	}else if(this.areaCode == "0571"){
		    		for(var i = 0;i < this.hz.length;i++){
		    			this.tempArr.push(false);
		    		}	
		    		console.log(this.hz.length)  		
		    	}	
		    	
		    	if(e.target.className == "cur"){
		    		e.target.className = "";	
		    		
		    		for (var i = 0; i < this.disct.length; i++) {		    			
		    			if(this.disct[i] == e.target.lang){		    				
							this.disct.splice(i, 1);
							console.log(this.disct + "r")
		    			}		    			
		    		}			    		
	    			this.tempArr.splice(e.target.tabIndex, 1, false); 
		    	}else{		    		
					this.tempArr.splice(e.target.tabIndex, 1, true); 						
		    		this.disct.push(e.target.lang)		    		
		    	}
		    
		    	this.disSting = this.disct.join("|");
				
		    	this.init(this.areaCode,this.disSting);
		    	
		  	}
		}
	}
</script>

<style>
	::-webkit-scrollbar {    display: none;}
	::-webkit-scrollbar-track {
    display: none;
} /* 滚动条的滑轨背景颜色 */

::-webkit-scrollbar-thumb {
    display: none;
} /* 滑块颜色 */

::-webkit-scrollbar-button {
    display: none;
} /* 滑轨两头的监听按钮颜色 */

::-webkit-scrollbar-corner {
    display: none;
} /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
	/*弹层*/
	.mark{ width: 100%; height: 100%; background: rgba(0,0,0,0.7); position: fixed; left: 0; top: 0; z-index: 3; display: none;}
	
	.tanBg{width: 90%; position: fixed; left: 5%; top: 30%; background: #fff; border-radius: 10px; z-index: 4; display: none;}
	.tanBgPd{ padding:25px;}
	.tanBg h4{ padding:0px 0 10px; text-align: center; color: #ff6e4e; font-size: 0.36rem;}
	.tanBg p{ margin-top: 11px;  text-align: left; color: #666; font-size: 0.3rem; position: relative; padding-left: 20px;line-height: 1.5em;}
	.tanBg p span{ display:block; position: absolute; left: 0px; top: 0;}
	.tanBgPd a{ display: block; position: absolute; right: 25px; top: 25px; width: 4%;}
	.tanBgPd a img{ width: 100%;}
	
	.bjs{background: #fff3da;min-height: 1000px;}
	.wm30{ margin: 0 15px;}
	.bannerList{ position: relative; margin-bottom: 0.7rem;}
	.bannerList img{ display: block; width: 100%;}
	.bannerList div{position: absolute; z-index: 2; right: 0;top: 0.70rem; }
	.bannerList a{ display: block;text-decoration: none;    padding: 0.5em .5em .5em .75em;border-bottom-left-radius: 100px;border-top-left-radius: 100px;font-size: 0.754em;margin-bottom: 1em;}
	.bannerList a.yellowBtn{ background: #ffbf44; color: #fff; }
	.bannerList a.lightYellowBtn{ background: #fff1d2; color: #ff6d4e; top: 1.3rem;}
	
	.cds{margin-bottom: 25px;}
	.cityList{ margin-bottom: 0.3rem; text-align: center;width: 92.6%; margin-left: 3.7%;}
	.cityList th{ width:16.666666%;text-align: center;}
	.cityList th a{ margin: 0 auto; display: inline-block; text-decoration: none; color: #666; font-size: 0.36rem; padding-bottom: 0.2rem; border-bottom: 1px solid #fff3da; }
	.cityList th a.cur{ border-bottom: 1px solid #fb3e47; color: #fb3e47;}
	.activeList{ overflow-x: auto; text-align: left; display: flex; flex-direction: row;}
	.activeList a{ display: inline-block;text-decoration: none; margin-right:15px; padding:0.1rem 0.2rem; color: #ff7f50; font-size: 0.26rem; background: #ffe8c5; border-radius: 100px; white-space: nowrap;}
	.activeList a.cur{ background: #f88873; color: #fff;}
	
	.houseListPd{ margin: 0 5px; text-align: left;}
	.houseList{ display: inline-block; width: 49%; margin-bottom: 10px;margin-left: .75%;}
	.houseListMessage{ display: block; position: relative; margin: 0 5px; border-radius: 10px; background: #fff; box-shadow:5px 5px 5px #ffe6cc;}
	.houseListMessage span.anCard{position: absolute;left: 0;top: 0;}
	.houseListMessage span.anCard>img{width: 50%;}
	.houseImg{width: 100%;height: 125px!important;overflow: hidden;}
	.houseImg>img{width: 100%;overflow: hidden;height: 125px!important;}
	.houseListMessage img{ width: 100%; border-top-right-radius: 10px; border-top-left-radius: 10px; display: block;}
	.messageBottomPd{ padding: 10px;}
	.messageBottomPd h4{ color: #333; font-size: 0.3rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.messageBottomPd p{ margin-top: 5px; color: #666; font-size: 0.26rem;}
	.messageBottomPd p span.redCard{ display: inline-block; padding:2px 5px; color: #ff6e4e; font-size: 0.2rem; border: 1px solid #ff6e4e; border-radius: 2px;}
	.messageBottomPd p span.redPrice{ color: #ff6e4e; font-size: 0.26rem;}
	.houseListMessage a{     width: 25%;display: block;text-decoration: none;position: absolute;right: 10px;bottom: 7px;}
	.lastWord{ color: #ff7f50;font-size: 0.3rem; text-align: center; padding:15px 0 25px;}
	

	a:link{text-decoration:none; } 
	a:visited{text-decoration:none; }	
	a:hover{text-decoration:none;}	
	a:active{text-decoration:none;}
	</style>
<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm01.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm02.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm03.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm04.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm05.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm06.jpg" @click="tage"/>
		<div class="houseText">
			<div class="houseCont" v-for="(im,key) in houseList" :key="key" @click="openHouseDetail">
				<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy" />
				<img src="https://opres.gongyujia.com/H5/fireworm/fireworm07.png" class="tag" :id="im.house_oid"  :align="im.isautotrophy"/>
				<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='im.status == 1'/>
				<div class="houseMessage" :id="im.house_oid"  :align="im.isautotrophy">
					<p class="mony" :id="im.house_oid"  :align="im.isautotrophy">¥  {{im.price}} <span>/月</span></p>
					<h1 class="houseTitle" :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</h1>
					<p class="houseType" :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
					<div class="houseGPS" :id="im.house_oid"  :align="im.isautotrophy">			
						<img src="https://opres.gongyujia.com/H5/GPS.png"/>
						<span>{{im.address}}</span>		
					</div>					
					<div class="houseLabel" :id="im.house_oid"  :align="im.isautotrophy">
						<img src="https://opres.gongyujia.com/H5/fireworm/fireworm08.png" style="vertical-align: middle;" v-if='im.safe == 1'/>
						<span v-if="im.src_type != ''">近地铁</span>
						<span v-for="(item,key) in im.tag_name" :key="key" >{{item}}</span>
					</div>
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
			title:"公寓家萤火虫计划",			
			data:{},
			houseList:[],
			shareInfo:{
			   "share_title":"【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/firewormPlay",          //链接
			   "share_image":"https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg",        //图片
			   "subtitle":"品质房源、超赞房东、五星服务，为您提供品质租家体验",      //副标题			  
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/firewormPlay&newsTitle=【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验&posterImg=https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg", //分享小程序使用的页面路径
			}
		}
	},	
	beforeMount(){	
    	document.title = this.title;
    	this.type = this.$route.query.type;	    	
	},	
    mounted() {    	
    	let that = this;	
    	that.init();
	 	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
	        
		}else if(ua.match(/Alipay/i) == "alipay"){
					
		}else{
			let data = {
			   "share_title":"【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/firewormPlay",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg",        //图片
			   "share_subtitle":"品质房源、超赞房东、五星服务，为您提供品质租家体验",   //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/firewormPlay&newsTitle=【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验&posterImg=https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg", //分享小程序使用的页面路径
			};
	    	data =  JSON.stringify(data);
			if(isAndroid){			
				android.showShareButton(data);
				//that.setclick(null);
			}else if(isiOS){	
				$('.shareBut').css('margin','15px 35% 450px')
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
					//that.setclick(bridge);							
		       	})
			} 
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
				   "share_title":"【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/firewormPlay",          //链接          //链接
				   "share_image":"https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg",        //图片
				   "share_subtitle":"品质房源、超赞房东、五星服务，为您提供品质租家体验",   //副标题
				    "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
		   			"mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   		"mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/firewormPlay&newsTitle=【萤火虫计划】品质房源超赞房东五星服务，给你品质租家体验&posterImg=https://opres.gongyujia.com/H5/fireworm/fireworm24.jpg", //分享小程序使用的页面路径
				};
		    	data =  JSON.stringify(data);		    	
				var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
				if(isAndroid){
					android.openShare(data);			           		        
		        }else if(isiOS){
		        	$('.shareBut').css('margin','15px 35% 450px')
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {
		        		that.share_result_event(rest)
		        	})
			    }
			}
       },  
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
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let url = "Specials/getHouseList",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":6};	
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						console.log(res.content)
						
						for(var i = 0; i < res.content.length; i++){							
							if(isAndroid){
								res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_l_w'; 
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
		tage(){
			window.location.href = 'https://special.gongyujia.com/#/firewormPlayCont';
		}
    },
}
</script>
<style lang='scss' scoped>
.bcy{background-color: #001138;}
.houseText{background-color: #22386b;position: relative;top: -3px;left: 0;padding-top: 10px;}
.houseCont{padding-top: 20px;width: 92%;margin-left: 4%;position: relative;padding-bottom: 20px;}
.houseBjImg{width: 100%;height: 230px;border-top-left-radius: 7px;border-top-right-radius: 7px;}
.houseMessage{background-color: #fff; margin-top: -1%;padding-bottom: 20px;position: relative;}

.houseTitle{color: #001138;font-size: 1em;font-weight: 600;margin-left: 3%;padding: 12px 0;}
.houseType{color: #7281a2; margin-left: 3%;padding: 0px 0 12px;}
.houseGPS{color: #7281a2; margin-left: 3%;padding: 0px 0 12px;}
.houseGPS>img{width: 15px;vertical-align: middle;}
.houseGPS>span{vertical-align: middle;margin-left: 2px; font-size: 1em;}
.houseLabel{margin-left: 3%;}
.houseLabel>img{width: 58px;}
.houseLabel>span{background-color: #eeeff4;text-align: center;font-size: .65em;padding: 5px 8px;color: #7281a2;border-radius: 3px;margin-left: 5px;}
.mony{position: absolute;top: 51.5%;right: 20px;color: #b2161a;font-size: 1.15em;font-weight: 600;}
.mony>span{font-size: .75em;font-weight: 500;}
.soldOver{width: 50px;position: absolute;top: 10px;left: 0;}
.tag{position: absolute;top: 0;right: -10px;width: 100px;}
</style>
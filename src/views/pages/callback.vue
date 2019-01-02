<template>
	<div>		
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share"/>		
	</div>	  
</template>

<script>
	export default {
	data() {
		return {
			data:'',
        	data2:'',
        	token:"",
			title:"111",
			houseName:"",
			housePrice:"",
			channel:"",
			tel:"",
			showPrise:true,
			bigImg:"",
			shareInfo:{
			   "share_title":"老上海映象-静安篇",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/mapping",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"人民公园划船，大光明电影院，平安电影院",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
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
	created(){
		let that = this;
		//声明暴露给Android调用的方法
		window["share_result_event"] = that.share_result_event;
		var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		if(isAndroid){
			console.log(that.functions)		
			let functions =  JSON.stringify(that.functions);	
			android.setCallback(functions);		
		}else if(isiOS){
			console.log(that.functions)				
			that.setupWebViewJavascriptBridge(function(bridge) {
				bridge.registerHandler('share_result_event', function(data, responseCallback) {					
					that.share_result_event(data);				
					responseCallback(data)
				});
				bridge.callHandler('setCallback', that.functions, function responseCallback(responseData) {})			
	        })
		}
	},
	beforeMount(){
    	document.title = this.title;	  	
	},
    mounted() {	    	
    	let that = this;    	   	  	 	
		document.getElementById('share').onclick = function(e){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			if(isAndroid){				
				let data ={
				   "share_title":"老上海映象-静安篇",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/mapping",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"人民公园划船，大光明电影院，平安电影院",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				};			
    			data =  JSON.stringify(data);
				android.openShare(data);	
			}else if(isiOS){
				console.log(that.functions)
				console.log(that.shareInfo)
				that.setupWebViewJavascriptBridge(function(bridge) {				
					bridge.callHandler('openShare', that.shareInfo,function(rest) {
						alert(rest);
					});				
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
			alert("111111" + JSON.stringify(var1));
		},
	}
}
</script>
<style lang='scss' scoped>
.close{position: absolute;right: 3%;top: 5%;width: 9%;color: #fff;z-index: 30;font-size: 2.5em;display: none;}
.bgImg{position: fixed;top: 26%;z-index: 30;display: block;height: 40%;width: 100%;display: none;}
.box{background-color: #000;opacity: 0.75;z-index: 20;position: fixed;top: 0;width: 100%;height: 100%;display: none;}
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 10px;z-index: 10;}
a{text-decoration:none;outline-style: none;color: #666;}
.banners{
	overflow: hidden;
	width: 100%;
	background:#FFFFFF;
	height: auto!important;
	position: relative;
	.banner_list{
		width: calc(100vw) !important;
		height:calc(75vw) !important;
	}
}
.slide{margin-right: 5%;}
.swiper-pagination {position: absolute;z-index: 10;right: 6%;top: 83%;background-image: url("https://opres.gongyujia.com/H5/productBg.png");color: #fff;width: 15%;padding: 5px;border-radius: 20px;}

/*新增样式*/
.personListPd{ background:#fff;clear:both;}
.personListBg{ width:100%; background: #fff; position: relative; border-bottom: 10px solid #F5F5F5;}
.personListBgPd{padding:15px 10px;}
.personListBgPd h4{ color: #333; font-size:1em; text-align: left;font-weight: 600;line-height: 1.35em;}
.personListBgPd h6{ color: #20b7b6; font-size: 1.15em;margin-top: 15px;}
.personListBgPd h6 span{ display: inline-block; font-size: 0.7em;margin-top: 3px;}

.payment{float: right;font-size: .75em;color: #999;}
.payment>img{width: 10px;height: 15px;vertical-align: middle;margin-left: 10px;margin-top: -2px;}

/*基本信息*/
.cw {margin: 0 18px;}
.iconW {color: #333;font-size: 1.2em;position: relative;margin: 15px 0;}
.houseCont>p{width: 50%;float: left;color: #999;margin-bottom: 10px;}
.houseCont>p>span{color: #333;margin-left: 15px;}

.iconW span {display: block;color: #999;font-size: 0.75em;background: url("https://opres.gongyujia.com/H5/addressIconGrey.png") left center no-repeat;background-size: 1em;padding-left: 20px;margin-top: 8px;}
.iconW a{display: block;font-size: 0.7em;color: #333;position: absolute;right: 0;top: 0;text-decoration: none;background: url('https://opres.gongyujia.com/H5/right.png') right center no-repeat;background-size: 7px!important;padding-right: 20px;}
.trafficList {width: 100%;margin-bottom: 10px;}
.content{width: 100%;overflow: hidden;margin-left: 18px;}

.trafficList div.trafficListView{ width:48%; display: inline-block;  margin-top:10px; background-position: left center; background-repeat: no-repeat; background-size: 20px; color: #333; font-size:.75em; line-height: 13px;}
.trafficList div.trafficListView .iconImg{width: 25px;float: left;}
.trafficList div.trafficListView span{ display: block; color: #999; font-size:0.85em;margin-left: 28px;}

.XSDFXPage{width: 100%;height: 280px;overflow: hidden;}

.houseMessage {color: #999;font-size: .75em;margin-bottom: 15px;line-height: 1.65em;}

.prodductImgpd{margin-top: 15px;}

/*基础设施*/
.facilityPd{margin-top: 15px;height: 100px;overflow: hidden;position: relative;}
.facilityPd p{ display: inline-block; width: 19.5%; color: #999; font-size: .75em; text-align: center; margin-bottom:10px;}
.facLast{display: inline-block; width: 19%;font-size: .75em;position: absolute;top: 53%;left:78%;z-index: 10;background-color: #fff;}
.facilityPd p img{ margin: 0 auto 5px; display: block;width: 25px;}

.explain{margin-top: 20px;line-height: 1.75em;font-size: .75em;color: #afafb7;background-color: #fbfbfb;width: 100%;margin-bottom: 65px;}    
.classNub{padding: 15px 18px 0 18px;}
.exText{padding: 10px 18px 22px;}
.source{color: #20b7b6;}

.prodductImgpd{ padding-top:10px;}


.footBut{width: 100%;position: fixed;bottom: 0;height: 50px;line-height: 50px;z-index: 20;background-color: #fff;}
.footBut>span{width: 50%;height: 100%;text-align: center;font-size: .85em;color: #666;background-color: #fbfbfb;}
.footBut>span:last-of-type{color: #fff;background-color: #20b7b6;}
.footBut>span>a>img{width: 18px;height: 18px;margin-right: 5px;vertical-align: middle;}
.pactLook>img{width: 18px;height: 18px;margin-right: 5px;vertical-align: middle;}
.call{float: left;}
.pactLook{background-color: #20b7b6;float: right;color: #fff;}
</style>
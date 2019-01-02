<template>	
	<div class="bj">
			<!--弹框-->
	  	<p class="markBg" @click="close"></p>
	  	<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
	  	<div class="tanBg tanBg001">
	  		<div class="tanBg02">
		  		<div class="tanPd">
		  			<a href="javascript:;" class="close" @click="close"><img src="https://opres.gongyujia.com/H5/education/education07.png"></a>
	  				<div class="tanK01">
		  				<h4><img src="https://opres.gongyujia.com/H5/education/education05.png"></h4>
		  				<input type="tel" maxlength="11" name="color" placeholder="请输入手机号码" v-model="telNubmer" @keyup="isTelCorrect" class="telNum"/>
		  				<a href="javascript:;" class="tanBtn01"><img src="https://opres.gongyujia.com/H5/education/education06.png" @click="getRed"></a>
		  			</div>
		  			<p class="tit">别太贪心哦，已经领过啦</p>
					<p class="errNull">手机号码不能为空，请输入号码哦</p>
					<p class="errNub">请输入正确的手机号哦</p>
		  		</div>
	  		</div>
	  	</div>
	  	<div class="tanBgLong tanBg tanBg002">
	  		<div class="tanBg02">
		  		<div class="tanPd">
		  			<a href="javascript:;" class="otherCla" @click="close"><img src="https://opres.gongyujia.com/H5/education/education07.png"></a>
		  			<div class="tanK02">
	  					<img src="https://opres.gongyujia.com/H5/education/education08.png" />
	  					<div class="cardPd">
	  						<img src="https://opres.gongyujia.com/H5/education/education09.png" />
	  						<p id="nubmer"></p>
	  					</div>
	  					<div class="successMessage">
	  						<p>1.每张券仅可使用1次，不可叠加使用</p>
	  						<p>2.该券有效期至：2018年11月10日</p>
	  						<p>3.仅限朗阁教育天猫旗舰店使用</span></p>
	  						<p>4.其他规则请咨询商家客服</p>
	  					</div>
		  				<a href="javascript:;" class="tanBtn02">
		  					<img src="https://opres.gongyujia.com/H5/education/education10.png" @click="cv">
		  					<img src="https://opres.gongyujia.com/H5/education/education11.png" @click="shae" >
		  				</a>
		  				<span class="cv">复制成功</span>
		  			</div>
		  		</div>
	  		</div>
	  	</div>
	  	<!--弹框结束-->
	  	
	  	<div class="tomatoPd">
	  		<img src="https://opres.gongyujia.com/H5/education/education01.png"/>	  				
	  		<a href="javascript:;" class="tomatoBtn" @click="login(1)"><img src="https://opres.gongyujia.com/H5/education/education02.png"></a>
	  		<img src="https://opres.gongyujia.com/H5/education/education03.png"/>	  		
	  	</div>
	    <img src="https://opres.gongyujia.com/H5/education/education04.png"  @click="login(2)" class="tomatoBtn02">
							
		<img src="https://opres.gongyujia.com/H5/zeroAct/box.jpg" class="bjBox" />
		<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="eq" @click="eq"/>
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"朗阁英语",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			copyData:"",
			showPrise:true,
			bg:"",
			source:"",
			shareInfo:{
			   "share_title":"朗阁英语多语种学习专享优惠",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/education",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"限时抢公寓家注册礼，最高减500元",      //副标题
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
	        this.showPrise = false;	 	      			    			
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrise = false;			
		}
	},
	mounted() {	
		$(function () {
			//判断页面高度
			var h=$(window).height();
			$(".bjBox").height(h+75);							           
        });	
		let that = this;	
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    };
        $(function () {
			var h1=-$(".tanBg001").height()/2;
			var h2=-$(".tanBg002").height()/3;
			$(".tanBg001").css("margin-top",h1);
			$(".tanBg002").css("margin-top",h2);				
        });	       
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
		   "share_title":"朗阁英语多语种学习专享优惠",        //分享标题
		   "share_url":"https://special.gongyujia.com/#/education",          //链接
		   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
		   "share_subtitle":"限时抢公寓家注册礼，最高减500元",      //副标题
		   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
		   "mini_name":"",           //分享小程序使用的原始id
		   "mini_path":"", //分享小程序使用的页面路径
		};
    	data =  JSON.stringify(data);	
		if(isAndroid){
			this.showPrise = false;
			android.showShareButton(data);	
			//that.setclick(null);
		}else if(isiOS){
			this.showPrise = false;
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				//that.setclick(bridge);	
				this.bg = bridge;
	       	})
		}	
    },	
	methods: {
		 //手机号是否正确
		isTelCorrect(){			
			if(this.telNubmer.length<12){
				console.log(this.telNubmer)
			};			
		},
		login(source){
			this.source = source;
			$(".tanBg001").fadeIn();
			$(".markBg").fadeIn();
			$(".tanBg002").hide();			
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
		getRed(){	
			var res = /^1(3|4|5|7|8)\d{9}$/;
			if(this.telNubmer.length == 11 && res.test(this.telNubmer)){
				let url = "Coupon/long_program",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1','phone_bind':this.telNubmer,"g_uid":"","channel":"","app_device":"","package_name":"","channel_type":2,"type":this.source};											
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								$('#nubmer')[0].innerHTML=res.content.coupon_code;
								$(".tanBg001").hide();
								$(".tanBg002").fadeIn();
								var ua = window.navigator.userAgent.toLowerCase();
								if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境	
									document.getElementById('share').onclick = function(e){
										$('.bjBox').show();
										$('.eq').show();										
									}									
								}
							}else if(res.ret == '2'){
								$('.tit').fadeIn();															
								setTimeout(() => {
					                $('.tit').hide();	
					            }, 2000);					            
							}
						},
						error:( res)=>{
							alert(res)							
						}
					})
				});
			}else{
				if(this.telNubmer.length==0){
					$('.errNull').fadeIn();					
					$(function(){
						setTimeout(() => {
			              $('.errNull').hide();			            
			            }, 2000);
					});
				}else if(this.telNubmer.length > 0 || this.telNubmer.length < 11){
					$('.errNub').fadeIn();
					$(function(){
						setTimeout(() => {
			              $('.errNub').hide();  
			            }, 2000);
					});
				}
			}			
		},
		cv(){	
			$('.cv').fadeIn();
			const range = document.createRange();
			range.selectNode(document.getElementById('nubmer'));	
	        const selection = window.getSelection();
	        if(selection.rangeCount > 0) selection.removeAllRanges();
	        selection.addRange(range);
	        document.execCommand('copy');	      
			$(function(){
				setTimeout(() => {
	               $('.cv').hide();
	            }, 2000);
			});		
//			var Url2=$("#nubmer").html();
//			var oInput = document.createElement('input');
//	        oInput.value = Url2;
//	        document.body.appendChild(oInput);
//	        oInput.select(); // 选择对象
//	        document.execCommand("Copy"); // 执行浏览器复制命令
//	        oInput.className = 'oInput';
//	        oInput.style.display='none'; 
						
		},
		close(){
			$(".tanBg").fadeOut();
			$(".tanBgLong").fadeOut();
			$(".markBg").fadeOut();
			$(".tanBg001").fadeOut();
			$(".tanBg002").fadeOut();
			$('.cv').fadeOut();
			$('.errNull').fadeOut();	
			$('.tit').fadeOut();			
			$('.errNub').fadeOut();  	
		},
		eq(){
			$('.bjBox').hide();
			$('.eq').hide();
		},
		setclick(bridge){	
        	let that = this;			
			document.getElementById('share').onclick = function(e){
				//let data = that.shareInfo;	
				let data = {
					   "share_title":"朗阁英语多语种学习专享优惠",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/education",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"限时抢公寓家注册礼，最高减500元",      //副标题
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
        shae(){      			
        	let that = this;	
        	var u = navigator.userAgent, app = navigator.appVersion; 
        	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 					
			let data = {
			   "share_title":"朗阁英语多语种学习专享优惠",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/education",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"限时抢公寓家注册礼，最高减500元",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
	    	data =  JSON.stringify(data);
	    	var ua = window.navigator.userAgent.toLowerCase();
	    	if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
				$('.bjBox').show();
				$('.eq').show();
			}else if(isAndroid){
				android.openShare(data);	
			}else if(isiOS){				
				that.bg.callHandler('openShare', that.shareInfo,function(rest) {})
			}
        }
	},	
}
</script>

<style scoped>
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 18px;z-index: 10;}
.bj{position: relative;width:100%;background: #0048e9;}
.tomatoPd{padding-bottom: 75px; }
.tomatoPd img{ width: 100%; display: block;}
.tomatoPd img:nth-of-type(2){ width: 92.7%; margin-left: 3.65%;}
.tomatoBtn img{width: 74%;margin: 7% 13%;}
.tomatoBtn01{position: relative;}
.tomatoBtn01 a{ text-decoration: none; display: block;width: 100%;margin: 7% 0 7% 13%;}
.tomatoBtn02{  position:fixed;left:0; bottom:0;  height: auto!important;width: 100%;}

img{width: 100%;}
.markBg{display: none; background:rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 5;}
.tanBg{display: none; width: 90%; background: #fff; border-radius:10px; position:fixed; left:5%; top:50%; z-index: 6;font-size: .65em;}
.tanBgLong{display: none; width: 90%; background: #fff; border-radius:10px; position:fixed; left:5%; top:35.5%; z-index: 6;font-size: .65em;}

.tanBg02{width: 100%; height: 100%; background: #fff; border-radius:10px;padding-bottom: 5%; position: relative;}
.tanBtn02>img{width: 85%;}
.tanBtn02>img:last-of-type{margin-top: 20px;}

.tanPd{ padding:10%; position: relative;text-align: center;}
.tanPd h4 img{ width: 55%;}
a.close{ position: absolute;right: 6%;top: 7%; width: 6%;}
a.otherCla{position: absolute;right:3%; top: 2.4%; width: 6%;}
input.telNum{ background: #f6f6f6; padding:15px 0;border-radius:10px; width: 100%; margin:28px auto; border: none; text-align: center; color: #666666; font-size: 1.5em;}
.tanBtn01{ display: block; text-decoration: none; margin: 0 5%; width: 90%;}

.cardPd{ margin:20px 0; position: relative;}
.cardPd p{ color: #fff; font-size:1.5em; font-weight: bold; position: absolute;right:4%; top: 40%;}
.successMessage{ margin-bottom: 20px;margin-left: 12px;}
.successMessage p{ color: #333333;font-size: 1.2em; margin-bottom: 10px; text-align: left; line-height: 20px;}
.successMessage p span{ display: block; text-indent:1em;}

.tit,.errTel,.errNull,.errNub{z-index:10;position: absolute;top: 88%;left:22%;color: #666666;margin: 0 auto;text-align: center;width: 60%;font-size: 1.25em;margin-top: 10px;display: none;}
.cv{z-index:10;position: absolute;top: 73%;left:22%;color: #666666;margin: 0 auto;text-align: center;width: 60%;font-size: 1.25em;margin-top: 43px;display: none;}

.bjBox{position: fixed;top: 0;opacity: .8;z-index: 5;width: 100%;display: none;z-index: 30;}
.eq{width: 10%;height: auto!important;z-index: 10;position: fixed;bottom: 18%;left: 45%;display: none;z-index: 31;}
</style>
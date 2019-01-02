<template>	
	<div class="bj">
			<!--弹框-->
	  	<p class="markBg" @click="close"></p>
	  	<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
	  	<div class="tanBg tanBg001">
	  		<div class="tanBg02">
		  		<div class="tanPd">
		  			<a href="javascript:;" class="close" @click="close"><img src="https://opres.gongyujia.com/H5/move/move05.png"></a>
	  				<div class="tanK01">
		  				<h4><img src="https://opres.gongyujia.com/H5/strengthMall/strengthMall09.png"></h4>
		  				<input type="tel" maxlength="11" name="color" placeholder="请输入手机号码" v-model="telNubmer" @keyup="isTelCorrect" class="telNum"/>
		  				<a href="javascript:;" class="tanBtn01"><img src="https://opres.gongyujia.com/H5/move/move06.png" @click="getRed"></a>
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
		  			<a href="javascript:;" class="otherCla" @click="close"><img src="https://opres.gongyujia.com/H5/move/move05.png"></a>
		  			<div class="tanK02">
	  					<img src="https://opres.gongyujia.com/H5/move/move09.png" style="width: 48%;"/>
	  					<div class="cardPd">
	  						<img src="https://opres.gongyujia.com/H5/strengthMall/strengthMall13.png" />
	  						<p id="nubmer"></p>
	  					</div>
	  					<div class="successMessage">
	  						<p>1.优惠券面额为20元组合券（包含普通搬家6元和4元各一张，长途搬家10元一张）；</p>
	  						<p>2.该券有效期至：2019年1月31日；</p>
	  						<p>3.新老用户均可使用，自兑换之日起有效期为30天；</p>
	  						<p>4.同一个ID仅可领取使用一次，优惠不与其他活动同享；</p>
	  						<p>5.不限车型使用，无使用门槛；</p>
	  						<p>6.最终解释权归蓝色犀牛所有，客服电话：400-678-5966（8：00-20：00）。</p>
	  					</div>
		  				<a href="javascript:;" class="tanBtn02">
		  					<img src="https://opres.gongyujia.com/H5/move/move06.png" @click="cv">		  					
		  				</a>
		  				<span class="cv">复制成功</span>
		  			</div>
		  		</div>
	  		</div>
	  	</div>
  		
	  	<!--弹框结束-->  	
	  	<div class="tomatoPd">
	  		<img src="https://opres.gongyujia.com/H5/move/move01.jpg"/>	  		
	  		<img src="https://opres.gongyujia.com/H5/move/move02.jpg"  @click="login1(1)" class="przeImg01"/>
	  		<img src="https://opres.gongyujia.com/H5/move/move03.jpg"/>
  			<img src="https://opres.gongyujia.com/H5/move/move04.jpg"/>		  		
	  	</div>
	  	<div class="footerBut" @click="flag && login1(2)">
	  		<div class="tomatoBtn02"  @click="downApp" v-if="down"><img src="https://opres.gongyujia.com/H5/move/move07.png"/>下载公寓家app</div>
	  		<div @click="login1(2)" class="tomatoBtn03"><img src="https://opres.gongyujia.com/H5/strengthMall/strengthMall04.png" style="margin-top: -4px;"/>立即抢</div>  		
	  	</div>
	    
							
		<img src="https://opres.gongyujia.com/H5/zeroAct/box.jpg" class="bjBox" />
		<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="eq" @click="eq"/>
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"公寓家注册礼",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			copyData:"",
			down:false,
			flag:false,
			showPrise:false,
			bg:"",
			typeApp:'',
			source:"",			
			shareInfo:{
			   "share_title":"我在公寓家租房抢搬家福利啦！",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/move?src=1",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"24小时随时全程搬家，20元无门槛优惠券等你来领！",      //副标题
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
		that.typeApp =  that.$route.query.src;
		if(that.typeApp != 2){
			console.log($('.footerBut'))
			$('.footerBut').css('text-align',"left");
			$('.tomatoBtn03').css('margin-left','16%');
			that.down = true;
			that.flag = false;
		}else{
			that.flag = true;
		}
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
			var h2=-$(".tanBg002").height()/2;
			var h3=-$(".tanBg003").height()/2;
			$(".tanBg001").css("margin-top",h1);
			$(".tanBg002").css("margin-top",h2);	
			$(".tanBg003").css("margin-top",h3);	
        });	       
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"我在公寓家租房抢搬家福利啦！",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/move?src=1",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"24小时随时全程搬家，20元无门槛优惠券等你来领！",      //副标题
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
		login1(source){
			this.source = source;		
			$(".tanBg001").fadeIn();
			$(".markBg").fadeIn();
			$(".tanBg002").hide();	
		},		
		downApp(){
			var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
		    if (ua.match(/MicroMessenger/i) == "micromessenger") {
		       if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
		            var loadDateTime = new Date();
		            window.setTimeout(function() {
		                var timeOutDateTime = new Date();
		                if(timeOutDateTime - loadDateTime < 5000) {
		                    window.location.href= "https://itunes.apple.com/cn/app/id1140856767?mt=8";
		                } else {
		                    window.close();
		                }
		            },25);
		            window.location = "gyj://smart.gongyujia.com/page/home.php";
		        } else if(navigator.userAgent.match(/android/i)) {
		        	window.location.href = "https://android.myapp.com/myapp/detail.htm?apkName=com.gongyujia.app&ADTAG=mobile"; 
		        }
		    }else{
		    	 if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {        
		             window.location.href = "https://itunes.apple.com/cn/app/id1140856767?mt=8";             
		        } else if(navigator.userAgent.match(/android/i)) {
		            window.location.href = "gyj://smart.gongyujia.com/page/home.php";   
			        window.setTimeout(function(){  
			           window.location.href = "https://android.myapp.com/myapp/detail.htm?apkName=com.gongyujia.app&ADTAG=mobile"; 
			        },1000);
		        }
		    }
		    let url = "Coupon/downloadTotal",
		    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"g_uid":"","channel":"","app_device":"","package_name":"","channel_type":this.typeApp,'channel':7};											
		    this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								
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
		},
		tab(va){
			if(va == 1){
				if($('.tab01').attr('src') == 'https://opres.gongyujia.com/H5/strengthMall/strengthMall16.png'){
					this.source = 1;
					this.animal = 2;
					$('.tab01').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall15.png');
					$('.tab02').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall18.png');
				}else{
					$('.tab01').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall16.png');
					$('.tab02').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall18.png');
				}				
			}else{
				if($('.tab02').attr('src') == 'https://opres.gongyujia.com/H5/strengthMall/strengthMall18.png'){
					this.source = 2;
					this.animal = 2;
					$('.tab01').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall16.png');
					$('.tab02').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall17.png');
				}else{
					$('.tab01').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall16.png');
					$('.tab02').attr('src','https://opres.gongyujia.com/H5/strengthMall/strengthMall18.png');
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
		getRed(){		
			var res = /^1(3|4|5|7|8)\d{9}$/;
			if(this.telNubmer.length == 11 && res.test(this.telNubmer)){
				
				let url = "Coupon/rhinoceros",
		    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1','phone_bind':this.telNubmer,"g_uid":"","channel":"","app_device":"","package_name":"","channel_type":this.typeApp,"type":this.source};											
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								$('#nubmer')[0].innerHTML=res.content.coupon_code;
								$(".tanBg001").hide();
								$(".tanBg002").fadeIn();
								$(".tanBg003").hide();
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
			$(".tanBg003").fadeOut();
			$('.cv').fadeOut();
			$('.errNull').fadeOut();	
			$('.tit').fadeOut();			
			$('.errNub').fadeOut();  	
		},
		eq(){
			$('.bjBox').hide();
			$('.eq').hide();
			$('.declare').hide();
			$(".markBg").hide();
		},
		setclick(bridge){	
        	let that = this;			
			document.getElementById('share').onclick = function(e){
				//let data = that.shareInfo;	
				let data = {
				   "share_title":"我正在公寓家抢注册福利啦！",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/strengthMall?src=1",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"满79减25元，满69减15元，还有折扣爆品等你来领！",      //副标题
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
			   "share_title":"我正在公寓家抢注册福利啦！",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/strengthMall?src=1",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"满79减25元，满69减15元，还有折扣爆品等你来领！",      //副标题
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
        },
        showDec(){
        	$(".declare").show();
        	$(".markBg").show();
        }
	},	
}
</script>

<style scoped>
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 18px;z-index: 5;}
.bj{position: relative;width:100%;background: #1849d3;}
.tomatoPd{padding-bottom: 75px; }

.tomatoPd img{ width: 100%; display: block;position: relative;}
.adv{margin-top: -60%;}
.adv .przeImg01,.adv .przeImg02{width: 39%;float: left;display: inline-block;}
.adv img{ width: 86%; margin-left: 7%;margin-top: 20px;}
.adv img:nth-of-type(3){padding-top: 20px;}
.explain{margin: 34px 0  25px;}
.tomatoBtn img{width: 74%;margin: 7% 13%;}
.tomatoBtn01{position: relative;}
.tomatoBtn01 a{ text-decoration: none; display: block;width: 100%;margin: 7% 0 7% 13%;}
.footerBut{width: 100%; position:fixed;left:0; bottom:0;  height: 50px;line-height: 51px;background-color:#f1c700;text-align: center;}
.tomatoBtn02{display: inline-block;width: 50%;background-color: #fff;height: 50px;color: #0072ff;text-align: center;font-size: 1em;font-weight: 500;}
.tomatoBtn02>img{width: 15px;vertical-align: middle;margin-right: 3px;}
.tomatoBtn03{width: 50%;background-color: #f1c700;height: 50px;color: #fff;text-align: center;font-size: 1em;font-weight: 500;display: inline;/*margin-left:16%;*/}
.tomatoBtn03>img{width: 15px;vertical-align:  middle;margin-right: 3px;}


img{width: 100%;}
.markBg{display: none; background:rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 5;}
.tanBg{display: none; width: 90%; background: #fff; border-radius:10px; position:fixed; left:5%; top:40%; z-index: 6;font-size: .65em;}
.tanBgLong{display: none; width: 90%; background: #fff; border-radius:10px; position:fixed; left:5%; top:45%; z-index: 6;font-size: .65em;}

.tanBg02{width: 100%; height: 100%; background: #fff; border-radius:10px;position: relative;}
.tanBtn02>img{width: 70%;}
.tanBtn02>img:last-of-type{margin-top: 0px;}

.titSB{color: #ff5e62;font-size: 1.45em;}
.tanBtn03>img{margin: 20px 0 10px 16px;width: 68%;}
.tanPd{ padding:10%; position: relative;text-align: center;}
.tanPd h4 img{ width: 55%;}
a.close{ position: absolute;right: 5%;top: 5%; width: 5%;}
a.otherCla{position: absolute;right:4%; top: 3%; width: 5%;}
a.closeBot{position: absolute;right: 5%;top: 5%; width: 4%}
input.telNum{ background: #f6f6f6; padding:15px 0;border-radius:10px; width: 100%; margin:28px auto; border: none; text-align: center; color: #666666; font-size: 1.5em;}
.tanBtn01{ display: block; text-decoration: none; margin: 0 10%; width: 80%;}

.cardPd{ margin:10px 0; position: relative;}
.cardPd p{ color: #fff; font-size:2.5em; font-weight: bold; position: absolute;right:4%; top: 32%;}
.successMessage{ margin-bottom: 20px;margin-left: 12px;}
.successMessage p{ color: #666;font-size: 1.45em; margin-bottom: 10px; text-align: left; line-height: 22px;}
.successMessage p span{ display: block; text-indent:1em;}

.tit,.errTel,.errNull,.errNub{z-index:10;position: absolute;top: 88%;left:22%;color: #666666;margin: 0 auto;text-align: center;width: 60%;font-size: 1.25em;margin-top: 10px;display: none;}
.cv{z-index:10;position: absolute;top: 78%;left:22%;color: #666666;margin: 0 auto;text-align: center;width: 60%;font-size: 1.25em;margin-top: 43px;display: none;}

.bjBox{position: fixed;top: 0;opacity: .8;z-index: 5;width: 100%;display: none;z-index: 30;}
.eq{width: 10%;height: auto!important;z-index: 10;position: fixed;bottom: 18%;left: 45%;display: none;z-index: 31;}

.declare{position: fixed;top: 13%;width: 92.6%;margin-left: 3.7%;z-index: 10;display: none;}

.tab01,.tab02{margin-top: 15px;}
</style>
<template>	
	<div class="bj">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
		<img src="https://opres.gongyujia.com/H5/coupon/advertising01.png" class="topBanner"/>
		<img src="https://opres.gongyujia.com/H5/coupon/advertising02.png" class="textBan"/>
		<div class="content">
			<div class="envelope">
				<!--<img src="https://opres.gongyujia.com/H5/coupon/advertising02.png" />-->
				<img src="https://opres.gongyujia.com/H5/coupon/advertising03.png" @click="reveal" class="getR"/>
				<img src="https://opres.gongyujia.com/H5/coupon/advertising03s.png" class="sc"/>
				<img src="https://opres.gongyujia.com/H5/coupon/advertising04.png" />
			</div>
		</div>
		<div class="getRed" @click="reveal">点击免费领取优惠券兑换码</div>
		<div class="box"></div>
		<div class="thickness">
			<img src="https://opres.gongyujia.com/H5/coupon/box01.jpg" />
			<div class="couponCode">券码<span class="nub"><span id="nubmer"></span></span></div>
			<img src="https://opres.gongyujia.com/H5/coupon/box02.jpg" />
			<div class="downImg" @click="cv()">复制券码</div>			
		</div>
		<div class="login">
			<div class="textTit">
				<span class="q" @click="qu">×</span>
				<p>公寓家注册有礼</p>
				<p>100元优惠券限时抢</p>
			</div>
			<input type="tel" maxlength="11" name="color" placeholder="请输入手机号" v-model="telNubmer" @keyup="isTelCorrect" class="userNub"/>
			<p class="tit">您已领过优惠券，不可重复领取哦</p>
			<p class="errNull">手机号码不能为空，请输入号码哦</p>
			<p class="errNub">请输入正确的手机号哦</p>
			<div class="gain" @click="getRed">立即领取</div>
		</div>
		<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="close" @click="close"/>
		<span class="cv">复制成功</span>
		<span class="already">已领取</span>
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"公寓家注册有礼",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			showPrise:true,
			shareInfo:{
			   "share_title":"注册公寓家,瑞淑瑜伽服优惠券免费送",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/coupon",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"搜房比价公寓家一下,注册公寓家领满300减100优惠券",      //副标题
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
			//判断页面高度
			var h=$(window).height();
			$(".bg").css("height",h);				
        });	
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data ={
			   "share_title":"注册公寓家,瑞淑瑜伽服优惠券免费送",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/coupon",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"搜房比价公寓家一下,注册公寓家领满300减100优惠券",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
		    };
    	data = JSON.stringify(data);
		if(isAndroid){
			this.showPrise = false;
			android.showShareButton(data);	
			//that.setclick(null);
		}else if(isiOS){
			this.showPrise = false;
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				//that.setclick(bridge);							
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
		reveal(){
			$('.box').show();
			$('.login').show();
		},
		getRed(){
			var res = /^1(3|4|5|7|8)\d{9}$/;
			if(this.telNubmer.length == 11 && res.test(this.telNubmer)){
				let url = "Coupon/coupon_code",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1','phone_bind':this.telNubmer,"g_uid":"","channel":"","app_device":"","package_name":""};											
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								$('.cs').show();	
								$('#nubmer')[0].innerHTML=res.content.coupon_code;
								$('.thickness').show();
								$('.box').show();
								$('.close').show();
								$('.login').hide();									
							}else if(res.ret == '2'){
								$('.tit').show();
								$('.box').show();
							}									
						},
						error:( res)=>{
							alert(res)							
						}
					})
				});
			}else{
				if(this.telNubmer.length==0){
					$('.errNull').show();
					$(function(){
						setTimeout(() => {
			              $('.errNull').hide();
			            }, 3000);
					});
				}else if(this.telNubmer.length > 0 || this.telNubmer.length < 11){
					$('.errNub').show();
					$(function(){
						setTimeout(() => {
			              $('.errNub').hide();
			            }, 3000);
					});
				}
			}			
		},
		cv(){
			const range = document.createRange();
	        range.selectNode(document.getElementById('nubmer'));
	
	        const selection = window.getSelection();
	        if(selection.rangeCount > 0) selection.removeAllRanges();
	        selection.addRange(range);
	        document.execCommand('copy');
			$('.cv').show();
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
			$('.thickness').hide();
			$('.box').hide();
			$('.close').hide();
		},
		qu(){
			$('.box').hide();
			$('.login').hide();
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
				let data ={
						   "share_title":"注册公寓家,瑞淑瑜伽服优惠券免费送",        //分享标题
						   "share_url":"https://special.gongyujia.com/#/coupon",          //链接
						   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
						   "share_subtitle":"搜房比价公寓家一下,注册公寓家领满300减100优惠券",      //副标题
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
	},
}
</script>

<style scoped>
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 18px;z-index: 10;}
.q{font-size: 36px;position: absolute;top: 0px;right: 16px;}
.box{z-index: 10;width: 100%;height: 100%;background-color: #000;opacity: 0.5;position: absolute;top: 0;display:none;}
.bj{position: relative;background-color: #f2def8;}
.topBanner{width: 100%;position: relative;}
.textBan{margin-top: -4px;}
.content{width: 100%;margin-top: -5px;padding-bottom: 83px;}
.envelope{width: 92.4%;margin-left: 3.8%;background-color: #fff;padding-bottom: 15px;border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;}
.envelope>img{width: 92%;margin-left: 4%;}
.envelope>img:nth-of-type(2){width: 92%;margin-left: 4%;display: none;}
.getRed{width: 100%;height: 50px;background-color: #fe6675;color: #fff;text-align: center;line-height: 50px;font-size: .9em;position: fixed;bottom: 0;}
.thickness{display:none; border-radius: 16px;width: 85%;margin-left: 7.5%;position: fixed;top: 15%;background-color: #fff;z-index: 10;}
.thickness>img:first-of-type{border-top-left-radius: 16px;border-top-right-radius: 16px;}
.couponCode{font-size: 1.15em;width: 90%;margin-left: 5%;color: #fe6675;}
.nub{font-size: .95em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; margin-left: 5px;width: 200px;}
.downImg{width: 200px;height: 45px;line-height: 45px;margin: 0 auto;text-align: center;background-color: #fe6675;color: #fff;border-radius: 30px;margin-bottom: 20px;}
.close{display:none;z-index: 20;position: fixed;bottom: 8%;left: 50%;text-align: center;margin-left: -18px;width: 35px;}
.usr,.cs,.cv,.already{display:none;z-index: 30;position: fixed;top: 40%;left: 25%;width: 195px;text-align: center;color: #fff;padding: 10px;background-color: #000;opacity: .7;border-radius: 8px;}
.login{display:none;border-radius: 16px;width: 90%;margin-left: 5%;position: fixed;top: 16%;background-color: #fff;z-index: 10;}
.userNub{outline:none;resize: none;box-sizing: border-box;width: 70%;height: 50px;margin-left: 15%;border-radius: 13px;border: 1px solid #d2d2d2;padding-left: 5%;  -webkit-appearance: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/}
.gain{width: 200px;height: 45px;line-height: 45px;margin: 0 auto;text-align: center;background-color: #fe6675;color: #fff;border-radius: 30px;    margin-top: 45px;margin-bottom: 40px;}
.tit,.errTel,.errNull,.errNub{color: #fe6675;margin: 0 auto;width: 60%;font-size: .75em;margin-top: 10px;display: none;}
.textTit{width: 100%;height: 103px;text-align: center;color: #000;}
.textTit>p:first-of-type{font-size: 1.45em;font-weight: 600;margin-top: 22px;}
.textTit>p:last-of-type{font-size: 1.15em;color: #333;}
input[name="color"]::-webkit-input-placeholder { /* WebKit browsers */ color: #c9c9c9;font-size:15px;outline:none;resize: none;box-sizing: border-box;}
input[name="color"]:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ color: #c9c9c9;font-size:15px;outline:none;resize: none;box-sizing: border-box;} 
input[name="color"]::-moz-placeholder { /* Mozilla Firefox 19+ */ color: #c9c9c9;font-size:15px;outline:none;resize: none;box-sizing: border-box;}
input[name="color"]:-ms-input-placeholder { /* Internet Explorer 10+ */ color: #c9c9c9;font-size:15px;outline:none;resize: none;box-sizing: border-box;}
</style>
<template>	
	<div class="bj">
		<div class="box">
			<!--<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share"/>-->
			<img src="https://opres.gongyujia.com/H5/zeroAct/zeroAct01.png" class="topBanner"/>	
			<img src="https://opres.gongyujia.com/H5/zeroAct/zeroAct03.png" class="ban"/>		
			<input type="tel" maxlength="11" name="color" placeholder="请输入手机号" v-model="telNubmer" @keyup="isTelCorrect" class="userNub"/>	
			<p class="tit">您已领过优惠券，不可重复领取哦</p>
			<p class="errNull">手机号码不能为空，请输入号码哦</p>
			<p class="errNub">请输入正确的手机号哦</p>
			<div class="gain" @click="getRed">立即领取</div>					
				
			<div class="couponCode"><span class="nub"><span id="nubmer"></span></span></div>
			<div class="downImg" @click="cv()"><span>复制券码</span></div>		
	
			<span class="cv">复制成功</span>
			<span class="already">已领取</span>
		</div>
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"0元抢购保洁券",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			copyData:"",
			shareInfo:{
			   "share_title":"0元抢购保洁券",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/zeroActivity",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"搜房比价公寓家一下,公寓家注册有礼",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},
	beforeMount(){		
		document.title = this.title;
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
		if(isAndroid){
			that.setclick(null);
		}else if(isiOS){
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
				let url = "Coupon/small_program",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1','phone_bind':this.telNubmer};											
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								$('#nubmer')[0].innerHTML=res.content.coupon_code;
								$('.topBanner').attr('src','https://opres.gongyujia.com/mini/special/zeroAct02.png');
								$('.ban').hide();
								$('.userNub').hide();								
								$('.downImg').show();
								$('.gain').hide();
							}else if(res.ret == '2'){
								$('.tit').show();															
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
					$('.errNull').show();
					
					$(function(){
						setTimeout(() => {
			              $('.errNull').hide();
			            
			            }, 2000);
					});
				}else if(this.telNubmer.length > 0 || this.telNubmer.length < 11){
					$('.errNub').show();
					
					$(function(){
						setTimeout(() => {
			              $('.errNub').hide();
			             
			            }, 2000);
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
				let data = that.shareInfo;	   
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
.bj{position: relative;width:100%;background-color: #435beb;padding-bottom: 24px;}
.box{width: 100%;position: relative;}
.topBanner,.ban{width: 100%;position: relative;}
.ban{margin-bottom: 20px;}
.textBan{margin-top: -4px;}
.titCont{color: #846345;font-size: 1.35em;width: 45%;text-align: center;margin: 30px auto;}
.titCont>p>span{font-size: 1.15em;font-weight: 600;}
.content{width: 92.4%;margin-left: 3.8%;}
.getBut{width: 70%;height: 36px;background-color: #846345;color: #fff;text-align: center;line-height: 36px;font-size: .65em;margin: 0 auto;border-radius: 26px;margin-top: 18px;}
.getRed{width: 100%;height: 50px;background-color: #846345;color: #fff;text-align: center;line-height: 50px;font-size: 1em;position: fixed;bottom: 0;}
.mgT{margin-bottom: 18%;}
.thickness{display:none; border-radius: 16px;width: 95%;margin-left: 2.5%;position: fixed;top: 22%;background-color: #fff;z-index: 10;}
.thickness>img:first-of-type{width: 92.4%;margin: 5% 3.8%;}
.couponCode{font-size: .9em;width: 38%;margin-left: 38%;color: #333;position: absolute;top: 30.5%;}
.downImg{display:none;color: #fff;border-radius: 30px;margin-bottom: 20px;width: 87%;height: 50px;line-height: 50px;z-index: 2;margin-left: 6.5%;text-align: center;background-color: #ff3b3b;position: absolute;bottom: 8%;font-size: 1.2em;}
.downImg>span{margin-left: 3px;font-size: .85em;}
.usr,.cv,.already{display:none;z-index: 30;position: fixed;top: 34%;left: 25%;width: 195px;text-align: center;color: #fff;padding: 10px;background-color: #000;opacity: .7;border-radius: 8px;}
.userNub{font-size: 1em;outline: none;resize: none;box-sizing: border-box;width: 87%;height: 50px;line-height:50px;margin-left: 6.5%;border-radius: 13px;border: 1px solid #d2d2d2;text-align: center;  -webkit-appearance: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/color: #435beb;}
.gain{width: 87%;height: 45px;line-height: 45px;margin: 0 auto;text-align: center;background-color: #fcc530;color: #fff;border-radius: 30px;margin-top: 35px;font-size: 1em;}
.tit,.errTel,.errNull,.errNub{position: absolute;bottom: 8%;left:8%;color: #fe6675;margin: 0 auto;width: 60%;font-size: .75em;margin-top: 10px;display: none;}
.textTit{width: 100%;height: 103px;text-align: center;color: #000;}
.textTit>p:first-of-type{font-size: 1.45em;font-weight: 600;margin-top: 22px;}
.textTit>p:last-of-type{font-size: 1.15em;color: #333;}
input[name="color"]::-webkit-input-placeholder { /* WebKit browsers */ color: #888;font-size:1em;outline:none;resize: none;box-sizing: border-box;}
input[name="color"]:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ color: #888;font-size:1em;outline:none;resize: none;box-sizing: border-box;} 
input[name="color"]::-moz-placeholder { /* Mozilla Firefox 19+ */ color: #888;font-size:1em;outline:none;resize: none;box-sizing: border-box;}
input[name="color"]:-ms-input-placeholder { /* Internet Explorer 10+ */ color: #888;font-size:1em;outline:none;resize: none;box-sizing: border-box;}
</style>
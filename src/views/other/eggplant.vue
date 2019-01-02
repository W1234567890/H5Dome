<template>	
	<div class="bj">
			<!--弹框-->
	  	<p class="markBg" @click="close"></p>
	  	<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
	  	<div class="tanBg tanBg001">
	  		<div class="tanBg02">
		  		<div class="tanPd">
		  			<a href="javascript:;" class="close" @click="close"><img src="https://opres.gongyujia.com/H5/eggplant/close.png"></a>
	  				<div class="tanK01">
		  				<h4><img src="https://opres.gongyujia.com/H5/eggplant/title.png"></h4>
		  				<input type="tel" maxlength="11" name="color" placeholder="请输入手机号" v-model="telNubmer" @keyup="isTelCorrect" class="telNum"/>
		  				<a href="javascript:;" class="tanBtn01"><img src="https://opres.gongyujia.com/H5/eggplant/tanBtn01.png" @click="getRed"></a>
		  			</div>
		  		</div>
	  		</div>
	  	</div>
	  	<div class="tanBg tanBg002">
	  		<div class="tanBg02">
		  		<div class="tanPd">
		  			<a href="javascript:;" class="close" @click="close"><img src="https://opres.gongyujia.com/H5/eggplant/close.png"></a>
		  			<div class="tanK02">
	  					<img src="https://opres.gongyujia.com/H5/eggplant/title02.png" />
	  					<div class="cardPd">
	  						<img src="https://opres.gongyujia.com/H5/eggplant/card.png" />
	  						<p id="nubmer"></p>
	  					</div>
	  					<div class="successMessage">
	  						<p>1.每张券仅可使用1次，不可叠加使用。</p>
	  						<p>2.该券有效期至：2019年12月31日。</p>
	  						<p>3.仅限杭州市拱墅区塘萍路197-203号店<span>（城西银泰旁600米）使用</span><span> 商家电话：0571-86938810。</span></p>
	  						<p>4.其他规则请咨询商家客服。</p>
	  					</div>
		  				<a href="javascript:;" class="tanBtn02"><img src="https://opres.gongyujia.com/H5/eggplant/tanBtn02.png" @click="cv"></a>
		  			</div>
		  		</div>
	  		</div>
	  	</div>
	  	<!--弹框结束-->
	  	
	  	<div class="tomatoPd">
	  		<img src="https://opres.gongyujia.com/H5/eggplant/tomato01.jpg"/>
	  		<div class="tomatoBtn01">
	  			<img src="https://opres.gongyujia.com/H5/eggplant/tomato02.png"/>
	  			<a href="javascript:;" class="tomatoBtn" @click="login"><img src="https://opres.gongyujia.com/H5/eggplant/Btn01.png"></a>
	  		</div>
	  		<img src="https://opres.gongyujia.com/H5/eggplant/tomato03.png"/>
	  		<img src="https://opres.gongyujia.com/H5/eggplant/tomato04.png"/>
	  	</div>
	  	<a href="javascript:;" class="tomatoBtn02 tomatoBtn" @click="login"><img src="https://opres.gongyujia.com/H5/eggplant/tomatoBtnWord.png"></a>
			
		<p class="tit">您已领过优惠券，不可重复领取哦</p>
		<p class="errNull">手机号码不能为空，请输入号码哦</p>
		<p class="errNub">请输入正确的手机号哦</p>
		<span class="cv">复制成功</span>
		
	</div>
</template>

<script>
export default {
    data(){
		return {
			title:"番小茄小儿推拿五重厚礼",			
			g_uid:'',
			urlHttp:"",
			token:"",
			telNubmer:"",
			copyData:"",
			showPrise:true,
			shareInfo:{
			   "share_title":"注册公寓家,领番小茄小儿推拿五重厚礼",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/eggplant",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"专享抵价券100元,价值258元宝宝体质调理等厚礼快来领",      //副标题
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
			var h1=-$(".tanBg001").height()/2;
			var h2=-$(".tanBg002").height()/2;
			$(".tanBg001").css("margin-top",h1);
			$(".tanBg002").css("margin-top",h2);				
        });	       
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"注册公寓家,领番小茄小儿推拿五重厚礼",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/eggplant",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"专享抵价券100元,价值258元宝宝体质调理等厚礼快来领",      //副标题
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
		login(){
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
				let url = "Coupon/minor_program",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1','phone_bind':this.telNubmer,"g_uid":"","channel":"","app_device":"","package_name":""};											
	            this.getByUrl({data,url}, res=>{
					this.ajax({
						url : res.url,
						data : res.data,						
						success:( res)=>{
							if(res.ret == '0'){
								$('#nubmer')[0].innerHTML=res.content.coupon_code;
								$(".tanBg001").hide();
								$(".tanBg002").fadeIn();
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
			$(".markBg").fadeOut();
			$(".tanBg001").fadeOut();
			$(".tanBg002").fadeOut();
			$('.cv').fadeOut();
			$('.errNull').fadeOut();	
			$('.tit').fadeOut();			
			$('.errNub').fadeOut();  
		},
		setclick(bridge){	
        	let that = this;			
			document.getElementById('share').onclick = function(e){
				//let data = that.shareInfo;	
				let data = {
					   "share_title":"注册公寓家,领番小茄小儿推拿五重厚礼",        //分享标题
					   "share_url":"https://special.gongyujia.com/#/eggplant",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"专享抵价券100元,价值258元宝宝体质调理等厚礼快来领",      //副标题
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
.bj{position: relative;width:100%;background: #feefd4;}
.tomatoPd{padding-bottom: 50px; }
.tomatoPd img{ width: 100%; display: block;}
.tomatoBtn01{position: relative;}
.tomatoBtn01 a{ text-decoration: none; display: block; position: absolute; width: 94%;left:3%; bottom: 0;}
.tomatoBtn02{ position:fixed;left:0; bottom:0; display: block; text-decoration: none; width:100%;height: 50px; background: -webkit-linear-gradient(#ffaba5, #fe9d96); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(#ffaba5, #fe9d96); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(#ffaba5, #fe9d96); /* Firefox 3.6 - 15 */
background: linear-gradient(#ffaba5, #fe9d96); /* 标准的语法（必须放在最后） */ text-align: center;}
.tomatoBtn02 img{ height: 20px; margin: 15px auto; width: auto;}

img{width: 100%;}
.markBg{display: none; background:rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 5;}
.tanBg{display: none; width: 90%; background: #fff; border-radius:10px; position:fixed; left:5%; top:50%; z-index: 6;font-size: .65em;}
.tanBg02{width: 94%; height: 100%; background: #fff; border-radius:10px;margin: -3% 0 -3% 3%; padding-bottom: 5%; position: relative;}
.tanPd{ padding:8% 8% 0; position: relative;text-align: center;}
.tanPd h4 img{ width: 55%;}
a.close{ position: absolute;right:3%; top: 5%; width: 5%;}
input.telNum{ background: #f6f6f6; padding:10px 0;border-radius:10px; width: 100%; margin:28px auto; border: none; text-align: center; color: #666666; font-size: 1.5em;}
.tanBtn01{ display: block; text-decoration: none; margin: 0 auto; width: 80%;}

.cardPd{ margin:20px 0; position: relative;}
.cardPd p{ color: #fff; font-size:1.35em; font-weight: bold; position: absolute;right:8%; top: 38%;}
.successMessage{ margin-bottom: 20px;}
.successMessage p{ color: #666;font-size: 1.2em; margin-bottom: 10px; text-align: left; line-height: 24px;}
.successMessage p span{ display: block; text-indent:1em;}

.tit,.errTel,.errNull,.errNub{z-index:10;position: fixed;bottom: 42%;left:22%;color: #fe6675;margin: 0 auto;text-align: center;width: 60%;font-size: .85em;margin-top: 10px;display: none;}
.cv{z-index:10;position: fixed;bottom: 25.5%;left:22%;color: #fe6675;margin: 0 auto;text-align: center;width: 60%;font-size: .85em;margin-top: 10px;display: none;}
</style>
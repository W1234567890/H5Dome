<template>	
	<div class="bg">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises"/>
		<img src="https://opres.gongyujia.com/H5/enter/login.png" id="successBj" style="display: none;width: 100%;" @click="close"/>
	  	<img src="https://opres.gongyujia.com/H5/register/register01.png" class="bgImg" />	  	
	  	<div class="messagePd">
	  		<div class="messageListBg">
		  		<div class="messageList">	
		  			<form>
		  				<div class="messageListPd">
			  				<input placeholder="您的姓名" class="brandsInput" v-model="formObj.nameUser"/>	  					  					
			  			</div>
			  			<div class="lastmes messageListPd">			  						  				
			  				<input type="tel" maxlength="11"  placeholder="您的手机" class="brandsInput" v-model="formObj.Nubmer"  @keyup="isTelCorrect"/>
			  			</div>
			  			<div class="houseList">				  				
			  				<select v-model="formObj.houseNub" v-if="formObj.houseNub == '0'" style="color:#888;" @click="seleClick">
			  					<option value="0">您的公寓数量</option>
		  						<option value="1">5套以下</option>
								<option value="2">5-10套</option>							
								<option value="3">10-20套</option>
								<option value="4">20-30套</option>
								<option value="5">30-50套</option>							
								<option value="6">50-80套</option>
								<option value="7">80-100套</option>
								<option value="8">100套以上</option>
							</select>
							<select v-model="formObj.houseNub" v-else="formObj.houseNub != '0'" @click="seleClick">
			  					<option value="0">您的公寓数量</option>
		  						<option value="1">5套以下</option>
								<option value="2">5-10套</option>							
								<option value="3">10-20套</option>
								<option value="4">20-30套</option>
								<option value="5">30-50套</option>							
								<option value="6">50-80套</option>
								<option value="7">80-100套</option>
								<option value="8">100套以上</option>
							</select>
			  			</div>
			  			<div class="ide">			  					  			
	  						<select v-model="formObj.identity" v-if="formObj.identity == '0'" style="color:#888;" @click="seleClick">
	  							<option value="0">您的身份</option>
		  						<option value="1">我是业主</option>
								<option value="2">我是职业房东</option>							
								<option value="3">我是经纪人</option>									
							</select>	
							<select v-model="formObj.identity" v-else="formObj.identity != '0'" @click="seleClick">
	  							<option value="0">您的身份</option>
		  						<option value="1">我是业主</option>
								<option value="2">我是职业房东</option>							
								<option value="3">我是经纪人</option>									
							</select>
			  			</div>
	  					<div class="city">				  					
			  				<select v-model="formObj.area_code" v-if="formObj.area_code == '0'" style="color:#888;" @click="seleClick">
			  					<option value="0">您的城市</option>
		  						<option value="021">上海市</option>
								<option value="010">北京市</option>							
								<option value="020">广州市</option>
								<option value="0755">深圳市</option>
								<option value="0571">杭州市</option>							
								<option value="028">成都市</option>
								<option value="8888">其他城市</option>
							</select>
							<select v-model="formObj.area_code" v-else="formObj.area_code != '0'" @click="seleClick">
			  					<option value="0">您的城市</option>
		  						<option value="021">上海市</option>
								<option value="010">北京市</option>							
								<option value="020">广州市</option>
								<option value="0755">深圳市</option>
								<option value="0571">杭州市</option>							
								<option value="028">成都市</option>
								<option value="8888">其他城市</option>
							</select>
			  			</div>
			  			<button class="login" @click="showData">免费入住</button>
			  			<span class="nub">入驻专线<a :href="'tel:'+tel"> 400-160-5660</a></span>	  			  			
		  			</form>
		  		</div>		  		
		  	</div>	
		  	<img src="https://opres.gongyujia.com/H5/register/register02.png" class="advertising"/>
	  		<img src="https://opres.gongyujia.com/H5/register/register03.png" class="advertising"/>
	  		<img v-lazy="reg04" class="advertising" @click="shade"/>
	  		<img v-lazy="reg05" class="advertising"/>
	  	</div>
  		
  		<div class="submitBtn" style="list-style: none;outline: none;" @click="showData">免费入住</div>	
  		<div class="box"></div>
  		<div class="contBox">
  			<img src="https://opres.gongyujia.com/H5/register/register10.png" class="contImg"/>
  			<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="eq" @click="eq" id="eq"/>
  		</div>
	</div>
	
</template>

<script>
export default {
    data(){
		return {
			title:"品牌馆入驻",	
			showPrises:true,
			data:{},
			formObj:{
				area_code:"0",
				identity:"0",
				houseNub:"0",
				nameUser:"",
				Nubmer:""				
			},
			sign:"",
			reg04:'https://opres.gongyujia.com/H5/register/register04.png',
			reg05:'https://opres.gongyujia.com/H5/register/register05.png',
			tel:4001605660,
			shareInfo:{
			   "share_title":'公寓家品牌馆入驻招募',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/newMobile",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"免费获得流量扶持，名额有限，招完即止",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},
	beforeMount(){	
    	document.title = this.title; 
    	this.weixinAndPay();   	
	},
	mounted() {	
		if(screen.height == 667 && screen.width == 375){
            $('.eq').css({"position":"fixed","bottom":"5%",});          
        }else if (screen.height == 736 && screen.width == 414) {
			$('.eq').css({"position":"fixed","bottom":"5%",}); 
		}
		$(function () {
			//判断页面高度
			var h=$(window).height();
			$(".box").height(h*2);							           
        });
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	  	}; 
	  	let that = this;       
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data ={
			   "share_title":'公寓家品牌馆入驻招募',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/newMobile",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"免费获得流量扶持，名额有限，招完即止",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    	data =  JSON.stringify(data);
		if(isAndroid){
			this.showPrises = false;
			android.showShareButton(data);
			//that.setclick(null);
		}else if(isiOS){
			this.showPrises = false;
			that.setupWebViewJavascriptBridge(function(bridge) {					
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				//that.setclick(bridge);							
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
			document.getElementById('share').onclick = function(e){			
				//let data = that.shareInfo;
				let data ={
						   "share_title":'公寓家品牌馆入驻招募',        //分享标题
						   "share_url":"https://special.gongyujia.com/#/newMobile",          //链接
						   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
						   "share_subtitle":"免费获得流量扶持，名额有限，招完即止",      //副标题
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
		//手机号是否正确
		isTelCorrect(){			
			if(this.formObj.Nubmer.length<12){
				console.log(this.formObj.Nubmer)
			};			
		},				    
		showData(e){			
			(function smoothscroll(){
				var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			    if (currentScroll > 0) {
			         window.requestAnimationFrame(smoothscroll);
			         window.scrollTo (0,currentScroll - (currentScroll/5));
			    }
			})();
			
			var res = /^1(3|4|6|5|7|8|9)\d{9}$/;			
			if(this.formObj.nameUser){				
				if(this.formObj.houseNub != "0"){
					if(this.formObj.identity  != "0"){
						if(this.formObj.area_code  != "0"){
							if(this.formObj.Nubmer.length == 11 && res.test(this.formObj.Nubmer)){								
								let url = "brand/brand_enter_new",
								    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":this.formObj.area_code,"userIdentity":this.formObj.identity, "rentamount":this.formObj.houseNub,"telNubmer":this.formObj.Nubmer,'userName':this.formObj.nameUser,"g_uid":"","channel":"","app_device":"","package_name":""};								
								this.getByUrl({data,url}, res=>{
									this.ajax({
										url : res.url,
										data : res.data,
										success:( res)=>{
											console.log(res.ret)
											if(res.ret == 0){
												//判断页面高度
												var h=$(window).height();
												$("#successBj").height(h);	
												$("#successBj").css({"display":"block","z-index":"20"});
												$('.submitBtn').hide();	
												$('.bgImg').hide();
												$('.messagePd').hide();
												$('.bg').css("padding-bottom","0");
												$('.advertising').hide();
											}else if(res.ret == 1){
												alert('您已提交过申请，请耐心等待审核！');											
		//											var h=$(window).height();
		//											$("#successBj").height(h);	
		//											$("#successBj").css({"display":"block","z-index":"20"});
		//											$('.submitBtn').hide();	
		//											$('.bgImg').hide();
		//											$('.messagePd').hide();
		//											$('.bg').css("padding-bottom","0");
											}
										}
									})
								});
							}else{
								alert('请输入正确的手机号码');	       
							}
						}else{
							alert('请选择城市');
						}												
					}else{
						alert('请选择您的身份');
					}
				}else{
					alert('请填写您要出租的房屋数');
				}			
			}else{
				var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
				if(currentScroll > 20){
					
				}else{
					alert('请输入您的姓名');
				}	
			}
//			let apikey,token;
//			token="f4b36b276562c00dd22dddb9436882f2";
//			apikey="9465c5d8c954415c164b3327f8d47d0c";
//			this.sign = this.us(token, apikey);						
		},
		us(tk, ak){
			let ta = tk + ak;
			let sign = this.$md5(ta);
			return sign;				
		},
		//关闭浏览器 请求参数
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
		shade(){
        	$('.box').show();
        	$('.contBox').show();
        	$('.contImg').show();
        	$('.eq').show();
		},
		eq(){			
        	$('.box').hide();
        	$('.contBox').hide();
        	$('.contImg').hide();
        	$('.eq').hide();
		},
		seleClick(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			if(isAndroid){
				var originalHeight=document.documentElement.clientHeight ||document.body.clientHeight;
				window.onresize=function(){
				    //键盘弹起与隐藏都会引起窗口的高度发生变化
				       var resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
				        if(resizeHeight-0<originalHeight-0){
				       		$('.submitBtn').hide();
				        }else{
				         	$('.submitBtn').show();
				        }
				}      		        
	        }else if(isiOS){
	        	document.body.addEventListener('focusin', () => {        		
		            //软键盘弹出的事件处理		           
					$('.submitBtn').hide();
		        })
			    document.body.addEventListener('focusout', () => {
				    //软键盘收起的事件处理			       
					$('.submitBtn').show();			       
			    })
		    }
		},
	},
}
</script>

<style scoped>
.box{z-index: 10;width: 100%;background-color: #000;opacity: 0.5;position: fixed;top: 0;display:none;}
input,select,option,textarea{outline: none;}
.messageListPd{position: relative;}
.houseList{position: relative;border-bottom: 1px solid #f5f5f5;}
.ide{position: relative;border-bottom: 1px solid #f5f5f5;} 
.city{position: relative;border-bottom: 1px solid #f5f5f5;}
.houseList:after{content: "";
width: 14px;
height: 8px;
background: url(https://opres.gongyujia.com/H5/register/register06.png) 0 0 no-repeat;
background-size: 5% 22%;
position: absolute;
right: 20px;
top: 45%;
pointer-events: none;}
.houseList>select{text-align: left;font-size:.85em;appearance: none;-moz-appearance: none;-webkit-appearance: none;-ms-appearance: none;border: 0;width: 100%;height: 43px;background: url(https://opres.gongyujia.com/H5/register/register06.png) 0 0 no-repeat;background-size: 5% 22%;background-position: 98% 60%;background: #fff\9;color: #333;outline: none;}
.ide>select{text-align: left;font-size:.85em;appearance: none;-moz-appearance: none;-webkit-appearance: none;-ms-appearance: none;border: 0;width: 100%;height: 43px;background: url(https://opres.gongyujia.com/H5/register/register06.png) 0 0 no-repeat;background-size: 5% 22%;background-position: 98% 60%;background: #fff\9;color: #333;outline: none;}
.city>select{text-align: left;font-size:.85em;appearance: none;-moz-appearance: none;-webkit-appearance: none;-ms-appearance: none;border: 0;width: 100%;height: 43px;background: url(https://opres.gongyujia.com/H5/register/register06.png) 0 0 no-repeat;background-size: 5% 22%;background-position: 98% 60%;background: #fff\9;color: #333;outline: none;}
.houseList>select::-ms-expand { display: none; background: transparent;border:none;outline: none;background: url(https://opres.gongyujia.com/H5/register/register07.png) 0 0 no-repeat;background-position: 98% 60%;background: #fff\9;}
.ide>select::-ms-expand { display: none; background: transparent;border:none;outline: none;} 
.city>select::-ms-expand { display: none; background: transparent;border:none;outline: none;}
.bg{background-color: #efc6b6;padding-bottom: 80px;background: url(https://opres.gongyujia.com/H5/register/register09.jpg) 0 0 no-repeat;background-size: 100%;background-position: top; }
.messageListBg{ width: 92.6%; margin-left: 3.7%; background: #fff; border-radius:10px;position: relative;}
.messageList{padding: 8% 10% 6% 12%;position: relative;}
.messageTitle{ color: #333; font-size: .85em;}
.messageCity{ position: absolute; right: 0; top: 88px; text-align: right;font-size: .85em;}
.messageCity input{ display: inline-block; color: #666; font-size: 1em; width: 80px; text-align: right; background: none;padding-right: 18px; position: absolute; right: 0; top: 0;}
.messageRadio{display: inline-block;margin-top: 8px;}
.messageRadio label{font-size: .75em;position: relative;left: -7px;top: 2px;}
.messageRadio input{position: relative;top: 2px;vertical-align: middle;}
.messageRadio>img{width: 12px;vertical-align: middle;}
.messageCity img{ width: 8px; vertical-align: middle;}
.messageRadio{position: relative;}
.messageRadio>input:last-of-type{margin-left: 58px;}
.treePd{ position: absolute;left: -6.575%; width:10%; z-index: 1; top: 3%;}
.brandsInput{ margin-top: 5px; border: none; width: 100%; border-radius:0; border-bottom: 1px solid #f5f5f5; padding: 12px 0; text-align: left; color: #333; font-size: 1em;}
.nub{margin-left: 26%;color: #888;font-size: .75em;margin-bottom: 36px;}
.login{margin: 36px 0 25px;width: 70%;margin-left: 15%;text-align: center;height: 40px;background-color: #f45e54;line-height: 28px;color: #fff;border-radius: 26px;border: 0;}
.submitBtn{ border: 0;background-color: #f45e54;outline:none;border: 0;width: 100%; padding:14px 0; text-align: center; background: #f45e54; font-size:1em; color: #fff; position: fixed;left: 0; bottom: 0; z-index: 10;text-decoration: none; display: block;}
input[type=submit] {border: 0;background-color: #f45e54;outline:none;}
.tips{ background: rgba(0,0,0,0.7); padding:15px 0; width: 60%; border-radius:10px; color: #fff; font-size:1em; position: fixed; left:20%; top: 40%; z-index: 0; text-align: center;}
.advertising{width: 92.6%;margin-left: 3.7%;margin-top: 20px;}

.contBox{display: none;}
.contImg{width: 92.6%;margin-left: 3.7%;position: fixed;top: 6%;display: none;z-index: 31;}
.eq{width: 10%;height: auto!important;position: fixed;bottom: 10%;left: 45%;display: none;z-index: 31;}
input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#888;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:#888;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:#888;
}
input:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:#888;
}
</style>

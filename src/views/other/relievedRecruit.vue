<template>	
	<div class="bg">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrises"/>
		<img src="https://opres.gongyujia.com/H5/enter/login.png" id="successBj" style="display: none;width: 100%;" @click="close"/>
	  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitBanner.jpg" class="recruitimg" />	
  		<div class="recruitimgPd">
		  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitImg01.png" />
		  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitImg02.png" />
		  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitImg03.png" />  		
	  	</div>
	  	<div class="recruitimgPd2">
		  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitImg04.png" />
		  	<img src="https://opres.gongyujia.com/H5/relievedRecruit/recruitImg05.png" />
	  	</div>	  	
			  	
		<div class="recruitBtn recruitBtn0101" v-if="boxStb">
	  		<div class="recruitTopImg">
	  			<img src="https://opres.gongyujia.com/H5/relievedRecruit/joinBanner.jpg" />
	  			<p>欢迎加入安心住计划</p>
	  		</div>
	  		<p class="messageTop">请留下联系方式，工作人员马上与您联系</p>
	  		<div class="inputText">
	  			<p><input type="text" placeholder="您的称呼" v-model="formObj.nameUser"/></p>
	  			<p><input type="tel" maxlength="11" placeholder="您的手机号"  v-model="formObj.Nubmer"  @keyup="isTelCorrect"/></p>
	  		</div>
	  		<a href="javascript:;" class="recruitBtnTanBtn recruitBtn01Btn" @click="showData">立即报名</a>
	  		<p class="successP" v-if="sec">报名成功</p>
	  	</div>
  		<div class="submitBtn" @click="subBtn">我要报名</div>
  		
  		<div class="box" @click="eq"></div>  		
	</div>
	
</template>

<script>
export default {
    data(){
		return {
			title:"安心住招募",	
			showPrises:true,
			boxStb:false,
			sec:false,
			data:{},
			formObj:{				
				nameUser:"",
				Nubmer:""				
			},
			sign:"",
			shareInfo:{
			   "share_title":'有质检 安心住',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/relievedRecruit",          //链接
			   "share_image":"https://opres.gongyujia.com/H5/relievedRecruit/relievedRec01.png",        //图片
			   "subtitle":"公寓家诚邀空气质检合格房源加入",      //副标题
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
	  	var ua = window.navigator.userAgent.toLowerCase();
	  	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
	  	if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       	       
		}else if(isAndroid){
			let data ={
			   "share_title":'有质检 安心住',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/relievedRecruit",          //链接
			   "share_image":"https://opres.gongyujia.com/H5/relievedRecruit/relievedRec01.png",        //图片
			   "share_subtitle":"公寓家诚邀空气质检合格房源加入",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    		data =  JSON.stringify(data);
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
						  "share_title":'有质检 安心住',        //分享标题
						   "share_url":"https://special.gongyujia.com/#/relievedRecruit",          //链接
						   "share_image":"https://opres.gongyujia.com/H5/relievedRecruit/relievedRec01.png",        //图片
						   "share_subtitle":"公寓家诚邀空气质检合格房源加入",      //副标题
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
		subBtn(){
			this.boxStb = true;
			$('.box').show();
		},		
		showData(e){	
			var res = /^1(3|4|6|5|7|8|9)\d{9}$/;
			console.log(this.formObj.nameUser)
			if(this.formObj.nameUser){											
				if(this.formObj.Nubmer.length == 11 && res.test(this.formObj.Nubmer)){								
					let url = "Recruit/peace_recruit",
					    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"mobile":this.formObj.Nubmer,'user_name':this.formObj.nameUser,"g_uid":"","channel":"","app_device":"","package_name":""};								
					this.getByUrl({data,url}, res=>{
						this.ajax({
							url : res.url,
							data : res.data,
							success:( res)=>{
								console.log(res.ret)
								if(res.ret == 0){
									this.sec = true;
									setTimeout(function() {
						  				$('.recruitBtn').hide();
										$('.box').hide();
										$('.successP').hide();
						  			},2000)
								}else if(res.ret == 1){
									alert('您已提交过申请，请耐心等待审核！');		
									this.boxStb = false;
									$('.box').hide();
								}
							}
						})
					});
				}else{
					alert('请输入正确的手机号码');	       
				}				
			}else{
//				var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//				if(currentScroll > 20){					
//				}else{
					alert('请输入您的姓名');
//				}	
			}				
		},
		us(tk, ak){
			let ta = tk + ak;
			let sign = this.$md5(ta);
			return sign;				
		},
		//关闭浏览器 请求参数
		close(){
			var ua = window.navigator.userAgent.toLowerCase();
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       	       
				wx.miniProgram.navigateTo({url: '/pages/index/index'});
			}else if(isAndroid){
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
        	this.boxStb = false;
			$('.box').hide();
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
.box{z-index: 10;width: 100%;height:100%;background-color: #000;opacity: 0.5;position: fixed;top: 0;display:none;}

.messageListPd{position: relative;}
.houseList{position: relative;border-bottom: 1px solid #f5f5f5;}
.ide{position: relative;border-bottom: 1px solid #f5f5f5;} 

.bg{background: #52a171;padding-bottom: 10px;}
.submitBtn{border: 0;background-color: #218961;outline: none;width: 100%;text-align: center;color: #fff;position: fixed;left: 0;bottom: 0;z-index: 10;text-decoration: none;font-size: 1.3em;font-weight: bold;padding: 15px 0;}

.contBox{display: none;}
.contImg{width: 92.6%;margin-left: 3.7%;position: fixed;top: 6%;display: none;z-index: 31;}
.eq{width: 10%;height: auto!important;position: fixed;bottom: 10%;left: 45%;display: none;z-index: 31;}


.recruitimg{ width: 100%; display: block;}
.recruitimgPd{ margin: -13px 14px 50px;}
.recruitimgPd img{ display: block; width: 100%;}
.recruitimgPd2{ margin: 0 14px 80px;}
.recruitimgPd2 img{ display: block;width: 100%; margin-bottom:25px;}
.applyBtn{ width: 100%; text-align: center; padding:10px 0; background: #218961; position: fixed; left: 0;bottom: 0; color: #fff; font-size: 2rem; font-weight: bold; z-index: 1; display: block; text-decoration: none;}

.mark{ background: rgba(0,0,0,0.7); position: fixed; left: 0;top: 0; width:100%; height: 100%; z-index: 2; display: none;}
.recruitBtn{ background: #fff; border-radius: 12px; position: fixed; width: 90%; left: 5%; top: 20%; z-index: 15; padding-bottom: 20px; }
.recruitTopImg{ position: relative; text-align: center;}
.recruitTopImg p{color: #fff;font-size: 1.5em;width: 100%; position: absolute; left: 0; top:30%; font-weight: bold;}
.recruitTopImg img{ display: block; width: 100%; border-top-right-radius: 12px;border-top-left-radius: 12px;}
.messageTop{ color: #999; font-size: .9em; text-align: center; margin-top:15px;}
.twoTabImg{width: 100%; display: block; margin-top:20px;}
.inputText{ margin:25px 10%;}
.inputText p{border: 1px solid #d4d4d4; padding: 10px; border-radius: 6px; margin-bottom: 10px;}
.inputText input{ width: 100%; border: none; color: #333; font-size:1em; display: block; }
.recruitBtnTanBtn{display: block;text-decoration: none;margin: 0 auto;width: 80%;text-align: center;background: #218961;color: #fff;font-size: 1.3em;font-weight: bold;padding: 15px 0;border-radius: 100px;}
.successP{width: 38%;background: rgba(0,0,0,0.7);padding: 8px 0;text-align: center;position: absolute;left: 31%;top: 50%;margin-top: -20px;color: #fff;font-size: .85em;z-index: 16;border-radius: 100px;}

input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#c2c2c2;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#c2c2c2;
}

input::-moz-placeholder { /* Mozilla Firefox 19+ */
	color:#c2c2c2;
}
input:-ms-input-placeholder { /* Internet Explorer 10-11 */
	color:#c2c2c2;
}
</style>

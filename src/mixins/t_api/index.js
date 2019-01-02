export default {
	methods:{
		weixinAndPay(){
			let that = this;   	
	    	var ua = window.navigator.userAgent.toLowerCase();
	    	var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       
		        that.showPrises = false;	  
			}else if(ua.match(/Alipay/i) == "alipay"){
				that.showPrises = false;	  
			}else if(isAndroid){
				that.showPrises = false;	
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
		shares(datas){
			let that = this;       
	        var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data ={
				   "share_title":'“表里不一”，在这里成为褒义词',        //分享标题
				   "share_url":"http://special.gongyujia.com/#/design",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"老洋房换新颜，外表其貌不扬，步入其中，就会发现另一个天地。",      //副标题
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
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        //bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
					that.setclick(bridge,datas);							
		       	})
			}
		},
		setclick(bridge,datas){	
        	let that = this;
			document.getElementById('share').onclick = function(e){			
				//let data = that.shareInfo;
				let data ={
					   "share_title":'“表里不一”，在这里成为褒义词',        //分享标题
					   "share_url":"http://special.gongyujia.com/#/design",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"老洋房换新颜，外表其貌不扬，步入其中，就会发现另一个天地。",      //副标题
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
		        	bridge.callHandler('openShare', datas,function(rest) {})
			    }
			}
        },		
		
    }
}
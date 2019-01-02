<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm10.jpg" class="imgHeight"/>
		<div class="tab01">
			<span id="tit01" class="cur">品质房源</span>
			<span id="tit02">超赞房东</span>
			<span id="tit03">五星服务</span>
		</div>
		<img id="t01" src="https://opres.gongyujia.com/H5/fireworm/fireworm12.jpg" />
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm13.jpg" />
		<div class="tab02">
			<span id="type01" @click="tabType" class="curs">客厅餐厅</span>
			<span id="type02" @click="tabType">卧室</span>
			<span id="type03" @click="tabType">卫生间</span>
			<span id="type04" @click="tabType">厨房</span>
		</div>
		<img src="https://opres.gongyujia.com/H5/fireworm/fireworm14_4.jpg" class="tpImg"/>
		<img id="t02" src="https://opres.gongyujia.com/H5/fireworm/fireworm15.jpg" />
		<img id="t03" src="https://opres.gongyujia.com/H5/fireworm/fireworm16.jpg" />
		<div class="tab03">
			<span id="tit04" class="cur">品质房源</span>
			<span id="tit05">超赞房东</span>
			<span id="tit06">五星服务</span>
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
			title:"公寓家萤火虫计划房源",			
			data:{},
			houseList:[],
			shareInfo:{
			   "share_title":"公寓家萤火虫计划房源",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouseCont",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"专人实地核验，满足至少50项品质核查标准，为您提供品质租家体验",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			},
			scroll:0,
		}
	},	
	beforeMount(){	
    	document.title = this.title;
    	this.type = this.$route.query.type;	  	
	},	
    mounted() {   	
    	let that = this;	
    	//that.init();
	 	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"公寓家萤火虫计划房源",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouseCont",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"专人实地核验，满足至少50项品质核查标准，为您提供品质租家体验",   //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
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
		
		document.querySelector("#tit01").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	 
    		$('#tit01,#tit04').addClass('cur'); 
			document.querySelector("#t01").scrollIntoView(true);
		}
		document.querySelector("#tit02").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	
    		$('#tit02,#tit05').addClass('cur');
			document.querySelector("#t02").scrollIntoView(true);
		}
		document.querySelector("#tit03").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	
    		$('#tit03,#tit06').addClass('cur');
			document.querySelector("#t03").scrollIntoView(true);
		}
		document.querySelector("#tit04").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	 
    		$('#tit01,#tit04').addClass('cur'); 
			document.querySelector("#t01").scrollIntoView(true);
		}
		document.querySelector("#tit05").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	
    		$('#tit02,#tit05').addClass('cur');
			document.querySelector("#t02").scrollIntoView(true);
		}
		document.querySelector("#tit06").onclick = function(){
			$('#tit01,#tit02,#tit03,#tit04,#tit05,#tit06').removeClass('cur');	
    		$('#tit03,#tit06').addClass('cur');
			document.querySelector("#t03").scrollIntoView(true);
		}
		window.addEventListener('scroll', this.scrollDs)
		
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
				   "share_title":"公寓家萤火虫计划房源",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/beautifulHouseCont",          //链接          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"专人实地核验，满足至少50项品质核查标准，为您提供品质租家体验",   //副标题
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
		tabType(e){
			e = window.event || e;
			switch(e.target.id){
				case "type01":
					$('#type01,#type02,#type03,#type04').removeClass('curs');	 
    				$('#type01').addClass('curs');
    				$('.tpImg').attr('src','https://opres.gongyujia.com/H5/fireworm/fireworm17_1.jpg');
					break;
				case "type02":
					$('#type01,#type02,#type03,#type04').removeClass('curs');	 
    				$('#type02').addClass('curs');
    				$('.tpImg').attr('src','https://opres.gongyujia.com/H5/fireworm/fireworm18_2.jpg')
					break;
				case "type03":
					$('#type01,#type02,#type03,#type04').removeClass('curs');	 
    				$('#type03').addClass('curs');
    				$('.tpImg').attr('src','https://opres.gongyujia.com/H5/fireworm/fireworm19_3.jpg')
					break;
				case "type04":
					$('#type01,#type02,#type03,#type04').removeClass('curs');	 
    				$('#type04').addClass('curs');
    				$('.tpImg').attr('src','https://opres.gongyujia.com/H5/fireworm/fireworm14_4.jpg')
					break;
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
		scrollDs() {
            if($(document).scrollTop() > $('.imgHeight').height()){
           		$('.tab03').show();
            }else{
           		$('.tab03').hide();
            } 
        }
    },
}
</script>
<style lang='scss' scoped>
.bcy{background-color: #011237;}
.bcy>img{width: 92.6%;margin-left: 3.7%;}
.tab01{width: 92.6%;height: 50px;margin-left: 3.7%;background: url(https://opres.gongyujia.com/H5/fireworm/fireworm11.jpg) no-repeat center;background-size: 100%;text-align: center;color: #f6f6f6;font-size: .95em;line-height: 50px;}
.tab01>span:first-of-type{margin-left: -4%;}   
.tab01>span:nth-of-type(2){margin-left: 12%;}   
.tab01>span:last-of-type{margin-left: 11%;}  
.tab03{display:none;position: fixed;top: -7px; left: 0;width: 92.6%;height: 50px;margin-left: 3.7%;background: url(https://opres.gongyujia.com/H5/fireworm/fireworm11.jpg) no-repeat center;background-size: 100%;text-align: center;color: #f6f6f6;font-size: .95em;line-height: 50px;}
.tab03>span:first-of-type{margin-left: -4%;}   
.tab03>span:nth-of-type(2){margin-left: 12%;}   
.tab03>span:last-of-type{margin-left: 11%;}   
.tab02{width: 92.6%;color: #6396ce;font-size: 1.15em;margin: 10px 3.7% 30px;}
.tab02>span{margin-left: 5%;}
.cur{margin-left: -4%;background-color: #ffcd2c;padding: 4px 12px;border-radius: 14px;color: #011237!important;}
.curs{background-color: #22386b;padding: 4px 12px;border-radius: 14px;color: #fff!important;}
</style>
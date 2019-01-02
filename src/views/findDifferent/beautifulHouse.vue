<template>
	<div class="bcy">
		<a href="#lk"><img src="https://opres.gongyujia.com/H5/different/beautifulHouse01.jpg" class="npText topBanner" v-if="topBanner"/></a>
		<div class="tpBanner houseBanner" id="lk">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouse02.jpg" class="houseImg"/>
			<div class="adMu"  @click='ad'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="play"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouse32.jpg" />
			</div>
			<audio controls="controls" id="audio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">带大落地窗的景观房，让你拥有完美的一天</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24568564">					
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse04.jpg" class="houseImg" id="24568564"/>
					<div class="houseTit" id="24568564">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24568564"/>
						<p id="24568564">徐汇区名仕苑一室公寓</p>
						<span id="24568564"><span id="24568564">¥ 13900</span>/月</span>								
					</div>					
				</li>				
				<li class="cont" @click="openHouseDetail" id="24587248">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/beautifulHouse06.jpg" class="houseImg" id="24587248"/>
						<div class="houseTit" id="24587248">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24587248"/>
							<p id="24587248">徐汇区名仕苑一室公寓</p>
							<span id="24587248"><span id="24587248">¥ 15900</span>/月</span>   						
						</div>
					</a>						
				</li>    				
			</ul>    			
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouse07.jpg" class="houseImg"/>
			<div class="adMu" @click='esy'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="py"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouse31.jpg" />
			</div>
			<audio controls="controls" loop id="eaudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">一个拥有大沙发的客厅,</br>
			<span>适合放空,配上红酒和电影,生活就会越来越简单</span></p>
			<ul class="ctBOX">
				<li class="cont"  @click="openHouseDetail" id="24580318">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse09.jpg" class="houseImg" id="24580318"/>
					<div class="houseTit" id="24580318">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg"  id="24580318"/>
						<p  id="24580318">徐汇区永嘉路356弄一室公寓</p>						
						<span  id="24580318"><span  id="24580318">¥ 11000</span>/月</span>					
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24580498" >
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse10.jpg" class="houseImg" id="24580498"/>
					<div class="houseTit" id="24580498">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24580498" />
						<p id="24580498">黄浦区万宜坊二室老洋房</p>						
						<span id="24580498"><span id="24580498">¥ 13000</span>/月</span> 						
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24572722">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse11.jpg" class="houseImg" id="24572722"/>
					<div class="houseTit" id="24572722">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24572722"/>
						<p id="24572722">静安区静安晶华园三室公寓</p>						
						<span id="24572722"><span id="24572722">¥ 22600</span>/月</span>					
					</div>
				</li>    				
			</ul>    			
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouse12.jpg" class="houseImg"/>
			<div class="adMu" @click='buH'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="buHy"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouse30.jpg" />
			</div>
			<audio controls="controls" loop id="buHaudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">高层小家,让你直面蓝天白云,</br>
			<span>没有其他遮挡,拥有洒满阳光的窗子</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24579904">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse14.jpg" class="houseImg" id="24579904"/>
					<div class="houseTit" id="24579904">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24579904" />
						<p id="24579904">长宁区华山丽苑三室公寓 </p>						
						<span id="24579904"><span id="24579904">¥ 43000</span>/月</span>					
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24578374">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse15.jpg" class="houseImg" id="24578374"/>
					<div class="houseTit" id="24578374">
						<img  id="24578374" src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" />
						<p  id="24578374">黄浦区怡水豪庭一室酒店式公寓</p>					
						<span id="24578374"><span id="24578374">¥ 12000</span>/月</span>												
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24576268">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse16.jpg" class="houseImg" id="24576268"/>
					<div class="houseTit" id="24576268">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24576268" />
						<p id="24576268" >普陀区万业新阶二室酒店式公寓</p>						
						<span id="24576268"><span id="24576268">¥ 11000</span>/月</span>					
					</div>
				</li>    				
			</ul>    			
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouse17.jpg" class="houseImg"/>
			<div class="adMu" @click='louch'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="louchy"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouse29.jpg" />
			</div>
			<audio controls="controls" loop id="louchAudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">美丽心情从爱心早餐开始,</br>
			<span>拥有一个大厨房和温馨饭桌,感受家的温暖</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24577078">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse19.jpg" class="houseImg" id="24577078"/>
					<div class="houseTit" id="24577078">
						<img id="24577078" src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" />
						<p id="24577078">长宁区华山花苑二室公寓 </p>
						<span id="24577078"><span id="24577078">¥ 18000</span>/月</span>
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24584926">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse20.jpg" class="houseImg" id="24584926"/>
					<div class="houseTit" id="24584926">
						<img id="24584926" src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" />
						<p id="24584926">黄浦区大同花园四室公寓</p>
						<span id="24584926"><span id="24584926">¥ 31600</span>/月</span>						
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24576844">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse21.jpg" class="houseImg" id="24576844"/>
					<div class="houseTit" id="24576844">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24576844"/>
						<p id="24576844">静安区静安枫景苑三室公寓</p>
						<span id="24576844"><span id="24576844">¥ 21600</span>/月</span>  						
					</div>
				</li>    				
			</ul>    			
		</div>
		
		<div class="tpBanner houseBanner last">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouse22.jpg" class="houseImg"/>
			<div class="adMu" @click='home'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="homey"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouse27.jpg" />
			</div>
			<audio controls="controls" loop id="homeAudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">忙碌一天后,走进干净整洁的浴室, </br>
			<span>用热水泡掉你的所有烦恼</span></p>
			<ul class="ctBOX">				
				<li class="cont" @click="openHouseDetail" id="24589894">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse25.jpg" class="houseImg" id="24589894"/>
					<div class="houseTit" id="24589894">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24589894"/>
						<p id="24589894">浦东新区朗诗寓上海森兰店一室酒店式公寓 </p>
						<span id="24589894"><span id="24589894">¥ 5500</span>/月</span>						 						
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="24568690">
					<img src="https://opres.gongyujia.com/H5/different/beautifulHouse26.jpg" class="houseImg" id="24568690"/>
					<div class="houseTit">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24568690"/>
						<p id="24568690">徐汇区东方曼哈顿二室公寓</p>
						<span id="24568690"><span id="24568690">¥ 20900</span>/月</span>						  						
					</div>
				</li>    				
			</ul>    			
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
			type:"",
			topBanner:true,
			showTitle:false,
			title:"歌词中的美丽房屋",			
			data:{},
			shareInfo:{
			   "share_title":"歌词中的美丽房屋",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouse",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"那些在歌词里才有的温馨画面，可以为你带到身边，成为你生活的一部分……",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},	
	beforeMount(){	
    	document.title = this.title;
    	this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
    	}
	},	
    mounted() {
    	let that = this;		
	 	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"歌词中的美丽房屋",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouse",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"那些在歌词里才有的温馨画面，可以为你带到身边，成为你生活的一部分……",   //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    	data =  JSON.stringify(data);
		if(isAndroid){			
			//android.showShareButton(data);
			that.setclick(null);
		}else if(isiOS){	
			$('.shareBut').css('margin','15px 35% 450px')
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        //bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				that.setclick(bridge);							
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
			document.getElementById('shareBut').onclick = function(e){
				//let data = that.shareInfo;	
				let data = {
				   "share_title":"歌词中的美丽房屋",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/beautifulHouse",          //链接          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"那些在歌词里才有的温馨画面，可以为你带到身边，成为你生活的一部分……",   //副标题
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
		ad(){
			var adios = document.getElementById('audio');
			if(adios.paused){		 
				adios.src = "http://restest.gongyujia.com/app/special/Live.mp3";
			    adios.play();
				$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");				
			}else{
				adios.pause();
				$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}
			
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},   		
		esy(){
			var eAuto = document.getElementById('eaudio');
			if(eAuto.paused){
				eAuto.src = "http://restest.gongyujia.com/app/special/esy.mp3";
				eAuto.play();
				$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				eAuto.pause();
				$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}
			
			var adios = document.getElementById('audio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		buH(){
			var buHAuto = document.getElementById('buHaudio');
			if(buHAuto.paused){
				buHAuto.src = "http://restest.gongyujia.com/app/special/buH.mp3";
				buHAuto.play();
				$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				buHAuto.pause();
				$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		louch(){			
			var louchAuto = document.getElementById('louchAudio');
			if(louchAuto.paused){
				louchAuto.src = "http://restest.gongyujia.com/app/special/lch.mp3";
				louchAuto.play();
				$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				louchAuto.pause();
				$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var homeAuto = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		home(){
			var homeAuto = document.getElementById('homeAudio');
			if(homeAuto.paused){
				homeAuto.src = "http://restest.gongyujia.com/app/special/home.mp3";
				homeAuto.play();
				$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");				
			}else{
				homeAuto.pause();
				$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		//打开房源详情页
	    openHouseDetail(e){	    	
	    	var houseId = e.target.id;
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			
			if(isAndroid){
				android.openHouseDetail(houseId);				
			}else if(isiOS){			   		            	           
	            var message = {
	                'methodName' : 'openHouseDetail',	
	                'params' : {
	                    'house_id':houseId,		                   
	                },
//	                'callbackMethod': 'getUserInfoSucc'
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
	       }	
		},
		getUserInfoSucc(text){
			alert(text);
		}
    },
}
</script>
<style lang='scss' scoped>
.adMu{width: 100%;}
.adMu img:first-of-type{width: 19%; float: left;}
.adMu img:last-of-type{width: 78%;display: inline-block;}
.audio{width: 100%;position: absolute;top: 200px;left: 0;display: none;}
.shareBut{width: 30%;margin: 15px 35% 45px;}

</style>
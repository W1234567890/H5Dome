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
				<li class="cont" @click="openHouseDetail" id="22347058">					
					<img src="https://opres.gongyujia.com/H5/different/22347058.jpg" class="houseImg" id="22347058"/>
					<div class="houseTit" id="22347058">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="22347058"/>
						<p id="22347058">空港T5区 2室1厅 跃层</p>
						<span id="22347058"><span id="22347058">¥ 2800</span>/月</span>								
					</div>					
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
				<li class="cont"  @click="openHouseDetail" id="23408896">
					<img src="https://opres.gongyujia.com/H5/different/23408896.jpg" class="houseImg" id="23408896"/>
					<div class="houseTit" id="23408896">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg"  id="23408896"/>
						<p  id="23408896">荆翠中路88号 富丽花城 精装套三</p>						
						<span  id="23408896"><span  id="23408896">¥ 2180</span>/月</span>					
					</div>
				</li>
				<li class="cont" @click="openHouseDetail" id="23408698" >
					<img src="https://opres.gongyujia.com/H5/different/23408698.jpg" class="houseImg" id="23408698"/>
					<div class="houseTit" id="23408698">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="23408698" />
						<p id="23408698">二环路东二段500号精装套二</p>						
						<span id="23408698"><span id="23408698">¥ 2800</span>/月</span> 						
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
				<li class="cont" @click="openHouseDetail" id="21072208">
					<img src="https://opres.gongyujia.com/H5/different/21072208.jpg" class="houseImg" id="21072208"/>
					<div class="houseTit" id="21072208">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="21072208" />
						<p id="21072208">金都华府金堂金堂精装套三</p>						
						<span id="21072208"><span id="21072208">¥ 1600</span>/月</span>					
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
				<li class="cont" @click="openHouseDetail" id="23393884">
					<img src="https://opres.gongyujia.com/H5/different/23393884.jpg" class="houseImg" id="23393884"/>
					<div class="houseTit" id="23393884">
						<img id="23393884" src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" />
						<p id="23393884">英祥财富领域中海翠屏湾</p>
						<span id="23393884"><span id="23393884">¥ 4500</span>/月</span>
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
			<p class="titHou">忙碌一天后,走进干净整洁的浴室,</br>
			<span>用热水泡掉你的所有烦恼</span></p>
			<ul class="ctBOX">				
				<li class="cont" @click="openHouseDetail" id="21041860">
					<img src="https://opres.gongyujia.com/H5/different/21041860.jpg" class="houseImg" id="21041860"/>
					<div class="houseTit" id="21041860">
						<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="21041860"/>
						<p id="21041860">凯旋公馆，豪装，配套齐 3室2厅3卫 </p>
						<span id="21041860"><span id="21041860">¥ 2200</span>/月</span>						 						
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
			   "share_url":"https://special.gongyujia.com/#/beautifulHouseCD",          //链接
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
			   "share_url":"https://special.gongyujia.com/#/beautifulHouseCD",          //链接          //链接
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
//      $(function () {
//			//判断页面高度
//			var h=$(window).height();
//			$(".npText").height(h);							           
//      });	  
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
				   "share_url":"https://special.gongyujia.com/#/beautifulHouseCD",          //链接          //链接
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
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
	        }			
		},
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
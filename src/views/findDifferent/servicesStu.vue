<template>
	<div>
		<a href="#lk"><img src="https://opres.gongyujia.com/H5/different/servicesStu01.jpg" class="npText topBanner"  v-if="topBanner"/></a>
		<div class="houseBanner" id="lk">
			<img src="https://opres.gongyujia.com/H5/different/servicesStu02.jpg" class="titHead"/>
			<p class="titText">人生第一次租公寓,</br>
			<span>不能贵，但要精致！</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24572038">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu03.jpg" class="houseImg" id="24572038"/>
						<div class="houseTit" id="24572038">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24572038"/>
							<p id="24572038">浦东新区青租界国际青年社区一室公寓</p>
							<span id="24572038"><span id="24572038">¥ 3200</span>/月</span>
						</div>
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" id="24583864">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu05.jpg" class="houseImg" id="24583864"/>
						<div class="houseTit" id="24583864">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24583864"/>
							<p id="24583864">普陀区莲花公寓一室公寓</p>
							<span id="24583864"><span id="24583864">¥ 4000</span>/月</span>  						
						</div>
					</a>					
				</li>
				<li class="cont" @click="openHouseDetail" id="24587716">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu06.jpg" class="houseImg" id="24587716"/>
						<div class="houseTit" id="24587716">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24587716"/>
							<p id="24587716">徐汇区名仕苑一室公寓</p>
							<span id="24587716"><span id="24587716">¥ 5000</span>/月</span>    						
						</div>
					</a>					
				</li>    				
			</ul>    			
		</div>
		
		<div class="houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/servicesStu07.jpg" class="titHead topLeng"/>
			<p class="titText">交通便利才能提升幸福感,</br>
			<span>靠近地铁的公寓会让你工作生活两不误</span></p>
			<ul class="ctBOX">
				<li class="cont"  @click="openHouseDetail" id="24583882">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu08.jpg" class="houseImg" id="24583882"/>
						<div class="houseTit" id="24583882">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24583882"/>
							<p id="24583882">宝山区上坤极客公寓宝安公路店一室公寓</p>
							<span id="24583882"><span id="24583882">¥ 2588</span>/月</span>    						
						</div>
						<div class="distance" id="24583882">距地铁1号线-宝安公路地铁站267米</div>
					</a>				
				</li>
				<li class="cont" @click="openHouseDetail" id="24575818">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu09.jpg" class="houseImg" id="24575818"/>
						<div class="houseTit" id="24575818">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24575818"/>
							<p id="24575818">徐汇区吴兴路24弄一室新式里弄</p>
							<span id="24575818"><span id="24575818">¥ 4500</span>/月</span>
						</div>
						<div class="distance" id="24575818">距地铁10号线-上海图书馆地铁站402米</div>
					</a>
				</li>
				<li class="cont" @click="openHouseDetail" id="24589696">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu10.jpg" class="houseImg" id="24589696"/>
						<div class="houseTit" id="24589696">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24589696"/>
							<p id="24589696">黄浦区梦花街一室老洋房</p>
							<span id="24589696"><span id="24589696">¥ 4200</span>/月</span>     						
						</div>
						<div class="distance" id="24589696">距地铁10号线;地铁8号线-老西门地铁站466米</div>
					</a>
				</li>  
				<li class="cont" @click="openHouseDetail" id="24587680">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu11.jpg" class="houseImg" id="24587680"/>
						<div class="houseTit" id="24587680">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24587680" />
							<p id="24587680">徐汇区步高里一室新式里弄</p>
							<span id="24587680"><span id="24587680">¥ 4500</span>/月</span>   						
						</div>
						<div class="distance" id="24587680">距地铁12号线;地铁9号线-嘉善路地铁站496米</div>
					</a>
				</li>
			</ul>    			
		</div>
		
		<div class="houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/servicesStu12.jpg" class="titHead"/>
			<p class="titText">让生活自由呼吸,</br>
			<span> 押一付一,告别月光族。</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24591892">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu13.jpg" class="houseImg" id="24591892"/>
						<div class="houseTit" id="24591892">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24591892"/>
							<p id="24591892">浦东新区许家厅精装一室老公房</p>
							<span id="24591892"><span id="24591892">¥ 5800</span>/月</span>
						</div>
					</a>
				</li>
				<li class="cont" @click="openHouseDetail" id="24571012">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu14.jpg" class="houseImg" id="24571012"/>
						<div class="houseTit" id="24571012">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24571012" />
							<p id="24571012">静安区闻喜路精装1室公寓</p>
							<span id="24571012"><span id="24571012">¥ 4680</span>/月</span>  						
						</div>
					</a>
				</li>
				<li class="cont" @click="openHouseDetail" id="24583108">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu15.jpg" class="houseImg" id="24583108"/>
						<div class="houseTit" id="24583108">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24583108"/>
							<p id="24583108">浦东新区朗诗寓一室公寓</p>
							<span id="24583108"><span id="24583108">¥ 4700</span>/月</span>  						
						</div>
					</a>
				</li>    				
			</ul>    			
		</div>
		
		<div class="houseBanner last">
			<img src="https://opres.gongyujia.com/H5/different/servicesStu16.jpg" class="titHead"/>
			<p class="titText">押金减免,</br>
			<span>又给自己多了一个剁手理由</span></p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" id="24584278">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu17.jpg" class="houseImg" id="24584278"/>
						<div class="houseTit" id="24584278">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24584278" />
							<p id="24584278">嘉定区丰庄四村精装2室公寓</p>
							<span id="24584278"><span id="24584278">¥ 6500</span>/月</span>
						</div>
					</a>
				</li>				
				<li class="cont" @click="openHouseDetail" id="24569932">
					<a>
						<img src="https://opres.gongyujia.com/H5/different/servicesStu19.jpg" class="houseImg" id="24569932"/>
						<div class="houseTit" id="24569932">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24569932"/>
							<p id="24569932">浦东新区招远小区一室老公房</p>
							<span id="24569932"><span id="24569932">¥ 4000</span>/月</span>   						
						</div>
					</a>
				</li>    				
			</ul>    			
		</div>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			topBanner:true,
			title:"学生党晋升小白领",			
			data:{},
			shareInfo:{
			   "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/servicesStu",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"在领到第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？",      //副标题
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
//      $(function () {
//			//判断页面高度
//			var h=$(window).height();
//			$(".npText").height(h);							           
//      });	
        let that = this;
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"从学生党晋级小白领，租上你的第一套公寓",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/servicesStu",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"在领到第一笔工资后，你是否也想拥有一个不同于学生宿舍的个人空间？",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
    	data =  JSON.stringify(data);
		if(isAndroid){			
			android.showShareButton(data);
			//that.setclick(null);
		}else if(isiOS){			
			that.setupWebViewJavascriptBridge(function(bridge) {											
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				//that.setclick(bridge);							
	       	})
		}
		
		this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
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
    }
}
</script>
<template>
	<div>
		<div class="breakList">
	  		<img src="https://opres.gongyujia.com/H5/methanal/methanal01.png" v-if="topBanner" />
	  		<div class="houseBanner">				
  				<img v-lazy="lamb02" class="titHead"/>
  				<p class="titText">甲醛是什么?</p>	
				<p class="titBanner">甲醛是一种有刺激性气味的无色气体，能溶于水。甲醛普遍天然存在在自然界中，树木、动物和人体内全部都含有甲醛，这些甲醛是生物体内氨基酸代谢的产物。因此，即使是实木，也不存在0甲醛。</p>					
				<img v-lazy="lamb03" class="aticvImg"/>
				
				<img v-lazy="lamb04" class="titHead"/>
  				<p class="titText">甲醛的危害是什么?</p>	
				<p class="titBanner">甲醛会刺激人们的眼睛、呼吸道粘膜，导致流泪、嗓子疼痛、打喷嚏、咳嗽、呼吸困难等症状，还会诱发哮喘。国际癌症研究机构IRAC在论文中明确指出，当研究对象长期暴露在甲醛严重超标的环境中，会诱发鼻咽癌和白血病。目前，甲醛在IARC的致癌物列表上与苯、咖啡因、酒精、烟草一并被列为1类致癌物。</p>					
				<img v-lazy="lamb05" class="aticvImg"/>
				
				<img v-lazy="lamb06" class="titHead"/>
  				<p class="titText">如何避免甲醛污染?</p>	
				<p class="titBanner">首先，要明确的是，完全0甲醛是不可能的。油漆、壁纸、人造板材中胶合剂、沙发、床等家具中的粘合剂都含有甲醛。甲醛可以从源头上减少，将含量降低到对人体无害的范围内，但不可能完全避免。</p>					
				<p class="titBanner">避免过度装修，使用环保板材及涂料，选择有良好封边工艺的大品牌家具，都是在源头上降低甲醛含量的可靠办法。</p>		
				<img v-lazy="lamb07" class="aticvImg"/>
				
				<img v-lazy="lamb08" class="titHead"/>
  				<p class="titText">去除甲醛的错误方式有哪些?</p>	
				<p class="levelTit">香薰</p>					
				<p class="titBanner">任何香薰都无法降低室内甲醛含量，香薰除醛的原理是使用一种气味掩盖另一种气味，这种方法非常不可取。</p>		
				<img v-lazy="lamb09" class="aticvImg"/>
				<p class="levelTit">炭包</p>					
				<p class="titBanner">炭包确实有吸附功能，但它只能吸附自己附近的甲醛。而且活性炭包吸附了甲醛后必须及时更换，否则就会变成一个散发甲醛的污染源，造成二次污染。建议在家里不好通风的抽屉、角落里局部放置，并且要记得定时更换。</p>		
				<p class="levelTit">绿植</p>					
				<p class="titBanner">几盆绿植对于处理甲醛的作用微乎其微，除非在家里摆满绿植，打造成室内热带雨林，才有一定的效果，所以使用绿植除醛的方法并不靠谱。</p>		
				<img v-lazy="lamb11" class="aticvImg"/>
  				<p class="levelTit">空气净化器</p>					
				<p class="titBanner">空气净化器的原理，是通过活性炭滤网过滤空气的尘埃、PM2.5等颗粒，并不能除甲醛这种有机分子。由于空气净化器是室内空气循环，所以甲醛也并不会被排出室外。市面上空气净化器宣扬的除醛功能，往往是商家的营销噱头。</p>		
			
				<img v-lazy="lamb12" class="titHead"/>
  				<p class="titText">有哪些靠谱的除醛办法?</p>				
				<p class="levelTit">开窗通风除醛</p>					
				<p class="titBanner">开窗通风是一种长期且免费的除醛办法，但效果比较不稳定。有研究表明，短时间开窗通风 10 分钟，室内空气中甲醛的浓度大约能降低 70%～90%。趁天气好的时候，不妨多开开窗。</p>		
				<img v-lazy="lamb13" class="aticvImg"/>
				<p class="levelTit">光触媒除醛</p>					
				<p class="titBanner">很多专业除甲醛公司都是使用光触媒技术进行除醛。光触媒可以在紫外线的作用下降解甲醛，没有二次污染。如果预算充足或者赶时间，请甲醛处理公司是个省时省力的办法。因为新家除了甲醛之外，还有苯和TVOC这样的污染气体存在。经过处理的新房子，能看到污染物数值明显降低。另外大部分的处理公司都能在一定年限内提供质保，可以解决甲醛释放时间长的问题。</p>		
				<img v-lazy="lamb14" class="aticvImg"/>
			    <p class="levelTit">新风系统除醛</p>					
				<p class="titBanner">通过新风机净化室外空气，再导入室内，达到室内外空气交换的目的，相当于家中一扇隐形的窗户。新风系统除醛效果比较稳定，持续时间长，而且能保证在室外空气质量糟糕时仍然可以排风。</p>		
				<img v-lazy="lamb15" class="aticvImg"/>
  			
			</div>
	  	</div>
	  	
	  	<div class="footerEjA" v-if="showPrise">
			<div class="ftTit">
				<h1>好房推荐</h1>
				<span>周边租房推荐</span>
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">
						<swiper-slide v-for="(im,key) in houseList" :key="key">
							<a @click="openHouseDetail" :id="im.house_id" :align="im.price_count">
								<div  class="bH" :id="im.house_id" :align="im.price_count">
						   			<div class="hImg1" :id="im.house_id" :align="im.price_count">						   			
						   				<img v-lazy="im.cover_pic" :id="im.house_id" :align="im.price_count" />					   			
						   			</div>
						   			<div class="houstBottom" :id="im.house_id" @click="openHouseDetail" :align="im.price_count"></div>
					   				<p class="price mony" :id="im.house_id"  :align="im.price_count"><span>{{im.price}}</span></p>						   	
						   			<div  class="Hcont" :id="im.houseList"  :align="im.price_count">
						   				<h1 :id="im.house_id"  :align="im.price_count">{{im.title}}</h1>	
						   				<p class="contTit"  :id="im.house_id">{{im.subtitle}}</p>
						   				<div class="houseGPS"  :id="im.house_id" :align="im.price_count">			
											<img src="https://opres.gongyujia.com/H5/GPS.png" style="vertical-align: middle;"/>
											<span style="vertical-align: middle;">{{im.address}}</span>		
										</div>
						   			</div>							   				
						   		</div>
							</a>							
						</swiper-slide>							
					</swiper>
					<div class="swiper-pagination"></div>
				</div>				
			</div>
		</div>
		
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
				showTitle:false,
				title:"甲醛科普",			
				data:{},
				topBanner:true,
				showPrise:true,
				isautotrophy:"",
				price:'',
				price_top:0,
				code:'',
				shareInfo:{
				   "share_title":"关于甲醛你必须知道的5件事",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/methanal",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "subtitle":"甲醛危害有多大？甲醛是如何产生的？如何防治甲醛？",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				},
				lamb02:'https://opres.gongyujia.com/H5/methanal/methanal02.png',
				lamb03:'https://opres.gongyujia.com/H5/methanal/methanal03.gif',
				lamb04:'https://opres.gongyujia.com/H5/methanal/methanal04.png',
				lamb05:'https://opres.gongyujia.com/H5/methanal/methanal05.png',
				lamb06:'https://opres.gongyujia.com/H5/methanal/methanal06.png',
				lamb07:"https://opres.gongyujia.com/H5/methanal/methanal07.jpg",
				lamb08:'https://opres.gongyujia.com/H5/methanal/methanal08.png',
				lamb09:'https://opres.gongyujia.com/H5/methanal/methanal09.png',
				lamb10:'https://opres.gongyujia.com/H5/methanal/methanal10.png',
				lamb11:'https://opres.gongyujia.com/H5/methanal/methanal12.jpg',
				lamb12:'https://opres.gongyujia.com/H5/methanal/methanal13.png',
				lamb13:'https://opres.gongyujia.com/H5/methanal/methanal04.jpg',
				lamb14:'https://opres.gongyujia.com/H5/methanal/methanal15.gif',
				lamb15:'https://opres.gongyujia.com/H5/methanal/methanal16.png',
				houseList:[],
				houseSwiperOption: {
					direction:'horizontal',
			        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
		            notNextTick: false,
		            initialSlide: 1,
		            loop: false,           
		            slidesPerView : 1.25,
					spaceBetween: 20,
					speed:300,//滑动速度
	            autoplayDisableOnInteraction : false,		           				
	    	}
			}
		},	
    beforeMount(){	
    	document.title = this.title;
    	this.type = this.$route.query.type;	
    	this.code = this.$route.query.code;    	
	},
    mounted() {    	
      let that = this;
      if(that.type == 1){ 
      	$('.topBanner').css('marginTop','32px');
    		that.topBanner = false;
    	}else{
    		that.topBanner = true;
    	}
        that.init();			
	 	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
		if(isAndroid){			
			//android.showShareButton(data);
			that.setclick(null);
		}else if(isiOS){	
			
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
				   "share_title":"关于甲醛你必须知道的5件事",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/methanal",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"甲醛危害有多大？甲醛是如何产生的？如何防治甲醛？",      //副标题
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
//		        	$('.shareBut').css('margin','15px 35% 450px')
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {
		        		that.share_result_event(rest)
		        	})
			    }
			}
        },  
        //打开房源详情页
	    openHouseDetail(e){
	    	var houseId = e.target.id;
	    	this.isautotrophy = e.target.align;  
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 				
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
		        if(this.isautotrophy == "-1"){
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
		init(){			
			if(this.code == '021' || this.code == '010'){
				this.price = '15000';
				this.price_top = '25000';
			}else{
				this.price = '5000';
			}
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			
			let url = "house_list",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":this.code,"g_uid":"","channel":"","app_device":"","package_name":"",'page':2,'page_size':'10','filter_type':'normal','price_bottom':this.price,'price_top':this.price_top};											
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						
						for(var i = 0; i < res.content.house_list.length; i++){								
							if(isAndroid){
								res.content.house_list[i].cover_pic = "https://res.gongyujia.com/"+res.content.house_list[i].cover_pic +'@!form_l_w'; 
							}else if(isiOS){
								res.content.house_list[i].cover_pic = "https://res.gongyujia.com/"+res.content.house_list[i].cover_pic +'@!form_m'; 
							}								
							that.houseList.push(res.content.house_list[i]);							
						}
						console.log(res.content.house_list)
					},
					error:( res)=>{
						alert(res)							
					}
				})
			});
		},
		
    }
}
</script>
<style scoped>
.shareBut{width: 30%;margin: 15px 35% 45px;}
h1{ display: none;}
.breakMb{ margin: 0 14px;}
swiper-slide{margin-right: 0;}	
.titHead{width: 45px;margin-top: 30px;}
.houseList{position: absolute;top: 62%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houstBottom{position: absolute;top: 54%;left: 0;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.houseTit{margin:0;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-top:5px;color: #666;font-size: .9em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>p {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;}
.houseCont>p>p {font-size: 1.25em;}
.houseGPS{text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{/*vertical-align: middle;*/margin-top: 2px;height:14px;color: #666;font-size: .8em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.contBox{display: none;}
.contImg{width: 92.6%;margin-left: 3.7%;position: fixed;top: 6%;display: none;z-index: 31;}
.eq{width: 10%;height: auto!important;position: fixed;bottom: 10%;left: 45%;display: none;z-index: 31;}

.footerEjA{width: 100%;overflow: hidden;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 24px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: 1.15em;font-weight: 600;margin-left: 5px;} 
.ftBanner{margin-top: 20px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1{width: 100%;height: 187px;overflow: hidden;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.bH .hImg1>img{width: 100%;position: relative;height: auto;display: block;border-radius: 7px;}
.Hcont{width: 100%;padding-bottom: 10px;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}.Hcont>h1{color: #333;font-size: 1.15em;font-weight:600;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHM{font-size: 1em;color: #333;margin-top: 5px}
.Hcont .bHM>span{font-size: .75em;color: #333;margin-top: 5px}

.explain{position: fixed;bottom: 20%;z-index: 38;width: 92.6%;margin-left: 3.7%;}
.footerImg{width: 100%;position: relative;bottom: -4px;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 67%;right: 4%;}
.mony{position: absolute;top: 60%;right: 4%;}
.price>span{font-size: 1.35em;}

.titText{margin-top: 20px;line-height: 28px;font-weight: 600;font-size: 1.15em;}
.levelTit{color: #333;font-size: 1em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;font-weight: 600;}
.titBanner{ color: #838383;font-size: .85em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;}	
.aticvImg{border-radius: 7px;width: 100%;}
</style>
   
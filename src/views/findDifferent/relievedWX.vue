<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>		
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>		
		<img src="https://opres.gongyujia.com/H5/relieved/relieved01.jpg"/>		
		<div class="box"></div>
		
		<div class="ctHouse">
			<div class="idHouses">								
				<!--<div class="hosusList">					
					<div class="houseImg" id="27832648">	
						<img src="https://opres.gongyujia.com/H5/relieved/relieved05.png" class="certificate" @click="boxCert(1)"/>
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=521877">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180821/5b7b8854c73c0.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="27832648" />
							<img src="https://opres.gongyujia.com/H5/relieved/relieved03.png" class="label"/>
							
							<div class="houseList" id="27832648"></div>
							<div class="houseCont" id="27832648">					
								<p id="27832648">闵行区V领地一室酒店式公寓</p>
								<div class="houseGPS">			
									<img src="https://opres.gongyujia.com/H5/relieved/relieved04.png" id="27832648"/>
									<span id="27832648">距地铁8号线-联航路地铁站1062米</span>													
								</div>
								<span id="27832648"><span id="27832648">¥1800</span>/月</span>								
							</div>	
						</a>
					</div>	
				</div>	-->
				<div class="hosusList" v-for="(item,key) in bjList" v-if="item.price < 8000">
					<div class="houseImg" :id="item.house_oid" :key="key">	
						<img src="https://opres.gongyujia.com/H5/relieved/relieved05.png" class="certificate" @click="boxCert"  :id="item.house_oid"/>
						<a :href="item.third_house_id">
							<img v-lazy="item.cover_pic" class="housesImg" :id="item.house_oid" :align="item.isautotrophy"/>
							<img src="https://opres.gongyujia.com/H5/relieved/relieved03.png" class="label"/>
							<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='item.status == 1'/>
							
							<div class="houseList" :id="item.house_oid" :align="item.isautotrophy"></div>
							<div class="houseCont" :id="item.house_oid" :align="item.isautotrophy">					
								<p :id="item.house_oid">{{item.title}}</p>
								<div class="houseGPS">			
									<img src="https://opres.gongyujia.com/H5/relieved/relieved04.png" :id="item.house_oid"/>
									<span :id="item.house_oid">{{item.address}}</span>													
								</div>
								<span :id="item.house_oid">¥<span :id="item.house_oid">{{item.price}}</span>/月</span>								
							</div>	
						</a>
					</div>						
				</div>	
				
				<img src="https://opres.gongyujia.com/H5/relieved/relieved21.png" class="tb" />
				
				<div class="hosusList" v-for="(item,key) in heightList" v-if="item.price > 8000">
					<div class="houseImg" :id="item.house_oid" :key="key" >	
						<img src="https://opres.gongyujia.com/H5/relieved/relieved05.png" class="certificate" @click="boxCert"  :id="item.house_oid"/>
						<a :href="item.third_house_id">
						    
						    <img v-lazy="item.cover_pic" class="housesImg" :id="item.house_oid"  :align="item.isautotrophy"/>
							<img src="https://opres.gongyujia.com/H5/relieved/relieved03.png" class="label"/>
							<img src="https://opres.gongyujia.com/H5/relieved/relieved25.png" class="soldOver" v-if='item.status == 1'/>
							<div class="houseList" :id="item.house_oid"  :align="item.isautotrophy"></div>
							<div class="houseCont" :id="item.house_oid"  :align="item.isautotrophy">					
								<p :id="item.house_oid">{{item.title}}</p>
								<div class="houseGPS">			
									<img src="https://opres.gongyujia.com/H5/relieved/relieved04.png" :id="item.house_oid"/>
									<span :id="item.house_oid">{{item.address}}</span>													
								</div>
								<span :id="item.house_oid">¥<span :id="item.house_oid">{{item.price}}</span>/月</span>								
							</div>		
						</a>
					</div>						
				</div>	
				<img src="https://opres.gongyujia.com/H5/relieved/relieved02.jpg" />		
			</div>    
			
			<div class="footerEjA" v-if="flT">
				<div class="ftTit">
					<h1>装修超过1年房源推荐</h1><span>({{houseNub}}套)</span>		
				</div>
				<div class="ftBanner">
					<div class="bHse">
						<swiper :options="houseSwiperOption"  ref="mySwiper">
							<swiper-slide v-for="(im,key) in houseList" :key="key">
								<a :id="im.house_oid">
									<div  class="bH" :id="im.house_oid">
							   			<div class="hImg1" :id="im.house_oid">						   			
							   				<img v-lazy="im.cover_pic" :id="im.house_oid" :align="im.isautotrophy" />					   			
							   			</div>
							   			<div  class="Hcont" :id="im.houseList"  :align="im.isautotrophy">
							   				<h1 :id="im.house_oid"  :align="im.isautotrophy">{{im.house_name}}</h1>			   										   								   				
							   				<p class="bHM" :id="im.house_oid"  :align="im.isautotrophy">{{im.price}}<span>/月</span></p>
							   			</div>		
							   		</div>
								</a>							
							</swiper-slide>							
						</swiper>
						<div class="swiper-pagination"></div>
					</div>				
				</div>
			</div>
		</div>
		<div class="contBox">
  			<img  :src="certift" class="contImg" preview/>
  			<img src="https://opres.gongyujia.com/H5/relieved/relieved22.png" class="explain"/>
  			<img src="https://opres.gongyujia.com/H5/coupon/close.png" class="eq" id="eq" @click="eq"/> 
  		</div>
		<img :src="footerImg"  class="footerImg"/>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"安心住",			
			data:{},
			showPrise:true,
			bjList:[],
			heightList:[],
			houseList:[],
			houseNub:"",
			flT:true,
			footerImg:'https://opres.gongyujia.com/H5/relieved/relieved20.png',
			certift:'',			
			successLoadImg:"https://opres.gongyujia.com/H5/default.png",
			shareInfo:{
			   "share_title":"【有质检、安心住】甲醛不超标，你要的安心好房源",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/relieved",          //链接
			   "share_image":"https://opres.gongyujia.com/H5/relieved/relieved24.png",        //图片
			   "subtitle":"甲醛不超标，公寓家安心好房源",      //副标题
			   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   "mini_path":"/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/relieved&newsTitle=【有质检、安心住】甲醛不超标，你要的安心好房源&posterImg=https://opres.gongyujia.com/H5/relieved/relieved24.png", //分享小程序使用的页面路径
			},
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
            },
		}
	},	
	beforeMount(){	
    	document.title = this.title;  
    	let that = this;   	
    	var ua = window.navigator.userAgent.toLowerCase();
    	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       
	        that.flT = false;	  
		}else if(ua.match(/Alipay/i) == "alipay"){
			that.flT = false;	  
		}
	},
    mounted() {    	
    	this.init();
    	this.houseListInit();
    	if(screen.height == 667 && screen.width == 375){
            $('.eq').css({"position":"fixed","bottom":"5%",});          
        }else if (screen.height == 736 && screen.width == 414) {
			$('.eq').css({"position":"fixed","bottom":"5%",}); 
		}
        $(function () {
			//判断页面高度
			var h=$(window).height();
//			$(".bcy").height(h);							           
        });	
        let that = this;
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    }; 
	   	var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
	        this.showPrise = false;	      
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrise = false;			
		}else{
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let data = {
				   "share_title":"【有质检、安心住】甲醛不超标，你要的安心好房源",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/relieved",          //链接
				   "share_image":"https://opres.gongyujia.com/H5/relieved/relieved24.png",        //图片
				   "share_subtitle":"甲醛不超标，公寓家安心好房源",      //副标题
				   "mini_type":"3",              //小程序类型：1-体验版；2开发版  其它-正式版
			  	   "mini_name":"gh_00513dc81fa1",           //分享小程序使用的原始id
			   	   "mini_path":'/pages/list/newsList/newsList?link=https://special.gongyujia.com/#/relieved&newsTitle=【有质检、安心住】甲醛不超标，你要的安心好房源&posterImg=https://opres.gongyujia.com/H5/relieved/relieved24.png', //分享小程序使用的页面路径
				};
			data = JSON.stringify(data);
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
		}
    },
    methods: {		
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
		showHouse(){
			$('.hiddenList').show();
			$('.showListHouses').hide();
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
		boxCert(e){	
			$('.box').show();
        	$('.contBox').show();
        	$('.contImg').show();
        	$('.eq').show();
        	var houseId = e.target.id;
        	switch(houseId){
				case '24589552':
				  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved06.png"
				  break;
				case '27832648':
				  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved06.png"
				  break;
			  	case '24586726':
			  	   this.certift = "https://opres.gongyujia.com/H5/relieved/relieved06.png"
			      break;
			    case '41914630':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved26.png"
			      break;
			    case '42419750':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved29.png"
			      break;			      
			    case '24569734':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved29.png"
			      break;
			    case '24575422':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved29.png"
			      break;			   			  
			    case '24582136':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved07.png"
			      break; 
			    case '24586528':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved08.png"
			      break;
			    case '24571516':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved09.png"
			      break;
			    case '27568588':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved10.png"
			      break;
			    case '24584530':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved13.png"
			      break;
			    case '27865138':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved19.png"
			      break;
			    case '41980490':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved17.png"
			      break;
			    case '24583684':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved14.png"
			      break;
			    case '24575458':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved11.png"
			      break;
			    case '27594436':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved18.png"
			      break;
			    case '41921000':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved31.png"
			      break;
			    case '24568744':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved12.png"
			      break;
			    case '27872194':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved30.png"
			      break;
			    case '27755788':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved28.png"
			      break;
			    case '39940900':
			  	  this.certift = "https://opres.gongyujia.com/H5/relieved/relieved32.png"
			      break;
				default:
				   break;
			}
		},
		eq(){			
        	$('.box').hide();
        	$('.contBox').hide();
        	$('.contImg').hide();
        	$('.eq').hide();
        	this.certift = '';
		},
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
			let url = "Specials/getList",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":""};																		
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;					
						for(var i = 0; i < res.content.length; i++){	
							this.houseNub =  res.content.length;
							if(isAndroid){
								res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_m_w'; 
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
		houseListInit(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			let uRL = "https://res.gongyujia.com/";
			let imgURL = "https://zmxy.gongyujia.com/portal/house/house_detail?house_id=";
			let url = "Specials/getHouseList",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":""};																		
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						console.log(res.content)
						for(var i = 0; i < res.content.length; i++){
							res.content[i].third_house_id = imgURL + (res.content[i].third_house_id).slice(5,(res.content[i].third_house_id).length);
							if(isAndroid){
								res.content[i].cover_pic = uRL + res.content[i].cover_pic +'@!form_m_w'; 
							}else if(isiOS){
								res.content[i].cover_pic = uRL + res.content[i].cover_pic +'@!form_m'; 
							}								
							that.bjList.push(res.content[i]);	
							that.heightList.push(res.content[i]);
						}					
					},
					error:( res)=>{
						alert(res)							
					}
				})
			});
		}
    },
}
</script>
<style lang='scss' scoped>
.box{z-index: 10;width: 100%;height:100%;background-color: #000;opacity: 0.65;position: fixed;top: 0;display:none;}
.label{width: 50px;position: absolute;top: -10px;left: 0;}
.soldOver{width: 50px;position: absolute;top: 20px;left: 0;}
.certificate{width: 65px;position: absolute;top: 15px;right: 15px;z-index: 5;}
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 18px;z-index: 10;}
.bcy{width: 100%;background-color: #ffebe7;/*background: url('~src/assets/img/doubDiscounts/doubDiscounts03.jpg') no-repeat scroll transparent;background-size: 100% 100%;*/}
.titBanner{width: 92.6%;margin-left: 3.7%;margin-top: -28%;}
/*.ctHouse{width: 92.6%;margin-left: 3.7%;background-color: #fff;margin-top: 10px;border-radius: 7px;padding-bottom: 20px;}
*/
.tp{width: 45%;margin-left: 27.5%;margin-bottom: 12px;margin-top: 10px;}
.tb{width: 50%;margin-left: 25%;margin-bottom: 12px;}
.idHouses{width: 92.6%;margin-left: 3.7%;padding-top: .5%;}
.hosusList{margin-bottom: 30px}
.houseImg{position: relative;}
.housesImg{border-radius: 7px;position: relative;height: 226px;width: 100%;}
.showListHouses{background-color: #f6f6f6;color: #ccc;width: 60%;margin-left: 20%;text-align: center;height: 30px;line-height: 30px;font-size: .85em;margin-top: 10px;}
.showListHouses >img{width: 15px;height: 8px;margin-left: 8px;}

.hiddenList{display: none;}

.houseList{position: absolute;bottom: 2px;width: 100%;height:60px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{position: absolute;bottom: 32px;width: 100%;line-height: 15px;text-align: left;}
.houseCont>p {margin-left: 10px;color: #fff;font-size: .85em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #fff;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{position: absolute;text-align: left;margin-top: 5px;width: 75%;margin-left: 10px;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{height:14px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.contBox{display: none;}
.contImg{width: 92.6%;margin-left: 3.7%;position: fixed;top: 6%;display: none;z-index: 31;}
.eq{width: 10%;height: auto!important;position: fixed;bottom: 10%;left: 45%;display: none;z-index: 31;}


.footerEjA{width: 100%;overflow: hidden;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 24px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.1em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: 1em;font-weight: 600;margin-left: 5px;} 
.ftBanner{margin-top: 20px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height:170px;display: block;border-radius: 5px;}
.Hcont{width: 100%;padding-bottom: 10px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #333;font-size: 1em;font-weight:600;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHM{font-size: 1em;color: #333;margin-top: 5px}
.Hcont .bHM>span{font-size: .75em;color: #333;margin-top: 5px}

.explain{position: fixed;bottom: 20%;z-index: 38;width: 92.6%;margin-left: 3.7%;}
.footerImg{width: 100%;position: relative;bottom: -4px;}
</style>
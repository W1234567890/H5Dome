<template>
	<div>	
		<div class="banners">	
			<!--<img class="banner_list" src="https://opres.gongyujia.com/H5/default.png"/>-->
		    <swiper :options="swiperOption"  ref="mySwiper">
				<swiper-slide v-for="(item,key) in bannerArr" :key="key" v-if="key < lengthBanner">
					<img class="banner_list swiper-lazy" :src="item"  @click="boxImg" />					
				</swiper-slide>					
			</swiper>
			<div class="swiper-pagination">{{this.imgState}}/{{this.lengthBanner}}</div>
	    </div>		
		<!--<img src="https://opres.gongyujia.com/H5/banner.jpg' class=""/>-->
		<!--<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share"/>-->
		<div class="personListBg">
			<div class="personListBgPd">
				<h4>{{this.houseName}}</h4>
				<h6>{{this.housePrice}}<span>/月</span><span class="payment">月付<!--<img src="https://opres.gongyujia.com/H5/more.png"/>--></span></h6>			
			</div>
		</div>
		
		 <div class='cw'>		  
		      <p class="iconW">基本信息</p>	
		      <div class="houseCont">
		        <p>类型<span>{{this.houCont.rent_mode}}</span></p>
		        <p>面积<span>{{this.houCont.building_area}}</span></p>
		        <p>户型<span>{{this.houCont.house_type}}</span></p>
		        <p>朝向<span>{{this.houCont.orientation == "" ? "无" : houCont.orientation}}</span></p>
		        <p>楼层<span>{{this.houCont.total == "" ? "无" : houCont.total}}</span></p>
		        <!--<p>装修类型<span>{{}}</span></p>
		        <p>押金<span>{{}}</span></p>-->
		      </div> 
		</div>
		
		<div class="personListPd">
			<div class="productImgPdLine">
				<div class="prodductImgpd" v-if="detailText">
					<div class="cw">
						<p class="iconW">房源介绍</p>	
						<p class="houseMessage">{{this.detail}}</p>
					</div>
				</div>
				<div class="prodductImgpd" v-if="furniture.length != 0">
					<div class="cw">
						<p class="iconW">服务设施</p>	
						<div class="facilityPd">								
							<p class="facilityMore" v-for="(item,key) in furniture" :key="key">
								<img :src="item.icon">{{item.title}}						
							</p>
							<p class="facLast" v-if="furniture.length > 10" @click="showFac" style="color: #20b7b6;">
								<img src="https://opres.gongyujia.com/H5/moreIcon.png">更多					
							</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
		<div class="explain">
			<p class="classNub">房源编号:  {{this.houseNub}}</p>
			<div class="exText">
				本平台旨在为用户提供无偿信息服务，本房源信息及图片均来自于&nbsp;&nbsp;<span class="source">{{this.channel}}</span>&nbsp;&nbsp;，信息以原信息为准。本平台仅对相关房源信息进行归集与展示，如您发下相关信息有误或缺失，你可以向我们反馈，我们将第一时间核实更正。
			</div>
		</div>
		<div class="footBut">
			<span class="call"  v-if="showPrise">
				<a :href="'tel:'+tel">
					<img src="https://opres.gongyujia.com/H5/tell.png" />电话联系
				</a>
			</span>
			<span class="pactLook"  id="py" v-if="showPeop">				
				<img src="https://opres.gongyujia.com/H5/pact.png" />预约看房
			</span>
		</div>
		<div class="box"></div>
		<img class="bgImg" :src="bigImg"/>
		<a class="close" @click="close">×</a>
	</div>	  
</template>

<script>
	export default {
	data() {
		return {
			data:'',
        	data2:'',
        	token:"",
			title:"房屋详情",
			houseName:"",
			housePrice:"",
			channel:"",
			tel:"",
			showPrise:true,
			showPeop:true,
			bigImg:"",
			shareInfo:"",
			bannerArr:[],      	
          	furniture: [],
          	houCont:"",
          	province: "上海",
          	imgState:1,
          	detail:"",
          	house_id:"",
          	relative_id:"",
          	bd:"",
          	subtitle:"",
          	detailText:true,
          	page:0,
          	houseNub:"",
          	lengthBanner:0,      
			swiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,	
//	            autoplay: 15000,	        
	            autoplayDisableOnInteraction : false,		           
				onSlideChangeStart:swiper=>{
					console.log(swiper.realIndex);
					this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;
					if(this.page>this.imgState){
                    	this.imgState=this.page;
                    }else{
                    	this.imgState=swiper.realIndex+1;
                    }
                },
	      },      
       }
	},
	beforeMount(){	
    	document.title = this.title;
    	this.house_id = this.$route.query.house_id;	 
    	this.relative_id = this.$route.query.relative_id;	
    	this.init();
	},
    mounted() {	 
    	const wx = wx;
    	this.init();
    	let that = this;    	   	  	
    	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
		    that.setclick(null);
		}else if(isAndroid){
			that.setclick(null);
			let data = that.shareInfo;	   
		    	data =  JSON.stringify(data);		    	
				android.showShareButton(data);			           		        		       
		}else if(isiOS){
			that.setupWebViewJavascriptBridge(function(bridge) {		
				bridge.registerHandler('getUserInfoMethod', function(data, responseCallback) {	
					responseCallback(data)
				});					
		        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
				that.setclick(bridge);							
	       	})
		}						
	}, 	 
	methods: {
	    init(){
	    	let resUrl = "https://res.gongyujia.com/";
	    	var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			let url = "houses/house_detail",
			    data = {"app_device":"110","os_type":"adr","os_version":1,"network":110,"os_type":"h5","version_code":1,"channel":"","g_uid":"","package_name":"","area_code":"021","house_id":this.house_id,"timestamp":"1533968931","relative_id":this.relative_id}
			this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,					
					success:( res)=>{
						console.log(res.content)
						let data = res.content;																		
						for(var i = 0; i < data.banner.length; i++){	
							//data.banner[i] = resUrl + data.banner[i] + "@!form_m";
							if(isAndroid){
								data.banner[i] = resUrl + data.banner[i] +'@!form_m_w'; 
							}else if(isiOS){
								data.banner[i] = resUrl + data.banner[i] +'@!form_m'; 
							}
							this.bannerArr.push(data.banner[i]);
					    }
						console.log(data.banner.length)
					    this.lengthBanner = data.banner.length;
					    this.houseName = data.main_info.title;
						this.shareInfo = data.share_info;
						this.housePrice = data.main_info.compare_list[0].price;
						this.houCont = data.main_info.house_info;
						if(this.houCont.rent_mode == 0){
							this.houCont.rent_mode = '未知';
						}else if(this.houCont.rent_mode == 1){
							this.houCont.rent_mode = "整租" 
						}else if(this.houCont.rent_mode == 2){
							this.houCont.rent_mode = "合租"
						}
						this.furniture = data.furniture;
						if(this.furniture.length < 5){
							$('.facilityPd').css('height','50px');
						}
						this.channel = data.other.src_name;						
						this.houseName = data.main_info.title;		
						this.subtitle = data.main_info.subtitle;
						this.houseNub = data.main_info.house_number;
						if(data.introduction.detail != '' && data.introduction.detail != 'null' && data.introduction.detail != 'None'){
							this.detail = data.introduction.detail;
						}else{
							this.detailText = false;
						}
						this.tel = data.main_info.tel_num;
						if(this.tel == '' || this.tel == null){
							this.showPrise = false;
							this.showPeop= true;
							$('.call').hide();
							$('#py').css('width','100%');
						}else{	
							$('.call').css('width','100%');
							$('.call a').css('color','#fff');
							$('.call a img').attr('src','https://opres.gongyujia.com/H5/tells.png');
							this.showPrise = true;
							this.showPeop= false;
						}
					}
				})
			})			
	    },
	    more(){
	      	$('.priceAllListMore').hide();
	      	$('.priceAllListClose').show();
	      	$('.houseMore').css("height",'auto');
	    },
	    sm(){
	      	$('.priceAllListMore').show();
	      	$('.priceAllListClose').hide();
	      	$('.houseMore').css("height",'116px');
	    },
	    showFac(){
	    	$('.facilityPd').css({'height':"100%"});
	    	$('.facLast').hide();
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
		openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;        
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        getTkoen(){
        	let idHou = this.house_id;
	    	var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
        	if(isAndroid){
				var getUserInfos = android.getUserInfo();
				if(getUserInfos == ""){
					android.openLoginPage();
				}else{	
					let urlNew = "http://special.gongyujia.com/#/subscribe?house_id="+ idHou + "&g_uid=" + JSON.parse(getUserInfos).g_uid;			
					android.openNewBrowser(urlNew);	
				}		
			}
        },
        boxImg(e){
        	console.log(e.target.src)
        	this.bigImg = e.target.src;
        	$('.box').show();
        	$('.bgImg').show();
        	$('.close').show();
        	var mo=function(e){e.preventDefault()};		
        	document.body.style.overflow='hidden';
    		document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        close(){
        	$('.box').hide();
        	$('.bgImg').hide();
        	$('.close').hide();
        	var mo=function(e){e.preventDefault()};  
        	document.body.style.overflow='';//出现滚动条
    		document.removeEventListener("touchmove",mo,false);
        },
        setclick(bridge){	
        	let that = this;          	
        	let idHou = this.house_id;
			document.getElementById('py').onclick = function(e){								
		    	var u = navigator.userAgent, app = navigator.appVersion; 
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
					if(that.token == ""){
						wx.miniProgram.navigateTo({url: '/pages/login/ldentity/ldentity'});
					}else{
						 //微信环境			      
						wx.miniProgram.navigateTo({url: '/pages/list/onlineMsg/onlineMsg?id=' + idHou + '&listBannerImg=' + that.bannerArr[0] + '&title=' + that.houseName + '&subtitle=' + that.subtitle + '&price=' + that.housePrice});
					}			   
					//wx.miniProgram.postMessage({ data: {id: idHou,listBannerImg:that.bannerArr[0],title:that.houseName,subtitle:that.subtitle,price:that.housePrice} });					    
				}else if(isAndroid){
					var getUserInfos = android.getUserInfo();
					if(getUserInfos == ""){
						android.openLoginPage();
					}else{	
						let urlNew = "http://special.gongyujia.com/#/subscribe?house_id="+ idHou + "&g_uid=" + JSON.parse(getUserInfos).g_uid;			
						android.openNewBrowser(urlNew);	
					}											
	  			}else if(isiOS){
	  				bridge.callHandler('getUserInfo', function(rest) {					
						let ocData = JSON.parse(rest);			
						if(ocData.g_uid == ""){			            
			            	var message = {
				                'methodName' : 'openLoginPage',	
				                'params' : {
				                    'param0': "登录",		                   
				                },
				            };
				            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
			        	}else{		
			        		let urlNew = "http://special.gongyujia.com/#/subscribe?house_id="+ idHou + "&g_uid=" + ocData.g_uid;	
//			           		let urlNew = "http://specialtest.gongyujia.com/#/subscribe?house_id="+ idHou + "&g_uid=" + ocData.g_uid;	
				            var message = {
				                'methodName' : 'openNewBrowser',	
				                'params' : {
				                  	"url": urlNew,                  
				                },
				            };
				            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
			            }
					});
	  			}
			};
//			document.getElementById('share').onclick = function(e){
//				let data = that.shareInfo;	   
//		    	data =  JSON.stringify(data);		    	
//				var u = navigator.userAgent, app = navigator.appVersion; 
//				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
//				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
//				if(isAndroid){
//					android.openShare(data);			           		        
//		        }else if(isiOS){
//		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {})
//			    }
//			}
        }    
	}
}
</script>
<style lang='scss' scoped>
.close{position: absolute;right: 3%;top: 5%;width: 9%;color: #fff;z-index: 30;font-size: 2.5em;display: none;}
.bgImg{position: fixed;top: 26%;z-index: 30;display: block;height: 40%;width: 100%;display: none;}
.box{background-color: #000;opacity: 0.75;z-index: 20;position: fixed;top: 0;width: 100%;height: 100%;display: none;}
.share{width: 30px;height: 30px;position: absolute;right: 18px;top: 10px;z-index: 10;}
a{text-decoration:none;outline-style: none;color: #666;}
.banners{
	overflow: hidden;
	width: 100%;
	background:#FFFFFF;
	height: auto!important;
	position: relative;
	.banner_list{
		width: calc(100vw) !important;
		height:calc(75vw) !important;
	}
}
.slide{margin-right: 5%;}
.swiper-pagination {position: absolute;z-index: 10;right: 6%;top: 83%;background-image: url("https://opres.gongyujia.com/H5/productBg.png");color: #fff;width: 15%;padding: 5px;border-radius: 20px;}

/*新增样式*/
.personListPd{ background:#fff;clear:both;}
.personListBg{ width:100%; background: #fff; position: relative; border-bottom: 10px solid #F5F5F5;}
.personListBgPd{padding:15px 10px;}
.personListBgPd h4{ color: #333; font-size:1em; text-align: left;font-weight: 600;line-height: 1.35em;}
.personListBgPd h6{ color: #20b7b6; font-size: 1.15em;margin-top: 15px;}
.personListBgPd h6 span{ display: inline-block; font-size: 0.7em;margin-top: 3px;}

.payment{float: right;font-size: .75em;color: #999;}
.payment>img{width: 10px;height: 15px;vertical-align: middle;margin-left: 10px;margin-top: -2px;}

/*基本信息*/
.cw {margin: 0 18px;}
.iconW {color: #333;font-size: 1.2em;position: relative;margin: 15px 0;}
.houseCont>p{width: 50%;float: left;color: #999;margin-bottom: 10px;}
.houseCont>p>span{color: #333;margin-left: 15px;}

.iconW span {display: block;color: #999;font-size: 0.75em;background: url("https://opres.gongyujia.com/H5/addressIconGrey.png") left center no-repeat;background-size: 1em;padding-left: 20px;margin-top: 8px;}
.iconW a{display: block;font-size: 0.7em;color: #333;position: absolute;right: 0;top: 0;text-decoration: none;background: url('https://opres.gongyujia.com/H5/right.png') right center no-repeat;background-size: 7px!important;padding-right: 20px;}
.trafficList {width: 100%;margin-bottom: 10px;}
.content{width: 100%;overflow: hidden;margin-left: 18px;}

.trafficList div.trafficListView{ width:48%; display: inline-block;  margin-top:10px; background-position: left center; background-repeat: no-repeat; background-size: 20px; color: #333; font-size:.75em; line-height: 13px;}
.trafficList div.trafficListView .iconImg{width: 25px;float: left;}
.trafficList div.trafficListView span{ display: block; color: #999; font-size:0.85em;margin-left: 28px;}

.XSDFXPage{width: 100%;height: 280px;overflow: hidden;}

.houseMessage {color: #999;font-size: .75em;margin-bottom: 15px;line-height: 1.65em;}

.prodductImgpd{margin-top: 15px;}

/*基础设施*/
.facilityPd{margin-top: 15px;height: 100px;overflow: hidden;position: relative;}
.facilityPd p{ display: inline-block; width: 19.5%; color: #999; font-size: .75em; text-align: center; margin-bottom:10px;}
.facLast{display: inline-block; width: 19%;font-size: .75em;position: absolute;top: 53%;left:78%;z-index: 10;background-color: #fff;}
.facilityPd p img{ margin: 0 auto 5px; display: block;width: 25px;}

.explain{margin-top: 20px;line-height: 1.75em;font-size: .75em;color: #afafb7;background-color: #fbfbfb;width: 100%;margin-bottom: 65px;}    
.classNub{padding: 15px 18px 0 18px;}
.exText{padding: 10px 18px 22px;}
.source{color: #20b7b6;}

.prodductImgpd{ padding-top:10px;}


.footBut{width: 100%;position: fixed;bottom: 0;height: 50px;line-height: 50px;z-index: 20;background-color: #fff;}
.footBut>span{width: 50%;height: 100%;text-align: center;font-size: .85em;color: #666;background-color: #fbfbfb;}
.footBut>span:last-of-type{color: #fff;background-color: #20b7b6;}
.footBut>span>a>img{width: 18px;height: 18px;margin-right: 5px;vertical-align: middle;}
.pactLook>img{width: 18px;height: 18px;margin-right: 5px;vertical-align: middle;}
.call{float: left;}
.pactLook{background-color: #20b7b6;float: right;color: #fff;}
</style>
<template>
	<div>
		<div class="breakList">
	  		<img src="https://opres.gongyujia.com/H5/years/years01.jpg" v-if="topBanner" style="margin: 0;"/>
	  		<div class="loginImg">
	  			<img :src="postUserico" id="userLogo"/>
	  			<div class="dataDay">
	  				<p>{{name}}</p>
	  				<p>{{day}}</p>
	  			</div>
	  		</div>
	  		<div class="breakMb">
	  			<img src="https://opres.gongyujia.com/H5/years/years02.jpg" class="topBanner"/>
	  			<img src="https://opres.gongyujia.com/H5/tide/breakImg007.jpg" />
	  			
	  			<img src="https://opres.gongyujia.com/H5/years/years03.png" />
	  			<img v-lazy="yearBSG1" />
	  			<img v-lazy="yearBSG2" />
	  			
	  			<img src="https://opres.gongyujia.com/H5/tide/breakImg003.jpg" />  			
	  			<img v-lazy="yearBSG3" />
				<img v-lazy="yearBSG4" />
				<img v-lazy="yearBSG5" />
	  			
	  			
	  			
	  			<img src="https://opres.gongyujia.com/H5/tide/breakImg011.jpg" />
	  			
	  			<img v-lazy="yearBSG6" />
	  			<img v-lazy="yearBSG7" />
	  			<img v-lazy="yearBSG8" style="margin: 0;"/>
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
		<!--<div class="demo"></div>
		<div class="likeAndShare">
			<div class="like" @click="flag && getLikeNub()">
				<img src="https://opres.gongyujia.com/H5/like.png" v-if='likes'/>	
				<img src="https://opres.gongyujia.com/H5/likes.png" v-else/>	
			<span class="likeNub">{{like}}个赞</span>
			</div>
			<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
		</div>-->
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
				showTitle:false,
				title:"跨年活动精选",			
				data:{},
				day:'',
				name:'',
				likes:true,
				topBanner:true,
				showPrise:true,
				isautotrophy:"",
				like:0,
				code:'',
				project:'',
				postUserico:'',
				flag:true,
				yearBSG1:'https://opres.gongyujia.com/H5/years/years04.png',
				yearBSG2:'https://opres.gongyujia.com/H5/years/years05.png',
				yearBSG3:'https://opres.gongyujia.com/H5/years/years06.png',
				yearBSG4:'https://opres.gongyujia.com/H5/years/years07.png',
				yearBSG5:'https://opres.gongyujia.com/H5/years/years08.png',
				yearBSG6:'https://opres.gongyujia.com/H5/years/years09.png',
				yearBSG7:'https://opres.gongyujia.com/H5/years/years10.png',
				yearBSG8:'https://opres.gongyujia.com/H5/years/years11.png',
				shareInfo:{
				   "share_title":"北上广2019跨年活动精选",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/yearBSG",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "subtitle":"元旦宅家刷手机？NO！让我们一起拒绝无聊，精彩跨年！",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				},
				houseList:[],
				url:'',
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
    	this.url = window.location.href;
    	this.type = this.$route.query.type;	
    	this.code = this.$route.query.code;   
    	this.project = this.$route.query.project;
	},
    mounted() {   
    	
	    let that = this;
	   // that.getUserIco();
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
				   "share_title":"北上广2019跨年活动精选",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/yearBSG",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"元旦宅家刷手机？NO！让我们一起拒绝无聊，精彩跨年！",   //副标题
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
        getLikeNub(){       	    		
       		if(this.likes == true){
       			let x = 100;       
	     		let y = 300;  
	       		let num = Math.floor(Math.random() * 3 + 1);
	       		let index=$('.demo').children('img').length;
	       		let rand = parseInt(Math.random() * (x - y + 1) + y); 
	       		$(".demo").append("<img id='hideImg' style='position:absolute;width:30px;left:75px;' src=''>");
	       		$('.demo img:eq(' + index + ')').attr('src','https://opres.gongyujia.com/H5/like/'+num+'.png')
	       		$(".demo img").animate({       			
	       			opacity:"0",        		
	       			bottom:"800px",
	       			left: rand,      			
	       		},3000); 
	       		this.flag = false;         			
       		}else{
       			this.flag = false;    			
       		}
       		this.likes = false;
			let url = "like",		     
			    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":'021',"g_uid":"","channel":"","app_device":"","package_name":"","type":1,"id":this.url, "src":"special","special_name":"本地速玩(北上广)", "share_id":'' };
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						this.like = res.content.like_num;
						console.log(res.content.like_num)
					},
					error:( res)=>{
						alert(res)							
					}
				})
			});
        },
        getUserIco(){        	
        	let url = "index/getViewTotal",		     
			    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":'021',"g_uid":"","channel":"","app_device":"","package_name":"","list_id":this.project};
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						this.postUserico = res.content.director_logo;
						this.day = res.content.create_time;
						this.name = res.content.director_name;
						console.log(res.content)
					},
					error:( res)=>{
						alert(res)							
					}
				})
			});
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
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			
			let url = "house_list",			     
			    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":this.code,"g_uid":"","channel":"","app_device":"","package_name":"",'page':3,'page_size':'20','filter_type':'normal','price_bottom':8000};
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
.likeAndShare{position: fixed;left: 0;bottom: 0;display: none;}
.loginImg{margin-top: 23px;}
#userLogo{ width: 20%;display: inline-block;border-radius: 250px;margin:0 3.7% 30px;float: left;}
.dataDay{line-height: 37px;} 
.dataDay>p:first-of-type{padding-top: 5px;font-weight: 600;color: #333;} 
.dataDay>p:last-of-type{margin-top: -4px;color: #838383;} 
.likeNub{position: absolute;bottom: 36%;left: 38%;font-size: .85em;overflow: hidden;color: #ffae44;font-weight: 600;}
.demo{position: fixed;left: 10%;bottom: 10px;}
.like{display: inline-block;width: 30%;margin: 20px 10% 60px 12%;position: relative;display: none;}
.like>img{ border-radius: 7px;}
/*.shareBut{width: 30%;display: inline-block;margin-left: 4%;}*/
.shareBut{width: 30%;margin: 15px 35%;}
h1{ display: none;}
.breakList img{ width: 100%; display: block; margin-bottom: 40px;}
.breakMb{ margin: 0 14px;}
swiper-slide{margin-right: 0;}	

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


#hideImg{ width: 20px; height: 20px; position: absolute; bottom: 100px; left: 50%; margin-left: -10px; }
</style>
   
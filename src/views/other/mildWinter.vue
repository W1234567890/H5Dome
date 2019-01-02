<template>
	<div class="bj">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
		<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter01.jpg" class="bannerImg" />
		<div class="loginImg">
  			<img :src="postUserico" id="userLogo"/>
  			<div class="dataDay">
  				<p>{{name}}</p>
  				<p>{{day}}</p>
  			</div>
  		</div>
  		<div class="apartmentPd">
  			<p>过冬是一件值得认真对待的事情，降温前好好准备，降温后不会受罪。今天为大家推荐一批有「温度感」的过冬神器，帮助你过一个温暖舒适的冬天。</p>
  			<h1>焖烧杯 </h1> 			
  			<p>头天晚上放进米和开水，第二天打开就能吃到热乎乎的粥。起床困难户的好伙伴，能省去起床煮粥的时间。寒冷的早晨，因为有它，你可以安心地在被窝里多躺半小时。</p>  		
			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter02.jpg" />
			<h1>Dyson 戴森暖风机 </h1> 			
  			<p>如果你住的地方没有暖气，戴森暖风机是最值得入手的取暖大件设备。颜值超高，静音安全，还是一台集制暖、净化空气、冷风机三合一的居家神器。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter04.jpg" />	 			
  			<h1>TOMONI 暖被机 </h1> 			
  			<p>钻冷被窝这件事，堪称冬天的一大酷刑。冰手冰脚冷被窝，简直令人生无可恋。TOMONI暖被机完美解决了这一问题，仅需10分钟，就能把被子烘的热乎乎软蓬蓬。除此之外，它还能干衣、烘鞋，除螨，给小房间除湿等等。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter05.jpg" />
  			<h1>碳晶地暖垫</h1> 			
  			<p>地暖垫表面是导热地板革，可以根据家庭的需要，定制不同的尺寸。地暖垫通电之后可以在0-60℃之间来回调节，达到设定温度后自动切换为恒温，让你肆无忌惮享受温暖。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter06.jpg" />
  			<h1>暖桌 </h1> 			
  			<p>日本动漫中常常出现的过冬神器，不单只是一张厚厚的棉被，在暖桌的下方还嵌着电暖设备。把腿伸进暖桌，整个下半身都暖烘烘懒洋洋。 《银魂》中曾笑言，暖桌简直是冬日里的黑洞，舒服的让人一旦钻进暖桌里，就很难再爬出来。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter07.jpg" />
  			<h1>插电暖脚宝 </h1> 			
  			<p>久坐族不可或缺的居家过冬神器，从脚尖一路包裹到脚踝，360°全方位呵护，平时只需将双脚放到里面，然后等它慢慢升温，就能感受到泡脚一样的舒适。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter08.jpg" />
  			<h1>恒温养生杯 </h1> 			
  			<p>恒温养生杯可以将杯子里的饮品恒温在55°，不管放多久也不会变凉，永远都保持着刚好可以喝的热度。窗外北风吹，屋内暖融融，再手捧一杯热饮，简直不要太幸福。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter09.jpg" />
  			<h1>烘鞋器 </h1> 			
  			<p>潮湿寒冷的冬天，如果被雨雪打湿了鞋子，穿鞋就成了一件要命的事情。烘鞋器可以很快烘干鞋子里的水份，让你永远都穿着温暖干燥的鞋子愉快地出门。</p>
  			<img src="https://opres.gongyujia.com/H5/mildWinter/mildWinter10.jpg" />
  			<p>当白日渐短，当冬夜渐长，毛毯、暖炉、热茶就是当下幸福的来源。如果你还没有做好过冬的准备，那么现在就可以行动起来了。愿你这个冬天，过得舒适又温暖。</p>	
  			
  			
  		</div>
  		
		<div class="footerEjA">
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
		<div class="demo"></div>
		<div class="likeAndShare">
			<div class="like" @click="flag && getLikeNub()">
				<img src="https://opres.gongyujia.com/H5/like.png" v-if='likes'/>	
				<img src="https://opres.gongyujia.com/H5/likes.png" v-else/>	
			<span class="likeNub">{{like}}个赞</span>
			</div>
			<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut" v-if="show"/>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			showPrise:false,
			title:"爆改实录壹",
			show:true,
			imgState:1,
          	lengthBanner:0,
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
            houseList:[],
            shareInfo:{
			   "share_title":'暖冬家居好物',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/mildWinter",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"这十样过冬神器，助你度过这个寒冷的冬天！",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			},
			like:0,
			likes:true,
			flag:true,
			day:'',
			name:'',
			postUserico:'',
		}
	},
	beforeMount(){   	
    	document.title = this.title;
    	var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
	        this.show = false;	      
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.show = false;			
		}
		this.url = window.location.href;  	
    	this.code = this.$route.query.code;   
    	this.project = this.$route.query.project;
	},
	mounted() {	
		let that = this;
		//that.getUserIco();
		that.init();
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	   	};      	
        var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){					
		}else{
			let data = {
				   "share_title":'暖冬家居好物',        //分享标题
				   "share_url":"https://special.gongyujia.com/#/mildWinter",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"这十样过冬神器，助你度过这个寒冷的冬天！",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				};
	    	data =  JSON.stringify(data);
			if(isAndroid){
				
				android.showShareButton(data);
				that.setclick(null);
			}else if(isiOS){
			
				that.setupWebViewJavascriptBridge(function(bridge) {											
			        bridge.callHandler('showShareButton', that.shareInfo,function(rest) {})
					that.setclick(bridge);							
		       	})
			}
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
				let data = {
					   "share_title":'暖冬家居好物',        //分享标题
					   "share_url":"https://special.gongyujia.com/#/mildWinter",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"这十样过冬神器，助你度过这个寒冷的冬天！",      //副标题
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
		//品牌馆
		openBrandMain(e){						
			var brand_id = e.target.id;
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境						
		        $('.footerEjA').hide();
		        $('.ejAllContent').hide();
			}else{
				if(isAndroid){
					android.openBrandMain(brand_id);	
				}else if(isiOS){	
		            var message = {
		                'methodName' : 'openBrandMain',	
		                'params' : {
		                    'brand_id':brand_id,		                   
		                },
		            };
		            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		        		        
		        }
			}							
		},
		openNewBrowser(e){
			var brand_url = e.target.id;
			var ua = window.navigator.userAgent.toLowerCase();
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境
		        //微信环境
		        wx.miniProgram.getEnv(function (res) {
				    if (res.miniprogram) {
				      wx.miniProgram.switchTab({url: 'pages/list/listDetailOthers/listDetailOthers'});
				      wx.miniProgram.postMessage({data: {id: houseId}}); // 传的参数
				    }
				});
		    }else if(isAndroid){
				android.openNewBrowser(brand_url);	
			}else if(isiOS){			              		
	            var message = {
	                'methodName' : 'openNewBrowser',	
	                'params' : {
	                    'url':brand_url,		                   
	                },
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		        		        
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
			    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":'021',"g_uid":"","channel":"","app_device":"","package_name":"","type":1,"id":this.url, "src":"special","special_name":"爆改房源", "share_id":'' };
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
	    	console.log(this.isautotrophy)
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
.loginImg{/*margin-top: 23px;*/}
#userLogo{ width: 20%;display: inline-block;border-radius: 250px;margin:0 3.7% 30px;float: left;}
.dataDay{line-height: 37px;} 
.dataDay>p:first-of-type{padding-top: 5px;font-weight: 600;color: #333;} 
.dataDay>p:last-of-type{margin-top: -4px;color: #838383;} 
.likeNub{position: absolute;bottom: 36%;left: 38%;font-size: .85em;overflow: hidden;color: #ffae44;font-weight: 600;}

.like{display: inline-block;width: 30%;margin: 0px 10% 0px 12%;position: relative;}
.like>img{ border-radius: 7px;}
/*.shareBut{width: 30%;display: inline-block;margin-left: 4%;border-radius: 7px;}*/

.shareBut{width: 30%;margin: 15px 35%;}
.bj{margin-bottom: 20px;}
swiper-slide{margin-right: 0;}	
.ejBanner{width: 100%;position: relative;}
.ejAllContent{width: 100%;}
.ejAllContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.ejAllTit{width: 100%;height: 1em;text-align: center;font-size: 1.75em;line-height: 1em;margin-bottom: 4px;}
.ejAllTit>img{width: .55em;height: .2em;vertical-align: middle;}
.ejAllTit>h3{display: inline-block;font-weight: 600;font-size: 1em;vertical-align: middle;color: #333;}

.footerEjA{width: 100%;overflow: hidden;background-color: #fff;margin-top: 20px;padding-bottom: 32px;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin:15px 0;width: 100%;}
.bHse>a{float: left;width: 46%;}
.bHse>a>img{width: 100%;}
  
.bHse{width: 100%;display: inline-block;margin-left: 3.2%;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height: auto!important;display: block;border-top-left-radius: 5px;border-top-right-radius: 5px;}
.desHouse{width: 100%;height: auto!important;}
.desHouse>img{width: 100%;height: auto!important;}
.des{position: relative;width: 92.7%;margin-top: 12px;line-height: 15px;padding-bottom: 13px;text-align: left;margin-left: 3.7%;}
.desHcont .bHMP{margin-left: .85em;margin-top: 6px;}
.desHcont .bHGP{margin-left: .85em;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.desHcont{width: 92.6%;margin-left: 3.7%;position: relative;bottom: 30px;border-radius: 5px;box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);}
.Hcont{padding-bottom: 10px;background-color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #666;font-size: 1.2em;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHMP{height: 1.5em;line-height: 1.5em;font-size: .9em;color: #b6b6b6;margin: 6px 0 0 .15em;}
.Hcont .bHM{margin-left: 1.5%;font-size: 1em;color: #000;margin-top: 5px}
.Hcont .bHMs{margin-right: 3.7%;text-align: right;color: #2eb6b5;margin-top: 5px;font-size: .85em;}
.Hcont .bHMs>span:last-of-type{color: #2eb6b5;margin: 0 0 0 6px;font-size: 1.25em;}
.Hcont .bHGP{margin-left: .85em;line-height: 1.5em;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHGP>img{width: 1em;height: 1em;vertical-align: middle;}
.Hcont .bHGP>span{margin-left: 2px;color: #959595;font-size: .85em;vertical-align: middle;width: 90%;height: 24px;display: inline-block;}
.dsTop{width: 100%;}
.dt{margin-top: -16px;}
.dsText{width: 92.6%;margin-left: 3.7%;height: auto!important;position: relative;bottom: 22px;border-radius: 5px;box-shadow:0 5px 5px rgba(0, 0, 0, 0.2);}
.designContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.designContent>img:last-of-type{padding-bottom: 6px;}
.recommendHouse{width: 100%;}
.recommendHouse>h1{width: 92.6%;height: 1.25em;line-height: 1.5em;font-size: 1.2em;font-weight: bolder;margin-left:3.7%;color: #333;margin-bottom: 10px;}
.point{width: 100%;text-align: center;margin: 1em 0 1.5em;}
.fH{width: 100%;}
.oneB{margin: 0;}

.emphasis{color:#151515;font-weight: 600;}
.bannerImg{ width: 100%;}
.apartmentPd{ margin: 0 15px;clear:both;}
.apartmentPd img{ width: 100%;}
.apartmentPd p{ color: #838383; font-size: 1em; margin: 15px 0; line-height: 25px;}
.apartmentPd h1{color: #333333;font-size: 1.15em;text-align: left;font-weight: 600;padding-top:20px;}
.apartmentPd h3{color: #333333;font-size: 1em;font-weight: 500;margin: 25px 0 10px 0;}
.apartmentPd span{ color: #838383; font-size: 1em; line-height: 25px;}

.bjmg{margin: 20px 0 0;}
.houesImg{border-radius: 7px;margin: 20px 0 0;}

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

</style>
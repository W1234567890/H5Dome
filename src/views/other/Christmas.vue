<template>
	<div>
		<div class="breakList">
	  		<img src="https://opres.gongyujia.com/H5/christmas/Christmas01.jpg" v-if="topBanner" />
	  		<div class="houseBanner">				
  				<p class="titBanner">圣诞节就要到了，往年这个时候总有小伙伴很纠结：“完全想不出来，圣诞节应该送什么礼物给对方？”的确，挑选礼物是个技术活儿，既要实用，又要好看，还不能太贵。</p>
  				<p class="titBanner">在此献上《圣诞节送礼指南》，希望可以为正在挑选礼物的你带来灵感。</p>
  				<p class="start">以下所有推荐与品牌方无利益相关</p>
  				<p class="titText">Diptyque圣诞限量走马灯旋转烛台</p>	
  				
				<p class="titBanner">每年的圣诞走马灯烛台都很抢手。今年的名字是浪漫的“北境传说”，在蜡烛燃烧的热力驱动下旋转的走马灯，金色的叶片在烛光的映衬下，如梦如幻，非常赏心悦目。 </p>	
				<p class="titBanner">今年走马灯有大号和小号两种，大号是单独的走马灯烛台，小号是一个烛台加两个7g蜡烛的礼盒。 </p>						
				<img v-lazy="lamb02" class="aticvImg"/>
								
  				<p class="titText">Chanel No.5 2018限量版</p>	
				<p class="titBanner">一经面世就收获了一片惊艳的赞美声，把经典的No.5和香奈儿女士挚爱的红色结合，以玫瑰和茉莉融合的香味，芬芳优雅。今年除了经典款，还有No.5 L'EAU的五号之水版，相比No.5经典版，更有现代的气息，更清新自然。</p>					
				<img v-lazy="lamb03" class="aticvImg"/>
				
				
  				<p class="titText">Coach2018 圣诞星辰手拿包</p>	
				<p class="titBanner">Coach在国内的认可度相当高，在圣诞节送Coach包包是很保险的选择。这款星辰手包只在圣诞有售，blingbling的非常闪耀。包包一共有红、黄、蓝、黑四款颜色，每一款都相当好看。在接下来的圣诞聚会、跨年趴体、年会等场合，都会是它大显身手的好机会。</p>					
				<img v-lazy="lamb04" class="aticvImg"/>
				
				
  				<p class="titText">Old Spice 经典男士须后水</p>	
				<p class="titBanner">Old Spice是宝洁旗下的专业男士日护品牌，也是其最著名的品牌。他家的须后水比较温和，因其特别干净怡人的香味，拥有大批忠实的拥护者。这款须后水比其他产品的包装更简洁耐看，依然是标志性的圣诞红色，特别适合作为这个季节的礼物。</p>		
				<img v-lazy="lamb05" class="aticvImg"/>

  				<p class="titText">Il Bussetto手工皮包</p>				
				<p class="titBanner">Il Bussetto这个意大利的老牌皮具品牌，在国内虽然有一票人很喜欢，但总体说还是偏小众。不管是招牌的零钱包、证件套还是挎包，都有圆润细腻的质地和线条。在制作过程中，他家会用特殊工艺定型皮料，不用缝就可以制作完成，和其他包包相比更多了一份独特。作为圣诞礼物，建议大家选择绿色系或红色系。</p>					
				<img v-lazy="lamb06" class="aticvImg"/>
  				
  				
  				<p class="titText">Il Bussetto香烟套</p>				
				<p class="titBanner">成立于2004年的意大利品牌Il Bussetto可谓皮具界的新贵，传承了意大利的手工制作技艺，并且只用欧洲最好的牛皮材质，使得每件作品都带着不张扬的高级感。这款香烟套，更像是一件随身配饰，细节之处，更能突显儒雅气质。</p>					
				<img v-lazy="lamb07" class="aticvImg"/>
				
				<p class="titText">便携式手动咖啡机</p>				
				<p class="titBanner">便携式手动咖啡机对于一些爱各地游玩，又离不开咖啡的驴友来说是个福音，无论何时何地，只要有开水，随时可以来杯香醇的现磨咖啡，口感和专业咖啡机做出来的几乎无差，油脂可以充分的榨出来，用胶囊的话会方便很多，具有便携性。</p>					
				<img v-lazy="lamb08" class="aticvImg"/>
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
		<div class="like" @click="flag && getLikeNub()">
			<img src="https://opres.gongyujia.com/H5/like.png" v-if='likes'/>	
			<img src="https://opres.gongyujia.com/H5/likes.png" v-else/>	
			<span class="likeNub">{{like}}个赞</span>
		</div>-->
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
				showTitle:false,
				title:"圣诞节送礼指南",			
				data:{},
				topBanner:true,
				showPrise:true,
				isautotrophy:"",
				price:'',
				price_top:0,
				code:'',
				likes:true,
				like:0,
				flag:true,
				shareInfo:{
				   "share_title":"圣诞节送礼指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/Christmas",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "subtitle":"圣诞节送什么最靠谱？或许这篇能给你答案。",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				},
				lamb02:'https://opres.gongyujia.com/H5/christmas/Christmas02.jpg',
				lamb03:'https://opres.gongyujia.com/H5/christmas/Christmas03.jpg',
				lamb04:'https://opres.gongyujia.com/H5/christmas/Christmas04.jpg',
				lamb05:'https://opres.gongyujia.com/H5/christmas/Christmas05.jpg',
				lamb06:'https://opres.gongyujia.com/H5/christmas/Christmas06.jpg',
				lamb07:"https://opres.gongyujia.com/H5/christmas/Christmas07.jpg",
				lamb08:'https://opres.gongyujia.com/H5/christmas/Christmas08.jpg',
				lamb09:'https://opres.gongyujia.com/H5/christmas/Christmas09.jpg',
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
    	this.url = window.location.href;
    	this.type = this.$route.query.type;	
		this.code = this.$route.query.code;
    	this.project = this.$route.query.project;   	
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
				   "share_title":"圣诞节送礼指南",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/Christmas",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"圣诞节送什么最靠谱？或许这篇能给你答案。",      //副标题
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
			    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":'021',"g_uid":"","channel":"","app_device":"","package_name":"","type":1,"id":this.url, "src":"special","special_name":"圣诞节送礼指南", "share_id":'' };
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
		init(){			
			if(this.code == '021' || this.code == '010'){
				this.price = '8000';
				
			}else{
				this.price = '5000';
			}
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			
			let url = "house_list",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":this.code,"g_uid":"","channel":"","app_device":"","package_name":"",'page':2,'page_size':'10','filter_type':'normal','price_bottom':this.price};											
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
#userLogo{ width: 20%;display: inline-block;border-radius: 250px;margin:0 3.7% 30px;float: left;}
.dataDay{line-height: 37px;} 
.dataDay>p:first-of-type{padding-top: 5px;font-weight: 600;color: #333;} 
.dataDay>p:last-of-type{margin-top: -4px;color: #838383;} 
.likeNub{position: absolute;bottom: 36%;left: 38%;font-size: .85em;overflow: hidden;color: #ffae44;font-weight: 600;}
.like{display: inline-block;width: 30%;margin: 20px 10% 60px 12%;position: relative;}
.shareBut{width: 30%;margin: 20px 35% 45px;}
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

.start{color: #b5b5b5;text-align: left;font-size: .75em;}
.titText{margin-top: 35px;line-height: 28px;font-weight: 600;font-size: 1.05em;text-align: left;}
.levelTit{color: #333;font-size: 1em;margin: 15px 0 15px 0;line-height: 27px;text-align: left;font-weight: 600;}
.titBanner{ color: #838383;font-size: .85em;margin: 15px 0 20px 0;line-height: 27px;text-align: left;}	
.aticvImg{border-radius: 7px;width: 100%;}
</style>
   
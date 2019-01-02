<template>
	<div class="bj">
		<img src="https://opres.gongyujia.com/H5/share.png" class="share" id="share" v-if="showPrise"/>
		<img src="https://opres.gongyujia.com/H5/amend/amend01.jpg" class="bannerImg" />
		<div class="loginImg">
  			<img :src="postUserico" id="userLogo"/>
  			<div class="dataDay">
  				<p>{{name}}</p>
  				<p>{{day}}</p>
  			</div>
  		</div>
  		<div class="apartmentPd">
  			<p>安琪是个北漂姑娘，气质文雅，笑起来很温柔。她在北京呆了6年，毕业工作，结婚生子，买房装修。这个城市见证了她的青春与成长，而她终于在这里，落地生根。</p>
  			<h1>房屋介绍</h1> 			
  			<p>45㎡，毛坯，安琪和她先生购买的这套房子，位于北京东四环边上。</p>
  			<p>这是套烟囱筒一样的房子，单面开窗，采光局促，房型狭小，层高却足有8米，着实是一般人难以驾驭的奇葩户型。  </p>
			<img src="https://opres.gongyujia.com/H5/amend/amend02.jpg" />
  			<img src="https://opres.gongyujia.com/H5/amend/amend04.jpg" class="houesImg"/>
  			<img src="https://opres.gongyujia.com/H5/amend/amend03.jpg" />
  			<img src="https://opres.gongyujia.com/H5/amend/amend05.gif" class="houesImg"/>
  			<img src="https://opres.gongyujia.com/H5/amend/amend06.jpg" />
  			<p style="margin: 0;">这样一套结构有硬伤的房子，在安琪的手里，化腐朽为神奇，变成了一套145㎡的4卧3卫轻奢小别墅。</p>
  			<h1>一层</h1> 	
  			<p>一层的功能定位是公共空间，有客厅、厨房、餐厅及一个洗手间。</p>
			<h3>玄关</h3> 		
  			<span>几何元素、白色主调、绿植与鲜花、黄铜小件，典型的混搭北欧风。玄关柜是悬空设计，下方可以放当天穿换的鞋子。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend07.jpg" class="bjmg"/>
  			<h3>洗手间</h3> 		
  			<span>俏皮时尚的黑白六角砖，与玄关相呼应，打破了洗手间灰色墙面和狭小空间带来的沉闷。</span>  			
  			<img src="https://opres.gongyujia.com/H5/amend/amend08.jpg" class="houesImg"/>
  			<h3>厨房</h3> 		
  			<span>开放式厨房设计，小白砖配黑色美缝，简约耐看。善用墙面收纳，厨房干净整洁。木质桌椅与客厅延伸过来的地板彼此呼应，协调温馨。</span>  			
  			<img src="https://opres.gongyujia.com/H5/amend/amend09.jpg" class="houesImg"/>
  			<p>摆满美食与鲜花的餐桌，体现着安琪对生活品质的追求与热爱。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend10.jpg" class="houesImg" style="margin: 0;"/>
  			<h3>客厅</h3> 		
  			<span>原来的LOFT结构，被隔成3个楼层。旋转楼梯的大中空，极大地优化了采光与通风。</span>  			
  			<img src="https://opres.gongyujia.com/H5/amend/amend11.gif" class="houesImg"/>
  			<p>错落有致的吊灯，轻盈、剔透、明亮，使室内每个角落都有充足的光线。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend12.gif" class="houesImg" style="margin: 0;"/>
  			<p>华丽缤纷的土耳其地毯、做旧的复古油蜡皮沙发、黑胡桃木+大理石茶几、随处可见的花朵绿植，将客厅装扮得生机盎然，赏心悦目。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend13.jpg" class="houesImg" style="margin: 0;"/>
  			<p>电视背景墙边的书架，增加了客厅的收纳能力。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend14.jpg" class="houesImg" style="margin-top: 0;"/>
  			<h1>二层</h1> 	
  			<p>二层区域分布着两间次卧，是专为双方父母提供的居住空间。</p>
			<h3>楼梯</h3> 		
  			<span>旋转楼梯搭配整面书墙，以书做装饰，高雅且实用。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend15.jpg" class="houesImg"/>
  			<h3>次卧 1</h3> 		
  			<span>巧用榻榻米，弥补层高不足的尴尬。嵌入式衣柜，加了一个凹槽，可以解决床头置物的需求。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend16.jpg" class="houesImg"/>
  			<h3>次卧 2</h3> 		
  			<span>清新优美的床头挂画，高低错落的绿植盆栽，老人的房间充满柔和舒适的氛围。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend17.gif" class="houesImg"/>
  			<p>楼梯下方的畸零空间被充分利用，设计成分类储物的形式。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend18.jpg" class="houesImg" style="margin-top: 0;"/>
  			<h1>三层</h1> 
  			<p>三层是安琪夫妻与女儿休息的地方，一边是主卧，一边是儿童房。</p>
  			<h3>主卧</h3> 		
  			<span>主卧仍是榻榻米式的设计，顶上开了天窗增加采光。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend19.gif" class="houesImg"/>
  			<p>主卧内置了一个配备浴缸的卫生间以及一个步入式衣帽间。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend20.gif" class="houesImg" style="margin-top: 0;"/>
  			<p>这样的梳妆台，把人一下子带到了“梳一个油头桂花儿香”的年代。</p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend21.jpg" class="houesImg" style="margin-top: 0;"/>
  			<p>主卧占用了整个家最大的卧室面积，利用一个胡桃木储物柜，解决了一部分的收纳需求。 </p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend22.jpg" class="houesImg" style="margin-top: 0;"/>
  			<p>结束了一天的工作后，可以泡在浴缸中享受一个热水澡。 </p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend23.jpg" class="houesImg" style="margin-top: 0;"/>
  			<h3>儿童房</h3> 		
  			<span>小小的阁楼内，粉色调与高级灰巧妙混搭，层层渲染于各种ins风的童趣元素之上。</span>
  			<img src="https://opres.gongyujia.com/H5/amend/amend24.gif" class="houesImg"/> 			
  			<p>小木马、小帐篷、涂鸦墙、天鹅造型的壁饰， 可伸缩的儿童床，满足了小女孩对公主房的一切幻想。 </p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend25.jpg" class="houesImg" style="margin-top: 0;"/>
  			<p>生活的诗意与美好，不应该被小户型所限制。安琪用一系列合理而充满巧思的设计，为一家三口打造了一个高颜值的家。只要用心对待自己的家，就能住得安心、舒适。 </p>
  			<img src="https://opres.gongyujia.com/H5/amend/amend26.jpg" class="houesImg" style="margin-top: 0;"/>
  		</div>
  		
		<div class="footerEjA" v-if="show">
			<div class="ftTit">
				<h1>更多设计范文章</h1>				
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">
						<swiper-slide>
							<a @click="openNewBrowser" id="https://special.gongyujia.com/#/amend">								
				   				<img src="https://opres.gongyujia.com/H5/amend/amend27.jpg" class="" id="https://special.gongyujia.com/#/amend"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="https://special.gongyujia.com/#/stylist">								
				   				<img src="https://opres.gongyujia.com/H5/apartment/apartment24.png" class="" id="https://special.gongyujia.com/#/stylist"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="https://special.gongyujia.com/#/panDa">								
				   				<img src="https://opres.gongyujia.com/H5/stylist/stylist24.jpg" class="" id="https://special.gongyujia.com/#/panDa"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="https://special.gongyujia.com/#/newBrand">								
				   				<img src="https://opres.gongyujia.com/H5/panDa/panda15.jpg" class="" id="https://special.gongyujia.com/#/newBrand"/>		
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openNewBrowser" id="https://special.gongyujia.com/#/design">								
				   				<img src="https://opres.gongyujia.com/H5/different/brand22.jpg" class="" id="https://special.gongyujia.com/#/design"/>		
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
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,		           
	            slidesPerView : 2.15,
				spaceBetween: 16,
	            autoplayDisableOnInteraction : false,		           
				onSlideChangeStart:swiper=>{
					this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;
					if(this.page>this.imgState){
                    	this.imgState=this.page;
                    }
                },
            },
            shareInfo:{
			   "share_title":'45㎡筒子楼被她这样改成别墅',        //分享标题
			   "share_url":"https://special.gongyujia.com/#/amend",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"没人要的奇葩户型，在她手里变成了价值500万的轻奢别墅。",      //副标题
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
		that.getUserIco();
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
				   "share_title":'45㎡筒子楼被她这样改成别墅',        //分享标题
				   "share_url":"https://special.gongyujia.com/#/amend",          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"没人要的奇葩户型，在她手里变成了价值500万的轻奢别墅。",      //副标题
				   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
				   "mini_name":"",           //分享小程序使用的原始id
				   "mini_path":"", //分享小程序使用的页面路径
				};
	    	data =  JSON.stringify(data);
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
					   "share_title":'45㎡筒子楼被她这样改成别墅',        //分享标题
					   "share_url":"https://special.gongyujia.com/#/amend",          //链接
					   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
					   "share_subtitle":"没人要的奇葩户型，在她手里变成了价值500万的轻奢别墅。",      //副标题
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
.apartmentPd p{ color: #838383; font-size: 1em; margin: 25px 0; line-height: 25px;}
.apartmentPd h1{color: #333333;font-size: 1.15em;text-align: center;font-weight: 600;margin-left: -15px;padding-top:30px;}
.apartmentPd h3{color: #333333;font-size: 1em;font-weight: 500;margin: 25px 0 10px 0;}
.apartmentPd span{ color: #838383; font-size: 1em; line-height: 25px;}

.bjmg{margin: 20px 0 0;}
.houesImg{border-radius: 7px;margin: 20px 0 0;}

</style>
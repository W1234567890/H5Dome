<template>
	<div>		
		<img class="ejBanner" src="https://opres.gongyujia.com/H5/different/ejgz01.jpg" />
		<div class="ejAllContent">
			<img src="https://opres.gongyujia.com/H5/different/ejgz02.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/ejgz03.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz04.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz05.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz06.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz07.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz08.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz09.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/ejgz10.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz11.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz12.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz13.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz14.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz15.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz16.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/ejgz17.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz18.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz19.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejgz20.jpg" class="txtBann"/>
			<img src="https://opres.gongyujia.com/H5/different/ejgz21.jpg" />
		</div>
		<div class="footerEjA">
			<div class="ftTit">
				<h1>好房推荐</h1>
				<span>周边租房推荐</span>
			</div>
			<div class="ftBanner">
				<div class="bHse">
					<swiper :options="houseSwiperOption"  ref="mySwiper">
						<swiper-slide>
							<a @click="openHouseDetail" id="24563056">
								<div class="bH" id="24563056">
						   			<div class="hImg1" id="24563056">
						   				<img src="https://opres.gongyujia.com/H5/different/519577.jpg" class="" id="24563056"/>
						   			</div>
						   			<div class="Hcont" id="24563056">
						   				<h1 id="24563056">白云区铂承四季精品公寓一室公寓</h1>			   				
						   				<div class="bHMP" id="24563056">
						   					<span id="24563056">1室0厅1卫</span> | <span id="24563056">30</span>平米<span> | </span><span id="24563056">12/30层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24563056">¥ <span id="24563056">7230</span>元/月</p>
						   			</div>		
						   		</div>
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openHouseDetail" id="24562822">
								<div class="bH"  id="24562822">
						   			<div class="hImg1" id="24562822">
						   				<img src="https://opres.gongyujia.com/H5/different/519578.jpg" class="" id="24562822"/>
						   			</div>
						   			<div class="Hcont" id="24562822">
						   				<h1 id="24562822">白云区铂承四季精品公寓一室公寓</h1>			   				
						   				<div class="bHMP" id="24562822">
						   					<span id="24562822">1室0厅1卫</span> | <span id="24562822">30</span>平米<span> | </span><span id="24562822">12/30层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24562822">¥ <span id="24562822">4200</span>元/月</p>
						   			</div>		
						   		</div>
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openHouseDetail" id="24562948">
								<div class="bH"  id="24562948">
						   			<div class="hImg1" id="24562948">
						   				<img src="https://opres.gongyujia.com/H5/different/519492.jpg" class="" id="24562948"/>
						   			</div>
						   			<div class="Hcont" id="24562948">
						   				<h1 id="24562948">白云区黄石街江夏村一室酒店式公寓</h1>			   				
						   				<div class="bHMP" id="24562948">
						   					<span id="24562948">1室0厅1卫</span> | <span id="24562948">20</span>平米<span> | </span><span id="24562948">7/8层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24562948">¥ <span id="24562948">2400</span>元/月</p>
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
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"乐享广州",
			imgState:1,
			lengthBanner:"",
			imgState:1,
          	lengthBanner:0,
			houseSwiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,		           
	            slidesPerView : 1.25,
				spaceBetween: 20,
	            autoplayDisableOnInteraction : false,		           
				onSlideChangeStart:swiper=>{
					this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;
					if(this.page>this.imgState){
                    	this.imgState=this.page;
                    }
                },
            }
		}
	},		
    beforeMount(){	
    	document.title = this.title;
	},
	methods: {			
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
<style scoped>
swiper-slide{margin-right: 0;}	
.ejBanner{width: 100%;position: relative;}
.ejAllContent{width: 100%;}
.ejAllContent>img{width: 92.6%;margin-left: 3.7%;height: auto!important;}
.ejAllTit{width: 100%;height: 1em;text-align: center;font-size: 1.75em;line-height: 1em;margin-bottom: 4px;}
.ejAllTit>img{width: .55em;height: .2em;vertical-align: middle;}
.ejAllTit>h3{display: inline-block;font-weight: 600;font-size: 1em;vertical-align: middle;color: #333;}
.ejAllContent .txtB{margin: 23px 3.7% 23px 3.7%;}
.ejAllContent .txtBann{margin: 23px 3.7% 0px 3.7%;}
.ejAllContent .textBord{border-bottom: 1px solid #f9f9f9;margin-bottom: 22px;}
.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 10px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height: auto!important;display: block;border-top-left-radius: 5px;border-top-right-radius: 5px;}
.Hcont{width: 100%;padding-bottom: 10px;background-color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #666;font-size: 1.2em;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 .5em;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHMP{height: 1.5em;line-height: 1.5em;font-size: .9em;color: #b6b6b6;margin: 6px 0 0 .85em;}
.Hcont .bHM{margin-left: 3.6%;font-size: 1em;color: #000;margin-top: 5px}
.Hcont .bHMs{margin-right: 3.7%;text-align: right;color: #2eb6b5;margin-top: 5px}
.Hcont .bHMs>span:last-of-type{color: #2eb6b5;margin: 0 0 0 6px;font-size: 1.5em;}
</style>
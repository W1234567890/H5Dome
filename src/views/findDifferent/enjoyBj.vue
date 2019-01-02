<template>
	<div>		
		<img class="ejBanner" src="https://opres.gongyujia.com/H5/different/ejbj01.jpg" />
		<div class="ejAllContent">
			<img src="https://opres.gongyujia.com/H5/different/ejbj02.jpg" class="txtB" />			
			<img src="https://opres.gongyujia.com/H5/different/ejbj03.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj04.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj05.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj06.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj07.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj08.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj09.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/ejbj10.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj11.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj12.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj13.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj14.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj15.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj16.jpg" />			
			<img src="https://opres.gongyujia.com/H5/different/ejbj17.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj18.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj19.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj20.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj21.jpg" />
			<img src="https://opres.gongyujia.com/H5/different/ejbj22.jpg" class="txtBann"/>
			<img src="https://opres.gongyujia.com/H5/different/ejbj23.jpg" />
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
							<a @click="openHouseDetail" id="24594646">
								<div class="bH" id="24594646">
						   			<div class="hImg1" id="24594646">
						   				<img src="https://opres.gongyujia.com/H5/different/54429.jpg" class="" id="24594646"/>
						   			</div>
						   			<div class="Hcont" id="24594646">
						   				<h1 id="24594646">朝阳区霄云里-8号一室公寓</h1>			   				
						   				<div class="bHMP" id="24594646">
						   					<span id="24594646">1室1厅1卫</span> | <span id="24594646">68</span>平米<span> | </span><span id="24594646">15/20层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24594646">¥ <span id="24594646">13500</span>元/月</p>
						   			</div>		
						   		</div>
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openHouseDetail" id="24598084">
								<div class="bH"  id="24598084">
						   			<div class="hImg1" id="24598084">
						   				<img src="https://opres.gongyujia.com/H5/different/519657.jpg" class="" id="24598084"/>
						   			</div>
						   			<div class="Hcont" id="24598084">
						   				<h1 id="24598084">朝阳区世茂广场·工三一室公寓</h1>			   				
						   				<div class="bHMP" id="24598084">
						   					<span id="24598084">1室1厅1卫</span> | <span id="24598084">102</span>平米<span> | </span><span id="24598084">8/32层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24598084">¥ <span id="24598084">17500</span>元/月</p>
						   			</div>		
						   		</div>
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openHouseDetail" id="24595240">
								<div class="bH"  id="24595240">
						   			<div class="hImg1" id="24595240">
						   				<img src="https://opres.gongyujia.com/H5/different/4550.jpg" class="" id="24595240"/>
						   			</div>
						   			<div class="Hcont" id="24595240">
						   				<h1 id="24595240">朝阳区世茂广场·工三二室公寓</h1>			   				
						   				<div class="bHMP" id="24595240">
						   					<span id="24595240">2室1厅1卫</span> | <span id="24595240">136</span>平米<span> | </span><span id="24595240">9/32层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24595240">¥ <span id="24595240">22000</span>元/月</p>
						   			</div>		
						   		</div>
							</a>							
						</swiper-slide>	
						<swiper-slide>
							<a @click="openHouseDetail" id="24595186">
								<div class="bH"  id="24595186">
						   			<div class="hImg1" id="24595186">
						   				<img src="https://opres.gongyujia.com/H5/different/4487.jpg" class="" id="24595186"/>
						   			</div>
						   			<div class="Hcont" id="24595186">
						   				<h1 id="24595186">朝阳区新城国际一室公寓</h1>			   				
						   				<div class="bHMP" id="24595186">
						   					<span id="24595186">1室1厅1卫</span> | <span id="24595186">62</span>平米<span> | </span><span id="24595186">17/32层</span>				   					
						   				</div>				   				
						   				<p class="bHM" id="24595186">¥ <span id="24595186">16500</span>元/月</p>
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
			title:"乐享北京",
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
           },
           
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
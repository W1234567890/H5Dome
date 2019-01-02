<template>
	<div>		
		<div class="banners">				    	
	      	<swiper :options="swiperOption"  ref="mySwiper">
				<swiper-slide v-for="(item,key) in bannerArr" :key="key" v-if="key < lengthBanner">
					<img class="banner_list swiper-lazy" :src="item"/>					
				</swiper-slide>					
			</swiper>
			<div class="swiper-pagination">{{this.imgState}}/{{this.lengthBanner}}</div>
	    </div>		
		<!--<img src="../../assets/img/banner.jpg' class=""/>-->
		<div class="personListBg">
			<div class="personListBgPd">
				<h4>长宁区安西路23弄30整栋精装二室老洋房<span>自营</span></h4>
				<h5>2室2厅2卫 | 95平米 | 1/7层 | 南北</h5>
				<h6>￥ 5200<span>/月起</span></h6>
				<div class="priceListPd">
					<h3>全网比价</h3>
					<ul class="houseMore">
						<li><a href="" class="ui-link">ziroom.com<span class="Green">推荐</span><p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<span class="red">最低价</span><p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<p>￥ 5200/<span>月</span></p></a></li>
						<li><a href="" class="ui-link">ziroom.com<p>￥ 5200/<span>月</span></p></a></li>
					</ul>
				</div>			
		        <div class="priceAllListMore" @click='more'>查看更多<img src='../../assets/img/listDetailMore.png'></div>
		        <div class="priceAllListClose" @click='sm'>收 起</div>
			</div>
		</div>
		<div class="personListPd">
			<div class="cw">			
				<div class="iconW">位置及交通<span>{{locations}}</span>
				</div>        
			</div>
			<div id="XSDFXPage" class="XSDFXPage"></div>			   
		    <div class="cw">
				<div class="trafficList">
				    <div class="trafficListView" v-for="(item,key) in traffic">
				    	<img :src="item.icon" class="iconImg"/>
				    	<span>{{item.title}}</span>
				        <span>步行{{item.subtitle}}</span>
				    </div>				   
			    </div>
			</div>
		</div>
		<div class="personListPd">
			<div class="productImgPdLine">
				<div class="prodductImgpd">
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
				<div class="prodductImgpd">
					
					
					<div class="content center">						
						<swiper :options="houseSwiperOption"  ref="mySwiper">
							<swiper-slide v-for="(im,key) in houseList" :key="key">
								<a href="" >
									<div class="houseListAPd">
										<img class="banner_list swiper-lazy" :src="im.cover_pic"/>
										<!--<img src="../../assets/img/img01.png">-->
										<h4>{{im.title}}</h4>
										<p>{{im.subtitle}}</p>
										<p class="priceP">{{im.price}}</p>																	
									</div>
								</a>
							</swiper-slide>
						</swiper>												    				
					</div>
				</div>	
				<div class="prodductImgpd">
					
					
					<div class="content center">						
						<swiper :options="houseSwiperOption"  ref="mySwiper">
							<swiper-slide v-for="(im,key) in houseList" :key="key">
								<a href="" >
									<div class="houseListAPd">
										<img class="banner_list swiper-lazy" :src="im.cover_pic"/>
										<!--<img src="../../assets/img/img01.png">-->
										<h4>{{im.title}}</h4>
										<p>{{im.subtitle}}</p>
										<p class="priceP">{{im.price}}</p>																	
									</div>
								</a>
							</swiper-slide>
						</swiper>												    				
					</div>
				</div>		
			</div>
		</div>
		
		
	</div>	  
</template>

<script>
	export default {
	data() {
		return {
			data:"",
			title:"房屋详情",
			bannerArr:[],
          	houseList:[],
          	traffic: [],
          	furniture: [],
          	province: "上海",
          	imgState:1,
          	lengthBanner:0,
          	houseName:"",
          	houseBig:"",
          	house_count:"",
          	detail:"",
          	locations:"",
          	latitude:"",//纬度
          	longitude:"",//经度
          	locations:"",
			swiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,	
	            autoplay: 3000,
	            autoplayDisableOnInteraction : false,		           
				onSlideChangeStart:swiper=>{
					this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;
					if(this.page>this.imgState){
                    	this.imgState=this.page;
                    }
                },
	        }, 
	        houseSwiperOption: {
		        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
	            notNextTick: false,
	            initialSlide: 1,
	            loop: true,	
	            autoplay: 4000,
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
    mounted() {		
		this.init();
		this.baiduMap();
    },
     beforeMount(){	
    	document.title = this.title;
	},
	methods: {
		 // 返回
		  goback () {
		    this.$router.go(-1)
		  },
		  baiduMap () {
		  	
		    var map = new BMap.Map('XSDFXPage')
      		var point = new BMap.Point(108.840053, 34.129522)
       		
      		map.centerAndZoom(point, 14)
      		map.addControl(new BMap.MapTypeControl())
      		map.enableScrollWheelZoom(true)
      		map.enableDoubleClickZoom(true)
      		var marker = new BMap.Marker(point)
      		map.clearOverlays(); 
      		map.addOverlay(marker)
      		map.centerAndZoom(point, 15)
		  },
	    init(){
	    	let resUrl = "https://res.gongyujia.com/";
	    	var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 		
			let url = "houses/house_detail",
			    data = {"app_device":"110","os_type":"adr","os_version":1,"network":110,"os_type":"h5","version_code":1,"channel":"","g_uid":"","package_name":"","area_code":"021","house_id":'15419380',"timestamp":"1533968931","relative_id":'2548686'};
			this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,
					success:( res)=>{
						let that = this;	
						let data = res.content;	
						console.log(res.content)
                    	that.locations = data.location.address;		
					
						that.longitude = res.content.location.longitude;		
						that.latitude = data.location.latitude;
					
						//this.initMap(data.location.latitude, data.location.longitude);
						that.lengthBanner = data.banner.length;

				
						that.detail = res.content.introduction.detail;
						for(var i = 0; i < res.content.location.traffic.length; i++){														
							res.content.location.traffic[i].icon = "http://restest.gongyujia.com/"+res.content.location.traffic[i].icon;                     
							that.traffic.push(res.content.location.traffic[i]);							
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
	}
}
</script>
<style lang='scss' scoped>
.banners{
	overflow: hidden;
	width: 100%;
	background:#FFFFFF;
	height: auto!important;
	.banner_list{
		width: calc(100vw) !important;
		height:auto!important;
	}
}
.slide{margin-right: 5%;}
.swiper-pagination {position: absolute;z-index: 10;right: 6%;top: 28%;background-image: url("../../assets/img/productBg.png");color: #fff;width: 15%;padding: 5px;border-radius: 5px;}
.anchorBL {display:none}

/*新增样式*/
.personListPd{ background:#fff;}
.personListBg{ width:90%; margin: -30px auto 20px; background: #fff; position: relative; z-index: 1; box-shadow:0 5px 15px rgba(0, 0, 0, 0.2); border-radius:10px;}
.personListBgPd{padding:15px 10px;}
.personListBgPd h4{ color: #333; font-size:1em; text-align: left;}
.personListBgPd h4 span{ display: inline-block; color: #20b7b6;font-size: 0.7em; border:1px solid #20b7b6; padding: 2px; margin-left: 5px;}
.personListBgPd h5{ color: #b6b6b6; font-size: 0.85em; margin: 5px 0;}
.personListBgPd h6{ color: #20b7b6; font-size: 1em;}
.personListBgPd h6 span{ display: inline-block; font-size: 0.7em;}

/*全网比价*/
.priceListPd{ margin-top: 10px;margin-bottom: 10px;}
.priceListPd h3{ color: #333; font-size: 1em;}
.houseMore{height: 120px;overflow: hidden;}
.priceListPd ul li{ padding-top: 10px; color: #666; font-size: 0.85em; position: relative;}
.priceListPd ul li a{text-decoration: none;color: #666;display: block;}
.priceListPd ul li span.red{ color: #ff5a5f; font-size: 0.5em; border: 1px solid #ff5a5f; padding: 2px; display: inline-block; margin-left: 5px;}
.priceListPd ul li span.Green{ color: #20b7b6; font-size: 0.5em; border: 1px solid #20b7b6; padding: 2px; display: inline-block; margin-left: 5px;}
.priceListPd ul li p{ position: absolute; right: 0; bottom: 0; font-size: 1em; color: #333; text-align: right; background:url('../../assets/img/right.png') right center no-repeat; background-size: 8px!important; padding-right: 15px;}
.priceListPd ul li p span{ display: inline-block; margin-left: 5px; font-size: 0.85em;}

.priceAllListMore{ margin-top: 10px;  font-size: 1em; color: #666; text-align: center;}
.priceAllListMore img{ width: 13px; height: 13px; display: inline-block; margin-left: 5px; vertical-align: middle;}
.priceAllListClose{display: none; text-align: center;margin-top: 10px; font-size: 1em;color: #20b7b6; padding: 10px 0; width: 60%; border: 1px solid #20b7b6; border-radius: 2px; margin: 0 auto; }


.cw {margin: 0 18px;}
.iconW {color: #333;font-size: 1.2em;position: relative;margin-bottom: 10px;}
.iconW span {display: block;color: #999;font-size: 0.75em;background: url("../../assets/img/addressIconGrey.png") left center no-repeat;background-size: .75em;padding-left: 15px;margin-top: 8px;}
.iconW a{display: block;font-size: 0.7em;color: #333;position: absolute;right: 0;top: 0;text-decoration: none;background: url('../../assets/img/right.png') right center no-repeat;background-size: 7px!important;padding-right: 20px;}
.trafficList {width: 100%;margin-bottom: 10px;}
.content{width: 100%;overflow: hidden;margin-left: 18px;}

.trafficList div.trafficListView{ width:48%; display: inline-block;  margin-top:10px; background-position: left center; background-repeat: no-repeat; background-size: 20px; color: #333; font-size:.75em; line-height: 13px;}
.trafficList div.trafficListView .iconImg{width: 25px;float: left;}
.trafficList div.trafficListView span{ display: block; color: #999; font-size:0.85em;margin-left: 28px;}

.XSDFXPage{width: 100%;height: 280px;overflow: hidden;}

.houseMessage {color: #999;font-size: .75em;margin-bottom: 15px;line-height: 1.5em;}

.prodductImgpd{margin-top: 15px;}

.facilityPd{margin-top: 15px;}
.facilityPd p{ display: inline-block; width: 18.5%; color: #999; font-size: .75em; text-align: center; margin-bottom:10px;}
.facilityPd p img{ margin: 0 auto 5px; display: block;}

.prodductImgpd{ padding-top:10px;}
.houseListAPd{}
.houseListAPd img{ border-radius:10px;width: 100%;height: 188px;}

.center h4{ color:#666; font-size:1em; margin:5px 0;text-overflow:ellipsis; white-space:nowrap; overflow:hidden;}
.center p{ font-size:.85em; color:#b6b6b6; margin: 0 0px 5px;}
.center p.priceP{font-size:.85em; color:#333;margin: 0 0px 5px;}

</style>
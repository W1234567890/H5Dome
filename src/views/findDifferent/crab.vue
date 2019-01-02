<template>
	<div>		
		<img class="ejBanner" src="https://opres.gongyujia.com/H5/crab/crab01.jpg" />
		<div class="ejAllContent">
			<img src="https://opres.gongyujia.com/H5/crab/crab02.jpg" class="txtB" />	
			<img src="https://opres.gongyujia.com/H5/crab/crab20.gif" />
			<img src="https://opres.gongyujia.com/H5/crab/crab03.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab04.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab05.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab19.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab06.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab07.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab08.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab09.jpg" />
			<img src="https://opres.gongyujia.com/H5/crab/crab21.gif" />
			<img src="https://opres.gongyujia.com/H5/crab/crab10.jpg" />
			<div class="gifImg">
				<p ><span>蟹肠</span>就是蟹肚脐部分的一小块盖，它是螃蟹的排泄器官，含有许多排泄物，所以最好去掉。</p>
				<img src="https://opres.gongyujia.com/H5/crab/crab22.gif" />
			</div>
			<div class="gifImgR">	
				<img src="https://opres.gongyujia.com/H5/crab/crab23.gif" />
				<p ><span>蟹腮</span>在蟹身上，是大闸蟹的呼吸器官。而且直接和外界接触，不宜食用。</p>
			</div>
			<div class="gifImg">
				<p ><span>蟹心</span>在蟹身中间一个呈六角形的片状物，挑出来丢弃，即可食用蟹黄。</p>
				<img src="https://opres.gongyujia.com/H5/crab/crab24.gif" />
			</div>		
			<img src="https://opres.gongyujia.com/H5/crab/crab14.jpg" />
			<div class="gifTop gifImg">
				<p><span style="display: block;">吃蟹黄</span>去掉蟹盖中的蟹胃后，用勺子取蟹盖中的蟹黄，蘸醋、姜丝食之。</p>
				<img src="https://opres.gongyujia.com/H5/crab/crab25.gif" />
			</div>
			<div class="gifTop gifImgR">	
				<img src="https://opres.gongyujia.com/H5/crab/crab26.gif" />
				<p ><span style="display: block;">吃蟹身</span>将蟹身掰开，蟹身横截面上的蟹黄蘸醋食用，然后将手指抓住蟹脚根部沿蟹身纹理撕下蟹身段，用牙签挑取蟹身肉食之。</p>
			</div>
			<div class="gifTop gifImg">
				<p ><span style="display: block;">蟹腿和蟹钳</span>蟹腿主要吃其大腿。用蟹脚尖粗的那一头把蟹脚前段的肉顶出来。至于蟹钳，用剪刀将两边剪开，再向相反的方向掰两只钳脚就可以将蟹钳分开</p>
				<img src="https://opres.gongyujia.com/H5/crab/crab27.gif" />
			</div>		
			<img src="https://opres.gongyujia.com/H5/crab/crab18.jpg" class="txtBann"/>
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
							<a @click="openHouseDetail" :id="im.house_oid">
								<div class="bH" :id="im.house_oid">
						   			<div class="hImg1" :id="im.house_oid">
						   				<img :src="im.cover_pic" class="" :id="im.house_oid"/>
						   			</div>
						   			<div class="Hcont" :id="im.house_oid">
						   				<h1 :id="im.house_oid">{{im.house_name}}</h1>			   										   								   				
						   				<p class="bHM" :id="im.house_oid">{{im.price}}</p>
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
			title:"大闸蟹，我们走",
			houseList:[],
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
    mounted() {
       this.init();
    },
	methods: {			
		//打开房源详情页
	    openHouseDetail(e){
	    	var houseId = e.target.id;
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
			
			var ua = window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境		
				
		        wx.miniProgram.getEnv(function (res) {
				   	if (res.miniprogram) {
				    	wx.miniProgram.switchTab({url: 'pages/list/listDetailOthers/listDetailOthers'});
				     	wx.miniProgram.postMessage({data: {id: houseId}}); // 传的参数
				  	}
				});
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
			
			let url = "Specials/special_list",
			    	data = {"g_uid":"","os_type":"adr","os_version":'1',"channel":"","network":'110',"version_code":'1',"app_device":"","package_name":"","area_code":""};											
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
						
						for(var i = 0; i < res.content.length; i++){								
							if(isAndroid){
								res.content[i].cover_pic = "https://res.gongyujia.com/"+res.content[i].cover_pic +'@!form_l_w'; 
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
		}
    }
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
.ejAllContent .txtB{margin: 0 3.7%;}
.ejAllContent .txtBann{margin: 23px 3.7% 0px 3.7%;}
.ejAllContent .textBord{border-bottom: 1px solid #f9f9f9;margin-bottom: 22px;}
.footerEjA{width: 100%;overflow: hidden;background-color: #fff;}
.footerEjA .ftTit{width: 92.6%;margin-left: 3.7%;height: auto!important;margin-top: 20px;}
.footerEjA .ftTit>h1{color: #333;font-size: 1.25em;font-weight: 600;display: inline-block;}
.footerEjA .ftTit>span{color: #333;font-size: .85em;} 
.ftBanner{margin-top: 10px;margin-bottom: 10px;}
.bHse{width: 100%;display: inline-block;}
.bH{position: relative;margin-left: 3.7%;}
.bH .hImg1>img{width: 100%;position: relative;height:190px;display: block;border-top-left-radius: 5px;border-top-right-radius: 5px;}
.Hcont{width: 100%;padding-bottom: 10px;background-color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;}
.Hcont>h1{color: #666;font-size: 1.2em;height: 1.75em;line-height: 1.75em;padding: 0.25em 0 0 0;display: -webkit-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.Hcont .bHM{font-size: 1em;color: #000;margin-top: 5px}
.gifImg{width: 92.6%;margin-left: 3.7%;margin-top: 15px;}
.gifImg>p{width: 48%;float: left;font-size: .9em;color: #666;line-height: 1.75em;}
.gifImg>p>span{font-size: 1.25em;font-weight: 600;color: #333;margin-right: 10px;}
.gifImg>img{width: 52%;}
.gifImgR{width: 92.6%;margin-left: 3.7%;margin-top: 20px;clear:both;}
.gifImgR>p{width: 48%;font-size: .9em;color: #666;line-height: 1.75em;float: right}
.gifImgR>p>span{font-size: 1.25em;font-weight: 600;color: #333;margin-right: 10px;}
.gifImgR>img{width: 48%;}
.gifTop>p{line-height: 1.475em;}
</style>
<template>
	<div class="bcy">
		<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts01.jpg"/>
		<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts02.png" class="titBanner"/>
		<div class="ctHouse">
			<ul class="idHouses">
				<li class="cont" id="24568510">		
					<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=521877">
						<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0ac4fad2aed.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24568510"/>
						<div class="houseTit" id="24568510">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24568510"/>
							<p id="24568510">浦东新区v领地青年公寓一室公寓</p>
							<span id="24568510"><span id="24568510">¥ 2800</span>/月</span>								
						</div>
					</a>	
				</li>				
				<li class="cont">
					<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=54768">
						<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0acabc6cade.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24568384"/>
						<div class="houseTit" id="24568384">
							<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24568384"/>
							<p id="24568384">闵行区V领地青年创客社区一室公寓</p>
							<span id="24568384"><span id="24568384">¥ 3260</span>/月</span>   						
						</div>
					</a>						
				</li> 				
				<div class="showListHouses" @click="showHouse">展示更多优惠房源<img src="https://opres.gongyujia.com/H5/doubDiscounts/doubDiscounts04.png" /></div>				
				<div class="hiddenList">
					<li class="cont">	
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=54819">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20171222/5a3c9b8fdd544.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24572974"/>
							<div class="houseTit" id="24572974">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24572974"/>
								<p id="24572974">闵行区V领地一室公寓</p>
								<span id="24572974"><span id="24572974">¥ 1700</span>/月</span>								
							</div>
						</a>											
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=54845">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20171223/5a3e3f45d24a1.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="27528484"/>
							<div class="houseTit" id="27528484">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="27528484"/>
								<p id="27528484">闵行区V领地一室公寓</p>
								<span id="27528484"><span id="27528484">¥ 1750</span>/月</span>   						
							</div>
						</a>						
					</li> 					
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=59945">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180113/5a59a013a27c9.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24576016"/>
							<div class="houseTit" id="24576016">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24576016"/>
								<p id="24576016">闵行区V领地一室公寓</p>
								<span id="24576016"><span id="24576016">¥ 1960</span>/月</span>								
							</div>
						</a>
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=60289">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180126/5a6aa9a012aeb.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="27528502"/>
							<div class="houseTit" id="27528502">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="27528502"/>
								<p id="27528502">闵行区V领地一室公寓</p>
								<span id="27528502"><span id="27528502">¥ 1560</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont">	
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=60362">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180113/5a59a013a27c9.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24578914"/>
							<div class="houseTit" id="24578914">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24578914"/>
								<p id="24578914">闵行区V领地一室公寓</p>
								<span id="24578914"><span id="24578914">¥ 1750</span>/月</span>								
							</div>
						</a>											
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=61557">
							<img src="http://images.gongyujia.com/upload/house/user/29102/20180527/5b0ac33173d9c.jpeg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24579958"/>
							<div class="houseTit" id="24579958">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24579958"/>
								<p id="24579958">闵行区V领地一室公寓</p>
								<span id="24579958"><span id="24579958">¥ 1750</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont">					
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=521818">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180820/5b7a775f4696a.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24580282"/>
							<div class="houseTit" id="24580282">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24580282"/>
								<p id="24580282">普陀区莲花公寓一室公寓</p>
								<span id="24580282"><span id="24580282">¥ 3500</span>/月</span>								
							</div>	
						</a>				
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=521839">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180820/5b7a8ad3bc80a.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24586492"/>
							<div class="houseTit" id="24586492">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24586492"/>
								<p id="24586492">闵行区虹许路一室酒店式公寓</p>
								<span id="24586492"><span id="24586492">¥ 5000</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont">	
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=521862">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180821/5b7b7a80d2396.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24586564"/>
							<div class="houseTit" id="24586564">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24586564"/>
								<p id="24586564">闵行区合川路一室公寓</p>
								<span id="24586564"><span id="24586564">¥ 3300</span>/月</span>								
							</div>	
						</a>										
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=522365">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180825/5b80f954e9820.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24587716"/>
							<div class="houseTit" id="24587716">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24587716"/>
								<p id="24587716">浦东新区V领地青年社区(银山路社区)一室公寓</p>
								<span id="24587716"><span id="24587716">¥ 3560</span>/月</span>   						
							</div>
						</a>						
					</li>					
					<li class="cont">	
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=522368">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180821/5b7b7a80d2396.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24588058"/>
							<div class="houseTit" id="24588058">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24588058"/>
								<p id="24588058">浦东新区v领地青年公寓一室公寓</p>
								<span id="24588058"><span id="24588058">¥ 3300</span>/月</span>								
							</div>
						</a>										
					</li>				
					<li class="cont">
						<a href="https://zmxy.gongyujia.com/portal/house/house_detail?house_id=522372">
							<img src="http://images.gongyujia.com/upload/house/user/85171/20180825/5b80fe8e5f7b2.jpg?imageView2/1/w/500/h/300" class="houseImg housesImg" id="24591442"/>
							<div class="houseTit" id="24591442">
								<img src="https://opres.gongyujia.com/H5/different/servicesStu04.jpg" id="24591442"/>
								<p id="24591442">浦东新区锦绣东路一室公寓</p>
								<span id="24591442"><span id="24591442">¥ 2900</span>/月</span>   						
							</div>
						</a>						
					</li>										
				</div>
			</ul>    
		</div>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"双节钜惠",			
			data:{}			
		}
	},	
	beforeMount(){	
    	document.title = this.title;
	},
    mounted() {
        $(function () {
			//判断页面高度
			var h=$(window).height();
//			$(".bcy").height(h);							           
        });	 
    },
    methods: {				
		showHouse(){
			$('.hiddenList').show();
			$('.showListHouses').hide();
		}
    },
}
</script>
<style lang='scss' scoped>
a{outline:0;text-decoration:none;color: #000}
.bcy{width: 100%;padding-bottom: 40px;background: url('~src/assets/img/doubDiscounts/doubDiscounts03.jpg') no-repeat scroll transparent;background-size: 100% 100%;}
.titBanner{width: 92.6%;margin-left: 3.7%;margin-top: -28%;}
.ctHouse{width: 92.6%;margin-left: 3.7%;background-color: #fff;margin-top: 10px;border-radius: 7px;padding-bottom: 20px;}
.idHouses{width: 95%;margin-left: 2.5%;padding-top: .5%;}
.housesImg{border-radius: 7px;}
.showListHouses{background-color: #f6f6f6;color: #ccc;width: 60%;margin-left: 20%;text-align: center;height: 30px;line-height: 30px;font-size: .85em;margin-top: 10px;}
.showListHouses >img{width: 15px;height: 8px;margin-left: 8px;}
.hiddenList{display: none;}
</style>
<template>
	<div class="bcy">
		<a href="#lk"><img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo01.jpg" class="npText topBanner" v-if="topBanner"/></a>
		<div class="tpBanner houseBanner" id="lk">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo02.jpg" class="houseImg"/>
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo03.jpg" class="houseImg"/>
			<div class="adMu"  @click='ad'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="play"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo04.jpg" />
			</div>
			<audio controls="controls" id="audio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">曾经大家都是刚毕业充满抱负的年轻人，曾经都只能给心爱的人一间小小的阁楼和一扇朝北的窗。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24588454">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 44446740">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27718798">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul>    	 			
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo05.jpg" class="houseImg"/>
			<div class="adMu" @click='esy'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="py"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo06.jpg" />
			</div>
			<audio controls="controls" loop id="eaudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">温馨的小屋盛着美好的期盼和青春的梦想，梦想着给自己画出房子画出床，画出自己的生活。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27633262">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27619042">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27572044">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul>    	 	
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo07.jpg" class="houseImg"/>
			<div class="adMu" @click='buH'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="buHy"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo08.jpg" />
			</div>
			<audio controls="controls" loop id="buHaudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">但世上没有神笔也没有马良，有的只是现实的重压和摸不到的远方。有些人买了房子，用了贷款，就开始成为了房子的奴隶。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 24592828">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 44555915">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 44525665">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul> 		
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo09.jpg" class="houseImg"/>
			<div class="adMu" @click='louch'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="louchy"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo10.jpg" />
			</div>
			<audio controls="controls" loop id="louchAudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">世间的路总是多种多样，买房并不是唯一的选择。有些人租了间挡风遮雨的小屋，几年后对它恋恋不舍</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27794560">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 44060430">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 44555360">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul> 
		</div>
		
		<div class="tpBanner houseBanner">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo11.jpg" class="houseImg"/>
			<div class="adMu" @click='home'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="homey"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo12.jpg" />
			</div>
			<audio controls="controls" loop id="homeAudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">总有一间房子能遮风挡雨，就像总有一个人陪伴你无处安放的青春。租来的小屋有它的温暖，也会有你们各种故事。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 42999165">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 42419790">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27653080">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul> 
		</div>
		
		<div class="tpBanner houseBanner last">
			<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo13.jpg" class="houseImg"/>
			<div class="adMu" @click='newhome'>
				<img src="http://restest.gongyujia.com/app/special/beautifulHouse28.jpg" class="homen"/>
				<img src="https://opres.gongyujia.com/H5/different/beautifulHouseTwo14.jpg" />
			</div>
			<audio controls="controls" loop id="newAudio" class="audio">
  				<source src="" type="audio/ogg"></source>
  			</audio>
			<p class="titHou">不管是买还是租，不管那个人还在不在身边。时间会带走一切，而我们要学会珍惜。希望大家能够找到自己能够最终停留的房子。</p>
			<ul class="ctBOX">
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 43091325">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 42520475">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
				<li class="cont" @click="openHouseDetail" v-for="(im,key) in houseList" :key="key" v-if="im.house_oid == 27706720">
					<a>
						<img v-lazy="im.cover_pic" class="houseBjImg"  :id="im.house_oid"  :align="im.isautotrophy"/>						
						<div class="houseList"  :id="im.house_oid"  :align="im.isautotrophy"></div>
						<span class="price"  id="im.house_oid"><span>¥{{im.price}}</span>/月</span>	
						<div class="houseCont" @click="openHouseDetail"  :id="im.house_oid"  :align="im.isautotrophy">		
							<p class="houseTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.title}}</p>	
							<p class="contTit"  :id="im.house_oid"  :align="im.isautotrophy">{{im.subtitleNew}}</p>
							<div class="houseGPS"  :id="im.house_oid"  :align="im.isautotrophy">			
								<img src="https://opres.gongyujia.com/H5/GPS.png"/>
								<span>{{im.address}}</span>		
							</div>							
						</div>					
					</a>					
				</li>	
			</ul> 
		</div>
		<img src="https://opres.gongyujia.com/H5/shareBut.png" class="shareBut" id="shareBut"/>	
	</div>
</template> 
<script>
export default {
	data(){
		return {
			type:"",
			topBanner:true,
			showTitle:false,
			title:"歌词中的美丽房屋·贰",			
			data:{},
			houseList:[],
			shareInfo:{
			   "share_title":"歌词中的美丽房屋·贰",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouse",          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "subtitle":"如画如梦的房子，如诗如歌的生活。",      //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			}
		}
	},	
	beforeMount(){	
    	document.title = this.title;
    	this.type = this.$route.query.type;	
    	if(this.type == 1){
    		this.topBanner = false;
    	}else{
    		this.topBanner = true;
    	}
	},	
    mounted() {
    	let that = this;		
	 	var u = navigator.userAgent, app = navigator.appVersion; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
		let data = {
			   "share_title":"歌词中的美丽房屋·贰",        //分享标题
			   "share_url":"https://special.gongyujia.com/#/beautifulHouseTWO",          //链接          //链接
			   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
			   "share_subtitle":"如画如梦的房子，如诗如歌的生活。",   //副标题
			   "mini_type":"-1",              //小程序类型：1-体验版；2开发版  其它-正式版
			   "mini_name":"",           //分享小程序使用的原始id
			   "mini_path":"", //分享小程序使用的页面路径
			};
    	data =  JSON.stringify(data);
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
    	that.init();
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
				   "share_title":"歌词中的美丽房屋",        //分享标题
				   "share_url":"https://special.gongyujia.com/#/beautifulHouseTWO",          //链接          //链接
				   "share_image":"https://opres.gongyujia.com/app/ads/b04f46f2d88c280747c89d5d4a2d6ef5.png",        //图片
				   "share_subtitle":"那些在歌词里才有的温馨画面，可以为你带到身边，成为你生活的一部分……",   //副标题
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
		        	$('.shareBut').css('margin','15px 35% 450px')
		        	bridge.callHandler('openShare', that.shareInfo,function(rest) {})
			    }
			}
        },  
		ad(){
			var adios = document.getElementById('audio');
			if(adios.paused){		 
				adios.src = "https://opres.gongyujia.com/H5/different/two01.mp3";
			    adios.play();
				$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");				
			}else{
				adios.pause();
				$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}
			
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			var newAudio = document.getElementById('newAudio');
			newAudio.pause();
			$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},   		
		esy(){
			var eAuto = document.getElementById('eaudio');
			if(eAuto.paused){
				eAuto.src = "https://opres.gongyujia.com/H5/different/two02.mp3";
				eAuto.play();
				$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				eAuto.pause();
				$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}
			
			var adios = document.getElementById('audio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			var newAudio = document.getElementById('newAudio');
			newAudio.pause();
			$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		buH(){
			var buHAuto = document.getElementById('buHaudio');
			if(buHAuto.paused){
				buHAuto.src = "https://opres.gongyujia.com/H5/different/two03.mp3";
				buHAuto.play();
				$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				buHAuto.pause();
				$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAuto = document.getElementById('homeAudio');
			
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			var newAudio = document.getElementById('newAudio');
			newAudio.pause();
			$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		louch(){			
			var louchAuto = document.getElementById('louchAudio');
			if(louchAuto.paused){
				louchAuto.src = "https://opres.gongyujia.com/H5/different/two04.mp3";
				louchAuto.play();
				$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");
				
			}else{
				louchAuto.pause();
				$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var homeAuto = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAuto.pause();
			$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			var newAudio = document.getElementById('newAudio');
			newAudio.pause();
			$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		home(){
			var homeAuto = document.getElementById('homeAudio');
			if(homeAuto.paused){
				homeAuto.src = "https://opres.gongyujia.com/H5/different/two05.mp3";
				homeAuto.play();
				$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");				
			}else{
				homeAuto.pause();
				$('.homey').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var newAudio = document.getElementById('newAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			var newAudio = document.getElementById('newAudio');
			newAudio.pause();
			$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		newhome(){
			var newAudio = document.getElementById('newAudio');
			if(newAudio.paused){
				newAudio.src = "https://opres.gongyujia.com/H5/different/two06.mp3";
				newAudio.play();
				$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse33.jpg");				
			}else{
				newAudio.pause();
				$('.homen').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			}	
			
			var adios = document.getElementById('audio');
			var eAuto = document.getElementById('eaudio');
			var buHAuto = document.getElementById('buHaudio');
			var louchAuto = document.getElementById('louchAudio');
			var homeAudio = document.getElementById('homeAudio');
			adios.pause();
			$('.play').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			eAuto.pause();
			$('.py').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			buHAuto.pause();
			$('.buHy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			louchAuto.pause();
			$('.louchy').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
			homeAudio.pause();
			$('.homeAudio').attr('src',"http://restest.gongyujia.com/app/special/beautifulHouse28.jpg");
		},
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			
			let url = "Specials/getHouseList",
			    	data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","ident":4};	
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						let that = this;
							console.log(res.content)
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
		},
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
//	                'callbackMethod': 'getUserInfoSucc'
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);	
	       }	
		},
		
    },
}
</script>
<style lang='scss' scoped>
.adMu{width: 100%;margin-top: 15px;}
.adMu img:first-of-type{width: 19%; float: left;}
.adMu img:last-of-type{width: 78%;display: inline-block;}
.audio{width: 100%;position: absolute;top: 200px;left: 0;display: none;}
.shareBut{width: 30%;margin: 15px 35% 45px;}
.houseBjImg{width: 100%;height: 230px;border-radius: 7px;}
.close{position: absolute;top: 12px;right: 12px;width: 25px;}
.titHou{font-size: 13px;color: #838383;margin-top: 20px;line-height: 22px;text-align: left;}
.titBanner{ color: #666;font-size: .85em;margin: 15px 0 20px 0;line-height: 27px;text-align: left;}	
.titHead{margin-top: 20px;}
.titText{font-size: 1em;font-weight: 700;}
.titText>span{font-size: 1em;font-weight: 700;}
.cont{position: relative;margin-top: 20px;}
.houseList{position: absolute;top: 64%;width: 100%;height: 40px;background-color: #000;opacity: 0.3;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;}
.houseCont{width: 100%;line-height: 15px;text-align: left; margin-top: 6px;}
.houseTit{margin:0;color: #000;font-size: .9em;font-weight: 600;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.contTit{margin-top:5px;color: #666;font-size: .75em;width: 76%; height: 15px;display: -webkit-box;  overflow: hidden;  white-space: normal !important; text-overflow: ellipsis; word-wrap: break-word; -webkit-line-clamp: 1;  -webkit-box-orient: vertical;}
.houseCont>span {margin-right:10px;color: #666;font-size: .85em;font-weight: 600;position: absolute;right: 0;top: 17px;}
.houseCont>span>span {font-size: 1.25em;}
.houseGPS{text-align: left;margin-top: 5px;width: 75%;}
.houseGPS>img {width: 10px;/*vertical-align: middle;*/display: inline-block;}
.houseGPS>span{margin-top: 2px;height:14px;color: #666;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;width: 85%;}

.price{height: 20px;color: #fff;font-size: .75em;display: -webkit-inline-box;overflow: hidden;white-space: normal!important;text-overflow: ellipsis;word-wrap: break-word;-webkit-line-clamp: 1;-webkit-box-orient: vertical;position: absolute;top: 69%;left: 77%;}
.price>span{font-size: 1.35em;}
.shareBut{width: 30%;margin: 15px 35%;}
</style>
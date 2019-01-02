<template>
	<div>
		<!--v-for="(im,key) in certImg" :key="key"-->
		<div v-for="(im,key) in certImg" :key="key">
			<img v-lazy='im.pics' class="certImg"/>
		</div>
		<img src="https://opres.gongyujia.com/H5/certificateDte/certImg01.jpg" class="bottomBj"/>
	</div>
</template> 
<script>
export default {
	data(){
		return {
			showTitle:false,
			title:"证书详情",			
			data:{},
			certImg:[],		
			house_id:"",
		}
	},	
    beforeMount(){	
    	document.title = this.title;
    	this.house_id = this.$route.query.house_id;	 
		var ua = window.navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){    //判断是否是微信环境							       
	        this.showPrises = false;	  
		}else if(ua.match(/Alipay/i) == "alipay"){
			this.showPrises = false;	  
		}
		
	},
    mounted() {      
        let that = this;
        that.init();       
    },
	methods: {	
		init(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 						
			let url = "safe_pics",
			    	data = { "filter_type":"normal","district_id":"806","os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"area_code":"021","g_uid":"","channel":"","app_device":"","package_name":"","house_id":this.house_id};																		
            this.getByUrl({data,url}, res=>{
				this.ajax({
					url : res.url,
					data : res.data,						
					success:( res)=>{
						var u = navigator.userAgent, app = navigator.appVersion; 
						var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
						var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
						let that = this;
						console.log(res.content)	
						console.log(res.content[0].pics)						
						that.certImg = res.content;
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
.certImg{width: 92.6%;margin-left: 3.7%;margin-top: 10px;position: relative;}
.bottomBj{width: 92.6%;margin-left: 3.7%;margin-top: 10px;position: relative;bottom: 0;}
</style>
   
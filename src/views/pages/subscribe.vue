<template>	
	<div class="bg">  	
	  	<div class="messagePd">
	  		<div class="messageListBg">
		  		<div class="messageList">		  			
		  			<form> 				      
  				        <div class="pd messageListPd" @click="show">
  				        	<span class="messageTitle" @click="show">看房时间</span>
			  				<span  @click="show" v-model="formObj.time" class="brandsInput" ><span class="time">请选择您方便的时间</span></span>		  							  				
	  				        <date-time ref="dateTime" @confirm="select" format="yyyy-MM-dd- hh:mm:ss">				        	
	  				        	<div slot="prevMonth"> 
	  				        		<i>-</i> 
	  				        	</div>          
	  				        	<div slot="nextMonth"> 
	  				        		<i>+</i> 
	  				        	</div>    
	  				        </date-time>
				  			</div>
						<div class="messageListPd">
			  				<span class="messageTitle">联系人</span>		  				
			  				<input type="name"  maxlength="18"  placeholder="请填写您的姓名" class="brandInput" v-model="formObj.name"/>
			  				<span class="sexTxt"><span @click="sexOn" class="nv">女士</span><span @click="sexOn" class="by">男士</span></span>
			  			</div>
			  			<div class="lastmes">
			  				<span class="messageTitle">联系方式</span>		  				
			  				<input type="tel" maxlength="11"  placeholder="请输入手机号" class="brandInputs" v-model="formObj.Nubmer"  @keyup="isTelCorrect"/>
			  			</div>
		  				<div class="submitBtn" type="submit" value="提交申请" style="list-style: none;outline: none;background-color: #20b7b6;" @click="showData">提交申请</div>		  				
		  			</form>
		  		</div>
		  	</div>
	  	</div>
	</div>
</template>

<script>
import DateTime from 'vue-date-time-m'
export default {
	components: {
		DateTime
	},
    data(){
		return {
			title:"预约看房",			
			data:{},
			formObj:{
				name:"",
				Nubmer:"",
				house_id:"",
				appointment:"",
			},
			msg: '',
			count: 0,
			isLoading: false,
			sex:"1",
			g_uid:"",
		}
	},
	beforeMount(){	
    	document.title = this.title;
    	this.formObj.house_id = this.$route.query.house_id;	
    	this.g_uid = this.$route.query.g_uid;   
	},
	mounted() {		
		window.alert = function(name){
	        var iframe = document.createElement("IFRAME");
	        iframe.style.display="none";
	        iframe.setAttribute("src", 'data:text/plain,');
	        document.documentElement.appendChild(iframe);
	        window.frames[0].window.alert(name);
	        iframe.parentNode.removeChild(iframe);
	    };
    },
    methods: {
		 //手机号是否正确
		isTelCorrect(){			
			if(this.formObj.Nubmer.length<12){
				console.log(this.formObj.Nubmer)
			};			
		},	
		showData(e){
			var thisTime = this.msg;
			thisTime = thisTime.replace(/-/g, '/');
			this.msg = Math.floor(new Date(thisTime).getTime() / 1000);
			
			var res = /^1(3|4|6|5|7|8|9)\d{9}$/;
			if(this.formObj.Nubmer.length == 11 && res.test(this.formObj.Nubmer)){							
				let url = "reserve",
					    data = {"os_type":"adr","os_version":'1',"network":'110',"version_code":'1',"g_uid":this.g_uid,"sex":this.sex,"appointment":this.msg,"house_id":this.formObj.house_id, "contact_name":this.formObj.name,"mobile":this.formObj.Nubmer,"channel":"","app_device":"","package_name":""};
					this.getByUrl({data,url}, res=>{
						this.ajax({
							url : res.url,
							data : res.data,							
							dataType: "json",             						
							success:( res)=>{
								//this.close()
								alert("预约成功");
						    }
						})
					})
			}else{
				alert('请输入正确的手机号码');	       
			}			
		},		
		close(){
			var u = navigator.userAgent, app = navigator.appVersion; 
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 			
			if(isAndroid){
				android.close();				
			}else if(isiOS){			              		
	            var message = {
	                'methodName' : 'close',		               
	            };
	            window.webkit.messageHandlers.business1Messagehandler.postMessage(message);		           		       
	        };				
		},	
		show() {
			this.$refs.dateTime.show()
		},
		// 日期组件回调
		select(val) {
			this.msg = val;	
			$('.time')[0].innerHTML = val;	
		},
		sexOn(e){
			console.log(e.target.innerHTML)	
			if(e.target.innerHTML == "女士"){
				this.sex = "2"
				$(".by").css({"background-color":"#fff","color":"#333"});
				$(".nv").css({"background-color":"#20b7b6","color":"#fff"});
			}else if(e.target.innerHTML == "男士"){
				this.sex = "1";
				$(".by").css({"background-color":"#20b7b6","color":"#fff"});
				$(".nv").css({"background-color":"#fff","color":"#333"});
			}
		}
	},
}
</script>

<style scoped>
input,select,option,textarea{outline: none;}
input[type="radio"] {-webkit-appearance: none;display: inline-block;margin: 10px;outline: none;width: .25rem;height: .75em;border-radius: 1.1rem;cursor: pointer;border: 2px solid #a4a4a4;}
input[type="radio"]:checked {background-position: 0 0;border: 2px solid #f65d4f;background-color: #f65d4f;}

.messageCity>select {border:0;-webkit-appearance: none;-moz-appearance: none;outline: none;padding-right: 14px;background-color: #fff;color: red;}
.messageCity>select::-ms-expand { display: none; background: transparent;border:none;outline: none;}

.messageListBg{ width: 90%; margin-left: 5%; background: #fff; border-radius:10px;position: relative; }
.messageList{padding: 5% 0;position: relative;}
.messageTitle{ color: #666; font-size: 1.25em;}
.pd{border: 0;}
.messageListPd{ margin: 20px 0; padding-bottom:10px;position: relative;border-bottom: 1px solid #f5f5f5;}
.messageListPd>input{text-align: center;}
.messageCity{ position: absolute; right: 0; top: 92px; text-align: right;font-size: .85em;}
.messageCity input{ display: inline-block; color: #666; font-size: 1em; width: 80px; text-align: right; background: none;padding-right: 18px; position: absolute; right: 0; top: 0;}
.messageRadio{display: inline-block;}
.messageRadio label{font-size: .75em;position: relative;left: -7px;top: 2px;}
.messageRadio input{position: relative;top: 2px;vertical-align: middle;}
.messageRadio>img{width: 12px;vertical-align: middle;}
.messageCity img{ width: 8px; vertical-align: middle;}
.messageRadio{position: relative;}
.messageRadio>input:last-of-type{margin-left: 58px;}
.treePd{ position: absolute;left: -6.575%; width:10%; z-index: 1; top: 3%;}
.brandInput{margin-top: 5px; border: none; width: 45%; border-radius:0; padding: 8px 0; text-align: right; color: #333; font-size: 1em;margin-left: 5%;}
.brandsInput{ margin-top: 5px; border: none; width: 66%; border-radius:0; padding: 8px 0; text-align: right; color: #333; font-size: 1em;margin-left: 5%;}
.brandInputs{ margin-top: 5px; border: none; width: 66%; border-radius:0; padding: 8px 0; text-align: right; color: #333; font-size: 1em;margin-left: 5%;}

.sexTxt>span:first-of-type{width: 25px;color:#fff;padding: 5px;background-color: #20b7b6;text-align: center;}
.sexTxt>span:last-of-type{width: 25px;color:#333;padding: 5px;background-color: #fff;text-align: center;}
.submitBtn{ border: 0;width: 100%; padding:14px 0; text-align: center; background-color: #20b7b6; font-size:1em; color: #fff; position: fixed;left: 0; bottom: 0; z-index: 10;text-decoration: none; display: block;}
input[type=submit] {border: 0;background-color:#20b7b6;outline:none;}
.tips{ background: rgba(0,0,0,0.7); padding:15px 0; width: 60%; border-radius:10px; color: #fff; font-size:1em; position: fixed; left:20%; top: 40%; z-index: 11; text-align: center;}
.van-dialog__confirm,.van-dialog__confirm:active {color: #FF6600}	
.d-date-time-header,.d-date-time-bg{background: #FF6600!important;}
.d-date-time-button a{color: #FF6600!important;}
.time{position: absolute;top: 2px;left: 102px;font-size: .85em;}
</style>
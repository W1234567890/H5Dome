import axios from 'axios'
import qs from 'qs'

import * as _ from './tool'
import t_api from '../t_api'
import config from 'src/config/im.js'
import routes from '@/route'
import store from '@/store'
import tjs from 'translation.js'
import md5 from 'js-md5'
//tjs.add(new tjs.GoogleCN())


// axios 配置
axios.defaults.timeout = 60000;//响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';//配置请求头
axios.defaults.baseURL = 'https://appapi.gongyujia.com/api/';//生产
//axios.defaults.baseURL = 'http://gyjapitest.gongyujia.com/api/';

//axios.defaults.withCredentials = false;
//POST传参序列化
axios.interceptors.request.use((config)=> {
	config.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
	
	config.headers.source = '94368';
	config.headers.sign = md5('f4b36b276562c00dd22dddb9436882f2' + '9465c5d8c954415c164b3327f8d47d0c'); 
	var u = navigator.userAgent, app = navigator.appVersion; 
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 	
	if(isAndroid){				
		var getUserInfos = android.getUserInfo();	
		
		if(getUserInfos == ""){			
			config.headers.token = '';
		}else{
			config.headers.token = getUserInfos.g_token;			
		}	
	}else if(isiOS){			
		_.setupWebViewJavascriptBridge(function(bridge) {	
			bridge.registerHandler('getUserInfoMethod', function(data, responseCallback) {	
				responseCallback(data)
			});						
			bridge.callHandler('getUserInfo', function(rest) {						
				var ocData = JSON.parse(rest);	
				g_token = ocData.g_token;			
				if(ocData.g_token == '' || ocData.g_token == null || ocData.g_token == NaN){
					config.headers.token = '';
				}else{					
					config.headers.token = 	getUserInfos.g_token;	
				}				
			});
	    });  												
	};	
    return config;
},(error) =>{
    _.toast("错误的传参", 'fail');                                   
    
    return Promise.reject(error);
});
//返回状态判断
axios.interceptors.response.use((res) =>{    
	if(typeof res.data == "string"){					 
		res.data = _.Decrypt(res.data.replace(/[\r\n]/g,""));
	}
	if(typeof res.data == 'string'){
    	res.data = JSON.parse(res.data)
   	}
	if(typeof res.data == 'object'){
		if(res.data.meta){
			if(res.data.meta.code != "10000"){
				console.log("服务器异常!")
				console.log(res.data.meta);
    		   //_.toastMsg('服务器异常!')
    		 }
			/*if(res.data.meta.code == "10000"){
			}else if(res.data.meta.code == "10001"){
		        if(res.data.meta.message){
		        	tjs.translate({ api: 'GoogleCN', text: res.data.meta.message.toLowerCase() })
					  .then(function (lan) {
					    _.toastMsg(lan.result[0])
					  }, function (errMsg) {
					    console.log(errMsg)
					    _.toastMsg(res.data.meta.message)
					  })
		        }
				_.goloading(false);
			}else if(res.data.meta.code == "10002"){
				_.toast('未授权!', 'fail');
				_.goloading(false);
				_.logout();
			}else if(res.data.meta.code == "10003"){
				var msg  = res.data.meta.message
				if(msg){
					msg = msg.toLowerCase();
					msg = msg.replace('invalid',"") + ' invalid';
		        	tjs.translate({ api: 'GoogleCN', text: msg})
					  .then(function (lan) {
					    _.toastMsg(lan.result[0])
					  }, function (errMsg) {
					    console.log(errMsg)
					    _.toastMsg(res.data.meta.message)
					  })
		        }else{
		        	_.toast('系统错误!', 'fail');
		        }
				_.goloading(false);
			}else if(!res.data.meta.code){
				_.goloading(false);
			}else{
				_.toast(res.data.msg, 'fail');
				_.goloading(false);
			}*/
		}
		
	}
   	if(!res.data){
   		return Promise.reject(res);
   	}
    return res;
}, (error) => {
    _.toast("网络异常", 'fail');
    _.goloading(false);
    return Promise.reject(error);
});

export default {
	mixins: [ t_api],
	//公共方法 禁止修改
	methods:{	
		getByUrl( res, callback){		
			//let token ="f4b36b276562c00dd22dddb9436882f2";
			callback({		
				url : res.url,
				data : res.data,
			});
		},			
		us(tk, ak){
			let ta = tk + ak;
			let sign = this.$md5(ta);
			return sign;				
		},		
		//用户登录
	    ajax( o, bool,isloading) {
	    	if(!isloading){
	    		this.$store.dispatch('setLoadingState', true);
	    	}
	        this.fetch(o.url, o.data).then(res => {
	        	this.setData(res,o,bool);
	        	if(!bool){
          			this.$store.dispatch('setLoadingState', false);
          		}
          }).catch(res => {
          		this.setData(res,o,bool);
          		if(!bool){
          			this.$store.dispatch('setLoadingState', false);
          		}
            })
	    },		   
	    fetch(url, params) {
		    return new Promise((resolve, reject) => {
		        axios.post(url, params)
		            .then(response => {
		                resolve(response.data);
		            }, err => {
		                reject(err);
		            })
		            .catch((error) => {
		               	reject(error)
		            })
		    })
		},   
	    setData( res,o,bool){
	    	if(typeof res == "string"){
	    		res = this.Decrypt(res.replace(/[\r\n]/g,""));
	    	}
	    	let type = typeof res,success = o.success || {};
        	if(type == 'string'){
            	success(JSON.parse(res))
            }else{
            	success(res);
            }
           
            if(!bool){
            	this.$store.dispatch('setLoadingState', false)
            }
	    },	
		pickerTimer( callback){
			var picker = new mui.DtPicker({"value":this.time,"beginYear":2010,"endYear":2020});
				picker.show((res)=>{
					callback && callback(res)
				})
		},	
		handler() {
		  event.preventDefault();
		},
    },
    beforeDestroy(){//实例已经创建完成，属性已经绑定
	   	if(window.TimerInterval){
	   		clearInterval(window.TimerInterval);
	   		let timer = this.TimerInterval(false);
	   	}
    }
}
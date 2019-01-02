import Vue from 'vue'

import App from './App'


import './config/rem'
import "./config/locache"
import "./assets/css/style.css"
import "./assets/css/index.css" 
import "./assets/css/swiper-3.3.1.min.css"
import VueRouter from "vue-router"
import router from './route'
import component from "./config/component.js"
import store from './store'
import api from 'src/mixins/api'
import AwesomeSwiper from 'vue-awesome-swiper'
import mui from 'src/assets/js/mui.min.js'
import md5 from 'js-md5';
import $ from 'jquery'
import Clipboard from 'clipboard'; 
import dateTime from 'vue-date-time-m';
import BMap from 'vue-baidu-map'


//引用vuex
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.component('data-time', dateTime);
Vue.prototype.Clipboard=Clipboard;

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
Vue.use(VueLazyload,{ error:'https://opres.gongyujia.com/H5/default.png',loading:'https://opres.gongyujia.com/H5/default.png'})

Vue.prototype.$md5 = md5;

Vue.use( VueRouter);
Vue.use( AwesomeSwiper);

//百度统计
router.beforeEach((to, from, next) => {
    if (to.path) {
        _hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
    next();
} );

for(var item in api.methods){
	Vue.prototype[item] = api.methods[item]
}
let ex = ( res)=>{
	for(var obj in res){
		if(res[obj] && res[obj].methods){
			ex(res[obj].methods);
		}else{
			Vue.prototype[obj] = res[obj]
		}
	}
}
ex(api.mixins)
new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: { App }
})
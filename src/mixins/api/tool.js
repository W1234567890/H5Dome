 
 import store from '@/store'
import routes from '@/route'
import * as type from '@/store/type'
import config from 'src/config/im.js'
import md5 from 'js-md5';
/** 
*   Toast公共方法
*/
export function toast(str, icon) {
    store.dispatch('showToast', true)
    if (icon == 'success') {
        store.dispatch('showSuccess', true)
        store.dispatch('showFail', false)
    } else {
        store.dispatch('showSuccess', false)
        store.dispatch('showFail', true)
    }
    store.dispatch('toastMsg',str);
    setTimeout(() => {
        store.dispatch('showToast', false); 
    },1500); 
}				
export function us(tk, ak){
	let ta = tk + ak;
	let sign = md5(ta);
	return sign;				
}
export function toastMsg(content){
	let contents = content || '';
	mui.toast(contents);
}
export function logout(str) {
	locache.remove('userInfo');
	locache.remove('XToken');
	locache.remove('loginInfo')
	routes.push({path:'/personalCenter/login'})
}
export function goloading( bool) {
	store.dispatch("isSlidesTop",false);
	store.dispatch('setLoadingState', bool);
}
export function Decrypt( encrypted){
	CryptoJSAESKey();
	let user = store.state.user.cryptojsAESKey,
    	decrypted = CryptoJS.AES.decrypt(encrypted,user.key,
            {
                iv:user.iv,
                mode:CryptoJS.mode.CBC,
                padding:CryptoJS.pad.Pkcs7
            });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
// https://cn.vuejs.org/v2/guide/reactivity.html
// Vue 不能检测到对象属性的添加或删除。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上
export function mergeObject(dest, src) {
  if (typeof dest !== 'object' || dest === null) {
    dest = Object.create(null)
  }
  dest = Object.assign(Object.create(null), dest, src)
  return dest
}

export function  setupWebViewJavascriptBridge(callback) {	
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}


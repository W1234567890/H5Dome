<template>
  <div id="app">
  		<!--<v-loading v-show="loading"></v-loading>
  		<v-toast v-show="showToast"></v-toast>-->
  		<transition>
					<router-view class="view"></router-view>
			</transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'app',
    data () {
        return {
						
        }
    },
    computed: {
      ...mapGetters([
          'loading',
          'showToast',
          'showAlert',
          'browser',
          'showTitle',
          'getBackInfo',
          'getXToken'
      ]),
    },
    watch: {
      
    },
    updated (){
    	
    },
    methods: {
    	// 刷新方法
      reload: function () {
        this.isRouterAlive = false;
        // 该方法会在dom更新后执行
        this.$nextTick(function () { this.isRouterAlive = true })
      }
    }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 306004 */
  src: url('//at.alicdn.com/t/font_306004_aefvhzodxfajor.eot');
  src: url('//at.alicdn.com/t/font_306004_aefvhzodxfajor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_306004_aefvhzodxfajor.woff') format('woff'),
  url('//at.alicdn.com/t/font_306004_aefvhzodxfajor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_306004_aefvhzodxfajor.svg#iconfont') format('svg');
}
.iconfont {
    font-family: iconfont!important;
    /*font-size: 28px;*/
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body,html{
	width: 100%;
}
#app {
	font-family: "微软雅黑";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	margin: auto;
	background-color: #FFFFFF;
  opacity: 1;
}

.slide-right-enter-active,
.slide-right-enter,
.slide-right-leave,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-enter,
.slide-left-leave,
.slide-left-leave-active{
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  opacity: 1;
  overflow: hidden;
}
.view{
	background-color: #fff;
  opacity: 1;
  width: 100%;
}

.slide-right-enter-active {
  transition: all .4s ease;
}
  
.slide-right-enter {
  transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
}
  
.slide-right-leave {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
  
.slide-right-leave-active {
  transition: all .4s ease;
  transform: translate3d(-20%, 0, 0);
  -webkit-transform: translate3d(-20%, 0, 0);
}

.slide-left-enter-active {
  transition: all .4s ease;
  transform: translate3d(0%, 0, 0);
  -webkit-transform: translate3d(0%, 0, 0);
  z-index: 0;
}
  
.slide-left-enter {
  transform: translate3d(-20%, 0, 0);
  -webkit-transform: translate3d(-20%, 0, 0);
  z-index: 0;
}
  
.slide-left-leave {
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  z-index: 1111;
}
  
.slide-left-leave-active {
  transition: all .4s ease;
  transform: translate3d(100%, 0, 0);
  -webkit-transform: translate3d(100%, 0, 0);
  z-index: 1111;
}
</style>

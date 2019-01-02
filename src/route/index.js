import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use( VueRouter);
//公共方法 禁止修改
export default new VueRouter({
  mode:'hash',
  /*mode:'abstract',*/
  /*mode:'hash',*/
	base:'/static/dist',
  routes: [{
	      path: '/',
	      redirect: '/beautifulHouse'
		  },  
	    {//歌词中的美丽房屋
	      name: 'beautifulHouse',
	      path:'/beautifulHouse',
	      component: resolve => { require(['src/views/findDifferent/beautifulHouse.vue'], resolve)}
	    },
	     {//歌词中的美丽房屋二
	      name: 'beautifulHouseTWO',
	      path:'/beautifulHouseTWO',
	      component: resolve => { require(['src/views/findDifferent/beautifulHouseTWO.vue'], resolve)}
	    },
	    {//歌词中的美丽房屋广州
	      name: 'beautifulHouseGZ',
	      path:'/beautifulHouseGZ',
	      component: resolve => { require(['src/views/special/beautifulHouseGZ.vue'], resolve)}
	    },
	    {//歌词中的美丽房屋深圳
	      name: 'beautifulHouseSZ',
	      path:'/beautifulHouseSZ',
	      component: resolve => { require(['src/views/special/beautifulHouseSZ.vue'], resolve)}
	    },
	    {//歌词中的美丽房屋杭州
	      name: 'beautifulHouseHZ',
	      path:'/beautifulHouseHZ',
	      component: resolve => { require(['src/views/special/beautifulHouseHZ.vue'], resolve)}
	    },
	    {//歌词中的美丽房屋 北京
	      name: 'beautifulHouseBJ',
	      path:'/beautifulHouseBJ',
	      component: resolve => { require(['src/views/special/beautifulHouseBJ.vue'], resolve)}
	    },
	    {//歌词中的美丽房屋成都
	      name: 'beautifulHouseCD',
	      path:'/beautifulHouseCD',
	      component: resolve => { require(['src/views/special/beautifulHouseCD.vue'], resolve)}
	    },
	    {//房屋安全保证
	      name: 'commitments',
	      path:'/commitments',
	      component: resolve => { require(['src/views/findDifferent/commitments.vue'], resolve)}
	    },
	    {//房屋安全保证
	      name: 'commitmentsNew',
	      path:'/commitmentsNew',
	      component: resolve => { require(['src/views/findDifferent/commitmentsNew.vue'], resolve)}
	    },
	    {//IT住房指南
	      name: 'ItTheGuide',
	      path:'/ItTheGuide',
	      component: resolve => { require(['src/views/findDifferent/ItTheGuide.vue'], resolve)}
	    },
	    {//IT住房指南
	      name: 'ItTheGuideNew',
	      path:'/ItTheGuideNew',
	      component: resolve => { require(['src/views/findDifferent/ItTheGuideNew.vue'], resolve)}
	    },
	    {//IT住房指南广州
	      name: 'ItTheGuideGZ',
	      path:'/ItTheGuideGZ',
	      component: resolve => { require(['src/views/special/ItTheGuideGZ.vue'], resolve)}
	    },
	    {//IT住房指南广州
	      name: 'ItTheGuideGZNew',
	      path:'/ItTheGuideGZNew',
	      component: resolve => { require(['src/views/special/ItTheGuideGZNew.vue'], resolve)}
	    },
	    {//IT住房指南深圳
	      name: 'ItTheGuideSZ',
	      path:'/ItTheGuideSZ',
	      component: resolve => { require(['src/views/special/ItTheGuideSZ.vue'], resolve)}
	    },
	    {//IT住房指南深圳
	      name: 'ItTheGuideSZNew',
	      path:'/ItTheGuideSZNew',
	      component: resolve => { require(['src/views/special/ItTheGuideSZNew.vue'], resolve)}
	    },
	    {//IT住房指南杭州
	      name: 'ItTheGuideHZ',
	      path:'/ItTheGuideHZ',
	      component: resolve => { require(['src/views/special/ItTheGuideHZ.vue'], resolve)}
	    },
	    {//IT住房指南杭州
	      name: 'ItTheGuideHZNew',
	      path:'/ItTheGuideHZNew',
	      component: resolve => { require(['src/views/special/ItTheGuideHZNew.vue'], resolve)}
	    },
	    {//IT住房指南北京
	      name: 'ItTheGuideBJ',
	      path:'/ItTheGuideBJ',
	      component: resolve => { require(['src/views/special/ItTheGuideBJ.vue'], resolve)}
	    },
	    {//IT住房指南北京
	      name: 'ItTheGuideBJNew',
	      path:'/ItTheGuideBJNew',
	      component: resolve => { require(['src/views/special/ItTheGuideBJNew.vue'], resolve)}
	    },
	    {//IT住房指南成都
	      name: 'ItTheGuideCD',
	      path:'/ItTheGuideCD',
	      component: resolve => { require(['src/views/special/ItTheGuideCD.vue'], resolve)}
	    },
	    {//IT住房指南成都
	      name: 'ItTheGuideCDNew',
	      path:'/ItTheGuideCDNew',
	      component: resolve => { require(['src/views/special/ItTheGuideCDNew.vue'], resolve)}
	    },
	    {//学生党晋升小白领
      	name: 'servicesStu',
	      path:'/servicesStu',
	      component: resolve => { require(['src/views/findDifferent/servicesStu.vue'], resolve)}
	    },
	    {//上海乐享
      	name: 'enjoySH',
	      path:'/enjoySH',
	      component: resolve => { require(['src/views/findDifferent/enjoySH.vue'], resolve)}
	    },
	    {//设计范
      	name: 'design',
	      path:'/design',
	      component: resolve => { require(['src/views/findDifferent/design.vue'], resolve)}
	    },
	    {//房屋详情
      	name: 'merchantDetail',
	      path:'/merchantDetail',
	      component: resolve => { require(['src/views/pages/merchantDetail.vue'], resolve)}
	    },
	    {//品牌馆入驻
      	name: 'mobile',
	      path:'/mobile',
	      component: resolve => { require(['src/views/other/mobile.vue'], resolve)}
	    },
	    {//品牌馆入驻
      	name: 'newMobile',
	      path:'/newMobile',
	      component: resolve => { require(['src/views/other/newMobile.vue'], resolve)}
	    },
	    {
	    	//广州乐享enjoyGZ
	    	name: 'enjoyGZ',
	      path:'/enjoyGZ',
	      component: resolve => { require(['src/views/findDifferent/enjoyGZ.vue'], resolve)}
	    },
	    {
	    	//北京乐享enjoyBj
	    	name: 'enjoyBj',
	      path:'/enjoyBj',
	      component: resolve => { require(['src/views/findDifferent/enjoyBj.vue'], resolve)}
	    },
	    {
	    	//用户协议
	    	name: 'agreement',
	      path:'/agreement',
	      component: resolve => { require(['src/views/pages/agreement.vue'], resolve)}
	    },
	    {
	    	//星空
	    	name: 'newBrand',
	      path:'/newBrand',
	      component: resolve => { require(['src/views/special/newBrand.vue'], resolve)}
	    },
	    {
	    	//领红包
	    	name: 'coupon',
	      path:'/coupon',
	      component: resolve => { require(['src/views/other/coupon.vue'], resolve)}
	    },
	    {
	    	//民宿专题
	    	name: 'legend',
	      path:'/legend',
	      component: resolve => { require(['src/views/findDifferent/legend.vue'], resolve)}
	    },
	    {
	    	//双节优惠
	    	name: 'doubDiscounts',
	      path:'/doubDiscounts',
	      component: resolve => { require(['src/views/findDifferent/doubDiscounts.vue'], resolve)}
	    },
	    {
	    	//双节优惠微信生活
	    	name: 'dDiscountsWinXin',
	      path:'/dDiscountsWinXin',
	      component: resolve => { require(['src/views/findDifferent/dDiscountsWinXin.vue'], resolve)}
	    },
	    {
	    	//红包活动
	    	name: 'redActivity',
	      path:'/redActivity',
	      component: resolve => { require(['src/views/other/redActivity.vue'], resolve)}
	    },
	    {
	    	//零元红包活动
	    	name: 'zeroActivity',
	      path:'/zeroActivity',
	      component: resolve => { require(['src/views/other/zeroActivity.vue'], resolve)}
	    },
	    {
	    	//引导活动
	    	name: 'introduction',
	      path:'/introduction',
	      component: resolve => { require(['src/views/other/introduction.vue'], resolve)}
	    },
	    {
	    	//大闸蟹
	    	name: 'crab',
	      path:'/crab',
	      component: resolve => { require(['src/views/findDifferent/crab.vue'], resolve)}
	    },
	    {
	    	//指导下载
	    	name: 'instructions',
	      path:'/instructions',
	      component: resolve => { require(['src/views/other/instructions.vue'], resolve)}
	    },
	    {
	    	//预约
	    	name: 'subscribe',
	      path:'/subscribe',
	      component: resolve => { require(['src/views/pages/subscribe.vue'], resolve)}
	    },
	    {
	    	//ceshi
	    	name: 'ceshi',
	      path:'/ceshi',
	      component: resolve => { require(['src/views/pages/ceshi.vue'], resolve)}
	    },
	     {
	    	//番小茄
	    	name: 'eggplant',
	      path:'/eggplant',
	      component: resolve => { require(['src/views/other/eggplant.vue'], resolve)}
	    },
	    {
	    	//台风上海
	    	name: 'typhoon',
	      path:'/typhoon',
	      component: resolve => { require(['src/views/findDifferent/typhoon.vue'], resolve)}	
	    },
	    {
	    	//台风北京
	    	name: 'typhoonBj',
	      path:'/typhoonBj',
	      component: resolve => { require(['src/views/typhoonAndEat/typhoonBj.vue'], resolve)}	
	    },
	    {
	    	//台风成都
	    	name: 'typhoonCd',
	      path:'/typhoonCd',
	      component: resolve => { require(['src/views/typhoonAndEat/typhoonCd.vue'], resolve)}	
	    },
	    {
	    	//台风广州
	    	name: 'typhoonGz',
	      path:'/typhoonGz',
	      component: resolve => { require(['src/views/typhoonAndEat/typhoonGz.vue'], resolve)}	
	    },
	    {
	    	//台风杭州
	    	name: 'typhoonHz',
	      path:'/typhoonHz',
	      component: resolve => { require(['src/views/typhoonAndEat/typhoonHz.vue'], resolve)}	
	    },
	    {
	    	//台风深圳
	    	name: 'typhoonSz',
	      path:'/typhoonSz',
	      component: resolve => { require(['src/views/typhoonAndEat/typhoonSz.vue'], resolve)}	
	    },
	    {
	    	//好吃上海
	    	name: 'goodEat',
	      path:'/goodEat',
	      component: resolve => { require(['src/views/findDifferent/goodEat.vue'], resolve)}	
	    },
	    {
	    	//好吃北京
	    	name: 'goodEatBj',
	      path:'/goodEatBj',
	      component: resolve => { require(['src/views/typhoonAndEat/goodEatBj.vue'], resolve)}	
	    },
	    {
	    	//好吃广州
	    	name: 'goodEatGz',
	      path:'/goodEatGz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodEatGz.vue'], resolve)}	
	    },
	    {
	    	//好吃深圳
	    	name: 'goodEatSz',
	      path:'/goodEatSz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodEatSz.vue'], resolve)}	
	    },
	    {
	    	//好吃成都
	    	name: 'goodEatCd',
	      path:'/goodEatCd',
	      component: resolve => { require(['src/views/typhoonAndEat/goodEatCd.vue'], resolve)}	
	    },
	    {
	    	//好吃杭州
	    	name: 'goodEatHz',
	      path:'/goodEatHz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodEatHz.vue'], resolve)}	
	    },
	    {
	    	//盼达
	    	name: 'panDa',
	      path:'/panDa',
	      component: resolve => { require(['src/views/special/panDa.vue'], resolve)}	
	    },
	    {
	    	//设计师
	    	name: 'stylist',
	      path:'/stylist',
	      component: resolve => { require(['src/views/special/stylist.vue'], resolve)}	
	    },
	    {
	    	//朗格活动
	    	name: 'education',
	      path:'/education',
	      component: resolve => { require(['src/views/other/education.vue'], resolve)}	
	    },
	    {
	    	//朗格活动微信
	    	name: 'educationWX',
	      path:'/educationWX',
	      component: resolve => { require(['src/views/other/educationWX.vue'], resolve)}	
	    },
	    {
	    	//朗格活动抖音
	    	name: 'educationDY',
	      path:'/educationDY',
	      component: resolve => { require(['src/views/other/educationDY.vue'], resolve)}	
	    },
	    {
	    	//上海映象-静安篇
	    	name: 'mapping',
	      path:'/mapping',
	      component: resolve => { require(['src/views/findDifferent/mapping.vue'], resolve)}	
	    },
	    {
	    	//M公寓
	    	name: 'apartment',
	      path:'/apartment',
	      component: resolve => { require(['src/views/special/apartment.vue'], resolve)}	
	    },
	    {
	    	//安心住
	    	name: 'relieved',
	      path:'/relieved',
	      component: resolve => { require(['src/views/findDifferent/relieved.vue'], resolve)}	
	    },
	    {
	    	//安心住
	    	name: 'relievedWX',
	      path:'/relievedWX',
	      component: resolve => { require(['src/views/findDifferent/relievedWX.vue'], resolve)}	
	    },
	    {
	    	//E宠
	    	name: 'pooch',
	      path:'/pooch',
	      component: resolve => { require(['src/views/other/pooch.vue'], resolve)}	
	    },
	    {
	    	//E宠百度
	    	name: 'poochBD',
	      path:'/poochBD',
	      component: resolve => { require(['src/views/other/poochBD.vue'], resolve)}	
	    },
	    {
	    	//E宠微信
	    	name: 'poochWX',
	      path:'/poochWX',
	      component: resolve => { require(['src/views/other/poochWX.vue'], resolve)}	
	    },
	    {
	    	//美好时光
	    	name: 'goodTime',
	      path:'/goodTime',
	      component: resolve => { require(['src/views/findDifferent/goodTime.vue'], resolve)}	
	    },   
	   	{
	    	//美好时光bj
	    	name: 'goodTimeBj',
	      path:'/goodTimeBj',
	      component: resolve => { require(['src/views/typhoonAndEat/goodTimeBj.vue'], resolve)}	
	    },
	    {
	    	//美好时光
	    	name: 'goodTimeGz',
	      path:'/goodTimeGz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodTimeGz.vue'], resolve)}	
	    },
	    {
	    	//美好时光
	    	name: 'goodTimeSz',
	      path:'/goodTimeSz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodTimeSz.vue'], resolve)}	
	    },
	    {
	    	//美好时光
	    	name: 'goodTimeHz',
	      path:'/goodTimeHz',
	      component: resolve => { require(['src/views/typhoonAndEat/goodTimeHz.vue'], resolve)}	
	    },
	    {
	    	//美好时光
	    	name: 'goodTimeCd',
	      path:'/goodTimeCd',
	      component: resolve => { require(['src/views/typhoonAndEat/goodTimeCd.vue'], resolve)}	
	    },
	    {
	    	//发现不同
	    	name: 'fdMob',
	      path:'/fdMob',
	      component: resolve => { require(['src/views/findDifferent/fdMob.vue'], resolve)}	
	    },
	    {
	    	//证书详情
	    	name: 'certificateDte',
	      path:'/certificateDte',
	      component: resolve => { require(['src/views/other/certificateDte.vue'], resolve)}	
	    },
	    {
	    	//万圣节
	    	name: 'halloween',
	      path:'/halloween',
	      component: resolve => { require(['src/views/findDifferent/halloween.vue'], resolve)}	
	    },
	     {
	    	//测试回掉函数
	    	name: 'callback',
	      path:'/callback',
	      component: resolve => { require(['src/views/pages/callback.vue'], resolve)}	
	    },
	    {
	    	//进口博览会
	    	name: 'expo',
	      path:'/expo',
	      component: resolve => { require(['src/views/findDifferent/expo.vue'], resolve)}	
	    },
	    {
	    	//进口博览会
	    	name: 'expoBj',
	      path:'/expoBj',
	      component: resolve => { require(['src/views/special/expoBj.vue'], resolve)}	
	    },
	    {
	    	//羊蝎子
	    	name: 'lamb',
	      path:'/lamb',
	      component: resolve => { require(['src/views/findDifferent/lamb.vue'], resolve)}	
	    },
	    {
	    	//羊蝎子北京
	    	name: 'lambBj',
	      path:'/lambBj',
	      component: resolve => { require(['src/views/special/lambBj.vue'], resolve)}	
	    },
	    {
	    	//羊蝎子北京
	    	name: 'lambWB',
	      path:'/lambWB',
	      component: resolve => { require(['src/views/special/lambWB.vue'], resolve)}	
	    },
	    {
	    	//租房也有美好生活
	    	name: 'combine',
	      path:'/combine',
	      component: resolve => { require(['src/views/findDifferent/combine.vue'], resolve)}	
	    },
	    {
	    	//租房也有美好生活微博
	    	name: 'combineWB',
	      path:'/combineWB',
	      component: resolve => { require(['src/views/findDifferent/combineWB.vue'], resolve)}	
	    },
	    {
	    	//安心住招募
	    	name: 'relievedRecruit',
	      path:'/relievedRecruit',
	      component: resolve => { require(['src/views/other/relievedRecruit.vue'], resolve)}	
	    },
	    {
	    	//goodHouse秋季好房
	    	name: 'goodHouse',
	      path:'/goodHouse',
	      component: resolve => { require(['src/views/findDifferent/goodHouse.vue'], resolve)}	
	    },
	    {
	    	//goodHouse秋季好房
	    	name: 'goodHouseWB',
	      path:'/goodHouseWB',
	      component: resolve => { require(['src/views/special/goodHouseWB.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouse',
	      path:'/guanHouse',
	      component: resolve => { require(['src/views/other/guanHouse.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouseWX',
	      path:'/guanHouseWX',
	      component: resolve => { require(['src/views/other/guanHouseWX.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouseBD',
	      path:'/guanHouseBD',
	      component: resolve => { require(['src/views/other/guanHouseBD.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouseWB',
	      path:'/guanHouseWB',
	      component: resolve => { require(['src/views/other/guanHouseWB.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouseTG',
	      path:'/guanHouseTG',
	      component: resolve => { require(['src/views/other/guanHouseTG.vue'], resolve)}	
	    },
	    {
	    	//冠寓
	    	name: 'guanHouseXCY',
	      path:'/guanHouseXCY',
	      component: resolve => { require(['src/views/other/guanHouseXCY.vue'], resolve)}	
	    },
	    {
	    	//潮玩北上广
	    	name: 'tideBSG',
	      path:'/tideBSG',
	      component: resolve => { require(['src/views/other/tideBSG.vue'], resolve)}	
	    },
	    {
	    	//潮玩杭成深
	    	name: 'tideHCS',
	      path:'/tideHCS',
	      component: resolve => { require(['src/views/other/tideHCS.vue'], resolve)}	
	    },
	    {
	    	//甲醛
	    	name: 'methanal',
	      path:'/methanal',
	      component: resolve => { require(['src/views/other/methanal.vue'], resolve)}	
	    },
	    {
	    	//超级英雄
	    	name: 'radiant',
	      path:'/radiant',
	      component: resolve => { require(['src/views/findDifferent/radiant.vue'], resolve)}	
	    },
	     {
	    	//加力商城
	    	name: 'strengthMall',
	      path:'/strengthMall',
	      component: resolve => { require(['src/views/other/strengthMall.vue'], resolve)}	
	    },
	     {
	    	//圣诞
	    	name: 'Christmas',
	      path:'/Christmas',
	      component: resolve => { require(['src/views/other/Christmas.vue'], resolve)}	
	    },
	     {
	    	//萤火虫计划 首页
	    	name: 'firewormPlay',
	      path:'/firewormPlay',
	      component: resolve => { require(['src/views/firewormPlay/firewormPlay.vue'], resolve)}	
	     },
	     {
	    	//萤火虫计划 二
	    	name: 'firewormPlayCont',
	      path:'/firewormPlayCont',
	      component: resolve => { require(['src/views/firewormPlay/firewormPlayCont.vue'], resolve)}	
	    },
	    {
	    	//爆改房源
    		name: 'amend',
	      path:'/amend',
	      component: resolve => { require(['src/views/other/amend.vue'], resolve)}		
	    },
	    {
	    	//犀牛搬家
	    	name: 'move',
	      path:'/move',
	      component: resolve => { require(['src/views/other/move.vue'], resolve)}	
	    },
	    {
	    	//潮玩北上广
	    	name: 'yearBSG',
	      path:'/yearBSG',
	      component: resolve => { require(['src/views/other/yearBSG.vue'], resolve)}	
	    },
	    {
	    	//潮玩杭成深
	    	name: 'yearHCS',
	      path:'/yearHCS',
	      component: resolve => { require(['src/views/other/yearHCS.vue'], resolve)}	
	    },
	    {
	    	//冬暖
    		name: 'mildWinter',
	      path:'/mildWinter',
	      component: resolve => { require(['src/views/other/mildWinter.vue'], resolve)}		
	    }
  ]
})

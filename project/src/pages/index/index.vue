<template>

 <scroll-view>
  <div class="wrap">
              <!-- 首页搜索导航跳转搜索页面 -->
            <div class="inPut">
                <div class="bigInput">
                     <image @click="btnSearch" src="/static/images/search.png" />
                </div>
            </div>      
              <!-- 导航组件 -->
              <Nava></Nava>  
              <!-- 轮播图组件 -->
              <SwiperA></SwiperA>
              <!-- 首页Banner广告图 -->
            <div class="banner">
                <div class="banOne" @click="banOne">
                   <image :src="getswipe[1].items[0].imgUrl" alt="" />
                </div>
                <div class="banTwo">
                    <image class="one" :src="getswipe[1].items[1].imgUrl" @click="one" />
                    <image class="two" :src="getswipe[1].items[2].imgUrl" @click="two" />
                </div>
            </div>

            <div class="bigimg" @click="bigimg">
               <image class="imgact" :src="getswipe[0].items[0].imgUrl" alt="" />
            </div>
             <!--精选好物Dl组件第一个使用  --> 
            <ban-ner :dataSwiper="getswipe[4].items"></ban-ner>

            <div class="bigimg">
               <image class="imgact" :src="getswipe[0].items[1].imgUrl" alt="" />
            </div>

              <!--精选好物Dl组件第二个使用  --> 
            <ban-ner :dataSwiper="getswipe[6].items"></ban-ner>

            <div class="bigimg">
               <image class="imgact" :src="getswipe[0].items[2].imgUrl" alt="" />
            </div>
            <!--精选好物Dl组件第三个使用  --> 
             <ban-ner :dataSwiper="getswipe[8].items"></ban-ner>

             <div class="bigimg">
               <image class="imgact" :src="getswipe[0].items[3].imgUrl" alt=""  />
            </div>
              <!--精选好物Dl组件第四个使用  --> 
             <ban-ner :dataSwiper="getswipe[10].items"></ban-ner>

            <!-- 底部加载loading组件 -->
            <loa-ding></loa-ding> 
           
  </div>
  </scroll-view>
</template>
<script>
import { mapActions, mapState } from "vuex";

import Nava from "@/components/nav/nav"; //头部导航组件
import SwiperA from "@/components/swiper/swiper"; // 轮播组件
import banNer from "@/components/banner/banner"; // 精选好物Dl组件
import loaDing from "@/components/loading/loading"; // 底部加载loading组件

export default {
  props: {},

  data() {
    return {};
  },
  components: {
    Nava, //挂载导航组件
    SwiperA, // 挂载轮播图组件
    banNer, // 挂载精选好物Dl组件
    loaDing // 挂载底部loding加载组件
  },

  methods: {
    ...mapActions({
      getswiper: "Swiper/swipers"
    }),
     ...mapActions({
      DataNav: "nav/DataNav"
    }),
     
     btnSearch(){
        wx.navigateTo({ url: '/pages/search/main' });
     },
    banOne(){
       wx.navigateTo({
          url:'/pages/carouse/main?siid=156'
      })
    },
    one(){
       wx.navigateTo({
          url:'/pages/carouse/main?siid=156'
      })
    },
     two(){
       wx.navigateTo({
          url:'/pages/carouse/main?siid=171'
      })
    },
    bigimg(){
       wx.navigateTo({
          url:'/pages/carouse/main?siid=182'
      })
    }
  },


  computed: {
    ...mapState({
      // 把vuex数据赋给变量名
      getswipe: state => state.Swiper.getswipe
    })
  },
  onShow() {
    this.getswiper();
    this.DataNav()
    this.getswiper(1);
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 6px;
  box-sizing: border-box;
}
.inPut {
  width: 100%;
  height: 44px;

  .bigInput {
    width: 98%;
    height: 35px;
    background: #f6f6f6;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    image {
      width: 100%;
      height: 100%;
      color: #a9adb1;
    }
    div {
      flex: 1;
      padding: 0 6px;
      box-sizing: border-box;
      width:100%;
      height: 100%;
      color: #a9adb1;
    }
    
  }
}
.nav {
  height: 100px;
  background: red;
}
.banner {
  width: 100%;
  height: 220px;
  background: #fff;
  display: flex;
  margin-top: 10px;
  .banOne {
    width: 40%;
    background: green;
    margin: 0 3px 0 0;
    border-radius: 5px;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .banTwo {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .one {
      width: 100%;
      height: 49%;
      background: salmon;
      margin-bottom: 3px;
      border-radius: 5px;
    }
    .two {
      width: 100%;
      height: 49%;
      background: sandybrown;
      border-radius: 5px;
    }
  }
}
.bigimg {
  width: 100%;
  height: 100px;
  background: #fff;
  margin-top: 5px;
  .imgact {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
</style>


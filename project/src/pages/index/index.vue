<template>
  <scroll-view scroll-y>
    <div class="wrap">
              <!-- 首页搜索导航跳转搜索页面 -->
            <div class="inPut">
                <div class="bigInput">
                     <img src="/static/images/search.png">
                     <div>请输入商品名称</div>
                </div>
            </div>      
              <!-- 导航组件 -->
              <Nava></Nava>  
              <!-- 轮播图组件 -->
              <SwiperA></SwiperA>
              <!-- 首页Banner广告图 -->
            <div class="banner">
                <div class="banOne">
                    <image src="" />
                </div>
                <div class="banTwo">
                    <img class="one" src="" />
                    <img class="two" src="" />
                </div>
            </div>

            <div class="bigimg">
               <img src="" alt="">
            </div>
             <!--精选好物Dl组件  --> 
            <banNer></banNer>
            <!-- 底部加载loading组件 -->
            <loaDing></loaDing>
    </div>
  </scroll-view>
</template>

<script>
import Nava from "@/components/nav/nav"; //头部导航组件
import SwiperA from "@/components/swiper/swiper"; // 轮播组件
import banNer from '@/components/banner/banner'  // 精选好物Dl组件
import loaDing from '@/components/loading/loading' // 底部加载loading组件

export default {
  data() {
    return {};
  },
  components: {
    Nava, //挂载导航组件
    SwiperA, // 挂载轮播图组件
    banNer, // 挂载精选好物Dl组件
    loaDing  // 挂载底部loding加载组件
  }
};
</script>


<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding:0 6px;
  box-sizing: border-box;
}
.inPut {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  .bigInput {
    width:98%;
    height: 35px;
    background: #f6f6f6;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    img {
      width: 15px;
      height: 15px;
      color: #a9adb1;
    }
    div {
      flex: 1;
      padding: 0 6px;
      box-sizing: border-box;
      color: #a9adb1;
    }
  }
}
.nav {
  height: 100px;
  background: red;
}
.banner{
  width:100%;
  height:220px;
  background:#fff;
  display: flex;
  margin-top:10px;
    .banOne{
      width:40%;
      background:green;
      margin:0 3px;
      border-radius: 5px;
    }
    .banTwo{
      width:59%;
      display: flex;
      flex-direction: column;
      .one{
        width:100%;
        height:48%;
        background:salmon;
        margin-bottom: 3px;
        border-radius: 5px;
      }
      .two{
        width:100%;
        height:50%;
        background:sandybrown;
        border-radius: 5px;
      }
    }
}
   .bigimg{
      width:100%;
      height:100px;
      background:saddlebrown;
      margin-top:5px;
      border-radius: 10px;
    }


</style>


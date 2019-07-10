<template>
    <div class="dapaiDetail" v-if="dapaiDetailData">
      <scroll-view scroll-y class="content">
        <Swiper :Images="dapaiDetailData.supplierProductPictureVoList" />
        <div class="norms">
            <p>
            <span class="origin">￥<span class="origin_price">{{dapaiDetailData.salesPrice}}</span></span>
            <span class="Vip_price">{{dapaiDetailData.vipPrice}}</span>
            <img src="/static/images/黑卡@2x.png" alt="">
            </p>
            <p class="earn">分享赚{{dapaiDetailData.earnMoney}}</p>
        </div>
        <p class="title">
          {{dapaiDetailData.title}}
          <span>快递包邮</span>
          </p>
          <div class="specs">
            <p>
              <span>选择</span>
              <span>规格</span>
            </p>
              <img src="/static/images/jt.png" alt="">
          </div>
       </scroll-view> 
        <div class="footer">
          <p class="btn">分享赚{{dapaiDetailData.earnMoney}}</p>
          <p class="btn">立即购买</p>
        </div>
    </div>
</template>
<script>
import store from "@/store";
import { mapState, mapActions } from "vuex";
import Swiper from "@/components/swiper/dapaiSwiper.vue";

export default {
  props: {},
  components: {
    Swiper
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dapaiDetailData: state => state.carouse.dapaiDetailData
    })
  },
  methods: {
    ...mapActions({
      getDapaiDetailData: "carouse/getDapaiDetailData"
    })
  },
  created() {},
  mounted() {
    console.log(
      "dapaiDetailData....",
      this.dapaiDetailData.supplierProductPictureVoList
    );
  },
  onLoad(options) {
    console.log(options.pid);
    let pid = options.pid;
    this.getDapaiDetailData(pid);
  }
};
</script>
<style  lang="scss">
page {
  width: 100%;
  height: 100%;
}
.dapaiDetail {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .content{
    width: 100%;
    flex: 1;
    .specs{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      p{
        font-size: 14px;
        
        span{
          margin:0 5px;
        }
      }
      img{
        width:10px;
        height:10px;
      }
    }
  .title{
    padding: 10px;
    display: flex;
    flex-direction: column;
    span{
      margin-top:10px;
      font-size: 12px;
      color:gray;
    }
  }
 .norms{
   padding: 10px 0;
      display: flex;
      justify-content: space-between;
      color:#FC5D7B;
      img{
          width: 25px;
          height: 10px;
      }
      .origin{
          margin-left: 15px;
      .origin_price{
          font-size: 22px;
      }
      }
      .Vip_price{
          font-size: 15px;
          color:brown;
           margin-right: 10px;
           margin-left: 10px;
      }
      .earn{
          font-size: 14px;
          border:1px solid #FC5D7B;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          padding:3px 10px;
          color:#FC5D7B;
      }
  }
  }
  .footer{
    height:50px;
    display: flex;
    p{
      background: linear-gradient(217deg,#f86367,#fb2579);
      height:100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
}
.banner{
    position: relative;
  height: 360px;

swiper {
   height: 100%;
  swiper-item {
  height: 100%;
    
    img {
      height: 100%;
    }
   
  }
    
}
   .page{
      position: absolute;
      z-index: 99;
      right:20px;
    bottom: 20px;
    font-size: 14px;
    background: rgba(0,0,0,.4);
    color:#fff;
    border-radius: 7px;
    padding:2px 3px;
  }
 
}
</style>
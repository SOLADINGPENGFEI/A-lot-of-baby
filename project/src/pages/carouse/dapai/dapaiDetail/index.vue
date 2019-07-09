<template>
    <div class="dapaiDetail" v-if="dapaiDetailData">
        <Swiper :Images="dapaiDetailData.supplierProductPictureVoList" />
        <div class="norms">
            <p>
            <span class="origin">￥<span class="origin_price">{{dapaiDetailData.salesPrice}}</span></span>
            <span class="Vip_price">{{dapaiDetailData.vipPrice}}</span>
            <img src="/static/images/黑卡@2x.png" alt="">
            </p>
            <p class="earn">分享赚{{dapaiDetailData.earnMoney}}</p>
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
  width: 100%;
  height: 100%;
 .norms{
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
<template>
    <div v-if="dapaiDetailData" class='dapaiDetail'>
      <scroll-view scroll-y>
        <div class="content">
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
          
          <div class="specs" @click="dailog">
            <p>
              <span>选择</span>
              <span>规格</span>
            </p>
              <img src="/static/images/jt.png" alt="">
          </div>
          <div v-if="postageData.result" class="postage"><span>提示</span>{{postageData.result}}</div>
          <div class="storeDetail">
            <img v-for="(item,index) in storeDetailData&&storeDetailData.result" :key="index" :src="item.imgUrl" alt="">
          </div>
          </div>
       </scroll-view> 
        <div class="footer">
          <p class="btn">分享赚{{dapaiDetailData.earnMoney}}</p>
          <p class="btn">立即购买</p>
        </div>
        <div v-if="dailogShow" class="dailog">
          <div></div>
          <p class="sureBtn">确定</p>
        </div>
        <div v-if="dailogShow" class="big" @click="delDailog">

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
    return {
      dailogShow: false
    };
  },
  computed: {
    ...mapState({
      dapaiDetailData: state => state.carouse.dapaiDetailData,
      storeDetailData: state => state.carouse.storeDetailData,
      postageData: state => state.carouse.postageData
    })
  },
  methods: {
    ...mapActions({
      getDapaiDetailData: "carouse/getDapaiDetailData",
      getStoreDetailData: "carouse/getStoreDetailData",
      getPostageData: "carouse/getPostageData"
    }),
    //弹框
    dailog() {
      this.dailogShow = true;
    },
    delDailog(){
      this.dailogShow = false;
    }
  },
  mounted() {
    console.log("postageData....", this.postageData);
  },
  onLoad(options) {
    let pid = options.pid;
    //请求产品详情
    this.getDapaiDetailData({
      pid
    });

    this.getStoreDetailData({
      pid: this.dapaiDetailData.pid,
      basePid: this.dapaiDetailData.basePid,
      userIdentity: this.dapaiDetailData.userIdentity
    });
    this.getPostageData({
      sstid: this.dapaiDetailData.sstid
    });
  }
};
</script>
<style  lang="scss">
.big{
  position: absolute;
  top:0;
  left: 0;
z-index: 50;
  width:100%;
  height:100%;
  background: rgba(0, 0, 0, 0.4);
}
.dapaiDetail {
   width:100%;
  height:100%;
  position: relative;
  display: flex;
  flex-direction: column;
  
  z-index: 1;
  .dailog {
    width: 100%;
    height: 250px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    div {
      width: 100%;
      flex: 1;
    }
      .sureBtn {
      height: 55px;
      line-height: 55px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
      background: linear-gradient(217deg, #f86367, #fb2579);
    }
    }
     .storeDetail{
      width:100%;
      img{
        width:100%;
      }
      img:last-child{
        height:800px;
      }
  
  }
  scroll-view,
  .content {
    overflow: hidden;
    width: 100%;
    flex: 1;

    .postage {
      color: red;
      font-size: 12px;
      padding: 10px;
      span {
        display: inline-block;
        color: #ccc;
        margin-right: 10px;
      }
    }
    .specs {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      p {
        font-size: 14px;

        span {
          margin: 0 5px;
        }
      }
      img {
        width: 10px;
        height: 10px;
      }
    }
    .title {
      padding: 10px;
      display: flex;
      flex-direction: column;
      span {
        margin-top: 10px;
        font-size: 12px;
        color: gray;
      }
    }
    .norms {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      color: #fc5d7b;
      img {
        width: 25px;
        height: 10px;
      }
      .origin {
        margin-left: 15px;
        .origin_price {
          font-size: 22px;
        }
      }
      .Vip_price {
        font-size: 15px;
        color: brown;
        margin-right: 10px;
        margin-left: 10px;
      }
      .earn {
        font-size: 14px;
        border: 1px solid #fc5d7b;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 3px 10px;
        color: #fc5d7b;
      }
    }
  }
  .footer {
    width: 100%;
    height: 50px;
    display: flex;
    p {
      background: linear-gradient(217deg, #f86367, #fb2579);
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
}
.banner {
  position: relative;
  height: 360px;
  width: 100%;
  swiper {
    width: 100%;
    height: 100%;
    swiper-item {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .page {
    position: absolute;
    z-index: 99;
    right: 20px;
    bottom: 20px;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border-radius: 7px;
    padding: 2px 3px;
  }
}
</style>
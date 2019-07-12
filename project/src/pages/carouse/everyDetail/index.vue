<template>
    <div class='dapaiDetail'>
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
            <p v-for="(item,index) in specificationsData.result" :key="index">
              <span>选择</span>
              <span>{{item.aname}}</span>
            </p>
              <img src="/static/images/jt.png" alt="">
          </div>
          <div v-if="postageData.result" class="postage"><span>提示</span>{{postageData.result}}</div>
          <div class="storeDetail">
            <img v-for="(item,index) in storeDetailData.result" :key="index" :src="item.imgUrl" alt="">
          </div>
          </div>
       </scroll-view> 
        <div class="footer">
          <p class="btn">分享赚{{dapaiDetailData.earnMoney}}</p>
          <p class="btn">立即购买</p>
        </div>
        <div v-if="dailogShow" class="dailog">
          <div>
            <p v-for="(item,index) in specificationsData.result" :key="index">
              <span>{{item.aname}}</span>
              <span @click="delDailog">X</span>
            </p>
            <dl>
              <dt><img src="" alt=""></dt>
              <dd></dd>
            </dl>
          </div>
          <p class="sureBtn">确定</p>
        </div>
        <div  v-if="dailogShow" class="big">

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
      postageData: state => state.carouse.postageData,
      specificationsData: state => state.carouse.specificationsData,
      orderMessData: state => state.carouse.orderMessData
    })
  },
  methods: {
    ...mapActions({
      getDapaiDetailData: "carouse/getDapaiDetailData",
      getStoreDetailData: "carouse/getStoreDetailData",
      getPostageData: "carouse/getPostageData",
      getSpecificationsData: "carouse/getSpecificationsData",
      getOrderMessData: "carouse/getOrderMessData"
    }),
    //弹框
    dailog() {
      this.dailogShow = true;
    },
    delDailog() {
      this.dailogShow = false;
    }
  },
  mounted() {
   
  },
  async onLoad(options) {
    let pid = options.pid;
    //请求产品详情
    await this.getDapaiDetailData({
      pid
    });

    await this.getStoreDetailData({
      pid: this.dapaiDetailData.pid,
      basePid: this.dapaiDetailData.basePid,
      userIdentity: this.dapaiDetailData.userIdentity
    });
     //规格
    await this.getSpecificationsData({
      pid: this.dapaiDetailData.pid
    });
  console.log("specificationsData....111", [this.specificationsData.result[0].attributeValueRelationVoList[0].vid]);
    await this.getPostageData({
      sstid: this.dapaiDetailData.sstid
    });
 let vid=[this.specificationsData.result[0].attributeValueRelationVoList[0].vid];
    // await this.getOrderMessData({
    //   pid: this.dapaiDetailData.pid,
    //    vids:vid
    // })
    //console.log("订单。。。", this.orderMessData);
    }
};
</script>
<style  lang="scss">
.big {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.dapaiDetail {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  .storeDetail {
    width: 100%;
    img:nth-child(1){
      height:204px;
    }
    img:nth-child(2){
      height:447px;
    }
    img:nth-child(3){
      height:437px;
    }
    img:nth-child(4){
      height:457px;
    }
    img:nth-child(5){
      height:407px;
    }
    img:nth-child(6){
      height:415px;
    }
    img:nth-child(7){
      height:452px;
    }
    img:nth-child(8){
      height:409px;
    }
    img:nth-child(9){
      height:410px;
    }
    img:nth-child(10){
      height:352px;
    }
    img:nth-child(11){
      height:529px;
    }
    img:nth-child(12){
      height:434px;
    }
    img:nth-child(13){
      height:172px;
    }
    img:nth-child(14){
      height:990px;
    }
  }
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
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      p:nth-child(1){
        font-size: 14px;
         width: 100%;
        display: flex;
        justify-content: space-between;

      }
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
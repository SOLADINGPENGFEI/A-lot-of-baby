<template>
  <scroll-view class='scroll-view-vertical summer' scroll-y @scroll="viewScroll" @click="2">
      <div class="header">
          <img :src="summerData.specialImg" alt="">
            <scroll-view  scroll-x="true" style="width: 100%" class="naveType">
               <div :class="{'audio_fixed':top > 225}">
              <h2 :class="{active:index==navTypeIndex}"
              v-for="(item,index) in summerData.anchors" :key="index"
              @click="click(index)">{{item.anchorDesc}}</h2>
      </div>
  </scroll-view>
         <div class="title">{{summerData.anchors[0].anchorName}}</div>   
        </div>
        <div class="center" v-for="(item,i) in summerData.anchors[0].products" :key="i"> 
          <ul class="list">
              <li>
                  <dl>
                      <dt><img :src="item.mainImgUrl" alt=""></dt>
                      <dd>
                          <div class="letter">{{item.title}}</div>
                          <div class="price">
                              <p>￥{{item.salesPrice}}</p>
                              <p class="small_price">赚￥{{item.memberDiscountPrice}}</p>
                          </div>
                      </dd>
                  </dl>
              </li>
          </ul>
       
      </div>
    </scroll-view>
</template>
<script>
//import Carouse from '@/components/carouse.vue';

import store from "@/store";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      navTypeIndex: 0,
      top: 0
    };
  },
  computed: {
    ...mapState({
      summerData: state => state.carouse.summerData
    })
  },
  methods: {
    ...mapActions({
      getSummerData: "carouse/getSummerData"
    }),
    click(i) {
      this.navTypeIndex = i;
    },
    viewScroll(e) {
      console.log(e,111);
      this.top = e.mp.detail.scrollTop;
    },
    2(){
      console.log(222)
    }
  },

  created() {
    //   if(180){
    //       this.getsummerData(180);
    //   }
    this.getSummerData(182);
    //this.getsummerData(180);
  }
};
</script>
<style lang="scss" scoped>
body,
html {
  height: 100%;
}
.scroll-view-vertical {
  width: 100%;
  height: 100%;
}
.audio_fixed {
  position: fixed;
  top: 0;
}
.summer {
  width: 100%;
  flex-direction: column;
  .naveType {
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 50px;
    box-sizing: border-box;
    white-space: nowrap; //这个属性很重要
    .active {
      color: red;
    }
    h2 {
      margin-right: 10rpx;
      display: inline-block;
      padding: 0 10px;
    }
  }
  img {
    height: 225px;
  }

  .title {
    height: 75px;
    background: #f3f7f7;
    line-height: 70px;
    text-align: center;
    font-size: 16px;
  }
}
.center {
  .list {
    li {
      height: 140px;
      padding: 0 10px;
      border-top: 10px solid #f3f7f7;
      dl {
        display: flex;
        align-items: center;
        img {
          width: 120px;
          height: 120px;
          margin-right: 20px;
        }
        dd {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .letter {
            height: 50px;
            overflow: hidden;
            color: gray;
            margin-bottom: 25px;
          }
          .price {
            color: #fc5d7b;
            display: flex;
            height: 20px;
            line-height: 20px;
            .small_price {
              font-size: 12px;
              margin-left: 10px;
              background: pink;
            }
          }
        }
      }
    }
  }
}
</style>

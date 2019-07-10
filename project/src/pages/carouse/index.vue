<template>
   <div class="egg">
       <div class="header">
            <img :class="[id==180?'img_big':'img_small']" :src="dapaiData.specialImg" alt="" />
            
            <!-- <scroll-view  scroll-x="true" style="width: 100%" class="naveType">
              <h2 
              v-for="(item,index) in dapaiData.anchors" 
              :class="{active:index==navTypeIndex}"
              :key="index"
              @click="click(index)">{{item.anchorDesc}}</h2>
            </scroll-view> -->
            <h2>{{dapaiData.anchors[0].anchorDesc}}</h2>
         <div class="title">
           <p>
             <span class="line_left"></span><span class="left_dot"></span>
           </p>
           {{dapaiData.anchors[0].anchorName}}
           <p>
             <span class="right_dot"></span><span class="line_right"></span>
           </p>
          </div>   
        </div>

        <div :class="[id==186?'dl_x':'dl_y']" > 
                <dl @click="clickDl(item.pid)" v-for="(item,i) in dapaiData.anchors[0].products" :key="i">
                    <dt><img :src="item.mainImgUrl" alt=""></dt>
                    <dd>
                        <div class="letter">{{item.title}}</div>
                        <div class="price">
                            <p>￥{{item.salesPrice}}</p>
                            <p class="small_price">赚￥{{item.memberDiscountPrice}}</p>
                        </div>
                    </dd>
                </dl>
        
        </div>
    </div>
</template>
<script>
import store from "@/store";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      id: 0,
      scrollX: false,
      navTypeIndex: 0
    };
  },
  computed: {
    ...mapState({
      dapaiData: state => state.carouse.dapaiData
    })
  },
  methods: {
    ...mapActions({
      getDapaiData: "carouse/getDapaiData"
    }),
    clickDl(pid) {
      wx.navigateTo({
        url: "/pages/carouse/everyDetail/main?pid=" + pid
      });
    },
    click(i) {
      this.navTypeIndex = i;
      console.log(this.navTypeIndex);
    }
  },
  onLoad(options) {
    let siid = options.siid;
    this.getDapaiData({
      siid
    });
    this.id = siid;
    if (this.id == 181) {
      this.scrollX = true;
    } else {
      this.scrollX = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.egg {
  width: 100%;
  display: flex;
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
  h2 {
    height: 30px;
    padding: 15px 0 10px 10px;
    color: red;
  }
  .img_big {
    height: 400px;
  }
  .img_small {
    height: 225px;
  }

  .title {
    height: 75px;
    background: #f3f7f7;
    line-height: 70px;
    text-align: center;
    font-size: 16px;
    display: flex;
    justify-content: center;
    .line_left,
    .line_right {
      display: inline-block;
      width: 68rpx;
      height: 2rpx;
      background: #484848;
      margin: 72rpx 0 0;
    }
    .left_dot,
    .right_dot {
      display: inline-block;
      width: 14rpx;
      height: 14rpx;
      background: #484848;
      margin: 66rpx 0 0;
      transform: rotate(45deg);
    }
  }
}
.dl_y {
  flex: 1;
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

.dl_x {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  flex-wrap: wrap;
  dl {
    width: 33.3%;
    height: 220px;
    //    text-align: center;

    dt {
      width: 120px;
      height: 120px;
      text-align: center;
      img {
        width: 120px;
        height: 120px;
        margin-left: 3px;
      }
    }
    dd {
      font-size: 12px;
      color: #666;
      padding: 0 5px;
      .price {
        color: orange;
      }
    }
  }
}
</style>

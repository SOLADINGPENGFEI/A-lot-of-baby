<template>
    <div class="summer">
        <!-- <Carouse :summerData="dapaiData"/> -->
         <div class="header">
            <img :src="summerData.specialImg" alt="">
            <div class="naveType">
            <h2 :class="{active:index==navTypeIndex}"
            v-for="(item,index) in summerData.anchors" :key="index"
            @click="click(index)">{{item.anchorDesc}}</h2>

            </div>
         <div class="title"></div>   
        </div>
        
        <div class="center" v-for="(item,i) in summerData.anchors[0].products" :key="i"> 
        <ul class="list">
            <li>
                <dl>
                    <dt><img :src="item.mainImgUrl" alt=""></dt>
                    <dd>
                        <div>{{item.title}}</div>
                        <div class="price">
                            <p>￥{{item.salesPrice}}</p>
                            <p>￥{{item.memberDiscountPrice}}</p>
                        </div>
                    </dd>
                </dl>
            </li>
        </ul>
        </div>
        
    </div>
</template>
<script>
//import Carouse from '@/components/carouse.vue';

import store from "@/store";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
        navTypeIndex:0
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
    click(i){
        this.navTypeIndex=i
    },

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
.summer {
  width: 100%;
  display: flex;
  flex-direction: column;
  .naveType {
    display: flex;
    flex-wrap: nowrap;
    h2 {
      height: 40px;
      padding: 15px 0 10px 10px;
    }
    .active{
        color:red;
    }
  }
  img {
    height: 250px;
  }

  .title {
    height: 75px;
    background: #f3f7f7;
    line-height: 64px;
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
          justify-content: center;
          .price {
            color: #fc5d7b;
            display: flex;
          }
        }
      }
    }
  }
}
</style>

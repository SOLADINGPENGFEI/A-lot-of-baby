<template>
    <div class="egg">
       <div class="header">
            <img :src="eggData.specialImg" alt="">
            <h2>{{eggData.anchors[0].anchorDesc}}</h2>
         <div class="title">{{eggData.anchors[0].anchorName}}</div>   
        </div>
        
        <div class="center" v-for="(item,i) in eggData.anchors[0].products" :key="i"> 
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
      navTypeIndex: 0
    };
  },
  computed: {
    ...mapState({
      eggData: state => state.carouse.eggData
    })
  },
  methods: {
    ...mapActions({
      getEggData: "carouse/getEggData"
    }),
    click(i) {
      this.navTypeIndex = i;
    }
  },

  created() {
    //   if(180){
    //       this.geteggData(180);
    //   }
    this.getEggData(181);
    //this.geteggData(180);
  }
};
</script>
<style lang="scss" scoped>
.egg {
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    height: 30px;
    padding: 15px 0 10px 10px;
    color:red;
    border:1px solid #eee;
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
          .letter{
              height: 50px;
              overflow: hidden;
              color:gray;
              margin-bottom: 25px;
          }
          .price {
            color: #fc5d7b;
            display: flex;
            height: 20px;
            line-height: 20px;
            .small_price{
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

<template>
    <div class="dapai">
        <!-- <Carouse :dapaiData="dapaiData"/> -->
         <div class="header">
            <img :src="dapaiData.specialImg" alt="">
            <h2>{{dapaiData.anchors[0].anchorDesc}}</h2>
         <div class="title">{{dapaiData.anchors[0].anchorName}}</div>   
        </div>
        
        <div class="center" v-for="(item,i) in dapaiData.anchors[0].products" :key="i"> 
        <ul class="list">
            <li>
                <dl>
                    <dt><img :src="item.mainImgUrl" alt=""></dt>
                    <dd>
                        <div>{{item.title}}</div>
                        <div>
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
    return {};
  },
  computed: {
    ...mapState({ dapaiData: state => state.carouse.dapaiData })
  },
  methods: {
    ...mapActions({
      getDapaiData: "carouse/getDapaiData"
    })
  },
  mounted() {
    console.log("dapaiData...", this.dapaiData);
  },
  created() {
    this.getDapaiData(180);
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    height: 400px;
  }
  h2 {
    height: 40px;
    color: red;
    padding: 15px 0 10px 10px;
  }
  .title {
    height: 75px;
    background: #F3F7F7;
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
      border-top:10px solid #F3F7F7;
      dl {
        display: flex;
        align-items: center;
        img {
          width: 120px;
          height: 120px;
          margin-right:20px;
        }
      }
    }
  }
}
</style>

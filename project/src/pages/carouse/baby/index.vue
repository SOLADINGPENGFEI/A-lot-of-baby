<template>
    <div class="summer">
        <!-- <Carouse :summerData="dapaiData"/> -->
         <div class="header">
            <img :src="babytryData.specialImg" alt="">
            <div class="naveType">
            <h2 :class="{active:index==navTypeIndex}"
            v-for="(item,index) in babytryData.anchors" :key="index"
            @click="click(index)">{{item.anchorDesc}}</h2>

            </div>
         <div class="title"></div>   
        </div>
        
      
       <div class='dls'>
                <dl v-for="(item,i) in babytryData.anchors[0].products" :key="i">
                    <dt><img :src="item.mainImgUrl" alt=""></dt>
                    <dd>
                        <div>{{item.title}}</div>
                        <div class="price">
                            <p>￥{{item.salesPrice}}</p>
                            <p>￥{{item.memberDiscountPrice}}</p>
                        </div>
                    </dd>
                </dl>
    
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
      babytryData: state => state.carouse.babytryData
    })
  },
  methods: {
    ...mapActions({
      getBabytryData: "carouse/getBabytryData"
    }),
    click(i) {
      this.navTypeIndex = i;
    }
  },

  created() {
    //   if(180){
    //       this.getbabytryData(180);
    //   }
    this.getBabytryData(186);
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
      height: 35px;
      padding: 15px 0 10px 10px;
    }
    .active {
      color: red;
    }
  }
  img {
    height: 230px;
  }

  .title {
    height: 75px;
    background: #f3f7f7;
    line-height: 64px;
    text-align: center;
    font-size: 16px;
  }
}
.dls{
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-shrink: 0;
   flex-wrap: wrap;
   dl{
       width:33.3%;
       height: 220px;
    //    text-align: center;

       dt{
           width: 120px;
           height: 120px;
           text-align: center;
           img{
              width: 120px;
              height: 120px;
              margin-left:3px;
           }
       }
       dd{
           font-size:12px;
           color:#666;
           padding:0 5px;
           .price{
               color:orange;
           }
       }
   }
}
</style>

<template>
     <swiper class="lunBo" :indicator-dots="indicatorDots"
  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" >
  <block v-if="getswipe[0].items">
    <swiper-item class="item" v-for="(item,index) in getswipe && getswipe[0].items" :key="index">
            <image :src="item.imgUrl" alt="" @click="toDetail(siid[index])" />
    </swiper-item>
  </block>
</swiper>      

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      circular: true,
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      siid:[180,182,186,181]
    };
  },
  methods: {
    ...mapActions({
      getswiper: "Swiper/swipers",
      //getDapaiData: "carouse/getDapaiData",
    }),
    toDetail(siid){
      console.log('siid...',siid)
      wx.navigateTo({
          url:'/pages/carouse/main?siid='+siid
      })
    }
  },
  computed: {
    ...mapState({
      // 把vuex数据赋给变量名
      getswipe: state => state.Swiper.getswipe
    })
  },
  onShow() {
    this.getswiper();
    
  },
  mounted(){
    console.log('getswipe...',this.getswipe)
  }
};
</script>

<style scoped lang="scss">
.lunBo {
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 10px;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
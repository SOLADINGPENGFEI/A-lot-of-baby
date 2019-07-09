<template>
  
     
     <swiper class="lunBo" :indicator-dots="indicatorDots"
  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" >
  <block v-if="getswipe[0].items">
    <swiper-item class="item" v-for="(item,index) in getswipe && getswipe[0].items" :key="index">
            <image :src="item.imgUrl" alt="" />
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
      duration: 1000
    };
  },
  methods: {
    ...mapActions({
      getswiper: "Swiper/swipers"
    })
  },
  computed: {
    ...mapState({
      // 把vuex数据赋给变量名
      getswipe: state => state.Swiper.getswipe
    })
  },
  onShow() {
    this.getswiper();
    
  }
};
</script>

<style scoped lang="scss">
.lunBo {
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 5px;
  image {
    width: 100%;
    height: 100%;

  }
}
</style>

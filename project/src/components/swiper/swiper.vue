<template>
    
    <swiper 
    :indicator-dots="indicatorDots" 
    :autoplay="autoplay" 
    :interval="interval" 
    :duration="duration">
        <div v-for="(item,index) in Images" :key="index">
           <swiper-item>
           
                <img :src="item.imgUrl" />
                <p class="page">
                    <span>11{{index}}</span>
                    <span>11/{{item.length}}</span>
                </p>
                </swiper-item>
                
        </div>
        </swiper>
</template>

<script>
export default {
  props: {
    Images: {
      type: Array,
      default:[]
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  },
  mounted(){
      console.log("props",this.Images)
  },
}
</script>

<style scoped lang="scss">
page{
    width:100%;
    height:100%;
}
    
</style>

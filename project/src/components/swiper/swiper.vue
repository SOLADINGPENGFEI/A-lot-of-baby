<template>
    <div class="lunBo">
     
     <swiper :indicator-dots="indicatorDots"
  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
  <block>
    <swiper-item>
       <div>111</div>
    </swiper-item>
        <swiper-item>
       <div>222</div>
    </swiper-item>
        <swiper-item>
       <div>333</div>
    </swiper-item>
  </block>
</swiper>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
    circular:true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
        }
    },
    methods:{
    }

}
</script>

<style scoped lang="scss">
     .lunBo{
         width: 100%;
         height:150px;
         background:skyblue;
         margin-top:5px;
     }
</style>

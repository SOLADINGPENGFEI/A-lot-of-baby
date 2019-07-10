<template>
    <div class="banner">
    <swiper v-if="Images"
    :autoplay="autoplay" 
    @change="change">
        <div v-for="(item,index) in Images" :key="index">
           <swiper-item>
                <img :src="item.imgUrl" />
            </swiper-item>
        </div>
    </swiper>
        <p class="page">
            <span>{{index}}</span>
            <span>/{{Images.length}}</span>
        </p>
      </div>
</template>

<script>
export default {
  props: {
    Images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      index: 0
    };
  },
  methods: {
    change(e) {
      this.index = e.target.current + 1;
    }
  }
};
</script>

<style scoped lang="scss">
page {
  width: 100%;
  height: 100%;
}
</style>
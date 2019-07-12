<template>
        <div>
         
            <div class="guangGao">
               <div>
                  <span>精选好物 |</span>
                  <span>等你来抢</span>
               </div>
               <div>更多 》</div>
            </div>
     <div class="navbanner" v-if="dataSwiper">
                 <dl v-for="(item,index) in dataSwiper" :key="index" @click="toDetail">
                     <dt>
                        <image :src="item.imgUrl" />
                     </dt>
                     <dd>
                       <p>{{item.title}}</p>
                       <p>{{item.vipPrice}}</p>
                     </dd>
                 </dl>
            </div>

            </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props:['dataSwiper'],
  methods:{
    toDetail(){
      console.log(111)
    }
  },
  mounted(){
    console.log('0000',this.dataSwiper)
  }


  }

</script>

<style scoped lang="scss">
.guangGao {
  width: 100%;
  height: 50px;
  background: #fff;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 3px;
  box-sizing: border-box;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    span:nth-child(1) {
      font-size: 20px;
    }
    span:nth-child(2) {
      font-size: 18px;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
  div:nth-child(2) {
    color: red;
  }
}
.navbanner {
  width: 100%;
  height: 380px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  dl {
    width: 32%;
    dt {
      width: 115px;
      height: 127px;
      background: seagreen;
      border-radius: 5px;

      image {
        height: 100%;
        width: 100%;
      }
    }
    dd {
      p:nth-child(1) {
        overflow: hidden;
        overflow-x: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 13px;
      }
      p:nth-child(2) {
        color: red;
      }
    }
  }
}
</style>

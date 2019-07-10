<template>
 <div class="topbar">
<scroll-view v-if="navlist" class="scroll-view_H" scroll-x style="width: 100%">
         <view class="active">今日推荐</view>
         <view v-for="(item,index) in navlist" :key="index">{{item.cname}}</view>                  
      </scroll-view>
    
 </div>
</template>


<script>
 import {mapActions,mapState} from 'vuex'
 

export default {
     

  methods:{
     ...mapActions({
         navtab:'nav/navtab'
     })
  },

  computed:{
      ...mapState({
        // 把vuex数据赋给变量名
         navlist:state=>state.nav.navlist
      })
  },
  created(){
     this.navtab()
  }
}
</script>


<style scoped lang='scss'>
 .topbar{
  width: 100%;
  height: 40px;
  padding-left: 1%;
}
.scroll-view_H{
 
  white-space: nowrap;
   view{
  height: 100%;
  font-size: 18px;
  line-height: 40px;
  display: inline-block; 
  margin: 0 15px;
  } 
  .active{
      color:rgb(42, 189, 42);
      border-bottom:2px solid rgb(42, 189, 42);
  }
}

</style>
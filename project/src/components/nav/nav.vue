<template>
 <div class="topbar">
<scroll-view class="scroll-view_H" scroll-x style="width: 100%">
         <view class="active">1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>
         <view>1111</view>                   
      </scroll-view>
 </div>
</template>


<script>
export default {
    
}
</script>


<style scoped lang='scss'>
 .topbar{
  width: 100%;
  height: 40px;
  padding-left: 1%;
}
.scroll-view_H{
  display: flex;
  white-space: nowrap;
   view{
  height: 100%;
  font-size: 18px;
  line-height: 40px;
  display: inline-block; 
  margin: 0 15px;
  } 
  .active{
      color:red;
      border-bottom:2px solid red;
  }
}

</style>
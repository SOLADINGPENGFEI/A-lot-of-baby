<template>
        <div>
            <div class="guangGao">
               <div>
                  <span>精选好物 |</span>
                  <span>等你来抢</span>
               </div>
               <div>更多 》</div>
            </div>
     <div class="navbanner">
                 <dl>
                     <dt></dt>
                     <dd>
                       <p>阿三打撒萨达萨达阿斯顿飒飒大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
                   <dl>
                     <dt></dt>
                     <dd>
                       <p>阿三打撒萨达萨达飒飒大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
                   <dl>
                     <dt></dt>
                     <dd>
                       <p>阿三打撒萨达萨撒旦达飒飒大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
                   <dl>
                     <dt></dt>
                     <dd>
                       <p>阿三打撒萨达萨达撒旦飒飒大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
                   <dl>
                     <dt></dt>
                     <dd>
                       <p>阿三打撒萨达萨达飒飒阿斯顿阿斯顿大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
                   <dl>
                     <dt>
                        <img src="" alt="">
                     </dt>
                     <dd>
                       <p>阿三打撒萨达萨达飒飒大苏打阿斯顿</p>
                       <p>￥39</p>
                     </dd>
                 </dl>
            </div>
            </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    .guangGao{
      width:100%;
      height:50px;
      background:#fff;
      margin-top:5px;
      display: flex;
      justify-content: space-between;
      padding:0 3px;
      box-sizing: border-box;
      align-items: center;
      div:nth-child(1){
        display: flex;
        align-items: center;
    span:nth-child(1){
      font-size: 20px;
    }
    span:nth-child(2){
      font-size: 18px;
      padding-left:5px;
      box-sizing: border-box;
    }
      }
      div:nth-child(2){
        color:red;
      }
    }
.navbanner {
  width: 100%;
  height: 380px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 33.33333%;
    dt {
      width: 117px;
      height: 127px;
      background: seagreen;
      border-radius: 5px;

      img {
        height: 100%;
        height: 100%;
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
        font-size: 15px;
      }
      p:nth-child(2) {
        color: red;
      }
    }
  }
}
</style>

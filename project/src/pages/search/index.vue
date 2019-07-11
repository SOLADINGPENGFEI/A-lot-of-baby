<template>
    <div>
        <div class="input">
            <input  @input="iptchange" v-model="iptvalue" type="text" placeholder="请输入你需要的商品">
            <span @click="delInput">取消</span>
        </div>
        <div class="liShi">
            <span>历史搜索</span>
            <image class="act" src="/static/seek/del.png" />
        </div>
    </div>
</template>
<script>
export default {

    components:{

    },
    data(){
        return {
             iptvalue:''
        }
    },
    computed:{
           
    },
    methods:{
          iptchange(){
              console.log(this.iptvalue) 
          },
          delInput(){
           this.iptvalue = ''
          }

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .input{
       width:100%;
       height:44px;
       background:rgb(246, 246, 246);
       display: flex;
        padding:0 20px;
         box-sizing: border-box;
         align-items: center;
       input{
         background:rgb(231, 228, 228);
         border-radius: 5px;
         width:80%;
         height:30px;
         padding:0 20px;
            box-sizing: border-box;
       }
       span{
           flex:1;
           display: flex;
           justify-content: center;
           color:rgb(153, 149, 149);
       }
   }
  .liShi{
      width:100%;
      height:50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20px;
      box-sizing: border-box;
      color:rgb(168, 168, 168);
      font-size: 14px;
      .act{
          width:15px;
          height:15px;
      }
    
  }
</style>
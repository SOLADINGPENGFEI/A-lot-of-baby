<template>
    <div class="dapaiDetail" v-if="dapaiDetailData">
        <Swiper :Images="dapaiDetailData.supplierProductPictureVoList" />
    </div>
</template>
<script>
import store from "@/store";
import { mapState, mapActions } from "vuex";
import Swiper from '@/components/swiper/swiper.vue'

export default {
    props:{

    },
    components:{
        Swiper
    },
    data(){
        return {
        }
    },
    computed:{
        ...mapState({ 
        dapaiDetailData:state=>state.carouse.dapaiDetailData
    })
    },
    methods:{
     ...mapActions({
      getDapaiDetailData: "carouse/getDapaiDetailData"

     })
    },
    created(){
   
    },
    mounted(){
         console.log('dapaiDetailData....',this.dapaiDetailData.supplierProductPictureVoList)
    },
    onLoad(options){
        console.log(options.pid)
        let pid=options.pid
        this.getDapaiDetailData(pid);
   
    }
}
</script>
<style scoped lang="scss">
    .dapaiDetail{
        width:100%;
        height:100%;
        swiper{
             height:400px;
            swiper-item{
                 height:400px;
                img{
                    height:400px;
                }
            }
        }
    }
</style>
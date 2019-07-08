<template>
    <div class="wrap" v-if="navs">
        <scroll-view class="nav" scroll-x style="width: 100%" 
       >
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
            <span>今日推荐</span>
        </scroll-view>
        <div class="nav-list"></div>
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            navs:state=>state.nav.navs
        })
    },
    methods:{
        ...mapActions({
            navTabs: "nav/navTabs"
        }),
    },
    onShow(){
        this.navTabs()
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
    .wrap{
        height: 100%;
        padding: 10rpx;
        display: flex;
        flex-direction:column;
        .nav{
            height: 80rpx;
            background: red;
            line-height: 80rpx;
            white-space: nowrap;
            span{
                margin-right: 10rpx;
                display: inline-block;
            }
        }
    }
</style>
<template>
    <div class="wrap">
        
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
// import Nav from "../../components/nav/nav";

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
        // console.log("navs",this.navs)
    }
}
</script>
<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        background: red;
    }
</style>
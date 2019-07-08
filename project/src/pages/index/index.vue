<template>
  <div>
    <button @click="fn">点击</button>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

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

  },
  methods:{
    ...mapActions({
      logins: "index/logins"

    }),
    fn(){
     wx.navigateTo({url:"/pages/classify/main"})
    }
  },
  created(){
      this.logins()
    
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">

</style>
<template>
  <div class="topbar">
    <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
     
    </scroll-view>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},

  data() {
    return {
      
    }
  },
  components: {},
  computed: {
    ...mapState({
      navs: state => state.nav.navs
    })
  },
  methods: {},
  onShow() {},
  mounted() {
    
  }
};
</script>


<style scoped lang='scss'>
.topbar {
  width: 100%;
  height: 40px;
  padding-left: 1%;
}
.scroll-view_H {
  white-space: nowrap;
  view {
    font-size: 18px;
    line-height: 40px;
    display: inline-block;
    margin: 0 15px;
  }
  .active {
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>
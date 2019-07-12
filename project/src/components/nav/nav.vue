<template>
  <div class="topbar">
    <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
      <view :class="{'active':navI==-1}" @click="goClassify(-1)">今日推荐</view>
      <view
        v-for="(item,index) in navlist"
        :key="index"
        :class="{'active':navI==item.cid}"
        @click="goClassify(item)"
      >{{item.cname}}</view>
    </scroll-view>
  </div>
</template>


<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setNavI: "nav/setNavI",
      getFlag: "nav/getFlag",
      getNavChildsId:"nav/getNavChildsId"
    }),

    goClassify(item) {
      if (item === -1) {
        this.setNavI(item);
        console.log('////////',this.flag)
        if (this.flag) {
          wx.reLaunch({
            url: "/pages/index/main"
          });
          this.getFlag(false);
        }
      } else {
        this.getFlag(true);
        this.setNavI(item.cid);
        this.getNavChildsId(item.cid);
        if (item.childs) {
          
          this.getNavChildsId(item.cid);
          console.log("切换");
        } else {
          wx.navigateTo({
            url: "/pages/classify/main"
          });
        }
      }
    }
  },

  computed: {
    ...mapState({
      // 把vuex数据赋给变量名
      navlist: state => state.nav.navlist,
      navI: state => state.nav.navI,
      flag: state => state.nav.flag
    })
  },
  created() {
    // this.navtab();
  }
};
</script>


<style scoped lang='scss'>
.topbar {
  width: 100%;
  height: 35px;
  padding-left: 1%;
}
.scroll-view_H {
  white-space: nowrap;
  view {
    height: 100%;
    font-size: 18px;
    line-height: 40px;
    display: inline-block;
    margin: 0 15px;
  }
  .active {
    color: rgb(42, 189, 42);
    border-bottom: 2px solid rgb(42, 189, 42);
  }
}
</style>
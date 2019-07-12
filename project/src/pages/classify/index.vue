<template>
  <div class="wrap">
    <Nava ></Nava>
    <ClassifyNav :data="getNavChilds[0].childs"></ClassifyNav>
    <classifySort></classifySort>
   
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Nava from "@/components/nav/nav"; //头部导航组件
import ClassifyNav from "../../components/classifyNav"; //头部导航子列表
import classifySort from "../../components/classifySort"; //头部导航子列表排序


export default {
  props: {},
  components: {
    Nava,ClassifyNav,classifySort
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      getNavChildsId: state => state.nav.getNavChildsId
    }),
    ...mapGetters({
      getNavChilds: "nav/getNavChilds"
    })
  },
  methods: {
    ...mapActions({
      navtab: "nav/navtab",
      navListSort:"nav/navListSort"
    })
  },
  onShow() {
    this.navtab();
    this.navListSort({})
  },
  mounted() {//childs
    // console.log("1213135", this.getNavChilds[0].childs);
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background:#f3f3f3;
  .nav{
    background: #fff;
  }
}
</style>
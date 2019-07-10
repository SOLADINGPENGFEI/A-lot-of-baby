<template>
  <div class="wrap">
    <Nava></Nava>
    <ClassifyNav :options="getNavChilds[0].childs"></ClassifyNav>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import Nava from "@/components/nav/nav"; //头部导航组件
import ClassifyNav from "../../components/classifyNav"; //头部导航子列表

export default {
  props: {},
  components: {
    Nava,ClassifyNav
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
      navtab: "nav/navtab"
    })
  },
  onShow() {
    this.navtab();
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
  
}
</style>
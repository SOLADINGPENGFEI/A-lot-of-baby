<template>
  <div class="classify-list">
    <div class="listSort">
        <div class="list_top">综合</div>
        <div class="list_top">最新</div>
        <div class="list_top">
          价格<p>
             <span>△</span>
            <span>▽</span>
          </p>
        </div>
    </div>
    <section>
      <img  />
      <h3 class="describe">把必须好几个传</h3>
      <div class="shui">包税</div>
      <div class="price">
        <span>￥</span>
        265
      </div>
      <div class="vipPrice">
        <span>￥2222</span>
        <span>赚1512265</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["data"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.classify-list {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 14px;
  .listSort{
      width: 100%;
      height: 60px;
      background: pink;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .list_top{
        font-size: 16px;
        display: flex;
        flex-direction: column;
      }

    }
  section {
    width: 47%;
    height: 250px;
    background: #fff;
    border-radius: 10px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: 150px;
      height: 150px;
    }
    .describe {
      width: 100%;
      padding-left: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .shui {
      font-size: 10px;
      width: 30px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #fc5d7b;
      display: inline-block;
      border-radius: 5px;
      border: 1px solid #fc5d7b;
      margin-left: 10px;
    }
    .price {
      margin-left: 10px;
      color: #fc5d7b;
      font-size: 16px;
      span {
        font-size: 14px;
      }
    }
    .vipPrice {
      span:nth-child(1) {
        margin-left: 10px;
        color: #a87831;
        font-size: 12px;
        margin-right: 10px;
      }
      span:nth-child(2) {
        display: inline-block;
        width: 50px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        background: #ffe8ed;
        color: #feada0;
        font-size: 12px;
      }
    }
  }
}
</style>
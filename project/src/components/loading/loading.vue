<template>
  <div>
    <div class="guangGao">
      <div>
        <span>为你精选 |</span>
        <span>等你来抢</span>
      </div>
      <div>更多 》</div>
    </div>
    <div class="loading">
          <dl v-for="(item,index) in getLoading" :key="index">
              <dt>
                  <image :src="item.productVo.mainImgUrl" alt="" />
              </dt>
              <dd>
                  <p>四川车厘子新鲜水果特价销售不好不要钱啊是大啊是大</p>
                  <div class="act">
                      <span>包邮</span>
                      <span>包税</span>
                  </div>
                  <div class="att">
                    <h2>￥25.5</h2>
                    <span class="atta">￥21.68</span>
                    <span class="attb">赚￥3.82</span>
                  </div>
              </dd>
          </dl>

   
    </div> 

      <dl>
        <dt>
          <img src alt />
        </dt>
        <dd>
          <p>四川车厘子新鲜水果特价销售不好不要钱啊是大啊是大</p>
          <div class="act">
            <span>包邮</span>
            <span>包税</span>
          </div>
          <div class="att">
            <h2>￥25.5</h2>
            <span class="atta">￥21.68</span>
            <span class="attb">赚￥3.82</span>
          </div>
        </dd>
      </dl>
    </div>
  
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions({
      loadings: "loading/getloading"
    })
  },
    computed: {
    ...mapState({
      // 把vuex数据赋给变量名
      getLoading: state => state.loading.getLoading
    })
  },

  created() {
    this.loadings();
  }
};
</script>


<style scoped lang="scss">
.guangGao {
  width: 100%;
  height: 50px;
  background: #fff;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 3px;
  box-sizing: border-box;
  align-items: center;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    span:nth-child(1) {
      font-size: 20px;
    }
    span:nth-child(2) {
      font-size: 18px;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
  div:nth-child(2) {
    color: #fc5d7b;
  }
}

.loading {
  width: 100%;
  height: 100%;

  dl {
    width: 100%;
    height: 130px;
    background: #fff;
    display: flex;
    align-items: center;
    margin:5px 0;
    
    dt {
      width: 155px;
      height: 117px;
      background: #fff;
      image {
        width: 100%;
        height: 100%;
      border-radius:5px;
      }
    }
    dd {
      padding: 0 10px;
      box-sizing: border-box;
      p {
        color: black;
        font-size: 15px;
        line-height: 25px;
      }
      .act {
        span {
          color: #fc5d7b;
          font-size: 11px;
          padding: 1px 2px;
          box-sizing: border-box;
          border: 1px solid #fc5d7b;
        }
        span:nth-child(2) {
          margin-left: 10px;
        }
      }
      .att {
        display: flex;
        align-items: center;
        h2 {
          font-size: 25px;
          color: #fc5d7b;
          margin-top: 5px;
        }
        .atta {
          color: #b08d6d;
          font-size: 14px;
        }
        .attb {
          color: #fc5d7b;
          font-size: 14px;
          background: #ffe8ed;
          padding: 1.5px;
          box-sizing: border-box;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

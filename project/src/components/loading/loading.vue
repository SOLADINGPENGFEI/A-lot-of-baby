<template>
        <div>
            <div class="guangGao">
               <div>
                  <span>为你精选 |</span>
                  <span>等你来抢</span>
               </div>
               <div>更多 》</div>
            </div>
    <div class="loading" v-if="getLoading">
          <dl v-for="(item,index) in getLoading" :key="index">
              <dt>
                  <image :src="item.productVo.mainImgUrl" alt="" />
              </dt>
              <dd>
                  <p>{{item.productVo.title}}</p>
                  <div class="act">
                      <span>包邮</span>
                      <span>包税</span>
                  </div>
                  <div class="att">
                    <h2>￥{{item.productVo.salesPrice}}</h2>
                    <span class="atta">￥{{item.productVo.supplyPrice}}</span>
                    <span class="attb">赚￥{{item.productVo.vipPrice}}</span>
                  </div>
              </dd>
          </dl>

   
    </div> 

    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      pageIndex:1
    };
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
    this.loadings(this.pageIndex);
  },

    onReachBottom () {//上拉加载
        this.pageIndex = this.pageIndex + 1;
        if(this.pageIndex > 4){
           console.log('我是底线的')
        }else{
          this.loadings(this.pageIndex);
        }
    },

     onPullDownRefresh () {
        console.log('下拉刷新')
   
    },
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
        width: 150px;
        height: 110px;
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

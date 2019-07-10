<template>
    <div class="myorder">
        <div class="head">
            <span v-for="(item,index) in nav" :key='index'
            :class="index === ind?'active':null" @click="changeActive(index)">{{item}}</span>
        </div>
        <div class="main">
            <div class="unorder">
                <image src="/static/images/wudingdan.png" />
                <p>暂时没有订单┗|｀O′|┛ 嗷~~</p>
            </div>
            <div class="list">
                <div class="list-item" 
                v-for="(item, index) in data" :key="index">
                    <div class="time">
                        <label>2019-07-09</label>
                        <label>已取消</label>
                    </div>
                    <div class="product-msg">
                        <div class="left">
                            <image :src="item.products[0].mainImgUrl" />
                        </div>
                        <div class="right">
                            <h3>{{item.products[0].productTitle}}</h3>
                            <span>{{item.products[0].skuName}}</span>
                            <div class="bot">
                                <span class="price">￥{{item.products[0].salesPrice}}</span>
                                <span class="num">x{{item.products[0].productNumber}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data(){
        return {
            nav: ['全部','待付款','待发货','待收货'],
            ind: 1
        }
    },
    computed:{
        ...mapState({
            data: state => state.index.data,
            orderStatus: state => state.index.orderStatus
        })
    },
    methods:{
        ...mapActions({
            getOrder: 'index/getOrder'
        }),
        ...mapMutations({
            getOrderData: 'index/getOrderData'
        }),
       async changeActive(index) {
           this.ind  = index
           this.orderStatus = index
           console.log(this.orderStatus, index)

           let orderData = await this.getOrder({
            pageIndex:1,
            orderStatus: this.orderStatus,
            })
           
        }
    },
    created(){
       
    },
    mounted(){
         
    }
}
</script>
<style scoped lang="scss">
    .myorder {
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction:column;
        background:#f3f7f7;
        .head {
            width:100%;
            height:80rpx;
            background:#fff;
            line-height:80rpx;
            display:flex;
            justify-content:space-around;
            align-items:center;
            box-sizing:border-box;
            font-size:30rpx;
            text-align: center;
            position:fixed;
            top:0;
            left:0;
            span {
                height: 100%;
                display: inline-block;
                &.active {
                border-bottom: 2px solid #12dbe9;
            }
            }
        }
        .main {
            width: 100%;
            flex: 1;
            background:#f3f7f7;
            .unorder {
                width:100%;
                height:100%;
                margin-top:100rpx;
                margin:0 auto;
                text-align:center;
                font-size:32rpx;
                color:#999;
                image {
                    width:276rpx;
                    height:276rpx;
                    border-radius:50%;
                    margin-top:300rpx;
                    display:inline-block;
                    overflow:hidden;
                }
            }
            .list {
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                padding:0 18rpx;
                box-sizing:border-box;
                margin-top:80rpx;
            }
        }
    }
</style>
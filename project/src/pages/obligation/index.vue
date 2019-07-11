<template>
    <div class="myorder">
        <div class="head">
            <span v-for="(item,index) in nav" :key='index'
            :class="index === ind?'active':null" @click="changeActive(index)">{{item}}</span>
        </div>
        <div class="main">
            <div class="unorder" v-if="!list.length">
                <image src="/static/images/wudingdan.png"/>
                <p>暂时没有订单┗|｀O′|┛ 嗷~~</p>
            </div>
            <div class="list">
               <div class="list-item" 
                v-for="(item, index) in list" :key="index">
                    <div class="time">
                        <label class="date">{{item.createTime}}</label>
                        <label class="orderstatus">{{nav[orderStatus]}}</label>
                    </div>
                    <div class="product-msg">
                        <div class="left">
                            <image :src="item.products[0].mainImgUrl"/>
                        </div>
                        <div class="right">
                            <h3>{{item.products[0].productTitle}}</h3>
                            <span class="standard">{{item.products[0].skuName}}</span>
                            <div class="bot">
                                <span class="price">￥{{item.products[0].salesPrice}}</span>
                                <span class="num">x{{item.products[0].productNumber}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <div>共{{item.products[0].productNumber}}件商品 合计：￥
                            <span>{{item.products[0].salesPrice*item.products[0].productNumber}}</span>
                        </div>
                        <div class="btns" v-if="nav[orderStatus]==='待付款'">
                            <button class="cancel">取消订单</button>
                            <button class="payment">去付款
                                {{item.products[0].salesPrice*item.products[0].productNumber}}
                            </button>
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
            list: state => state.index.list,
            orderStatus: state => state.index.orderStatus
        })
    },
    methods:{
        ...mapActions({
            getOrder: 'index/getOrder'
        }),
        ...mapMutations({
            updateOrderData: 'index/updateOrderData'  
        }),
       async changeActive(index) {
           this.ind  = index
           this.orderStatus = index
           console.log(this.orderStatus, index)
           await this.getOrder()
           this.updateOrderData({index})
        }
       
    },
    onReady() {
       
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
                .list-item {
                    width:100%;
                    background:#fff;
                    margin-top:24rpx;
                    border-radius:12rpx;
                    .time {
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        box-sizing:border-box;
                        height:74rpx;
                        line-height:74rpx;
                        align-items:center;
                        padding:0 24rpx;
                        .date {
                            font-size:15px;
                            color:#323A45;
                        }
                        .orderstatus {
                            font-size:17px;
                            color:#323A45;
                            font-weight:500;
                        }
                    }
                    .product-msg {
                        height:208rpx;
                        padding:12rpx 24rpx;
                        border-bottom:2rpx solid #eee;
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        box-sizing:border-box;
                        .left {
                            width:25%;
                            height:100%;
                            background:#eee;
                            image {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .right {
                            width:70%;
                            height:100%;
                            font-size:28rpx;
                            display:flex;
                            flex-direction:column;
                            justify-content:space-between;
                            .standard {
                                color:#999DA2;
                                font-size:13px;
                            }
                            .bot {
                                width:100%;
                                display:flex;
                                justify-content:space-between;
                                span {
                                    color:#323A45;
                                    font-size:13px;
                                }
                            }
                        }
                    }
                    .total {
                        display:flex;
                        flex-direction:column;
                        align-items:flex-end;
                        justify-content:space-around;
                        height:208rpx;
                        padding: 0 10px;
                        border-bottom:2rpx solid #eee;
                        div {
                            display:flex;
                            font-size:26rpx;
                            color:#484848;
                        }
                        .btns {
                            height:60rpx;
                            display:flex;
                            button {
                                font-size:28rpx;
                                line-height:60rpx;
                                padding:0 10rpx;
                                margin-right: 5px;
                            }
                            .payment {
                                background:#fc5d7b;
                                color:#fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
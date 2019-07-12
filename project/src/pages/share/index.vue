<template>
    <div class="share">
        <h2>{{dapaiDetailData.title}}</h2>
        <div class="price">【在售价】{{dapaiDetailData.salesPrice}}元</div>
        <div class="cont-pic">
            <div class="left-pic">
                <canvas canvas-id="firstCanvas" class="_canvas data-v-5347d871"
                style="width: 218px; height: 386px;"></canvas>
            </div>
            <div class="right-pic">
                <div class="proImg">
                    <image class="checkIcon" src="/static/images/true2.png"></image>
                    <image class="img2" :src="dapaiDetailData.mainImgUrl"></image>
                </div>
            </div>
        </div>
        <div class="share-firends">
            <div class="saveLocal">
                <image src="/static/images/6.png"></image>
                <p>保存到相册</p>
            </div>
            <div class="shareWX">
                <image src="/static/images/7.png"></image>
                <p>微信好友</p>
            </div>
        </div>
        <canvas canvas-id="canvas" class="_canvas data-v-5347d871" 
        style="width: 60px; height: 60px;position:absolute;z-index:-1;top:0px;left:-70px;options:0;">
        </canvas>
    </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            pid: null
        }
    },
    computed:{
        ...mapState({
            dapaiDetailData: state => state.carouse.dapaiDetailData
        })
    },
    methods:{
        
    },
    created(){

    },
    mounted(){
        console.log(this.dapaiDetailData.mainImgUrl)
        var context = wx.createCanvasContext('firstCanvas')
        context.rect(0, 0, 218, 386)
        //绘制用户名和头像
        context.drawImage(this.dapaiDetailData.mainImgUrl,0, 0, 40, 40, 20, 12, 40, 40)
        context.save()
        context.setFontSize(12)
        context.fillText(`${'***'}分享给你一个商品`,60, 26)
        context.fillText(`邀请码: ********`,60, 46)
        context.restore()


        context.draw();
    },
    onShow() {
        
    },
    onLoad(options) {
        this.pid = options.pid
    }
}
</script>
<style scoped lang="scss">
    .share{
        width: 100%;
        height: 100%;
        h2 {
            font-weight:600;
            font-size:40rpx;
            width:658rpx;
            margin:0 auto;
        }
        .price {
            width:690rpx;
            height:60rpx;
            margin:0 auto;
            margin-top:20rpx;
        }
        .cont-pic {
            width:700rpx;
            margin:30rpx auto 0;
            display:flex;
            justify-content:space-between;
            .left-pic {
                width:100%;
                height:760rpx;
            }
            .right-pic {
                width:560rpx;
                display:flex;
                flex-wrap:wrap;
                .proImg {
                    width:140rpx;
                    height:140rpx;
                    border:2rpx solid #ededed;
                    margin-left:15rpx;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    position:relative;
                    margin-bottom:18rpx;
                    .checkIcon {
                        width:42rpx;
                        height:42rpx;
                        position:absolute;
                        top:4rpx;
                        right:4rpx;
                    }
                    .img2 {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
        .share-firends {
            height:175rpx;
            display:flex;
            justify-content:space-around;
            div {
                text-align:center;
                font-size:30rpx;
                display:flex;
                flex-direction:column;
                image {
                    width:100rpx;
                    height:100rpx;
                    margin:15rpx auto;
                }
            }
        }
    }
</style>
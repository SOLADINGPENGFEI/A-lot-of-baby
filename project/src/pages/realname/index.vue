<template>
    <form class='real-name' @submit="submit">
        <div class="information">
            <div class="reaname">
                <label>真实姓名</label>
                <input type="text" placeholder="请输入身份证姓名">
            </div>
            <div class="id-card">
                <label>身份证号</label>
                <input type="text" placeholder="请输入身份证号">
            </div>
        </div>
        <div class="upload">
            <div class="upload-title">
                <span>上传身份证照片</span>
                <label>(图片png、jpg,大小不超过5M)</label>
            </div>
            <div class="files">
                <div class="img_left" @click="uploadFrontImage">
                    <image :src="FrontImage"></image>
                </div>
                <div class="img_right" @click="uploadBehindImage">
                    <image :src="BehindImage"></image>
                </div>
            </div>
        </div>
        <div class="content">
            <h2>为什么需要实名认证?</h2>
            <ul class="cont-list">
                <li>
                    <b>·</b>
                    根据海关规定,购买跨境商品需要办理清关手续,请您配合进行实名认证,以确保您购买分的商品顺利通过·海关检查。(积纳有品海购承诺所传身份证明只用于办理跨境商品的清关手续,不做他途使用,其他任何人均法查看)
                </li>
                <li>
                    <b>·</b>
                    实名认证的规则:购买跨境商品需填写积纳账号注册·人的真实姓名、身份证号码及与实名一致的手机号,部分商品下单时需提供收货人的实名信息(含身份证照片)，具体请以下单时的提示为准。
                </li>
            </ul>
        </div>
        <button form-type="submit">保存</button>
    </form>
</template>
<script>
export default {
    components:{

    },
    data(){
        return {
            FrontImage: '',
            BehindImage: ''
        }
    },
    computed:{

    },
    methods:{
        uploadFrontImage() {
            let that = this
            wx.chooseImage({
                success: function(res) {
                    const tempFilePaths = res.tempFilePaths
                    wx.saveFile({
                        tempFilePath: tempFilePaths[0],
                        success (res) {
                            that.FrontImage = res.savedFilePath
                        }
                    })
                }
            })
        },
        uploadBehindImage() {
             let that = this
            wx.chooseImage({
                success: function(res) {
                    const tempFilePaths = res.tempFilePaths
                    wx.saveFile({
                        tempFilePath: tempFilePaths[0],
                        success (res) {
                            that.BehindImage = res.savedFilePath
                        }
                    })
                }
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
    .real-name {
        display:flex;
        flex-direction:column;
        background:#f3f7f7;
        position:relative;
        width: 100%;
        height: 100%;
        .information {
            border-bottom:1rpx solid #eee;
            background:#fff;
            .reaname,.id-card {
                width:100%;
                height:100rpx;
                align-items:center;
                display:flex;
                border-bottom:2rpx solid #f6f6f6;
                label {
                    width:150rpx;
                    margin-left:26rpx;
                    font-size:32rpx;
                    font-weight:700;
                }
                input {
                    height:100rpx;
                    flex:1;
                    padding-left:20rpx;
                    font-size:32rpx;
                }
            }
        }
        .upload {
            width:100%;
            height:340rpx;
            background:#fff;
            display:flex;
            flex-direction:column;
            margin-top:15rpx;
            .upload-title {
                font-size:32rpx;
                padding:28rpx 30rpx;
                box-sizing:border-box;
                label {
                    font-size:30rpx;
                    margin-left:30rpx;
                    display:inline-block;
                    color:#999da2;
                }
            }
            .files {
                display: flex;
                .img_left {
                    width:330rpx;
                    height:220rpx;
                    border-radius:10rpx;
                    border:1rpx dashed #64e1d3;
                    margin-left:34rpx;
                    position:relative;
                    image {
                        height:100%;
                        width:100%;
                        border-radius:10rpx;
                    }
                }
                .img_right {
                    width:330rpx;
                    height:220rpx;
                    border-radius:10rpx;
                    position:relative;
                    border:1rpx dashed #64e1d3;
                    margin-left:34rpx;
                    image {
                        height:100%;
                        width:100%;
                        border-radius:10rpx;
                    }
                }
            } 
        }
        .content {
            h2 {
                margin:20rpx 200rpx;
                font-size:32rpx;
            }
            .cont-list {
                display:flex;
                flex-direction:column;
                li {
                    width:80%;
                    font-size:28rpx;
                    color:#999da2;
                    line-height:44rpx;
                    margin:10rpx 10%;
                    b {
                        padding:0 10rpx;
                        display:inline;
                    }
                }
            }
        }
        button {
            width: 90%;
            background:#64e1d3;
            color:#fff;
            font-size:36rpx;
            border-radius:17rpx;
        }
    }
</style>
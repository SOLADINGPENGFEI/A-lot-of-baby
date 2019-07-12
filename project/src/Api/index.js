import request from '../utils/request'

//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress/1.0.0', params)
}

//图片跳详情
export let carouse=(parmars)=>{
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0',parmars)
} 
//跳大牌化妆品商品详情
export let dapaiDetail=parmars=>{
    return request.post('https://upapi.jinaup.com/api/open/product/info/1.0.0?',parmars)
}
//跳详情里的产品详情
export let storeDetail=parmars=>{
    return request.post('https://upapi.jinaup.com/api/open/product/detailPicture/1.0.0,',parmars)
}
//详情是否包邮
export let postage=parmars=>{
    return request.post('https://upapi.jinaup.com/api/open/shipping/templates/info/1.0.0',parmars)
}
//规格
export let specifications=parmars=>{
    return request.post('https://upapi.jinaup.com/api/open/product/sku/attrs/1.0.0',parmars) 
}
//订单信息
export let orderMess=parmars=>{
    return request.post('https://upapi.jinaup.com/api/open/product/sku/query/1')
}

//订单数据
export let order = params => {
    return request.post('/api/open/order/query/1.0.0', params)
}


//  首页nav接口
export let navTab = params => {
    return request.post("/api/open/product/category/query/1.0.0")
}


// 首页 swiper dl 基本渲染接口
export let getSwiper = params => {
    return request.post("/api/open/page/home/list/1.0.0")
}

// 首页 dl加载loading 接口
export let loading = params => {
     return request.post("/api/open/page/home/products/1.0.0?pageIndex=" + params)
}

// 请求用户数据
export let user = params => {
    return request.post('/api/open/user/info/only/1.0.0')
}

// 实名认证
export let realapprove = params => {
    return request.post('/api/open/user/auth/identityBase64/1.0.0',params)
}


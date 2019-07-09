import request from '../utils/request'

//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress',params)
}


//轮播跳详情
export let carouse=(parmars)=>{
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0?siid='+parmars)
} 
//跳大牌化妆品商品详情
export let dapaiDetail=pid=>{
    return request.post('https://upapi.jinaup.com/api/open/product/info/1.0.0?pid='+pid)
}


//订单数据
export let order = params => {
    return request.post('/api/open/order/query/1.0.0',params)
}


//  首页nav接口
export let navTab=params=>{
    return request.post("/api/open/product/category/query/1.0.0")
}


 // 首页 swiper dl 基本渲染接口
export let getSwiper=params=>{
    return request.post("/api/open/page/home/list/1.0.0")
}

// 首页 dl加载loading 接口
export let loading=params=>{
    return request.post("/api/open/page/home/products/1.0.0?pageIndex=1")
}


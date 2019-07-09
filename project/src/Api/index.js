import request from '../utils/request'

//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress/1.0.0',params)
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


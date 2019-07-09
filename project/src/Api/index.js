import request from '@/utils/request';
// console.log(request)
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


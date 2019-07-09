import request from '../utils/request';

//导航切换
export let navTab=params=>{
    return request.post("api/open/product/category/query/1.0.0")
}
//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress',params)
}
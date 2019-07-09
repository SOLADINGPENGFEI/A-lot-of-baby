import request from '../utils/request';

export let login =params=>{
    return request.post("/api/open/init/app/1")
}
export let navTab=params=>{
    return request.post("/api/open/product/category/query/1.0.0")
import request from '../utils/request'
}
//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress',params)
}
import request from '../utils/request'

//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress',params)
}
//轮播跳详情
export let carouse=(parmars)=>{
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0?siid='+parmars)
} 
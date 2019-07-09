import request from '../utils/request'

//添加收货地址
export let newAddress = params => {
    return request.post('/api/open/user/address/addAddress/1.0.0',params)
}

//订单数据
export let order = params => {
    return request.post('/api/open/order/query/1.0.0',params)
}
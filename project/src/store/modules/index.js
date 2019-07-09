import {newAddress,order} from '@/Api/index'

const state = {
    current: {
        provinceId: null,
        provinceName: '',
        cityId:null,
        cityName:'',
        areaId:null,
        areaName:'',
        address:'',
        consignee:'',
        consigneePhone:null,
        addressTag:null,
        state:null
    },
    orderStatus: 0,
    data: null,
    ind: 1
}

const actions = {
    //添加地址
    async createNew(state, ...payload) {
        return new Promise(async (resolve, reject) => {
            console.log('payload...',payload[0])
            // let result = await newAddress(JSON.stringify(payload[0]))
            let result = await newAddress(payload[0])
            resolve(result)
        })
    },
    //获取订单数据
    async getOrder(state, payload) {
        return new Promise(async (resolve, reject) => {
            console.log('payload-status...',payload)
            state.data = await order(payload)
            console.log('data...',state.data.result)
            resolve(state.data.result)
        })
    }
}

const mutations = {
    //添加地址
    updateState(state, payload) {
        state.current = {...state.current, ...payload}
    },
     //获取订单数据
    // getOrderData(state, payload) {
    //     state.data = {...state.data, ...payload}
    // }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
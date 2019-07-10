import {newAddress,order} from '@/Api/index'
const moment = require('moment')

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
    orderStatus: 1,
    list: [],
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
    getOrder({commit,state}, payload) {
        return new Promise(async (resolve, reject) => {
            let params = {}
            params.orderStatus = state.orderStatus
            params.pageIndex = 1
            let result = await order(params)
            console.log('result...',result)
            result.result.forEach(item => {
                item.createTime = formatTime(item.createTime)
            })

            commit('updateOrderData',{list:{...state.list,...result},index:state.orderStatus})

            resolve()
        })
    }
    
}

const mutations = {
    //添加地址
    updateState(state, payload) {
        state.current = {...state.current, ...payload}
    },
    // 获取订单数据
    updateOrderData(state, payload) {
        console.log('updateOrderData...',payload)
        state.orderStatus = payload.orderStatus
        state.list = payload.list.result
        
    }
}

function formatTime(createTime) {
    return moment(createTime * 1).format('YYYY-MM-DD HH:mm')
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
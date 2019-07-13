import {newAddress,order,user,realapprove} from '@/Api/index'
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
    userData: {
        headUrl: '',
        nickName: '***',
        inviteCode: '******'
    },
    realname: {
        id_img_positive: '',
        id_img_opposite: '',
        trueName: '',
        idNumber: ''
    }
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

            commit('updateOrderData',{list:{...result},index:state.orderStatus})

            resolve()
        })
    },
    // 获取用户数据
    getUser({commit,state}, payload) {
        return new Promise(async (resolve, reject) => {
            let result = await user()
            console.log('result...',result)
            commit('updateUser',{userData:{...state.userData,...result.result}})
            resolve()
        })
    },
    // 实名认证表单
    async getRealname(state, ...payload) {
        return new Promise(async (resolve,reject) => {
            console.log('realnamepayload...',payload[0])
            let result = await realapprove(payload[0])
            resolve(result)
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
        state.orderStatus = payload.index
        state.list = payload.list.result
    },
    // 获取用户数据
    updateUser(state, payload) {
        payload?state.userData = payload.userData : state.userData
    },
    //实名认证
    updateRealname(state, payload) {
        state.realname = { ...state.realname, ...payload }
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
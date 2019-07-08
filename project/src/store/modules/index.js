import {newAddress} from '@/Api/index'

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
    }
}

const actions = {
    async createNew(state, ...payload) {
        return new Promise(async (resolve, reject) => {
            console.log('payload...',JSON.stringify(payload[0]))
            let result = await newAddress(JSON.stringify(payload[0]))
            resolve(result)
        })
    }
}

const mutations = {
    updateState(state, payload) {
        state.current = {...state.current, ...payload}
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
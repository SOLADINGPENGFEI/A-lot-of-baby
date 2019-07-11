import { carouse ,dapaiDetail,storeDetail,postage} from '@/Api';
const state = {
    dapaiData: {},
    dapaiDetailData:{},
    storeDetailData:{},
    postageData:{}
}

const getters = {

}


//同步改变
const mutations = {
    //大牌化妆品
    upDapaiData(state, payload) {
        state.dapaiData = payload.result
        console.log("state.dapaiData", state.dapaiData)
    },
     //大牌商品详情
     upDapaiDetailData(state, payload) {
        state.dapaiDetailData = payload.result
        console.log("state.dapaiDetailData", state.dapaiDetailData)
    },
    //产品详情
    upStoreDetailData(state,payload){
        state.storeDetailData=payload
        console.log("state.storeDetailData",state.storeDetailData)
    },
    //详情是否包邮
    upPostageData(state,payload){
        state.postageData=payload
        console.log("state.postageData",state.postageData)
    }
}

//异步改变
const actions = {
    //大牌化妆品数据
    async getDapaiData({ commit }, payload) {
        const data = await carouse(payload)
        commit("upDapaiData", data)
    },
     //大牌商品详情数据
     async getDapaiDetailData({ commit }, payload) {
        const data = await dapaiDetail(payload)
        commit("upDapaiDetailData", data)
    },
    //产品详情
    async getStoreDetailData({commit},payload){
        console.log("payload。。。。。",payload)
        const data=await storeDetail(payload)
        commit("upStoreDetailData",data)
    },
    //详情是否包邮
    async getPostageData({commit},payload){
        console.log("payload。。。。。",payload)
        const data=await postage(payload)
        commit("upPostageData",data)
    }
}

export default {
    //命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
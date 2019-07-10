import { carouse ,dapaiDetail} from '@/Api';
const state = {
    dapaiData: {},
    // summerData: {},
    // babytryData:{},
    // eggData:{},
    dapaiDetailData:{}
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
    // //夏季出行专场
    // upSummerData(state, payload) {
    //     state.summerData = payload.result
    //     console.log("state.summerData", state.summerData)
    // },
    // //babytry专场
    // upBabytryData(state, payload) {
    //     state.babytryData = payload.result
    //     console.log("state.babytryData", state.babytryData)
    // },
    //  //宝宝蛋专场
    //  upEggData(state, payload) {
    //     state.eggData = payload.result
    //     console.log("state.eggData", state.eggData)
    // },
     //大牌商品详情
     upDapaiDetailData(state, payload) {
        state.dapaiDetailData = payload.result
        console.log("state.dapaiDetailData", state.dapaiDetailData)
    }
}

//异步改变
const actions = {
    //大牌化妆品数据
    async getDapaiData({ commit }, payload) {
        const data = await carouse(payload)
        commit("upDapaiData", data)
    },
    // //夏季出行专场数据
    // async getSummerData({ commit }, payload) {
    //     const data = await carouse(payload)
    //     commit("upSummerData", data)
    // },
    // //babytry专场数据
    //  async getBabytryData({ commit }, payload) {
    //     const data = await carouse(payload)
    //     commit("upBabytryData", data)
    // },
    // //宝宝蛋专场数据
    //  async getEggData({ commit }, payload) {
    //     const data = await carouse(payload)
    //     commit("upEggData", data)
    // },
     //大牌商品详情数据
     async getDapaiDetailData({ commit }, payload) {
        const data = await dapaiDetail(payload)
        commit("upDapaiDetailData", data)
    },
}

export default {
    //命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
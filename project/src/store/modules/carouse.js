import {carouse} from '@/server';
const state={
    dapaiData:{},
    summerData:{}
}

const getters={

}


//同步改变
const mutations={
    //大牌化妆品
   upDapaiData(state,payload){
       state.dapaiData=payload.result
    console.log("state.dapaiData",state.dapaiData)
   },
    //夏季出行专场
   upSummerData(state,payload){
    state.summerData=payload.result
 console.log("state.summerData",state.summerData)
}
}

//异步改变
const actions={
    //大牌化妆品数据
    async getDapaiData({commit},payload){
      const data=await carouse(payload)
        commit("upDapaiData",data)
    },
    //夏季出行专场数据
    async getSummerData({commit},payload){
        const data=await carouse(payload)
          commit("upSummerData",data)
      },
}

export default {
    //命名空间
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
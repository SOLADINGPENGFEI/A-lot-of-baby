import {dapai} from '@/server';
const state={
    dapaiData:{}
}

const getters={

}


//同步改变
const mutations={
   upDapaiData(state,payload){
       state.dapaiData=payload.result
    console.log("state.dapaiData",state.dapaiData)
   }
}

//异步改变
const actions={
    //大牌化妆品数据
    async getDapaiData({commit},payload){
      const data=await dapai(payload)
        commit("upDapaiData",data)
    },
    //
}

export default {
    //命名空间
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
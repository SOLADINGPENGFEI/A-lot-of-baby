
import {loading} from '../../Api/index';

// console.log('123',loading)


const state = {
    getLoading:[]
}

const actions ={
      async getloading({commit},params){
        let data = await loading(params);
        console.log(data)
        //传递数据和页数   params-->页数
        commit('getload',{res:data.result,params})
      }
}

const mutations = {
    getload(state,payload){
        if(payload.params === 1){//加载第一页的时候直接赋值
            state.getLoading = payload.res;
        }else{//否则累加数据
            state.getLoading = [...state.getLoading,...payload.res];
        }
    }

}

export default{
    namespaced:true,
    state,
    actions,
    mutations 
}
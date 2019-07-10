
import {loading} from '../../Api/index';
const state = {
    getLoading:[]
}

const actions ={
      async getloading({commit}){
          let data = await loading()
        //   console.log('111',data)
           commit('getload',data.result)
      }
}

const mutations = {
    getload(state,payload){
        state.getLoading = payload
    }

}

export default{
    namespaced:true,
    state,
    actions,
    mutations 
}
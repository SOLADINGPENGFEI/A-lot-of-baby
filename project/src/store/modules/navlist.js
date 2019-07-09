

import {navTab} from '../../Api/index'
// console.log('aaa',navTab)
const state = {
    navlist:[]
}

const actions = {
    async navtab({commit}){
        const data = await navTab()
        commit('getnavtab',data.result)
        
     }
}

const mutations={
    getnavtab(state,payload){
        //  console.log('act',payload)
         // 赋值给payload
         state.navlist = payload; 
    }
}

export default{
    namespaced:true,
    state,
    actions,
    mutations
}
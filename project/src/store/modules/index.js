import {login} from '@/Api/index'

const state={
    
}
const mutations = {
    
  }
const actions={
    async logins(){
        const data=await login()
    }
}
  export default {
    namespaced: true,
    state,
    actions,
    mutations
}
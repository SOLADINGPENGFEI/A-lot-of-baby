import { navTab } from '@/Api/index'

const state = {
    navs: []
}
const mutations = {
    getNavTabs(state, payload) {
        state.navs = payload
       
    }
}
const actions = {
    async navTabs({commit}) {
        const data = await navTab()
        commit("getNavTabs", data.result)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}
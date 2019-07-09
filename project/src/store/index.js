
//挂载 modules


import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
import index from './modules/index'
import nav from './modules/nav'
// 引入子模块
import index from './modules/index'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      index,
      nav
    },
    state: {
        
    }
})

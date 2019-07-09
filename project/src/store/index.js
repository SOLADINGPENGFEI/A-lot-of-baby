
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 引入子模块
import index from './modules/index'

import nav from './modules/navlist'
import Swiper from './modules/swiper'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        nav,
        Swiper,
        loading
    },
    state: {
        
    }
   
   
})
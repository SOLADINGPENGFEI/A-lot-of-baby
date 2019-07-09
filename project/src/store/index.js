import Vue from 'vue';
import Vuex from 'vuex'

//挂载modules子模块
import carouse from './modules/carouse'
import index from './modules/index'

Vue.use(Vuex);

import createLogger from 'vuex/dist/logger'
import nav from './modules/navlist'
import Swiper from './modules/swiper'
import loading from './modules/loading'


export default new Vuex.Store({
    modules: {
        index,
        carouse,
        nav,
        Swiper,
        loading
    },
    state: {
        
    }
   
   
})
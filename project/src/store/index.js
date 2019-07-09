import Vue from 'vue';
import Vuex from 'vuex'

//挂载modules子模块
import carouse from './modules/carouse'
import index from './modules/index'

Vue.use(Vuex);

import createLogger from 'vuex/dist/logger'


export default new Vuex.Store({
    modules: {
        index,
        carouse

    },
    state: {
        
    }
})
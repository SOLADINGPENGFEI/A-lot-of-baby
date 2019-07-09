<<<<<<< HEAD
import Vue from 'vue';
import Vuex from 'vuex'

//挂载modules
import carouse from './modules/carouse'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        carouse
=======
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 引入子模块
import index from './modules/index'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index
    },
    state: {
        
>>>>>>> 14984a82ce9b16fb48e2f0f3d66611dbe8768bf6
    }
})
import Vue from 'vue';
import Vuex from 'vuex'

//挂载modules
import carouse from './modules/carouse'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        carouse
    }
})
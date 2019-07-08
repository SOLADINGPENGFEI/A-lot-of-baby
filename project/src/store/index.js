import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
//挂载 modules
import index from './modules/index'
import nav from './modules/nav'

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
    
  },
  actions:{
      
  },
  modules: {
    index,
    nav
  }
})


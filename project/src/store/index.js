import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/navlist'
import Swiper from './modules/swiper'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
    // 定义初始状态的地方
    // state:{
       
    // },
    // // 定义方法改变状态的地方
    // actions:{
          
    // },
    modules:{
        nav,
        Swiper,
        loading
    }
    
   
})
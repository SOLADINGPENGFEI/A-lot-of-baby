import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import createLogger from 'vuex/dist/logger'

// 引入子模块
import index from './modules/index'

=======
import nav from './modules/navlist'
import Swiper from './modules/swiper'
import loading from './modules/loading'
>>>>>>> 83034eba5840a9173fe7ac03149d57cd264242d9

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
    modules: {
        index
    },
    state: {
        
    }
=======
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
    
   
>>>>>>> 83034eba5840a9173fe7ac03149d57cd264242d9
})
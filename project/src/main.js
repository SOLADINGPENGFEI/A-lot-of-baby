import Vue from 'vue'
import App from './App'
//引入store
import store from '@/store/index'

import store from '@/store/index'

Vue.config.productionTip = false
App.mpType = 'app'

<<<<<<< HEAD
Vue.prototype.$store=store;
=======
//将store挂载到原型链上
Vue.prototype.$store = store
>>>>>>> 14984a82ce9b16fb48e2f0f3d66611dbe8768bf6

const app = new Vue(App)
app.$mount()

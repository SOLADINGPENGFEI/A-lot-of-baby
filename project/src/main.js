import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
//引入store
=======
>>>>>>> 83034eba5840a9173fe7ac03149d57cd264242d9
import store from '@/store/index'

Vue.config.productionTip = false
App.mpType = 'app'
<<<<<<< HEAD

//将store挂载到原型链上
Vue.prototype.$store = store

=======
Vue.prototype.$store = store;
>>>>>>> 83034eba5840a9173fe7ac03149d57cd264242d9
const app = new Vue(App)
app.$mount()

import Vue from 'vue'
import App from './App'
//引入store
import store from '@/store/index'

Vue.config.productionTip = false
App.mpType = 'app'

//将store挂载到原型链上
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

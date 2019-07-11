import Vue from 'vue'
import App from './App'
import store from '@/store/index'
Vue.config.productionTip = false
App.mpType = 'app'

// 挂载store到原型链上
Vue.prototype.$store = store;

const app = new Vue(App)
app.$mount()

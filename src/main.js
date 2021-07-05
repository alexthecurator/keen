import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './css/global.css'
import './css/responsive.css'
// import '../src/firebase/init'
import './js/global'
import App from './App.vue'
import router from './router/routing.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
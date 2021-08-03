import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './css/global.css'
import './css/responsive.css'
import VueSweetalert2 from 'vue-sweetalert2'
import './js/global.js'
import App from './App.vue'
import router from './router/routing.js'

Vue.use(VueSweetalert2);
Vue.config.productionTip = false

new Vue({
    data: { loading: false },
    router,
    render: h => h(App),
}).$mount('#app')
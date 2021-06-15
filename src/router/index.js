import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import services from './views/services'

Vue.use(Router);
const router = new Router({
    routes: [{
            path: '/',
            component: home,
        },
        {
            path: '/services',
            component: services,
        }
    ]
})
export default router;
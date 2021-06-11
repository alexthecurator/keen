import Vue from 'vue'
import Router from 'vue-router'
import services from './views/services'

Vue.use(Router);
const router = new Router({
    routes: [{
            path: '/',
            component: indexPage,
        },
        {
            path: '/services',
            component: services,
        }
    ]
})
export default router;
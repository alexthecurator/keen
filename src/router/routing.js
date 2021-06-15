import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home';
import services from '../views/services';

Vue.use(VueRouter);
const router = new VueRouter({
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
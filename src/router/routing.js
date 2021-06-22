import Vue from 'vue';
import VueRouter from 'vue-router';
import nav from '../views/nav';
import home from '../views/home';
import services from '../views/services';
import accomplishments from '../views/accomplishments';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            component: home,
        },
        {
            path: '/nav',
            component: nav,
        },
        {
            path: '/services',
            component: services,
        },
        {
            path: '/accomplishments',
            component: accomplishments,
        },
    ]
})
export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import nav from '../views/nav';
import home from '../views/home';
import services from '../views/services';
import accomplishments from '../views/accomplishments';
import aboutus from '../views/aboutus';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/home',
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
        {
            path: '/aboutus',
            component: aboutus,
        },
    ]
})
export default router;
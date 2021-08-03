import Vue from 'vue';
import VueRouter from 'vue-router';
import fullmenu from '../views/fullmenu';
import home from '../views/home';
import services from '../views/services';
import accomplishments from '../views/accomplishments';
import aboutus from '../views/aboutus';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: { transition: 'fade' },
        },
        {
            path: '/fullmenu',
            component: fullmenu,
            meta: { transition: 'fade-in-down' },
        },
        {
            path: '/services',
            component: services,
            meta: { transition: 'fade' },
        },
        {
            path: '/accomplishments',
            component: accomplishments,
            meta: { transition: 'fade' },
        },
        {
            path: '/aboutus',
            component: aboutus,
            meta: { transition: 'fade' },
        },
    ]
})

export default router;
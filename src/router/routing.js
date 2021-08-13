import Vue from 'vue';
import VueRouter from 'vue-router';
import fullmenu from '../views/fullmenu';
import home from '../views/home';
import network from '../views/network';
import hardware from '../views/hardware';
import software from '../views/software';
import accessories from '../views/accessories';
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
            path: '/network',
            component: network,
            meta: { transition: 'fade' },
        },
        {
            path: '/hardware',
            component: hardware,
            meta: { transition: 'fade' },
        },
        {
            path: '/software',
            component: software,
            meta: { transition: 'fade' },
        },
        {
            path: '/accessories',
            component: accessories,
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
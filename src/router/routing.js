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
            component: home,
        },
        {
            path: '/fullmenu',
            component: fullmenu,
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
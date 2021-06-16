import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        component: home,
    }]
})
export default router;
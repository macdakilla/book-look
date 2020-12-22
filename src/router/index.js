import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../view/Main";
import Favorites from "../view/Favorites";
import Product from '../view/Product'
import CategoryList from '../view/CategoryList'
import CategoryItem from '../view/CategoryItem';

import NProgress from 'nprogress';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "iMain",
            component: Main,
            props: true,
        },
        {
            path: "/favorites",
            name: "Favorites",
            component: Favorites,
            props: true,
        },
        {
            path: "/category",
            name: "CategoryList",
            component: CategoryList,
            props: true
        },
        {
            path: "/category/:name",
            name: 'CategoryItem',
            component: CategoryItem,
            props: true
        },
        {
            path: "/:id",
            name: "Id",
            component: Product,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:31:36
 * @LastEditTime: 2019-10-19 14:46:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Index from '../pages/index.vue'
import Cart from '../pages/cart.vue'
import Classify from '../pages/classify.vue'
import Detail from '../pages/detail.vue'
import CommodityList from '../pages/CommodityList.vue'
import Login from '../pages/login.vue'
import Mine from '../pages/mine.vue'
import Reg from '../pages/reg.vue'
import Shop from '../pages/shop.vue'
import ShopList from '../pages/ShopList.vue'
import GoodsList from '../pages/goodsList.vue'

let router = new VueRouter({
	mode:'history',
    routes: [{
        name: "index",
        path: "/index",
        component: Index

    }, {
        name: "goodsList",
        path: "/goodsList",
        component: GoodsList

    }, {
        name: "cart",
        path: "/cart",
        component: Cart,

    }, {
        name: "classify",
        path: "/classify",
        component: Classify

    }, {
        name: "detail",
        path: "/detail",
        component: Detail

    }, {
        name: "commodityList",
        path: "/commodityList",
        component: CommodityList

    }, {
        name: "shop",
        path: "/shop",
        component: Shop

    }, {
        name: "shopList",
        path: "/shopList",
        component: ShopList

    }, {
        name: "login",
        path: "/login",
        component: Login

    }, {
        name: "reg",
        path: "/reg",
        component: Reg

    }, {
        name: "mine",
        path: "/mine",
        component: Mine

    }, {
        path: '/',
        redirect: '/index'
    }]
});
// 全局路由守卫
// router.beforeEach(async function (to, from, next) {
//     // 在全局路由守卫beforeEach中进行页面权限访问控制
//     // 先判断目标路由是否需要鉴权
//     if (to.meta.requiresAuth) {
//         let user = localStorage.getItem('user');
//         if (user) {
//             let res = await store.dispatch('checkLogin');

//             if (res === 400) {
//                 next({
//                     path: '/login',
//                     query: {
//                         targetUrl: to.fullPath
//                     }
//                 });
//             } else {
//                 next();
//             }
//         } else {
//             router.push({
//                 path: '/login',
//                 query: {
//                     targetUrl: to.fullPath
//                 }
//             })
//         }

//     } else {
//         next();
//     }

// })
export default router
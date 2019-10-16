/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:31:36
 * @LastEditTime: 2019-10-16 15:09:26
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
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
import GoodsList from '../pages/goosList.vue'
let router = new VueRouter({
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
        component: Cart

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
})
export default router
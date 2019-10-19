/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 19:23:39
 * @LastEditTime: 2019-10-19 09:16:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';

// 1. 引入Vuex
import Vuex from 'vuex';


import cart from './cart'
import common from './common'
// 2. 使用（安装）Vuex
Vue.use(Vuex);
import persistedState from 'vuex-persistedstate'

// 3. 创建store实例
const store = new Vuex.Store({
    // 创建state
    plugins: [persistedState()],
    // 只用模块化store后会影响state数据的获取
    // store.state.xxx -> store.state.cart.xxx
    modules: {
        cart,
        common
    }
});

export default store;
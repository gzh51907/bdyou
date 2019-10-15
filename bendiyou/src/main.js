/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-12 10:23:13
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import '@vant/touch-emulator';
import {
  Grid,
  GridItem,
  Row,
  Col,
  Tabbar,
  TabbarItem
} from 'vant';
import axios from 'axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.use(Grid).use(GridItem).use(Row).use(Col).use(Tabbar).use(TabbarItem);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
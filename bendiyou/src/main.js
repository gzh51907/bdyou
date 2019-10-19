/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-19 15:54:55
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../postcss.js";
Vue.config.productionTip = false;
import "@vant/touch-emulator";

import {
  Grid,
  GridItem,
  Row,
  Col,
  Tabbar,
  TabbarItem,
  Sticky,
  List,
  Button,
  Cell,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  Tag,
  Image,
  Panel,
  Card,
  NavBar,
  TreeSelect,
  Divider,
  Field,
  Checkbox,
  CheckboxGroup,
  Toast,
  CellGroup,
  DropdownMenu,
  DropdownItem,
  Stepper,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  SubmitBar

} from 'vant';
import axios from 'axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import base from './assets/css/base.css'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(ElementUI);


Vue.use(base).use(Grid)
  .use(GridItem)
  .use(Row)
  .use(Col)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Sticky)
  .use(List)
  .use(Button)
  .use(Cell)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Icon)
  .use(Tag)
  .use(Image)
  .use(Stepper)
  .use(Panel)
  .use(Card)
  .use(NavBar)
  .use(TreeSelect)
  .use(Divider)
  .use(Field)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Toast)
  .use(CellGroup)
  .use(Divider).use(DropdownItem).use(DropdownMenu).use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton).use(SubmitBar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
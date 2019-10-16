/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-16 16:49:35
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../postcss.js";
Vue.config.productionTip = false;
import "@vant/touch-emulator";
import base from "./assets/css/base.css";
import axios from "axios";
Vue.prototype.$axios = axios;
import {
  Grid,
  GridItem,
  Row,
  Col,
  Tabbar,
<<<<<<< HEAD
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
  DropdownItem
} from "vant";
=======
  TabbarItem
} from 'vant';
import axios from 'axios';
Vue.prototype.$axios = axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
>>>>>>> 1cc8f3bd378aa14516628d56655eb58c3c63b45f

Vue.use(Grid)
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
  .use(base)
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
  .use(Divider).use(DropdownItem).use(DropdownMenu);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
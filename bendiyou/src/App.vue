<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-16 18:32:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view />
    <div v-if="path!='login'">
      <div>
        <van-row type="flex" class="ap">
          <van-col span="24" style="  position: fixed;left: 0;bottom: 0;z-index:9999 ">
            <footer>
              <van-tabbar
                style=" background-color: #fff!important;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6) !important;height: 50px;"
                v-model="active"
                active-color="#EB111F"
                inactive-color="#000"
                size="24px"
                route
              >
                <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
                <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>
                <van-tabbar-item icon="shop-o" to="/shop">店铺</van-tabbar-item>
                <van-tabbar-item icon="shopping-cart-o" to="/cart" :info="info">购物车</van-tabbar-item>
                <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
              </van-tabbar>
            </footer>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: "home",
      info: "2",
      path: ""
    };
  },
  created() {
    this.path = this.$route.name;
  },
  components: {},
  methods: {
    click() {}
  }
};
</script>

<style >
#app .van-grid-item__content--center span {
  margin: 0;
}
.van-tabbar-item__icon {
  position: relative;
  margin-bottom: 0px;
  font-size: 24px;
}
</style>
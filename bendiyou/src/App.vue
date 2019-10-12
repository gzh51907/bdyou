<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-12 10:34:39
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div>
      <van-row type="flex" class="ap">
        <van-col span="24">
          <header>头</header>
        </van-col>
        <van-col span="24">
          <main>
            <router-view />
          </main>
        </van-col>
        <van-col span="24" style="  position: fixed;left: 0;bottom: 0; ">
          <footer>
            <van-tabbar
              style=" background-color: #fff!important;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6) !important;height: 50px"
              v-model="active"
              active-color="#EB111F"
              inactive-color="#000"
              route
            >
              <van-tabbar-item icon="home-o" to="/index" size="24px">首页</van-tabbar-item>
              <van-tabbar-item icon="qr" to="/classify">分类</van-tabbar-item>
              <van-tabbar-item icon="shop-o" to="/shop">店铺</van-tabbar-item>
              <van-tabbar-item icon="shopping-cart-o" to="/cart" info="0">购物车</van-tabbar-item>
              <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
            </van-tabbar>
          </footer>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: "home"
    };
  },
  components: {},
  methods: {
    click() {}
  }
};
</script>

<style >
.ap {
  /* display: flex; */
  flex-direction: column;
}
#app .van-grid-item__content--center span {
  margin: 0;
}
</style>

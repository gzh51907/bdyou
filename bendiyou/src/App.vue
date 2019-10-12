<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-12 10:04:11
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
        <van-col span="24" style="  position: fixed;
 left: 0;
 bottom: 0;">
          <footer>
            <van-tabbar v-model="active" active-color="#EB111F" inactive-color="#000" route>
              <van-tabbar-item :vant-icon="24" icon="home-o" style="font-size: 11px;" to="/index">首页</van-tabbar-item>
              <van-tabbar-item icon="qr" style="font-size: 11px  ;height: 50px" to="/classify">分类</van-tabbar-item>
              <van-tabbar-item icon="shop-o" style="font-size: 11px  ;height: 50px" to="/shop">店铺</van-tabbar-item>
              <van-tabbar-item
                icon="shopping-cart-o"
                style="font-size: 11px  ;height: 50px"
                to="/cart"
              >购物车</van-tabbar-item>
              <van-tabbar-item icon="contact" style="font-size: 11px  ;height: 50px" to="/mine">我的</van-tabbar-item>
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

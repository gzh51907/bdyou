<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 15:31:13
 * @LastEditTime: 2019-10-12 10:46:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <el-backtop target :bottom="-100">
      <div class="fix-block-r">
        <a href="javascript:void(0);" class="gotop-btn gotop" id="goTopBtn">
          <i></i>
        </a>
      </div>
    </el-backtop>
    <div>
      <van-row type="flex" class="ap">
        <van-col span="24">
          <header></header>
        </van-col>
        <van-col span="24">
          <main>
            <router-view />
          </main>
        </van-col>
        <van-col span="24" style="  position: fixed;left: 0;bottom: 0;z-index:999 ">
          <footer>
            <van-tabbar
              style=" background-color: #fff!important;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6) !important;height: 50px"
              v-model="active"
              active-color="#EB111F"
              inactive-color="#000"
              size="24px"
              route
            >
              <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
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
.fix-block-r {
  width: 1.9rem;
  position: fixed;
  z-index: 5;
  left: 0.5rem;
  bottom: 5rem;
}
.fix-block-r a {
  display: block;
  width: 1.95rem;
  height: 1.95rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 100%;
  border: solid 0.05rem #eee;
  margin-top: 0.25rem;
}
.fix-block-r a.gotop-btn {
  margin-top: 0.25rem;
}
.fix-block-r a.gotop-btn i {
  background-image: url(img/pao.png);
}
.fix-block-r a i {
  width: 100%;
  height: 100%;
  display: block;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 60%;
  opacity: 0.5;
}
.ap {
  /* display: flex; */
  flex-direction: column;
}
#app .van-grid-item__content--center span {
  margin: 0;
}
.van-tabbar-item__icon {
  position: relative;
  margin-bottom: 0px;
  font-size: 24px;
}
</style>

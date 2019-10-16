<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:25:31
 * @LastEditTime: 2019-10-16 09:25:50
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="background: rgba(248,248,248,0.95);">
    <header style=" border-bottom: solid 0.05rem #EEE;">
      <van-nav-bar style="color:#000" title="购物车">
        <van-icon name="arrow-left" slot="left" size="25px" color="#000" />

        <van-icon name="ellipsis" slot="right" size="25px" color="#000" @click="goto('/login')" />
      </van-nav-bar>
    </header>
    <main>
      <div class="nctouch-norecord cart">
        <div class="norecord-ico">
          <van-icon name="shopping-cart-o" />
        </div>
        <dl>
          <dt>您的购物车还是空的</dt>
          <dd>去挑一些中意的商品吧</dd>
        </dl>
        <a href="https://i.bdyoo.com/wap" class="btn">随便逛逛</a>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss">
main {
  width: 100%;
  height: 100%;
  position: relative;
  .nctouch-norecord {
    padding-top: 250px;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 10rem;
    height: 8.2rem;
    margin: -3rem 0 0 -5rem;
    text-align: center;
    font-size: 0;
    .norecord-ico {
      display: inline-block;
      width: 2.2rem;
      height: 2.2rem;
      padding: 0.4rem;
      margin: 0 auto;
      background-color: #ddd;
      border-radius: 100%;
      .van-icon {
        position: relative;
        font: 46px/1 "vant-icon";
        color: #fff;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        width: 100%;
        height: 100%;
      }
    }
    dl {
      height: 2.75rem;
      margin-top: 0.75rem;
      dt {
        display: block;
        height: 1rem;
        margin-bottom: 0.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
      }
      dd {
        display: block;
        height: 1rem;
        margin-bottom: 0.5rem;
        font-size: 0.55rem;
        line-height: 1rem;
        color: #999;
      }
    }
    .btn {
      vertical-align: top;
      display: inline-block !important;
      height: 1.1rem;
      padding: 0 0.3rem;
      margin: 0 auto;
      font-size: 0.6rem;
      color: #555 !important;
      line-height: 1.1rem;
      text-align: center;
      background-color: #fff;
      border: solid 1px #ccc;
      border-radius: 0.15rem;
    }
  }
}
</style>
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:25:31
 * @LastEditTime: 2019-10-19 17:06:30
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="background: rgba(248,248,248,0.95);">
    <header
      style=" border-bottom: solid 0.05rem #EEE;position: fixed;too:0;left:0;right:0;z-index:1000"
    >
      <van-nav-bar style="color:#000" title="购物车">
        <van-icon name="arrow-left" slot="left" size="25px" color="#000" @click="gourl" />

        <van-icon name="ellipsis" slot="right" size="25px" color="#000" @click="goto('/login')" />
      </van-nav-bar>
    </header>
    <main style="padding:5px 10px;  overflow: auto; width:100%">
      <div style="margin-top:45px; margin-bottom: 100px;">
        <div style=" background: #fff;" v-for="(item, index) in shopname" :key="index">
          <van-checkbox-group v-model="shopname">
            <p style=" display: flex;">
              <van-checkbox checked-color="#ED5564" :name="item" style="margin-right:10px"></van-checkbox>
              <van-icon name="shop-o" style=" opacity: 0.4;margin-right:5px" />
              <span style="font-size:13px">{{item}}</span>
            </p>
            <van-checkbox-group>
              <van-grid :border="false" :column-num="1" v-for="(it, i) in goodsList" :key="i">
                <div style="width:100%" v-if="it.shopname===item">
                  <van-grid-item>
                    <van-checkbox
                      :name="i"
                      checked-color="#ED5564"
                      style="position: absolute;top:25%;left:0;z-index:1;"
                    ></van-checkbox>
                    <van-card
                      style="font-size: 0.6rem;
                                 color: #333;"
                      :thumb="it.goods_image"
                    >
                      <div slot="title" style="width:80%">{{it.goods_name}}</div>
                      <div
                        slot="desc"
                        style="overflow: hidden;
                              white-space: nowrap;
                              width: 70%;
                              height: 0.9rem;
                              font-size: 0.45rem;
                              line-height: 0.9rem;
                              color: #999;margin-top:30px"
                      >
                        <span>配送时间：09:00-17:00</span>
                      </div>
                      <div class="del" slot="tags" @click="del(it.goods_id)">
                        <van-icon size="17px" name="delete" />
                      </div>
                      <div slot="footer">
                        <span
                          slot="price"
                          style=" float: left;color: #F01313;
                                font-size: 0.7rem;
                                font-weight: 600;  padding-left: 60px;"
                        >￥{{it.goods_promotion_price}}</span>
                        <van-stepper
                          v-model="it.qty"
                          integer
                          @change="changeQty(it.goods_id,$event)"
                        />
                      </div>
                    </van-card>
                  </van-grid-item>
                </div>
              </van-grid>
            </van-checkbox-group>
          </van-checkbox-group>
        </div>
      </div>
      <div class="nctouch-norecord cart active" id="boxcart" style="z-index:1000;display:block">
        <div class="norecord-ico">
          <van-icon name="shopping-cart-o" />
        </div>
        <dl>
          <dt>您的购物车还是空的</dt>
          <dd>去挑一些中意的商品吧</dd>
        </dl>
        <a @click="goto('/index')" class="btn">随便逛逛</a>
      </div>
    </main>
    <div class="nctouch-cart-bottom no-login active" id="boxc" style="display:block">
      <div class="cart-nologin-tip">结算购物车中的商品，需先登录商城</div>
      <div class="cart-nologin-btn">
        <a class="btn" @click="goto('/login')">登录</a>
        <a class="btn" @click="goto('/reg')">注册</a>
      </div>
    </div>
    <van-submit-bar :price="talprice" button-text="确认信息" style="z-index:10;    bottom: 50px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: null,
      box1: false,
      box2: true,
      // result: [],
      st: null
    };
  },
  computed: {
    goodsList() {
      // if (this.$store.state.cart.cartList.length > 0) {
      //   let goodslist = this.$store.state.cart.cartList;

      //   goodslist.forEach((element, index) => {
      //     this.result.unshift(index);
      //   let shopnamepush(element.shopname);
      //   });
      //   var arrry = [];

      //   for (var i = 0; i < this.shopname.length; i++) {
      //     if (!arrry.includes(this.shopname[i])) {
      //       //includes 检测数组是否有某个值

      //       arrry.push(this.shopname[i]);
      //     }
      //   }
      //   this.shopname = arrry;
      //   this.st = 0;
      //   window.console.log(this.shopname);
      // } else {
      //   this.st = 1;
      // }
      window.console.log(1);
      return this.$store.state.cart.cartList;
    },
    shopname() {
      let goodslist = this.$store.state.cart.cartList;
      let shopname = [];
      goodslist.forEach(element => {
        shopname.push(element.shopname);
      });
      var arrry = [];

      for (var i = 0; i < shopname.length; i++) {
        if (!arrry.includes(shopname[i])) {
          //includes 检测数组是否有某个值

          arrry.push(shopname[i]);
        }
      }

      return arrry;
    },
    talprice() {
      return this.$store.getters.totalPrice;
    }
  },
  created() {
    this.status = localStorage.getItem("status");
    if (this.status === 1) {
      window.document.getElementById("boxc").style.display = "none";
    }
    let arr = this.shopname;

    if (arr.length > 0) {
      this.st = 1;
    } else {
      this.st = 0;
    }
  },
  watch: {
    st: function() {
      this.std();
    },
    status: function() {
      window.document.getElementById("boxc").style.display = "none";
    }
  },
  methods: {
    std() {
      if (this.st === 0) {
        window.document.getElementById("boxcart").style.display = "block";
        window.document.getElementById("boxc").style.display = "none";
        window.console.log(" this.st:" + this.st);
      } else {
        window.document.getElementById("boxcart").style.display = "none";
        window.document.getElementById("boxc").style.display = "block";
        window.console.log(" this.st:" + this.st);
      }
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },

    //         arrry.push(this.shopname[i]);
    //       }
    //     }
    //     this.shopname = arrry;
    //     this.st = 0;
    //     window.console.log(this.shopname);
    //   } else {
    //     this.st = 1;
    //   }
    // },
    goto(path) {
      this.$router.push(path);
    },
    gourl() {
      let url = localStorage.url;
      this.$router.push(url);
    },
    changeQty(id, nub) {
      this.$store.commit("changeQty", { id, nub });
      // window.console.log(id, nub);
    },
    del(id) {
      this.$store.commit("removeFromCart", id);

      this.get;
    }
  }
};
</script>
<style lang="scss" >
.van-card {
  padding: 10px 20px;
}
* {
  box-sizing: border-box;
}

.del {
  position: absolute;
  right: 5px;
  top: 5px;
  opacity: 0.4;
}
.van-card__thumb {
  width: 2.7rem;
  height: 2.7rem;
  padding: 0.2rem;
}
.van-card {
  width: 100%;
  background: #fff;
}

.nctouch-cart-bottom {
  position: fixed;
  z-index: 999;

  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
  background-color: rgba(255, 255, 255, 1);
  border-top: solid 0.05rem #eee;
  margin-bottom: 50px;
  .cart-nologin-tip {
    text-align: center;
    padding: 0.8rem;
    font-size: 0.6rem;
    line-height: 1rem;
    color: #ed5564;
  }
  .cart-nologin-btn {
    display: block;
    text-align: center;
  }
  .no-login {
    height: 5rem;
  }
  .btn {
    vertical-align: top;
    display: inline-block !important;

    padding: 0.2rem 0.8rem;
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
main {
  width: 100%;
  height: 100%;
  position: relative;

  .nctouch-norecord {
    position: fixed;
    z-index: 1000;
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
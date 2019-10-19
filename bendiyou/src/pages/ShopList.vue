<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:52:26
 * @LastEditTime: 2019-10-19 16:56:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="margin-bottom:50px">
    <div style="position: relative;">
      <div id="header">
        <router-link :to="path">
          <div class="header_l"></div>
        </router-link>
        <router-link to="login">
          <div class="header_r"></div>
        </router-link>
      </div>
      <div class="goods-detail-pic">
        <img :src="img" />
        <div class="xin"></div>
        <div class="dian"></div>
      </div>
      <div class="goods-detail-cnt">
        <div class="img1">
          <img src="https://img.bdyoo.com/shop/vda/06071883196486429.png" alt />
        </div>
        <div class="goods-detail-name">{{a.goods_name}}</div>
        <div class="goods-detail-price">
          <dl>
            <dt>
              ￥
              <em>{{a.goods_price}}</em>
            </dt>
          </dl>
          <span class="sold">
            人气：
            <b id="sell-rq">62</b>
          </span>
        </div>
        <div class="goods-detail-item">
          <div class="itme-name">送至</div>
          <div class="goods-detail-freight">
            全国
            <strong class="get_area_selected_whether">有货</strong>
            <p>免运费</p>
          </div>
          <div class="getTime">该商品可配送时间：09:00-18:00，现在购买，预计明天10:30前送达</div>
          <div class="itme-name1">
            已选
            <span>规格8寸</span>
          </div>
        </div>
      </div>
      <div class="goods-detail-comment">
        商品评价
        <span class="rate">
          好评率
          <em>100%</em>
        </span>
      </div>
      <div class="goods-detail-store">
        <div class="store-name">
          <i class="icon-store"></i>
          {{a.store_name}}
        </div>
        <div class="store-rate">
          <span class="equal">
            描述相符
            <em>5.0</em>
            <i>平</i>
          </span>
          <span class="equal">
            服务态度
            <em>5.0</em>
            <i>平</i>
          </span>
          <span class="equal">
            发货速度
            <em>5.0</em>
            <i>平</i>
          </span>
        </div>
        <div class="item-more"></div>
      </div>
      <div class="goods-detail-recom">
        <h4>店铺推荐</h4>
        <ul>
          <li v-for="item in Recommend" :key="item.goods_id">
            <div class="pic">
              <img :src="item.goods_image_url" alt />
            </div>
            <dl>
              <dt>{{item.goods_name}}</dt>
              <dd>
                ￥
                <em>{{item.goods_promotion_price}}</em>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="img2">
        <img src="https://img.bdyoo.com/shop/vda/06118572013126950.png" alt />
      </div>
      <div class="goods-detail-bottom">
        <a href="###" class="goodsBody1">商品详情</a>
      </div>
      <div class="top-template">
        <img
          src="https://img.bdyoo.com/shop/store/goods/96/2019/07/96_06174760205007481.png-w800"
          alt
        />
      </div>
      <div class="default">商家自配送，四公里免费配送，超过四公里10元配送费，超过6公里自取</div>
      <div class="img3">
        <img src="https://i.bdyoo.com/data/upload/mobile/nomore.jpg" alt />
      </div>
      <div class="img4">
        <img src="https://img.bdyoo.com/shop/vda/05435114251250859.jpg" alt />
      </div>
      <router-link to="/index">
        <div class="huizhuye"></div>
      </router-link>

      <van-goods-action style=" z-index: 99999;">
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :info="cartlength"
          to="cart"
          @click="gturl"
        />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickIcon" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ShopList: [],
      Recommend: [],
      path: "",
      a: [],
      id: 0,
      op: "goods_detail",
      img: ""
    };
  },
  methods: {
    gturl() {
      localStorage.url = this.$route.name;
    },
    async onClickIcon() {
      window.console.log(this.$route.query.id);
      let id = this.$route.query.id;
      var good;
      let currentGoods = this.$store.state.cart.cartList.filter(
        item => item.goods_id === id
      )[0];
      if (currentGoods) {
        let qty = currentGoods.qty++;
        this.$store.commit("changeQty", { id, qty });
      } else {
        if (localStorage.path == "goodsList") {
          let data = await this.$axios.get(
            "http://10.3.133.30:2999/goods/" + id
          );
          good = {
            goods_id: id,
            goods_image: data.datas[0].goods_image.split(",")[0],
            goods_name: data.datas[0].goods_name,
            goods_promotion_price: data.datas[0].goods_promotion_price,
            qty: data.datas[0].sell_out,
            shopid: data.datas[0].store_id,
            shopname: data.datas[0].store_name
          };
        } else {
          let {
            data: { datas }
          } = await await this.$axios.get(
            "https://s.bdyoo.com/mobile/index.php",
            {
              params: {
                act: "goods",
                op: this.op,
                goods_id: id,
                key: "",
                dis_id: ""
              }
            }
          );
          good = {
            goods_id: id,
            goods_image: datas.goods_image.split(",")[0],
            goods_name: datas.goods_info.goods_name,
            goods_promotion_price: datas.goods_info.goods_price,

            shopid: datas.store_info.store_id,
            shopname: datas.store_info.store_name
          };
        }

        this.$store.commit("adcart", good);
      }
    },
    onClickButton() {},
    goto() {
      this.$route.push(this.path);
    },
    go(path) {
      this.$route.push(path);
    }
  },

  async created() {
    this.id = this.$route.query.id;
    // console.log(this.$route);
    this.path = localStorage.path;
    // if (this.$route.query.op) {
    //   this.op = this.$route.query.op;
    // }

    let {
      data: { datas }
    } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
      params: {
        act: "goods",
        op: this.op,
        goods_id: this.id,
        key: "",
        dis_id: ""
      }
    });
    this.ShopList = datas;
    this.Recommend = datas.goods_commend_list;
    this.a = datas.goods_info;
    this.img = this.ShopList.goods_image.split(",")[0];
  },
  computed: {
    cartlength() {
      // return this.$store.state.cartlist.length;
      return this.$store.getters.cartlength;
    }
    // currentUser() {
    //   return this.$store.state.common.user;
    // }
  }
  // watch: {
  //   $route: function() {
  //     this.path = this.$route.name;
  //   }
  // }
  // beforeRouteUpdate(to, from, next) {
  //   console.log("beforeRouteUpdate:", to, from);
  //   if (to.name != from.name) {
  //     this.path = from.path;
  //   }
  //   next();
  // }
};
</script>
<style lang="scss" scoped >
#header {
  height: 2rem;
  position: absolute;

  z-index: 12;
  top: 10px;
  left: 0;
  right: 0;
  bottom: auto;
  // border-bottom: solid 0.05rem #eee;
  // background: red;
}
.header_l {
  width: 1.95rem;
  height: 1.95rem;
  position: absolute;
  top: 0;
  left: 0.266667rem;
  background: #eee;
  border-radius: 50%;
  background-image: url(../img/zuo.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  opacity: 1;
}

.header_r {
  width: 1.95rem;
  height: 1.95rem;
  position: absolute;
  top: 0;
  right: 0.266667rem;
  background: #eee;
  border-radius: 50%;
  background-image: url(../img/san.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  opacity: 1;
}
.goods-detail-pic {
  position: relative;
  overflow: hidden;
  // z-index: -1;
  width: 100%;
  height: 400px;
  // background: gold;
  margin: 0 auto;
}
.goods-detail-pic img {
  width: 100%;
  height: 352px;
}
.goods-detail-pic .xin {
  width: 30px;
  height: 30px;
  border: solid 0.05rem #eee;
  float: right;
  margin-right: 20px;
  border-radius: 50%;
  background-image: url(../img/aixin.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
}
.goods-detail-pic .dian {
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 10px;
}
.goods-detail-cnt {
  background: #ffffff;
  position: relative;
  // z-index: 1;
  height: 230px;

  /* margin-top: 16rem; */
}
.goods-detail-cnt .img1 {
  width: 100%;
  height: 29px;
  // background: gold;
}
.goods-detail-cnt .img1 img {
  width: 100%;
  height: 100%;
}
.goods-detail-name {
  display: block;
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  background-color: #fff;
  border-top: solid 0.05rem #eee;
}
.goods-detail-price {
  position: relative;
  z-index: 1;
  display: block;
  padding: 0 0.5rem;
  background-color: #fff;
}
.goods-detail-price dl {
  display: inline-block;
}
.goods-detail-price dt {
  display: inline-block;
  font-size: 0.55rem;
  color: #db4453;
  line-height: 1rem;
}
.goods-detail-price dt em {
  font-size: 1rem;
}
.goods-detail-price .sold {
  position: absolute;
  z-index: 1;
  top: 0.25rem;
  right: 0.75rem;
  display: block;
  font-size: 0.55rem;
  line-height: 2.8rem;
}
.goods-detail-item {
  position: relative;
  z-index: 1;
  padding: 0.5rem;
  background: #fff;
  height: 100px;
}
.goods-detail-item .itme-name {
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  left: 0.5rem;
  display: block;
  width: 1.6rem;
  height: 0.9rem;
  font-size: 0.6rem;
  color: #888;
  line-height: 0.9rem;
}
.goods-detail-freight {
  width: 302px;
  height: 42px;
  // background: #db4453;
  margin-left: 25px;
  overflow: hidden;
  font-size: 0.6rem;
  color: #333;
  padding-top: 2px;
}
.goods-detail-freight .get_area_selected_whether {
  color: #ed5564;
  margin-left: 0.6rem;
}
.goods-detail-freight p {
  font-size: 0.55rem;
  color: #888;
}
.goods-detail-item .getTime {
  color: #666;
  font-size: 0.75rem;
}
.goods-detail-item .itme-name1 {
  position: absolute;
  z-index: 1;
  top: 5.5rem;
  left: 0.5rem;
  display: block;
  // width: 100px;
  height: 0.9rem;
  font-size: 0.6rem;
  color: #888;
  line-height: 0.9rem;
  // border-top: solid 0.05rem #eee;
}
.goods-detail-item .itme-name1 span {
  display: inline-block;
  width: 50px;
  height: 15px;
  border: 1px solid #888;
  text-align: center;
  margin-left: 5px;
}
.goods-detail-comment {
  background-color: #fff;
  height: 29px;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  border-top: solid #eee 0.05rem;
  border-bottom: solid #eee 0.05rem;
  font-size: 0.6rem;
  line-height: 29px;
  color: #888;
}
.goods-detail-comment .rate {
  font-size: 0.55rem;
  margin-left: 1rem;
  color: #ed5564;
}
.goods-detail-comment .rate em {
  font-size: 0.6rem;
  font-weight: 600;
  margin-left: 0.2rem;
}
.goods-detail-store {
  display: block;
  position: relative;
  z-index: 1;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
  background: #fff;
  border: solid #eee;
  border-width: 0.05rem;
}
.goods-detail-store.store-name {
  height: 0.9rem;
  padding: 0.5rem 0 0.25rem 0;
  font-size: 0.7rem;
  line-height: 0.9rem;
  color: #333;
}
.goods-detail-store .store-name .icon-store {
  display: inline-block;
  width: 1.2rem;
  height: 1.5rem;
  vertical-align: top;
  margin-right: 0.2rem;
  background-image: url(../img/dan.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  opacity: 0.75;
}
.goods-detail-store .store-rate {
  height: 0.7rem;
  padding: 0.4rem 0 0.5rem 0;
  border-top: solid 0.05rem #eee;
  font-size: 0;
}
.goods-detail-store .store-rate span {
  display: inline-block;
  width: 33.33%;
  height: 0.7rem;
  font-size: 0.55rem;
  line-height: 0.7rem;
  color: #888;
}
.goods-detail-store .store-rate span em {
  color: #ed5564;
}
.goods-detail-store .store-rate span i {
  display: inline-block;
  vertical-align: middle;
  width: 0.7rem;
  height: 0.7rem;
  font-size: 0.45rem;
  line-height: 0.7rem;
  font-style: normal;
  text-align: center;
  border-radius: 0.1rem;
  margin-left: 5px;
}
.goods-detail-store .store-rate span.equal i {
  color: #fff;
  background-color: #ed5564;
}
.item-more {
  position: absolute;
  z-index: -1;
  top: 0.5rem;
  right: 0.5rem;
  display: block;
  width: 0.8rem;
  height: 0.9rem;
  background-image: url(../img/you.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  opacity: 0.4;
}
.goods-detail-recom {
  background: #fff;
  padding: 0 0 0 0.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: solid #eee;
  border-width: 0.05rem;
  overflow: hidden;
}
.goods-detail-recom h4 {
  display: block;
  height: 0.9rem;
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: #888;
  line-height: 0.9rem;
}
.goods-detail-recom ul li {
  display: inline-block;
  width: 22%;
  margin: 0 3% 0.4rem 0;
}
.goods-detail-recom .pic {
  display: block;
  width: 4.525rem;
  height: 4.525rem;
  border: solid 0.05rem #eee;
}
.goods-detail-recom .pic img {
  display: block;
  width: 100%;
  height: 100%;
}
.goods-detail-recom dl {
  margin-top: 0.2rem;
}
.goods-detail-recom dt {
  display: block;
  overflow: hidden;
  height: 1.2rem;
  font-size: 0.5rem;
  line-height: 0.6rem;
  color: #777;
  margin-bottom: 0.2rem;
}
.goods-detail-recom dd {
  font-size: 0.45rem;
  color: #333;
  width: 100%;
  margin: 0;
  padding: 0;
}
.goods-detail-recom dd em {
  font-size: 0.55rem;
}
.img2 {
  width: 100%;
  height: 39px;
}
.img2 img {
  width: 100%;
  height: 100%;
}
.goods-detail-bottom a {
  display: inline-block;
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1rem;
  color: #666;
  background-color: #fafafa;
  text-align: center;
}
.top-template {
  width: 100%;
  height: 609px;
}
.top-template img {
  width: 100%;
  height: 100%;
}
.default {
  width: 100%;
  height: 50px;
}
.img3 {
  width: 100%;
  height: 36px;
}
.img3 img {
  width: 100%;
  height: 100%;
}
.img4 {
  width: 100%;
  height: 55px;
  margin-bottom: 50px;
}
.img4 img {
  width: 100%;
  height: 100%;
}
.huizhuye {
  width: 38px;
  height: 38px;
  background: #ffffff;
  position: fixed;
  top: 480px;
  left: 9px;
  z-index: 20;
  border-radius: 50%;
  border: 1px solid gainsboro;
  background-image: url(../img/hui.png);
  background-size: 60% 60%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: 0.6;
}
</style>
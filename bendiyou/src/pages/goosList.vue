<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 15:05:26
 * @LastEditTime: 2019-10-16 17:44:29
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <header style="color:#000;position: fixed;
  top: 0;
  left: 0;width:100%;z-index:9999">
      <van-nav-bar
        style="color:#000;width:100%;border-bottom: solid 0.05rem #EEE"
        @click-left="onClickLeft"
      >
        <van-icon name="arrow-left" slot="left" size="25px" color="#000" />
        <van-search
          placeholder="在此搜索你想要的....."
          v-model="value"
          slot="title"
          style="color:#000 ;margin-top:5px;padding: 0;"
        />
        <div slot="right">
          <!-- <van-grid>
            <van-grid-item icon="chat-o" text="分类" />
            <van-grid-item icon="chat-o" size="25px" color="#000" @click="goto('/login')" />
          </van-grid>-->
          <van-icon name="chat-o" size="25px" color="#000" @click="goto('/login')" />
        </div>
      </van-nav-bar>
      <div style="    background: rgba(255,255,255,0.95);">
        <van-row>
          <van-col span="20">
            <van-dropdown-menu active-color="#ee0a24">
              <van-dropdown-item v-model="value1" :options="option1" />

              <van-dropdown-item v-model="value3" :options="option3" />

              <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
          </van-col>
          <van-col
            span="4"
            style="height:50px; line-height: 100%;text-align: center;    border-bottom: solid 0.05rem #EEE;"
          >
            <van-icon name="apps-o" style="height:100%; line-height: 50px;text-align: center" />
          </van-col>
        </van-row>
      </div>
    </header>
    <main>
      <ul class="goods-list" style="background-color: #f5f5f5;">
        <van-grid :border="false" :column-num="2" gutter="8">
          <van-grid-item style="margin-bottom:5px;" v-for="(item,index) in goodsdata" :key="index">
            <li class="goods-list-li" style="width:100%">
              <a @click="goto('/goodsList')">
                <div class="goods-pic">
                  <img
                    @click="goto('/goodsList')"
                    alt
                    :id="item.goods_id"
                    :src="item.goods_image"
                    lazy="loaded"
                  />
                </div>
              </a>
              <dl class="goods-info">
                <dt class="goods-name">{{item.goods_name}}</dt>
                <dd class="goods-price">
                  ￥
                  <em>{{item.goods_promotion_price}}</em>
                  <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
                </dd>
                <dd class="goods-assist">
                  <span class="goods-sold">
                    销量
                    <em>{{item.sell_out}}</em>
                  </span>
                  <div class="goods-store">
                    <a href="javascript:void(0);" data-id="88">{{item.store_name}}</a>

                    <div class="sotre-creidt-layout" style="display: none;"></div>
                  </div>
                </dd>
              </dl>
            </li>
          </van-grid-item>
        </van-grid>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      goodsdata: [],
      value1: 0,
      value2: "a",
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [{ text: "筛选", value: "a" }],
      option3: [{ text: "销量优先", value: 0 }]
    };
  },
  async created() {
    let datas = await this.$axios.get("http://10.3.133.30:2999/goods");
    this.goodsdata = datas.data;
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>
<style lang="scss">
.van-ellipsis {
  font-size: 0.65rem;
}
.goods-list {
  margin-bottom: 0 !important;
  li {
    background-color: #fff;
    vertical-align: top;
    display: inline-block;
    width: 46%;
    overflow: hidden;
    border-radius: 0.2rem;
    position: relative;
    text-decoration: none;
    margin: 5px;
    .quick_add_cart {
      display: block;
      float: right;
      height: 90%;
      margin-top: 1.5%;
      margin-right: 4%;
      z-index: 1000;
      color: #d50012;
    }
    a {
      display: block;
    }
    .goods-pic {
      width: 100%;
      img {
        width: 100%;
      }
    }
    dl {
      padding: 0.2rem;
      .goods-name {
        display: block;
        font-size: 0.65rem;
        line-height: 0.8rem;
        color: #000;
        height: 1.6rem;
        overflow: hidden;
      }
    }
    .goods-assist {
      display: block;
      height: 1rem;
      padding-bottom: 0.2rem;
      overflow: hidden;
    }
    .goods-sold {
      font-size: 0.55rem;
      line-height: 1rem;
      color: #999;
      display: block;
      float: left;
      em {
        color: #000;
        vertical-align: middle;
        font-weight: 600;
      }
    }
    .goods-store {
      float: right;
      font-size: 0.55rem;
      line-height: 1rem;
      a {
        font-size: 0.55rem;
        color: #888;
      }
      .sotre-creidt-layout {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    }
    .goods-price {
      display: block;
      font-size: 0.55rem;
      line-height: 1rem;
      height: 1rem;
      margin-top: 0.4rem;
      color: #db4453;
      border-top: solid 0.05rem #eee;
      em {
        font-size: 0.7rem;
        font-weight: 600;
      }
    }
  }
}
main {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
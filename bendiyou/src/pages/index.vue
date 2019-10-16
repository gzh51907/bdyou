<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:19:13
 * @LastEditTime: 2019-10-16 19:01:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <van-sticky z-index="9999">
      <header style=" background:#d50012" id="header">
        <van-row>
          <van-col span="24">
            <van-row>
              <van-col offset="0" span="4">
                <van-icon name="location" size="20px" color="#fff" style="margin:7px 0 0 7px" />
              </van-col>
              <van-col offset="16" span="4" style="text-align: right">
                <van-icon
                  @click="goto('/login')"
                  name="chat-o"
                  size="25px"
                  color="#fff"
                  style="margin:7px 7px 0 0; "
                />
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </header>
    </van-sticky>
    <main style=" margin-bottom: 50px;">
      <div>
        <van-search background="#d50012" shape="round" placeholder="美食上新了" v-model="value" />
      </div>
      <div style="position: relative;">
        <div class="bg">
          <van-tag color="#d50012" size="medium">蔬菜</van-tag>
          <van-tag color="#d50012" size="medium">水果</van-tag>
          <van-tag color="#d50012" size="medium">牛奶</van-tag>
          <van-tag color="#d50012" size="medium">鲜肉</van-tag>
          <van-tag color="#d50012" size="medium">酒</van-tag>
          <van-tag color="#d50012" size="medium">饮料</van-tag>
        </div>
        <div class="bdg">
          <div class="I_bg">
            <van-grid :border="false" :column-num="5" :gutter="0">
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem"
                  fit="contain"
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980707886753.png"
                />
                <span>肉禽蛋类</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980780845912.png"
                ></van-image>
                <span>田园蔬菜</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980839413876.png"
                />
                <span>时令水果</span>
              </van-grid-item>

              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980888725904.png"
                />
                <span>水产海鲜</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980927988268.png"
                />
                <span>干活粮油</span>
              </van-grid-item>

              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204980980082868.png"
                />
                <span>精品副食</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204981339843841.png"
                />
                <span>酒水饮料</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204981380975268.png"
                />
                <span>日用百货</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204981419630552.png"
                />
                <span>礼品鲜花</span>
              </van-grid-item>
              <van-grid-item>
                <van-image
                  width="2.65rem"
                  height="2.65rem "
                  src="https://img.bdyoo.com/mobile/special/s0/s0_06204981469321218.png"
                />
                <span>蛋糕甜点</span>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </div>
      <div
        style="width: 94.1%;
        margin: 0 3% 0.5rem;
        height: 3.9rem;
        border-radius: 0.2rem;margin-top:0.5rem"
      >
        <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06219701267469461.jpg"></van-image>
      </div>

      <van-row style="margin-top:40px;padding:5px 0;  box-sizing: border-box;height:60px ">
        <van-col span="6">
          <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06125265524410924.png"></van-image>
        </van-col>

        <van-col span="18" style="height:60px">
          <van-swipe style=" height:60px;" :autoplay="2000" :show-indicators="false" vertical>
            <van-swipe-item style=" font-size: 0.6rem">
              <van-panel title="本地专有"></van-panel>
            </van-swipe-item>
            <van-swipe-item style=" font-size: 0.6rem">
              <van-panel title="本地大放送"></van-panel>
            </van-swipe-item>
            <van-swipe-item style=" font-size: 0.6rem">
              <van-panel title="好货享不停"></van-panel>
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>
      <div style=" padding: 0.2rem;">
        <h4
          style="    font-size: 0.77rem;
                      font-weight: 500;
                      text-indent: 3%;
                      margin-top: 0.5rem;
                      margin-bottom: 0.4rem;
                      font-family: 'SourceHanSansCN-Medium';"
        >轻松更便捷</h4>
        <van-row gutter="2">
          <van-col span="12">
            <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06150378820269105.jpg"></van-image>
          </van-col>
          <van-col span="12">
            <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06150378943393432.jpg"></van-image>
          </van-col>
        </van-row>
      </div>
      <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06227369224495267.jpg"></van-image>
      <ul class="goods-list" style="background-color: #f5f5f5;">
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_109229"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06239483096264063.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">晓蜜香甜哈密瓜 新鲜水果 约3斤半-4斤</dt>
            <dd class="goods-price">
              ￥
              <em>20.00</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_109230"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06239496916392196.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">香甜钻石橙 橙子 新鲜水果 约1KG</dt>
            <dd class="goods-price">
              ￥
              <em>22.00</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_109231"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06239495484063741.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">清甜爽口香梨 梨子 清甜爽口 新鲜水果 1000g</dt>
            <dd class="goods-price">
              ￥
              <em>8.00</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_108103"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06241045845234864.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">蜜饯果干 新疆特产 红枣 500g</dt>
            <dd class="goods-price">
              ￥
              <em>9.90</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_109312"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06243628600038155.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">安井牛奶馒头 240g</dt>
            <dd class="goods-price">
              ￥
              <em>2.90</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
        <li class="goods-list-li">
          <a href="###">
            <div class="goods-pic">
              <img
                alt
                id="goods_img_109203"
                src="https://img.bdyoo.com/shop/store/goods/86/2019/10/86_06243633149482473.jpg-wh360"
                lazy="loaded"
              />
            </div>
          </a>
          <dl class="goods-info">
            <dt class="goods-name">缕缕香软香米 约二十斤</dt>
            <dd class="goods-price">
              ￥
              <em>49.50</em>
              <van-icon name="add" class="quick_add_cart" size="2em"></van-icon>
            </dd>
          </dl>
          <!---->
        </li>
      </ul>
      <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06227369224495267.jpg"></van-image>
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
              </dl>
            </li>
          </van-grid-item>
        </van-grid>
      </ul>
      <van-row>
        <van-col span="24">
          <van-image src="https://img.bdyoo.com/mobile/special/s0/s0_06179980987406080.jpg"></van-image>
        </van-col>
      </van-row>
      <div style=" margin-bottom: 100px;">
        <div class="nav-text">
          <a href="###">登录</a>
          <a href="###">注册</a>
          <a href="###">商家中心</a>
          <a href="###">反馈</a>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      goodsdata: []
    };
  },
  async created() {
    let datas = await this.$axios.get("http://10.3.133.30:2999/goods");
    this.goodsdata = datas.data;
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" >
.bg {
  background-color: #d50012;
  text-align: center;
  padding-bottom: 20px;
}
.bdg {
  padding: 0.5rem;
  padding-bottom: 0;
  box-sizing: border-box;
  margin-top: -20px;

  .I_bg {
    z-index: 10;
    height: 150px;

    span {
      display: block;
      font-size: 0.6rem;
      text-align: center;
      width: 2.9rem;
      line-height: 1rem;
      height: 1rem;
      font-family: "MicrosoftYaHei";
    }
  }
}
.van-grid-item__content {
  padding: 0;
}
.nav-text {
  padding: 0.6rem 0;
  font-size: 0;
  text-align: center;

  border-bottom: solid 0.05rem #eee;

  a {
    display: inline-block !important;
    width: 24%;
    height: 0.6rem;
    font-size: 0.6rem;
    line-height: 0.6rem;
    color: #555 !important;
    border-left: solid 0.05rem #eee;
  }
  a:first-child {
    border-left: 0;
  }
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
</style>
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:48:38
 * @LastEditTime: 2019-10-19 16:54:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div id="location">
      <img src="../img/da.png" alt class="img1" />
      <img src="../img/daxing.png" alt class="img2" />
      <router-link to="login">
        <img src="../img/wei.png" alt class="img3" />
      </router-link>
    </div>
    <h4 class="front_title">附近商家</h4>
    <div class="store_class_container" style="margin-bottom:50px">
      <el-tabs type="border-card" v-model="activeName" @tab-click="ShopList(activeName)">
        <el-tab-pane label="全部店铺" name="0">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="综合商超类" name="14">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="生鲜水果类" name="3">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="酒水副食类" name="4">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="3C数码类" name="7">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="美妆个护类" name="9">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="花卉宠物类" name="11">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服装童装类" name="13">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="工农器具类" name="18">
          <div class="store_container" v-for="item in classify" :key="item.goods_id">
            <div class="front_store_each">
              <div class="store_each_left">
                <img :src="item.store_avatar" alt />
              </div>
              <div class="store_each_right">
                <div class="store_each_name">
                  <h4>{{item.store_name}}</h4>
                  <div class="store_time_distance">
                    <span class="right_small_text">{{item.distance_info.distance}}</span>
                    <span class="right_small_text">{{item.distance_info.duration}}</span>
                  </div>
                  <div class="store_credit">
                    <span class="right_small_text">信用度：</span>
                    <div class="store_credit_star">
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                      <img src="../img/xing.png" alt />
                    </div>
                  </div>
                  <div class="store_sale_amount">
                    <span class="right_small_text">商品数量{{item.goods_count}}件</span>
                    <span class="right_small_text">最近成交{{item.num_sales_jq}}笔</span>
                  </div>
                  <div class="store_favorable_rate">
                    <span class="right_small_text">好评率：</span>
                    <span class="right_small_text">{{item.store_ate_acclaim}}%</span>
                  </div>
                  <div class="store_goods_info">
                    <div class="store_goods_list">
                      <div
                        class="goods_li"
                        v-for="item2 in item.store_goods_distinct"
                        :key="item2.goods_id"
                        @click="goto(item2.goods_id)"
                      >
                        <img :src="item2.goods_image_url" alt />
                        <div class="store_goods_each">
                          <span class="store_goods_price">￥{{item2.goods_price}}</span>
                          <span class="store_goods_name">{{item2.goods_name}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classify: [],
      activeName: "0",
      i: "0"
    };
  },
  created() {
    //发送ajax请求
    // console.log(111);
    this.ShopList("0");

    // let {
    //   data: {
    //     datas: { store_list }
    //   }
    // } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
    //   params: {
    //     act: "store_list",
    //     curpage: " 1",
    //     sc_id: "0",
    //     lat: "",
    //     lng: ""
    //   }
    // });
    // // console.log(store_list);
    // //数据
    // // this.classify = store_list;

    // store_list.forEach(item => {
    //   this.classify.push(item);
    // });

    // console.log(this.classify);
  },
  methods: {
    goto(id) {
      localStorage.path = "shop";
      this.$router.push({ name: "shopList", query: { id } });
    },
    gourl() {
      let url = localStorage.url;
      this.$$router.push(url);
    },
    async ShopList(i) {
      //发送ajax请求
      this.classify = [];

      // console.log(i);
      let {
        data: {
          datas: { store_list }
        }
      } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
        params: {
          act: "store_list",
          curpage: "1",
          sc_id: i,
          lat: "",
          lng: ""
        }
      });

      //数据
      // this.classify = store_list;

      store_list.forEach(item => {
        this.classify.push(item);
      });

      // console.log(this.classify);
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 970px;
  background-color: #f2f2f3;
}
#location {
  height: 2rem;
  width: 100%;
  background-color: #d50012;
  position: fixed;
  background-image: url(../img/choose_location.png);
  background-repeat: no-repeat;
  padding-left: 1.6rem;
  z-index: 100;
  overflow: hidden;
  background-position: 0.4rem 0.4rem;
  // max-width: 640px;
  background-size: 5%;
  top: 0;
}
#location .img1 {
  height: 1.14rem;
  width: 1.14rem;
  /* background: url(../images/search_icon.png) no-repeat; */
  margin: 0.42rem 4% 0 60%;
  float: left;
  display: block;
}
#location .img2 {
  height: 1.14rem;
  width: 1.14rem;
  /* background: url(../images/search_icon.png) no-repeat; */
  margin: 0.42rem 4% 0 3%;
  float: left;
  display: block;
}
#location .img3 {
  height: 1.14rem;
  width: 1.14rem;
  /* background: url(../images/search_icon.png) no-repeat; */
  margin: 0.42rem 4% 0 3%;
  float: left;
  display: block;
}
.front_title {
  font-weight: 500;
  padding-left: 4%;
  font-size: 1rem;
  font-family: sans-serif, MicrosoftYaHei, SimHei;
  margin-bottom: 10px !important;
  margin-top: 2.5rem !important;
}
.store_class_container {
  z-index: 99;
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f2f2f3;
  overflow: hidden;
  margin-bottom: 0.066667rem;
}
.store_class_list {
  position: relative;
  /* width: 92%; */
  margin: 0.2rem 4%;
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 100;
  background-color: #f2f2f3;
  margin-bottom: 0.133333rem;
}
.li {
  height: 1.5rem;
  width: 23% !important;
  border-radius: 0.1rem;
  background-color: #ddd;
  text-align: center;
  margin-right: 5px;
  color: rgb(52, 52, 52);
  font-size: 0.7rem;
  text-align: center;
  line-height: 1.5rem;
}
.front_store_each {
  width: 92%;
  height: 200px;
  margin: 0 4% 0.5rem;
  background-color: #fff;
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
}
.store_each_left {
  position: relative;
  width: 16.2%;
  margin: 0 2%;
  height: 100%;
  float: left;
  // background: #000;
}
.store_each_left img {
  display: block;
  width: 100%;
  margin-top: 0.45rem;
  border-radius: 0.2rem;
}
.store_each_right {
  float: left;
  position: relative;
  height: 100%;
  width: 79.5%;
  overflow: hidden;
  // background: #d50012;
}
.store_each_name h4 {
  font-size: 0.77rem;
  display: inline-block;
  font-weight: 500;
  margin: 0.5rem 0 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: sans-serif, MicrosoftYaHei, SimHei;
}
.store_time_distance {
  display: block;
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
.right_small_text {
  font-size: 0.5rem;
  color: rgba(164, 164, 164, 1);
  font-weight: 400;
  font-family: sans-serif, SimHei, MicrosoftYaHei;
  line-height: 15px;
  margin-left: 0.15rem;
}
.store_credit {
  line-height: 12px;
  // padding: 2px 0;
  // margin-top: 2px;
  // margin-bottom: 1.2rem;
}
.store_credit_star {
  display: inline-block;
  height: 100%;
  margin-left: -8px;
  // background: #d50012;
}
.store_credit_star img {
  display: block;
  float: left;
  margin: 0 1px;
}
.store_sale_amount {
  line-height: 12px;
  margin-top: 4px;
}
.store_favorable_rate {
  line-height: 12px;
  margin-top: 4px;
}
.store_goods_info {
  // overflow: hidden;
  height: 4.59rem;
  position: relative;
}
.goods_li {
  height: 5rem;
  width: 3.1rem !important;
  margin-right: 4px;
  margin-top: 6px;
  float: left;
}
.goods_li img {
  display: block;
  height: 3.8rem;
  width: 100%;
  margin: 0 auto;
  background-color: rgb(245, 245, 245);
}
.store_goods_each {
  /* height: 17px; */
  overflow: hidden;
}
.store_goods_price {
  display: block;
  font-size: 10px;
  /* width: 1.5rem; */
  color: #e60012;
  line-height: 17px;
  height: 0.7rem;
  line-height: 0.8rem;
  text-align: center;
}
.store_goods_name {
  display: block;
  font-size: 10px;
  /* width: 1.1rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  line-height: 17px;
  /* transform: scale(0.8); */
  /* float: left; */
  height: 0.7rem;
  line-height: 0.8rem;
  text-align: center;
}
</style>
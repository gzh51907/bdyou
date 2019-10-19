<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:29:58
 * @LastEditTime: 2019-10-19 17:05:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <van-nav-bar
      style="color:#000;position: fixed;
  top: 0;
  left: 0;width:100%;border-bottom: solid 0.05rem #EEE"
    >
      <van-icon name="arrow-left" slot="left" size="25px" color="#000" @click="gourl" />
      <van-search
        placeholder="美食上新了"
        v-model="value"
        slot="title"
        style="color:#000 ;margin-top:5px;padding: 0;"
      />
      <van-icon name="chat-o" slot="right" size="25px" color="#000" @click="goto('/login')" />
    </van-nav-bar>

    <main style="margin:50px 0 ">
      <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <div style="position: fixed;overflow: auto; height:500px">
            <div v-for="(item) in childrenlist" :key="item.gc_id">
              <div>
                <img
                  style="
                   width: 90%;
                   margin-left: 6%;"
                  :src="item.gc_img"
                  alt
                />
                <van-grid :border="false" :column-num="3" style="margin-botton:5px ">
                  <van-grid-item
                    v-for="(it) in item.child"
                    :key="it.gc_id"
                    style="margin:10px 0"
                    to="goodsList"
                  >{{it.gc_name}}</van-grid-item>
                </van-grid>
              </div>
            </div>
          </div>
        </template>
      </van-tree-select>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      activeIndex: 0,
      items: [],
      listid: [],
      childrenlist: []
    };
  },
  watch: {
    activeIndex: async function() {
      let gc_id = this.listid[this.activeIndex];

      let {
        data: {
          datas: { class_list }
        }
      } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
        params: {
          act: "goods_class",
          op: "get_child_all",
          gc_id: gc_id
        }
      });
      this.childrenlist = class_list;
    }
  },

  async created() {
    let {
      data: {
        datas: { class_list }
      }
    } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
      params: {
        act: "goods_class"
      }
    });
    let {
      data: {
        datas: { class_list: class_lists }
      }
    } = await this.$axios.get("https://s.bdyoo.com/mobile/index.php", {
      params: {
        act: "goods_class",
        op: "get_child_all",
        gc_id: 3243
      }
    });
    this.childrenlist = class_lists;

    class_list.forEach(element => {
      this.items.push({ text: `${element.gc_name}` });
    });
    class_list.forEach(element => {
      this.listid.push(element.gc_id);
    });
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    gourl() {
      let url = localStorage.url;
      this.$router.push(url);
    }
  }
};
</script>
<style lang="scss" >
.van-sidebar-item--select {
  color: #323233;
  font-weight: 500;
  border-color: #ee0a24;
  background-color: #fff;
  color: #ee0a24;
}
.van-sidebar-item--select {
  margin-bottom: 0;
}
</style>
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:19:31
 * @LastEditTime: 2019-10-19 10:03:03
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <header style=" border-bottom: solid 0.05rem #EEE;   background: #F5F5F5;">
      <van-nav-bar style="color:#000" title="会员注册">
        <van-icon @click="goto('/index')" name="wap-home-o" slot="left" size="25px" color="#000" />
        <span style="color:#EE6774" slot="right" @click="goto('/login')">登录</span>
      </van-nav-bar>
    </header>
    <van-cell-group :model="ruleForm" style="margin-left:15px;">
      <van-field
        v-model="ruleForm.username"
        clearable
        label="账号"
        placeholder="请输入用户名/已验证手机"
        @blur="checkUsername(ruleForm.username)"
      />
      <van-field
        v-model="ruleForm.password"
        clearable
        type="password"
        label="密码"
        placeholder="请输入密码"
        error-message
      />
      <van-field
        v-model="ruleForm.checkPass"
        clearable
        type="password"
        label="确认密码"
        placeholder="请再一次密码"
      />
    </van-cell-group>
    <div class="L_box2">
      <van-button type="primary" size="large" @click="submitForm('ruleForm')">注册</van-button>
    </div>
    <div class="error-tips" v-if="show">
      <p>{{content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      show: false,
      content: ""
    };
  },
  methods: {
    async checkUsername(username) {
      let { data } = await this.$axios.get(
        "http://10.3.133.30:2999/users/check",
        {
          params: {
            username: username
          }
        }
      );
      if (data.code === 0) {
        this.show = true;
        this.content = "该账号已被注册";
      } else {
        this.show = false;
      }
    },
    goto(path) {
      this.$router.push(path);
    },
    async submitForm() {
      // console.log(this.ruleForm);
      let username = this.ruleForm.username;
      let password = this.ruleForm.password;
      let checkPass = this.ruleForm.checkPass;
      if (username === "" || password === "" || checkPass != password) {
        this.show = true;
        this.content = "请重新输入！";
      } else {
        let { data } = await this.$axios.post(
          "http://10.3.133.30:2999/users/reg",
          { username, password }
        );
        // console.log(data)
        if (data.code === 1) {
          this.$message({
            type: "info",
            message: "注册成功"
          });
          setTimeout(() => {
            this.$router.replace({
              name: "login",
              params: { username }
            });
          }, 1000);
        } else {
          alert("注册失败");
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.L_box2 {
  margin: 5%;
  padding-top: 5%;

  .van-button--large {
    height: 1.8rem;
    line-height: 1.8rem;
  }
}
.van-nav-bar__title {
  margin-left: 70px;
}
.error-tips {
  /* display: none; */
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 0.05rem #ccc;
  padding: 0.6rem 0.6rem;
  text-align: center;
  border-radius: 0.6rem;
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 25%;
  right: 25%;
  color: #333;
  font-size: 0.7rem;
  line-height: 1rem;
  box-shadow: 0 0 1rem #bbb;
  p {
    color: rgba(241, 104, 13, 0.61);
    font-size: 13px;
  }
}
</style>

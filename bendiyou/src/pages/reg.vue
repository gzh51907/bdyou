<template>
  <div>
    <div class="header">
      <div class="header_left"></div>
      <div class="header_zhong">会员注册</div>
      <router-link to="/login">
        <div class="header_right">登录</div>
      </router-link>
    </div>
    <div class="main">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        //失败
        callback(new Error("两次输入密码不一致!"));
      } else {
        //校验通过
        callback();
      }
    };
    var userName = async (rule, value, callback) => {
      let { data } = await this.$axios.get(
        "http://10.3.133.30:2999/users/check",
        {
          params: {
            username: this.ruleForm.username
          }
        }
      );
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        //校验通过
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为6到12个字符",
            trigger: "blur"
          }
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        username: [
          { required: true, message: "亲，用户不能为空", trigger: "blur" },
          { validator: userName, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //成功
          // alert("注册成功!");
          let { username, password } = this.ruleForm;
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
        } else {
          //失败
          window.console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
}
.header {
  height: 40px;
  margin-bottom: 20px;
}
.header_left {
  margin: 9px 0 0 15px;
  width: 22px;
  height: 22px;
  float: left;
  background-image: url(../img/ni.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header_zhong {
  // width: 70px;
  margin-left: 120px;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
.header_right {
  float: right;
  height: 100%;
  line-height: 40px;
  margin-right: 15px;
  color: red;
}
.main {
  background: #ffffff;
  padding: 10px 0 10px 0;
}
</style>

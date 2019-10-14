<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goodList'}">商品信息管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/goodList/editGoods'}">编辑商品信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-main style="width:70%;margin-top:30px;">
      <el-form
        :model="addForm"
        :rules="rules"
        ref="addForm"
        label-width="150px"
        class="demo-addForm"
      >
        <el-form-item label="商品名称" prop="Name">
          <el-input v-model="addForm.Name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格（元）" prop="Price">
          <el-input v-model.number="addForm.Price"></el-input>
        </el-form-item>
        <el-form-item label="商品库存（件）" prop="Stock">
          <el-input v-model.number="addForm.Stock"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="Image">
          <el-upload
            v-model="addForm.Image"
            class="avatar-uploader"
            :limit="5"
            :action="action"
            list-type="picture-card"
            :file-list="Images"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <span>最多上传五张，且图片宽高比为：1/1</span>
        </el-form-item>
        <el-form-item label="邮费选择" prop="IsFreeShipping">
          <el-radio-group v-model="addForm.IsFreeShipping">
            <el-radio class="radio" :label="true">包邮</el-radio>
            <el-radio class="radio" :label="false">运费模版</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品简介" prop="Brief">
          <el-input type="textarea" v-model="addForm.Brief"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addForm')">立即添加</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    var checkPrice = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("价格不能为空"));
      }
      setTimeout(() => {
        // 是否为整数Number.isInteger
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    var checkStock = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("库存不能为空"));
      }
      setTimeout(() => {
        // 是否为数字
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        } else if (value % 1 !== 0) {
          callback(new Error("库存必须为整数"));
        } else {
          if (value < 0) {
            callback(new Error("必须大于0"));
          } else {
            callback();
          }
        }
      }, 100);
    };
    return {
      // 图片上传的地址
      action: "https://jsonplaceholder.typicode.com/posts/",
      dialogImageUrl: "",
      dialogVisible: false,
      addForm: {
        Name: "", //名称
        Price: "", //价格
        Stock: "", //库存
        Image: [], //图片
        IsFreeShipping: false, //邮费选择
        Brief: "" //简介
      },
      Images: [],
      // 表单校验规则
      rules: {
        Name: [
          {
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          }
        ],
        Price: [
          {
            validator: checkPrice
          }
        ],
        Stock: [
          {
            validator: checkStock
          }
        ],
        IsFreeShipping: [
          {
            required: true,
            message: "请选择邮费",
            trigger: "change"
          }
        ],
        Image: [
          {
            type: "array",
            required: true,
            message: "请上传商品图片",
            trigger: "change"
          }
        ],
        Brief: [
          {
            required: true,
            message: "请输入商品简介",
            trigger: "blur"
          }
        ],
        Details: [
          {
            required: true,
            message: "图文详情不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 添加商品
    submitForm() {
      console.log(this.addForm);
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="">
</style>
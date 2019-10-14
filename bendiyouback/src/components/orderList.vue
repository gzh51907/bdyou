<template name="component-name">
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
      <el-breadcrumb-item :to="{ path: '/' }">后台</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/orderList' }">订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--检索条-->
    <el-col class="toolbar" style="padding-top: 15px;">
      <el-form :inline="true" :model="filters">
        <el-form-item label="关键字">
          <el-input v-model="filters.keyword" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="filters.StTime"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="1">~</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="结束时间"
              v-model="filters.EndTime"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="发货状态">
          <el-select v-model="filters.Type" placeholder="发货状态">
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getUsers()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索关键字
      filters: {
        keyword: "",
        StTime: "2018-01-01",
        EndTime: "",
        Type: 0
      },
      // 状态数组
      typeList: [
        {
          name: "全部",
          value: 0
        },
        {
          name: "待发货",
          value: 1
        },
        {
          name: "待收货",
          value: 2
        }
      ]
    };
  },
  methods: {
    getUsers() {
      console.log(111);
    }
  }
};
</script>
<style lang="">
</style>
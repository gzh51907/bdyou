<template name="component-name">
  <div>
    <!-- 图标分隔符 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/userList'}">注册用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 注册用户表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top:50px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="注册时间" width="120">
        <template slot-scope="scope">{{ scope.row.regtime }}</template>
      </el-table-column>
      <el-table-column prop="username" label="账号" width="120"></el-table-column>
      <el-table-column prop="password" label="密码" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope>
          <el-button size="mini" type="primary" plain icon="el-icon-edit" @click="handleDelete">注销账号</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          regtime: "2016-05-03",
          username: "admin",
          password: "111111",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          regtime: "2016-05-03",
          username: "admin",
          password: "111111",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDelete() {
      // 注销当前账号
      console.log(111);
    }
  }
};
</script>
<style lang="">
</style>
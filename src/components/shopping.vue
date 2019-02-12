<template>
  <div>
  <p>我的购物车</p>
  <el-row>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="图片"
        width="280">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="名称">
      </el-table-column>
      <el-table-column
        label="单价">
        <template slot-scope="scope">
          <p>￥：{{scope.row.price}}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="数量">
        <template slot-scope="scope">
          <el-input-number size="small" v-model="scope.row.num1"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        label="合计"
      width="250px">
        <template slot-scope="scope">
          <p>￥：{{scope.row.allSum}}</p>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
    <span style="float: right;width: 250px"><h2>总计：</h2></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          price:'100',
          num1: 1
        }, {
          date: '2016-05-04',
          price:'200',
          num1: 1
        }],

      }
    },
    methods: {}
  }
</script>

<style scoped>
</style>

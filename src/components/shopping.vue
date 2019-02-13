<template>
  <div>
    <p>我的购物车</p>
    <el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="100px">
        </el-table-column>
        <el-table-column
          label="图片"
          width="280">
          <template slot-scope="scope">
            <span>{{ scope.row.pro_img }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="名称">
          <template slot-scope="scope">
            <span>{{ scope.row.pro_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单价（元）">
          <template slot-scope="scope">
            <p>￥：<span style="color: red">{{scope.row.pro_price}}</span></p>
          </template>
        </el-table-column>
        <el-table-column
          label="数量">
          <template slot-scope="scope">
            <el-input-number size="small" v-model="scope.row.num1" :min="1"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          label="金额（元）"
          width="250px">
          <template slot-scope="scope">
            ￥：<span style="color: red">{{scope.row.pro_price*scope.row.num1}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary" plain
              @click.native.prevent="handleDelete(scope.$index, tableData)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <p style="float: right">
      <span style="color: red">{{msg}}</span>件商品总计：<span style="color: red">￥{{getTotal.totalPrice}}元</span>
      <el-button type="warning">去结算</el-button>
    </p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data() {
      return {
        multipleSelection: [],
        num1:0
      }
    },
    methods: {
      handleDelete(index, row) {
        row.splice(index, 1);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      ...mapActions(['addToCart'])
    },
    computed: {
      getTotal: function () {
        var tableNum = this.multipleSelection, totalPrice = 0;
        for (let i = 0, len = this.multipleSelection.length; i < len; i++) {
          totalPrice += tableNum[i].num1 * tableNum[i].pro_price;
        }
        return {
          totalNum: tableNum.length, totalPrice: totalPrice
        }
      },
      msg: function () {
        return this.multipleSelection.length;
      },
      ...mapGetters(['tableData'])
    }
  }
</script>

<style scoped>
</style>

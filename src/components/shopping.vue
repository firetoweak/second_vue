<template>
  <div>
    <p>{{username}}的购物车</p>
    <el-row>
      <el-table
        ref="multipleTable"
        :data="cartProducts"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="100px">
        </el-table-column>
        <el-table-column label="图片" width="280" prop="pro_img">
          <template slot-scope="scope">
            <img :src="scope.row.pro_img" min-width="100" height="100">
          </template>
        </el-table-column>
        <el-table-column label="名称" width="200" prop="pro_name" class="id">
        </el-table-column>
        <el-table-column label="单价（元）" width="150">
          <template slot-scope="scope"><p>￥：<span style="color: red">{{scope.row.pro_price}}</span></p>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="200">
          <template slot-scope="scope">
            <el-input-number size="small" v-model="scope.row.num1" :min="1"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="金额（元）">
          <template slot-scope="scope">￥：<span style="color: red">{{scope.row.pro_price*scope.row.num1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" plain icon="el-icon-delete" @click="dialogVisibleTrue(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <p style="float: right">
      <span style="color: red">{{msg}}</span>件商品总计：<span style="color: red">￥{{getTotal.totalPrice}}元</span>
      <el-button type="warning" @click="numToMysql">去结算</el-button>
    </p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from '../axios/utils'

  export default {
    data() {
      return {
        multipleSelection: [],
        num1: 0,
        username: '1'
      }
    },
    methods: {
      dialogVisibleTrue(val) {
        this.delProduct(val);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      numToMysql() {
        if (this.username === '未登录') {
          alert("请先登陆后购买！！！");
          this.$router.push({path: '/login'});
        } else {
          let tableNum = this.multipleSelection;
          let data = [];
          for (let i = 0; i < tableNum.length; i++) {
            let obj = {};
            obj.count = tableNum[i].num1;
            obj.name = tableNum[i].pro_name;
            data[i] = obj;
          }
          console.info(data);
          let success = (response) => {
            if (200 === response.data.code) {
              alert("正在生成订单！")
            } else if (500 === response.data.code) {
              alert(response.data.message)
            }
          };
          utils.axiosMethod({
            method: "POST",
            url: "/api/shopping/",
            data: data,
            callback: success
          })
        }
      },
      ...mapActions(['delProduct'])
    },
    computed: {
      getTotal: function () {
        let tableNum = this.multipleSelection, totalPrice = 0;
        for (let i = 0, len = this.multipleSelection.length; i < len; i++) {
          totalPrice += tableNum[i].num1 * tableNum[i].pro_price;
        }
        return {
          totalNum: tableNum.length, totalPrice: totalPrice
        }
      }
      ,
      msg: function () {
        return this.multipleSelection.length;
      },
      ...mapGetters(['cartProducts']),
      ...mapGetters(['getMessage']),
      getMessage: function () {
        let _this = this;
        _this.username = _this.$store.getters.getMessage.username;
        // console.info('对信息进行第一次渲染',this.userData)
      }
    },
    watch: {
      getMessage: function (li) {
        let _this = this;
        _this.username = li.username;
        // console.info('对信息进行渲染',this.userData)
      }
    }
  }
</script>

<style scoped>
</style>

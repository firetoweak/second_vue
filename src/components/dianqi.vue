<template>
  <el-row>
    <div v-for="item in dianqiList">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img class="image" :src="item.pro_img">
          <div style="padding: 14px;">
            <span style="color:blue ">商品名：{{item.pro_name}}</span>
            <span style="color: red">售价：{{item.pro_price}}元</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">添加购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </el-row>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['dianqiList'])
    }
  }
</script>

<style scoped>
  @import '../assets/css/goods.css';
</style>

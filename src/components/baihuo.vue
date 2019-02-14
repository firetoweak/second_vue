<template>
  <el-row>
    <div v-for="item in baihuoList">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img class="image" :src="item.pro_img">
          <div class="item.id" style="padding: 14px;">
            <span style="color:blue ">商品名：{{item.pro_name}}</span>
            <span style="color: red">售价：{{item.pro_price}}元</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="addToCart(item)">添加购物车</el-button>
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
      ...mapGetters(['baihuoList'])
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>
  @import '../assets/css/goods.css';
</style>

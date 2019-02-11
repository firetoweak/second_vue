<template>
  <el-row>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/cup.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：紫砂壶</span>
          <span style="color: red">售价：190元</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">添加购物车</el-button>
        </div>
        </div>
      </el-card>

    </el-col>

    <el-col :span="6" >
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/bag.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：书包</span>
          <span style="color: red">售价：90元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6" >
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/洗发水.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：洗发水</span>
          <span style="color: red">售价：69元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6" >
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/鞋.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：超V运动鞋</span>
          <span style="color: red">售价：99元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  @import '../assets/css/goods.css';
</style>

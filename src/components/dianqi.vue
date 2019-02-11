<template>
  <el-row>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/煮茶器.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：金灶煮茶器</span>
          <span style="color: red">售价：390元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/电磁炉.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：凡撒帝电磁炉</span>
          <span style="color: red">售价：458元</span>
          <div class="bottom clearfix">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            <el-button type="primary" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/电脑.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：联想游戏本</span>
          <span style="color: red">售价：8800元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/电视.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：小米电视</span>
          <span style="color: red">售价：5900元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {}
</script>

<style scoped>
  @import '../assets/css/goods.css';
</style>

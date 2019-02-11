<template>
  <el-row>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/百年孤独.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：百年孤独</span>
          <span style="color: red">售价：58元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/眠.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：眠</span>
          <span style="color: red">售价：66元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/人间失格.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：人间失格</span>
          <span style="color: red">售价：70元</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">添加购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <img class="image" src="../assets/images/袭击面包店.png">
        <div style="padding: 14px;">
          <span style="color:blue ">商品名：袭击面包店</span>
          <span style="color: red">售价：40元</span>
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

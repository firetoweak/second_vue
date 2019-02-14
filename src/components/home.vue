<template>
  <div class="block">
    <el-carousel indicator-position="outside" style="float: left;width: 850px" height="400px">
      <el-carousel-item v-for="(item,index) in items" :key="index">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
    <el-table
      :data="newGoods"
      style="width: 350px;float: right">
      <el-table-column label="新品上市">
        <template slot-scope="scope">
          <img :src="scope.row.img" min-width="120" height="150">
        </template>
      </el-table-column>
      <el-table-column width="150px">
        <template slot-scope="scope"><p>{{scope.row.suggest}}<br><span style="color: red">价格：{{scope.row.price}}元</span>
        </p>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        items: [
          {'img': require('../assets/images/走马灯1.jpg')},
          {'img': require('../assets/images/走马灯2.jpg')},
          {'img': require('../assets/images/走马灯3.jpg')},
          {'img': require('../assets/images/走马灯4.jpg')}
        ],
        newGoods: [
          {'img': require('../assets/images/冰箱.png'), suggest: '西门子（SIEMENS） 610升 对开门冰箱', price: 6499},
          {'img': require('../assets/images/单反.png'), suggest: '索尼（SONY）ILCE-7RM2 全画幅微单相机 单机身', price: 9999}
        ]
      };
    }
  }
</script>

<style scoped>
  @import '../assets/css/homeCss.css';
</style>

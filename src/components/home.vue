<template>
   <!-- <div class="user">
      <h1>User {{$route.params}}</h1>
      <router-view></router-view>
    </div>-->
  <div class="block">
    <el-carousel indicator-position="outside" style="float: left;width: 850px" height="400px" >
      <el-carousel-item v-for="(item,index) in items" :key="index">
       <img :src="item.url">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
    export default {
      data(){
        return{
          items:[
            {url:require('../assets/images/背景1.jpg')},
            {url:require('../assets/images/背景2.jpg')}
          ]
        };
      }
    }
</script>

<style scoped>
  @import '../assets/css/homeCss.css';
</style>

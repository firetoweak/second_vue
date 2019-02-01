<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#10d19d"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">电器</el-menu-item>
        <el-menu-item index="3">图书</el-menu-item>
        <el-menu-item index="4">百货</el-menu-item>
          <div id="login">
            <router-link to="login" class="link">
              <el-button type="primary" plain>登陆</el-button>
            </router-link>
          </div>
      </el-menu>

      </el-header>
      <el-main>
        <p class="linkStyle">

        </p>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  @import './assets/css/app.css';
</style>

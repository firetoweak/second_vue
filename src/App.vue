<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#40d177"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <router-link to="home">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="dianqi">电器</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="book">图书</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="baihuo">百货</router-link>
          </el-menu-item>
          <div id="login" style="float: right">
            <router-link to="login" class="link">
              <el-dropdown>
                <el-button type="success">
                 菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link to="login"><span style="color: #333333">登陆</span></router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="register"><span style="color: #333333">注册</span></router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="shopping"><span style="color: #333333">购物车</span></router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                   <router-link to="message"><span style="color: #333333">个人信息</span></router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
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
        activeIndex2: '1',

      };
    },
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>

<style>
  @import './assets/css/app.css';
</style>

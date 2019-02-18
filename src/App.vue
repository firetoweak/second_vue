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
          <el-menu-item index="5">
            <router-link to="shopping">购物车</router-link>
          </el-menu-item>
          <div id="login" style="float: right">
            <el-dropdown>
              <el-button type="primary" icon="el-icon-menu">菜单</el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="login"><span style="color: #333333" @click="changeLoginState">{{loginState}}</span>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="register"><span style="color: #333333">注册</span></router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="shopping"><span style="color: #333333">购物车</span></router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="userMessage"><span style="color: #333333">个人信息</span></router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-menu>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1',
        loginState: '登陆'
      };
    },
    methods: {
      changeLoginState() {
        this.$store.commit('$_removeStorage');
        this.changeLoginState = '登陆'
      }
    },
    mounted() {
      if (200 === this.$store.getters('getStorage').code) {
        this.loginState = '注销';
      }
    }
  }
</script>

<style>
  @import './assets/css/app.css';
</style>

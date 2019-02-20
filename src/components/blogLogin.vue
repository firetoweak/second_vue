<template>
  <el-form ref="form" :model="loginForm" label-width="80px">
    <el-row type="flex" justify="center">
        <el-form-item label-width="60px">
          <h1><span><font size="3">登录</font></span></h1>
        </el-form-item>
    </el-row>
    <el-form label-position="right" label-width="80px">
      <el-row type="flex" justify="center">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="不含特殊字符" v-model="loginForm.username" clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item label="密码" prop="password">
          <el-input placeholder="4位" v-model="loginForm.password" type="password" clearable></el-input>
        </el-form-item>
      </el-row>
    </el-form>
    <el-row type="flex" justify="center">
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <router-link to="register">
          <el-button type="primary" plain>注册新账户</el-button>
        </router-link>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  import utils from '../axios/utils'

  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {


      login() {
        let data = {id:'2',username:'111',name:'200',sex:'2',email:'111',address:'2323'};
        let code = 200;
        console.info(code);
        this.$store.commit('$_setMessage',data);
        this.$store.commit('$_setCode',code);
        let success = (reponse) => {
          if (reponse.data.code === 200) {
          /*  console.info(reponse.data.data);
            this.$store.commit('$_setMessage',reponse.data.data);
            this.$store.commit('$_setCode',reponse.data.code);*/
            this.$router.push({path: '/home'})
          } else {
            alert("用户名或密码不正确!");
            this.$router.push({path: '/login'})
          }
        };
        utils.axiosMethod({
          method: "POST",
          url: "/api/login/",
          data: this.loginForm,
          callback: success
        })
      }
    }
  }
</script>

<style scoped>

</style>

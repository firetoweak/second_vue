<template>
  <el-form ref="form" :model="loginForm" label-width="80px">
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-form-item label-width="60px">
          <h1><span><font size="3">登录</font></span></h1>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form :label-position="right" label-width="80px">
      <el-row type="flex" justify="center">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="手机号或邮箱" v-model="loginForm.username" clearable></el-input>
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
        <router-link to="blogRegister">
          <el-button @click="regSubmit">注册</el-button>
        </router-link>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
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
        this.$axios
          .post('/login',{
            username:this.loginForm.username,
            password:this.loginForm.password
          })
          .then(successResponse=>{
            // this.responseResult = JSON.stringify(successResponse.data)
            if (successResponse.data.code === 200){
              this.$route.replace({path:'/index'})
            }
          })
          .catch(failResponse =>{})
      }
    }
  }
</script>

<style scoped>

</style>

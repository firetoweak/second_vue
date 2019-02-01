<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-form-item label-width="60px">
          <h1><span><font size="3">登录</font></span></h1>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form :label-position="right" label-width="80px">
      <el-row type="flex" justify="center">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="手机号或邮箱" v-model="form.name" clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item label="密码" prop="password">
          <el-input placeholder="4位" v-model="form.password" type="password" clearable></el-input>
        </el-form-item>
      </el-row>
    </el-form>
    <el-row type="flex" justify="center">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <router-link to="register">
          <el-button @click="onSubmit">注册</el-button>
        </router-link>
      </el-form-item>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>

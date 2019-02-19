<template>
  <div class="messageCss">
    <h1 style="text-align: center">个人信息</h1>
    <table :model="getMessage">
      <tr>用户名  {{getMessage.username}}</tr>
      <tr>实名  {{getMessage.name}}</tr>
      <tr>性别  {{getMessage.sex}}</tr>
      <tr>邮箱  {{getMessage.email}}</tr>
      <tr>地址  {{getMessage.address}}</tr>
    </table>
    <router-link to="messageChange">
      <el-button type="primary" plain size="mini" style="float: right">修改信息</el-button>
    </router-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        getMessage: [{
          username: '',
          name: '',
          sex: '',
          email: '',
          address: ''
        }]
      }
    },
    methods:{
      ...mapGetters(['getMessage'])
    }
  }
</script>

<style scoped>
  .messageCss {
    width: 600px;
    margin: 0 auto;
  }
  .table tr{
    text-align: left;
  }
</style>

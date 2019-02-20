<template>
  <div class="messageCss">
    <h1 style="text-align: center">个人信息</h1>
    <table :model="userData">
      <tr>用户名  {{userData.username}}</tr>
      <tr>实名  {{userData.name}}</tr>
      <tr>性别  {{userData.sex}}</tr>
      <tr>邮箱  {{userData.email}}</tr>
      <tr>地址  {{userData.address}}</tr>
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
        userData: [{
          username: '',
          name: '',
          sex: '',
          email: '',
          address: ''
        }]
      }
    },
   computed:{
      ...mapGetters(['getMessage'])
    },
    watch:{
      getMessage:function (li) {
        let vm = this;
        this.userData = li
      }
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

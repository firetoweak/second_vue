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
          username: '1',
          name: '1',
          sex: '1',
          email: '1',
          address: '1'
        }]
      }
    },
    watch:{
      getMessage:function (li) {
        let _this = this;
        _this.userData = li;
        // console.info('对信息进行渲染',this.userData)
      }
    },
   computed:{
     ...mapGetters(['getMessage']),
     getMessage:function () {
       let _this = this;
       _this.userData = _this.$store.getters.getMessage;
       // console.info('对信息进行第一次渲染',this.userData)
     }
    },
    methods:{
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

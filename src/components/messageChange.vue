<template>
  <div class="messageCss">
    <h1 style="text-align: center">个人信息</h1><br>
    <el-form :label-position="labelPosition" label-width="80px" :model="getMessage">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="getMessage.username" :disabled=true placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="实名" prop="name">
        <el-input v-model="getMessage.name" placeholder="请输入您的真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="getMessage.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="getMessage.email" placeholder="请输入您的邮箱"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="getMessage.address" placeholder="请输入您的收货地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="onSubmit" style="float: right">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import utils from '../axios/utils'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        labelPosition: 'right',
        getMessage: {
          username: '',
          name: '',
          resource: '',
          email: '',
          address: ''
        },
        writeControl: true
      }
    },
    methods: {
      onSubmit() {
        let success = (reponse) => {
          if (reponse.data.code === 200) {
            alert("个人信息已修改！");
            this.$store.commit('$_removeStorage');
            this.$store.commit('$_setStorage',reponse.data);
            this.$router.push({path: '/userMessage'})
          } else {
            alert("请按照格式修改个人信息!");

            this.$router.push({path: '/messageChange'})
          }
        };
        utils.axiosMethod({
          method: "POST",
          url: "/api/messageChange/",
          data: this.getMessage,
          callback: success
        })
      },
      ...mapGetters(['getMessage'])
    }
  }
</script>

<style scoped>
  .messageCss {
    width: 50%;
    margin: 0 auto;
  }
</style>

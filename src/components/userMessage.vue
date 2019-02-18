<template>
  <div class="messageCss">
    <h1>个人信息</h1><br>
    <el-form :label-position="labelPosition" label-width="80px" :model="getStorage">
      <el-form-item label="昵称" prop="username">
        <el-input v-model="getStorage.username" :disabled="writeControl" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="实名" prop="name">
        <el-input v-model="getStorage.name" :disabled="writeControl" placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="getStorage.sex" :disabled="writeControl" placeholder="sex"></el-input>
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="getStorage.email" :disabled="writeControl" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="getStorage.address" :disabled="writeControl" placeholder="address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="altMessage">修改</el-button>
        <el-button type="primary" plain @click="onSubmit">提交</el-button>
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
        getStorage: {
          username: '请数入您的昵称',
          name: '请输入您的真实姓名',
          sex: '请输入您的性别',
          email: '请输入您的邮箱',
          address: '请输入您的收货地址'
        },
        writeControl: true
      }
    },
    methods: {
      altMessage() {
        this.writeControl = false
      },
      onSubmit() {
        this.writeControl = true;
        let success = (reponse) => {
          if (reponse.data.code === 200) {
            this.$store.commit('$_setStorage',reponse.data);
            alert("个人信息已修改！")
          } else {
            alert("请按照格式修改个人信息!");
            this.$router.push({path: '/userMessage'})
          }
        };
        utils.axiosMethod({
          method: "POST",
          url: "/api/userMessage/",
          data: this.getStorage,
          callback: success
        })
      }
    },
    computed: {
      ...mapGetters(['getStorage'])
    }
  }
</script>

<style scoped>
  .messageCss {
    width: 70%;
    margin: 0 auto;
    text-align: center
  }
</style>

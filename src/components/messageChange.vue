<template>
  <div class="messageCss">
    <h1 style="text-align: center">个人信息</h1><br>
    <el-form :label-position="labelPosition" label-width="80px" :model="dataChange">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="dataChange.username" :disabled=true placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="实名" prop="name">
        <el-input v-model="dataChange.name" placeholder="请输入您的真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="dataChange.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model="dataChange.email" placeholder="请输入您的邮箱"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="dataChange.address" placeholder="请输入您的收货地址"></el-input>
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
        dataChange: {
          username: '',
          name: '',
          sex: '',
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
            this.$store.commit('$_setMessage',reponse.data.data);
            this.$store.commit('$_setCode',reponse.data.code);
            this.$router.push({path: '/userMessage'})
          } else {
            alert("请按照格式修改个人信息!");
            this.$router.push({path: '/messageChange'})
          }
        };
        utils.axiosMethod({
          method: "POST",
          url: "/api/messageChange/",
          data: this.dataChange,
          callback: success
        })
      }
    },
    computed: {
      ...mapGetters(['getMessage']),
    },
    watch: {
      getMessage: function (li) {
        let vm = this;
        this.dataChange = li
      }
    }
  }
</script>

<style scoped>
  .messageCss {
    width: 50%;
    margin: 0 auto;
  }
</style>

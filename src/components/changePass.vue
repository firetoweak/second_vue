<template>
  <div class="changePassCss">
    <h1 style="text-align: center">修改密码</h1><br>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row type="flex" justify="center">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item label="旧密码" prop="passowrod">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off" clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"
                    clearable></el-input>
        </el-form-item>
      </el-row>
      <el-row type="flex" justify="center">
        <el-form-item>
          <el-button type="primary" @click="changePassword">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import utils from '../axios/utils'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      changePassword() {
        let success = (reponse) => {
          if (reponse.data.code === 200) {
            alert(reponse.data.message);
            this.$router.push({path: '/login'})
          } else {
            alert(reponse.data.message);
          }
        };
        let postData = {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          changePass: this.ruleForm.pass
        };
        utils.axiosMethod({
          method: "POST",
          url: "/api/changePass/",
          data: postData,
          callback: success
        })
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
</script>

<style scoped>
  .changePassCss {
    width: 50%;
    margin: 0 auto;
  }
</style>

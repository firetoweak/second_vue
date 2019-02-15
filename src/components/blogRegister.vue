<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" label-position="right"
           class="demo-ruleForm">
    <el-row type="flex" justify="center">
      <el-form-item label-width="80px">
        <h1><font size="3">注册</font></h1>
      </el-form-item>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="手机号或邮箱" v-model="ruleForm2.name" clearable></el-input>
      </el-form-item>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form-item label="密码" prop="pass">
        <el-input placeholder="密码4位" type="password" v-model="ruleForm2.pass" autocomplete="off"
                  clearable></el-input>
      </el-form-item>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form-item label="确认密码" prop="checkPass">
        <el-input placeholder="确认密码4位" type="password" v-model="ruleForm2.checkPass" autocomplete="off"
                  clearable></el-input>
      </el-form-item>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2'),register">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-row>
  </el-form>

</template>

<script>
  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.name !== '') {
            this.$refs.ruleForm2.validateField('name');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
          } else {
            console.log('注册失败!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(){
        this.$axios
          .post('/blogRegister',{
            username:this.ruleForm2.name,
            password:this.ruleForm2.pass,
          })
          .then(successResponse => {
            // this.responseResult = JSON.stringify(successResponse.data)
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {})
      }
    }
  }
</script>

<style scoped>

</style>

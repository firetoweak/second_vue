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
        <el-input placeholder="不含特殊字符" v-model="ruleForm2.name" clearable></el-input>
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
        <el-button type="primary" @click="register">提交</el-button>
        <el-button type="primary" plain @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-row>
  </el-form>

</template>

<script>
  import utils from '../axios/utils'
  export default {
    data() {
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(){
        let success=(reponse)=>{
          if(reponse.data.code===200){
            alert("注册成功！")
            this.$router.push({path:'/login'});
          }else {
            alert(reponse.data.message);
          }
        };
        let postData={
          username:this.ruleForm2.name,
          password:this.ruleForm2.pass
        };
        utils.axiosMethod({
          method: "POST",
          url:"/api/register/",
          data:postData,
          callback:success
        })
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <div class="login-warp">
      <div class="logo-warp">
        <img src="http://mat1.gtimg.com/sports/nba/logo/black/9.png" />
      </div>
      <div class="form-warp">
        <el-form :model="ruleForm2"  status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item  prop="age">
            <el-input  placeholder="请输入你的账号" v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input  placeholder="请输入你的密码" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input  placeholder="请再次输入你的密码" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">
              提交
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
   data(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入正确格式的账号'));
          } else {
            callback();
          }
        }, 1000);
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
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped lang="less">
@import  './login.less';
</style>
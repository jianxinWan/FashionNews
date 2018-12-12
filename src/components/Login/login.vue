<template>
    <div class="login-warp">
      <p class="back-btn">
        <router-link to="/home">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        
      </p>
      <div class="logo-warp">
        <img src="http://mat1.gtimg.com/sports/nba/logo/black/9.png" />
      </div>
      <div class="form-warp">
        <el-form :model="ruleForm2"  status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item  prop="email">
            <el-input  placeholder="请输入你的邮箱" v-model="ruleForm2.email"></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input  placeholder="请输入你的密码" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">
              登录
            </el-button>
            <el-button type="primary" plain>
              更多方式
            </el-button>
          </el-form-item>
        </el-form>
        <div class="cut-warp">
          <p>
            <span>忘记密码？</span>
            <router-link to="/signUp">
              <span>注册账号</span> 
            </router-link> 
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
   data(){
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        setTimeout(() => {
          let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          if(!regEmail.test(value)) {
            callback(new Error('请输入正确格式的账号'));
          } else {
            callback();
          }
        }, 300);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          email: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
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
      }
    }
}
</script>

<style scoped lang="less">
@import  './login.less';
</style>
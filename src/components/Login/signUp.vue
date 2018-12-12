<template>
    <div class="login-warp">
      <div class="logo-warp">
        <img src="http://mat1.gtimg.com/sports/nba/logo/black/9.png" />
      </div>
      <div class="form-warp">
        <el-form :model="ruleForm2"  status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item  prop="email">
            <el-input  placeholder="请输入你的邮箱账号" v-model="ruleForm2.email">
            </el-input>
          </el-form-item>
          <el-form-item  prop="code">
            <el-input  placeholder="验证码" v-model="ruleForm2.code">
              <span
                slot="suffix"
                @click="getEmailCode">
                获取验证码
              </span>
            </el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input  placeholder="第一次输入密码" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input  placeholder="第二次输入密码" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">
              注册账号
            </el-button>
          </el-form-item>
        </el-form>
        <div class="cut-warp">
          <p>
            <span>存在问题？</span>
            <router-link to="/login">
                <span>返回登录</span> 
            </router-link> 
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
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
            this.emailFlag = true;
            callback();
          }
        }, 300);
      };
      var checkCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        }else{
          console.log(value);
          this.getEmailCode(value);
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
        emailFlag:false,
        ruleForm2: {
          pass: '',
          checkPass: '',
          email: '',
          code:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          code:[
            {validator:checkCode,trigger:'blur'}
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
      signUp:function(){
         axios.post('http://118.89.221.170:8080/news/user/vercode', {
            userEmail: this.ruleForm2.email
          })
      },
      getEmailCode:function(){
        if(this.emailFlag){
          console.log("get-code");
          axios.post('http://118.89.221.170:8080/news/user/vercode', {
            userEmail: this.ruleForm2.email
          })
          .then(function (response) {
            this.$notify({
              title: '邮箱验证码',
              message:'邮箱验证码已发送！',
              type: 'success'
            });
          }.bind(this))
          .catch(function (error) {
            this.$notify({
              title: '邮箱验证码',
              message:'出错啦，请稍后再试！',
              type: 'error'
            });
          }.bind(this));
        }else{
          const h = this.$createElement;
          this.$notify({
            title: '邮箱验证码',
            message:'请输入正确格式的邮箱！',
            type: 'error'
          });
        }
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
<template>
  <div class="header-warp">
    <span class="title">
      <router-link to="/home" tag="span">
        今日看点
      </router-link>
    </span>
    <span class="icon-warp">
      <router-link to="/mydoc" tag="div" v-if="loginFlag">
        <i class="iconfont icon-guanyanren mydoc"></i>
      </router-link>
      <router-link to="/login" trg="div" v-else>
        <span class="login-link">登录</span> 
      </router-link>
      <el-dropdown trigger="click" class="meanu">
        <span class="">
          <i class="el-icon-menu menu-btn"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="menu-list">
          <el-dropdown-item>科技</el-dropdown-item>
          <el-dropdown-item ></el-dropdown-item>
          <el-dropdown-item >
            <a  href="http://www.wvue.com.cn/NBA/index.html#/home/nba">
              体育
            </a>
          </el-dropdown-item>
          <el-dropdown-item >军事</el-dropdown-item>
          <el-dropdown-item >游戏</el-dropdown-item>
          <el-dropdown-item >互联网</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>   
    </span>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return {
        loginFlag:false
      }
    },
    methods:{
      checkLogin(){
        let token = localStorage.getItem('token');
        let userInfo = localStorage.getItem("userInfo");
        if(token&&userInfo){
          this.loginFlag = true;
        }else{
          this.loginFlag = false;
        }
      }
    },
    mounted(){
      this.checkLogin();
    }
  }
</script>

<style lang="less">
  @import './header.less';
</style>

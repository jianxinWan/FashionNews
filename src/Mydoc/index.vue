<template>
  <div class="mydoc-all">
    <div class="mydoc-header-link">
      <div class="return-icon">
        <router-link to="/home" tag="div">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </div>
      <div class="logOut">
        <el-dropdown trigger="click" class="meanu">
          <span class>
            <i class="el-icon-setting"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="menu-list">
            <el-dropdown-item @click="logOut">退出登陆</el-dropdown-item>
            <el-dropdown-item>你的建议</el-dropdown-item>
            <el-dropdown-item>关于我们</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="top-pic"></div>
    <div class="picture-warp">
      <div class="center-photo">
        <img src="http://www.wvue.com.cn/image/123456.jpg">
      </div>
    </div>
    <div class="username-warp">
      <h2 class="user-name">{{userInfo.userName}}</h2>
      <p class="signature">{{userInfo.userGraph}}</p>
      <el-button type="primary" plain>编辑个人资料</el-button>
    </div>
    <div class="fun-warp">
      <div>我的收藏 0</div>
      <div>关注我的人 0</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : {}
    };
  },
  mounted() {
    console.log(this.userInfo);
  },
  methods: {
    logOut: function() {
      console.log("1111");
    }
  },
};
</script>

<style scoped  lang="less">
@import "index.less";
</style>
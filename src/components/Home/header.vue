<template>
  <div class="header-warp">
    <span class="icon-warp">
      <i class="el-icon-message"></i>
    </span> 
    <span class="title">
      今日看点
    </span>
    <span class="icon-warp">
      <router-link to="/mydoc">
        <i class="iconfont icon-guanyanren mydoc"></i>
      </router-link>
    </span>   
  </div>
</template>
<script>
  export default {
    name: 'App',
    components:{
    }
  }
</script>

<style lang="less">
  @import './header.less';
</style>

<template>
  <div class="indnx-warp">
    <div class="header-warp">
      <Header/>
    </div>
    <div class="content-warp">
      <Content/>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import Content from "./content.vue";
export default {
  components: {
    Header,
    Content
  }
};
</script>

<style scoped lang="less">
.indnx-warp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header-warp {
  width: 100%;
  height: 50/16rem;
}
.content-warp {
  flex: 1;
  overflow: scroll;
}
</style>
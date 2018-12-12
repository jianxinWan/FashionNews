<template>
    <div class="content-warp">
        <Swiper />  
        <News />
    </div>
</template>

<script>
import News  from '../News/newPage.vue';
import Swiper from './swiper.vue';
export default {
    components:{
        News,
        Swiper
    }
}
</script>

<style lang="less">
@import './content.less';
</style>
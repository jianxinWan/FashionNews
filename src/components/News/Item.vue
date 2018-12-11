<template>
    <div class = "item-warp"> 
        <h2>
            {{title}}
        </h2>
        <div class="pic-warp" v-show="picture">
            <img :src='picture'/>
        </div>
        <div class="intro-warp">
            <span>2018马上都要结束了，再不回答就没机会了。我来介绍一个真正意义上2018年（8月）刚刚出炉的优秀App：</span>
        </div>
        <div class="fun-warp">
            <span class="btn">赞同7.5k</span>
            <span class="btn">评论2.5k</span>
            <span class="btn">收藏</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:'为什么现在的男生都不怎么主动追女生了？',
                picture:"https://pic4.zhimg.com/50/v2-70e1ae96183d6924507a440b54336d56_400x224.jpg",
                intro:"2018马上都要结束了，再不回答就没机会了。我来介绍一个真正意义上2018年（8月）刚刚出炉的优秀App"
            }
        },
        components:{

        }
    }
</script>

<style scoped  lang="less">
@import  './item.less';
</style>
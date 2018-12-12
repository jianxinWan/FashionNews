<template>
    <div class = "item-warp"> 
        <h2>
            {{newInfo.title}}
        </h2>
        <div class="pic-warp" v-show="newInfo.pic">
            <img :src="newInfo.pic? newInfo.pic.trim() : '' "/>
        </div>
        <div class="intro-warp">
            <span v-html="newInfo.introduction"></span>
        </div>
        <div class="fun-warp">
            <span class="btn">赞同</span>
            <span class="btn">评论<i class="el-icon-document"></i>{{newInfo.commentList.length}}</span>
            <span class="btn">收藏<i class="el-icon-star-on"></i></span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgFlag:true
            }
        },
        props:{
            newInfo:{
                type:Object,
                default:function(){
                    return [] 
                }
            }
        },
        methods:{
        },
        mounted () {
        }
    }
</script>

<style scoped  lang="less">
@import  './item.less';
</style>
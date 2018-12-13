<template>
    <div
        class="news"
        v-loading="loading"
    >
        <div v-for="(item,index) in newArray" :key="index">
            <router-link :to="{name:'detail',params:{id:item.id}}" tag="a" >
                <newItem :newInfo="item" />
            </router-link>
        </div>
    </div>
</template>

<script>
    import newItem from './item.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                newArray:[],
                loading:true
            }
        },
        methods:{
            getNewInfo(){
                let newsUrl  = 'http://118.89.221.170:8080/news/new/tech/1/30/detail';
                axios.get(newsUrl)
                .then(function (response) {
                    this.newArray = response.data.data;
                    this.loading = false;
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        mounted:function(){
            this.getNewInfo(this.newArray);
        },
        components:{
            newItem
        }
    }
</script>

<style scoped>
.news{
    width: 100%;
    min-height: 200px;
}
.el-icon-loading{
    font-size: 2rem;
}

</style>
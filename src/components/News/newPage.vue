<template>
    <div 
        v-loading="loading"
        class="news"
    >
        <div v-for="(item,index) in newArray" :key="index">
            <newItem :newInfo="item" />
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
    flex: 1;
}
.el-icon-loading{
    font-size: 2rem;
}

</style>
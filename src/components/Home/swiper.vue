<template>
    <div v-loading="loading">
        <div class="block">
            <el-carousel height="56vw">
                <el-carousel-item v-for="item in imgList" :key="item">
                    <img :src="item" width="100%" height="auto" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template> 
<script>
export default{
    data(){
        return{
            imgList:[
                'https://pic3.zhimg.com/v2-bf6de60f5e7f66ac9ef74cdf19892ec6_200x112.jpeg',
                'https://pic1.zhimg.com/v2-92aa5aa57bd737bac9730e2d85ad3920_200x112.jpeg',
                'https://pic4.zhimg.com/50/v2-240bc2222c1092f9c8c3a66f569a50ca_400x224.jpg',
                'https://pic2.zhimg.com/50/v2-c6ec2f9d5d9532e93ff6a052e49323a2_400x224.jpg'
            ]
        }
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
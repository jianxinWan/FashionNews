<template>
  <div>
    <el-carousel height="51.6vw">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.imgSrc" width="100%" height="auto">
        <h2>{{item.tit}}</h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      imgList: [
        {
          tit: "欧冠16强尘埃落定！皇马遭中央陆军双杀 尤文输球仍小组头名",
          imgSrc: "https://p9.pstatp.com/origin/db0200020757bea71014"
        },
        {
          tit: "孟晚舟16项保释条件曝光 明年1月无引渡申请将直接重获自由",
          imgSrc: "https://p99.pstatp.com/origin/dad4000c79d6152fc503"
        },
        {
          tit: "小周周身高齐腰周杰伦！林俊杰感叹长好快！",
          imgSrc: "https://p99.pstatp.com/origin/da740001b925b62d753c"
        },
        {
          tit: "颖儿生日晒全家福，付辛博“千里跋涉”为老婆庆生超甜蜜",
          imgSrc: "https://p9.pstatp.com/origin/daab00048491f02f33eb"
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  background: -webkit-linear-gradient(#666, #333); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#666, #333); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#666, #333); /* Firefox 3.6 - 15 */
  background-color: linear-gradient(#666, #333);
}
.el-carousel__indicators {
  display: none;
}
</style>
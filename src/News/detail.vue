<template>
  <div class="news-warp" v-if="getInfoFlag">
    <div class="top-warp">
      <Header/>
    </div>
    <div class="bottom-warp">
      <div class="tit-warp">
        <h1>{{newInfo.data?newInfo.data.title:""}}</h1>
        <p>{{newInfo.data.datetime}}</p>
      </div>
      <div class="ctn-warp" v-html="newInfo.data.introduction"></div>
      <p class="comment-title">评论区</p>
      <div class="comment-wap">
        <div class="comment" v-for="(item,index) in newInfo.data.commentList" :key="index">
          <div class="header">
            <div class="userImg">
              <img src="http://www.wvue.com.cn/image/123456.jpg">
            </div>
            <span>{{item.userName}}</span>
          </div>
          <div class="content-wap">{{item.commentInfo}}</div>
          <div class="fun-warp">
            <span>8.5k赞同</span>
            <span>283评论</span>
          </div>
        </div>
        <div class="user-comment">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="userComment"
          ></el-input>
          <div class="submit-btn">
            <el-button type="primary">提交评论</el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../Home/header.vue";
import { setTimeout } from "timers";
export default {
  components: {
    Header
  },
  data() {
    return {
      newInfo: {},
      userComment: "",
      getInfoFlag: false
    };
  },
  mounted() {
    new Promise((resolve, reject) => {
      this.getNewsDetail(resolve, reject);
    }).then(
      function() {
        this.alterImgStyle();
      }.bind(this)
    );
  },
  methods: {
    getNewsDetail(resolve, reject) {
      let newId = this.$route.params.id;
      let newsUrl =
        "http://118.89.221.170:8080/news/new/detailWith/tech/" + newId;
      let that = this;
      axios({
        method: "get",
        url: newsUrl
      })
        .then(res => {
          console.log(res.data);
          that.getInfoFlag = true;
          that.newInfo = res.data;
          resolve();
        })
        .catch(err => {
          reject();
          console.log(err);
        });
    },
    alterImgStyle() {
      let ctn = document.getElementsByClassName("ctn-warp")[0];
      let imgs = ctn.getElementsByTagName("img");
      let pTag = ctn.getElementsByTagName("p");
      [...imgs].forEach(element => {
        element.style.width = "100%";
        element.style.padding = "1rem 0";
      });
      [...pTag].forEach(item => {
        item.style.textIndent = "24px";
        item.style.lineHeight = "26px";
        let img = item.getElementsByTagName("img");
        [...img].forEach(element => {
          element.style.width = "100%";
          element.style.padding = "1rem 0";
          element.style.marginLeft = "-24px";
          item.style.textAlign = "center";
        });
      });
    }
  }
};
</script>

<style scoped lang="less">
@import "./detail.less";
</style>

<template>
  <div class="detail-content">
    <!-- header 标头 -->
    <div>
      <el-page-header @back="goBack" :content="dataShow.title">
      </el-page-header>
    </div>
    <!-- 婚礼详情 -->
    <div class="container">
      <div class="top">
        <img class="top-img" :src="dataShow.img[0]" />
      </div>
      <div class="block">
        <div class="blog-date">
          <i class="el-icon-date"></i>
          {{ dataShow.time }}
        </div>
        <!-- 评论数 -->
        <div class="card-footer-share">
          <i class="el-icon-chat-line-round"></i>
          {{dataShow.comments}}
        </div>
        <!-- 点赞数 -->
        <div class="card-footer-share">
          <i class="el-icon-thumb"></i>
          {{dataShow.fabulous}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 详情页: {{this.$route.query.id}}
  data() {
    return {
      dataShow: {
        w_id: 1,
        img: [
          require("../../assets/images/wednews/top-img.jpg"),
          require("../../assets/images/wednews/ssss1.jpg"),
          require("../../assets/images/wednews/ssss2.jpg"),
          require("../../assets/images/wednews/ssss3.jpg"),
        ],
        title: "伦敦时装周春夏| 2019 ...",
        time: "TIME:2018/10/20",
        comments: 3,
        fabulous: 25,
        desc:
          "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
        content:
          "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report),每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report),每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
      },
    };
  },
  methods: {
    // 后退
    goBack() {
      history.back();
    },
  },
};
</script>

<style>
.detail-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
}
.container {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-img {
  width: 80%;
  height: 500px;
  object-fit: cover;
  object-position: center center;
  border: none;
  box-shadow: 0 6px 9px 0 rgba(16, 17, 39, 0.2);
  margin: 30px 0;
  overflow: hidden;
  border-radius: 0;
}
.block {
  display: flex;
  justify-content: space-evenly;
  background-color: red;
  width: 80%;
  margin: 0 auto;
}
</style>
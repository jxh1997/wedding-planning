<template>
  <div class="collection">
    <div class="collection-title">
      我的收藏列表
    </div>
    <div class="collection-list"> 
      <el-row>
        <el-col :span="8" v-for="(o, index) in my_collections" :key="index" :offset="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" class="collection-card">
            <img :src="o.img" class="image">
            <div style="padding: 14px;">
              <span>{{o.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ o.time }}</time>
                <el-button type="text" class="button">阅读详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      my_collections: [
        {
          w_id: 1,
          img: [require("@/assets/images/wednews/news1.jpg")],
          title: "伦敦时装周春夏| 2019 ...",
          time: "TIME:2018/10/20",
          desc:
            "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
        },{
          w_id: 2,
          img: [require("@/assets/images/wednews/news1.jpg")],
          title: "伦敦时装周春夏| 2019 ...",
          time: "TIME:2018/10/20",
          desc:
            "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
        }
      ],
    }
  },
};
</script>

<style>
.collection {
    margin-top: 50px;
  width: 100%;
  padding: 50px;
}
.collection-title {
  font-size: 20px;
  color: rgb(73, 73, 73);
  margin-bottom: 30px;
}
.collection-card {
  margin-bottom: 30px;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
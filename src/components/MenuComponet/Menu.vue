<template>
  <!-- 婚礼资讯 -->
  <div class="newswed">
    <div class="news">
      <div class="news_tit">
        <h4>套餐选择</h4>
        <!-- <a href target="_blank">more +</a> -->
      </div>
      <ul class="news_cont">
        <li v-for="(item, index) in weddingContent" :key="index">
          <a @click="gotoDetail(item.id)">
            <img :src="$store.state.baseUrl + item.imgpath" alt />
            <h4>{{ item.titletext }}</h4>
            <time>TIME: {{ item.createtime }}</time>
            <p>{{ item.infotext }}</p>
            <span>阅读全文></span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 只在当前页显示 -->
    <div v-if="this.$route.path == '/choice'">
      <Yuyue></Yuyue>
    </div>
  </div>
</template>

<script>
import Yuyue from "@/components/YuyueComponet/Yuyue";
export default {
  components: {
    Yuyue,
  },

  data() {
    return {
      weddingContent: [],
    };
  },

  methods: {
    gotoDetail(id) {
      // 路由跳转传参
      this.$router.push({
        path: "/choice/details", // 跳转的路径
        query: {
          id: id,
        },
      });
    },
  },

  created() {
    // 婚礼信息请求
    this.$axios.get(`/getHlInfoList`).then((res) => {
      if (res.data.code === "0") {
        this.weddingContent = res.data.data;
      }
    });
  },
};
</script>

<style>
/***************** 婚礼资讯**************** */
.newswed {
  width: 100%;
  background-color: #f3f3f3;
  padding: 40px 0;
  margin: 0 auto 30px;
}
.news {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.news .news_tit {
  width: 100%;
  display: flex;
  margin: 0 auto 20px;
}
.news .news_tit h4 {
  width: 1130px;
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}
.news .news_tit a {
  font-size: 14px;
  width: 100px;
  border: 1px solid #666;
  height: 30px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #333;
}
.news .news_cont {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.news .news_cont li {
  width: 25%;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  margin-right: -1px;
}
.news .news_cont li a {
  display: block;
  width: 86%;
  margin: 25px 7%;
  text-decoration: none;
  color: #333;
}
.news .news_cont li a img {
  width: 100%;
}
.news .news_cont li a h4 {
  font-size: 14px;
  color: #191919;
  margin: 15px auto;
}
.news .news_cont li a time {
  color: #bbb;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
}
.news .news_cont li a p {
  font-size: 12px;
  line-height: 20px;
  color: #666;
  margin: 10px auto 25px;
  height: 60px;
  overflow: hidden;
}
.news .news_cont li a span {
  color: #b40007;
  font-size: 12px;
}
</style>
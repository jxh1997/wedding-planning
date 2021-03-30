<template>
  <div class="collection">
    <div class="collection-title">我的收藏列表</div>
    <div class="collection-list">
      <el-row>
        <el-col
          :span="8"
          v-for="(o, index) in my_collections"
          :key="index"
          :offset="3"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            class="collection-card"
          >
            <img :src="$store.state.baseUrl + o.imgpath" class="image" />
            <div style="padding: 14px">
              <span>{{ o.titletext }}</span>
              <div class="bottom clearfix">
                <span class="time">{{ o.hlclass }}</span>
                <el-button type="text" class="button" @click="gotoDetail(o.id)"
                  >阅读详情</el-button
                >
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
          id: 1,
          imgpath: [require("@/assets/images/wednews/news1.jpg")],
          titletext: "伦敦时装周春夏| 2019 ...",
          hlclass: "公证式结婚",
          infotext:
            "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
        },
      ],
    };
  },

  created() {
    this.init();
  },

  methods: {
    // 数据初始化
    init() {
      this.$axios
        .post(`/getScListInfo?sclist=${this.$store.state.user.sclist}`)
        .then((res) => {
          if (res.data.code === "0") {
            this.my_collections = res.data.data;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
    },

    // 跳转详情页
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

  watch: {
    "$route": {
      handler(route) {
        if(route.path == '/personal/collection') {
          this.init();
        }
      }
    }
  }
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
  clear: both;
}
</style>
<template>
  <div class="collection">
    <div class="collection-title">我的收藏列表</div>
    <div class="collection-list">
      <div class="comments-none" v-if="my_collections.length === 0">
        <img src="@/assets/images/icon/none.png" alt="" />
        暂无收藏婚礼
      </div>
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
      my_collections: [],
    };
  },

  created() {
    this.init();
  },

  methods: {
    // 数据初始化
    init() {
      // 刷新获取用户当前的数据
      this.$axios
        .get(`/getUserinfoById?id=${this.$store.state.user.id}`)
        .then((userRes) => {
          if (userRes.data.code === "0") {
            let sclist = userRes.data.data.sclist;
            // 获取当前用户的收藏列表
            this.$axios
              .post(`/getScListInfo?sclist=${sclist}`)
              .then((scRes) => {
                if (scRes.data.code === "0") {
                  this.my_collections = scRes.data.data;
                } else {
                  this.$message({
                    message: scRes.data.msg,
                    type: "warning",
                  });
                }
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
    $route: {
      handler(route) {
        if (route.path == "/personal/collection") {
          this.init();
        }
      },
    },
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
  clear: both;
}
/* 内容为空 */
.comments-none {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  color: rgb(189, 186, 186);
}
</style>
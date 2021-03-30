<template>
  <div class="detail-content">
    <!-- header 标头 -->
    <div>
      <el-page-header @back="goBack" :content="dataShow.titletext">
      </el-page-header>
    </div>
    <!-- 婚礼详情 -->
    <div class="container">
      <div class="top">
        <img class="top-img" :src="$store.state.baseUrl + dataShow.imgpath" />
      </div>

      <div class="block">
        <div class="block-flx">
          <div class="collection-img">
            <img src="@/assets/images/icon/time.png" />
          </div>
          <span class="dataShow-span">{{ dataShow.createtime.slice(0, 10) + " " + dataShow.createtime.slice(11, 19) }}</span>
        </div>

        <!-- 评论数 -->
        <div class="block-flx">
          <div class="collection-img">
            <img src="@/assets/images/icon/comments.png" />
          </div>
          <span class="dataShow-span">{{ commentCount }}</span>
        </div>

        <!-- 点赞数 -->
        <div class="block-flx" @click="fabulous">
          <div class="collection-img">
            <img src="@/assets/images/icon/fabulous.png" v-if="!isFabulous" />
            <img src="@/assets/images/icon/fabulous_HL.png" v-else />
          </div>
          <span class="dataShow-span">{{ FabulousCount }}</span>
        </div>

        <!-- 收藏 -->
        <div class="block-flx" @click="collection()">
          <div class="collection-img">
            <img
              src="@/assets/images/icon/Collection.png"
              v-if="!isCollection"
            />
            <img src="@/assets/images/icon/Collection_HL.png" v-else />
          </div>
          <span class="dataShow-span">{{ dataShow.fabulous }}</span>
        </div>
      </div>

      <!-- 婚礼详情 -->
      <Title>婚礼详情</Title>

      <div class="desc">
        <p>{{ dataShow.infotext }}</p>
      </div>

      <div class="text">
        <div class="text-img2"></div>

        <div class="text-content">
          <p class="text2">
            {{ dataShow.xqtext }}
          </p>
        </div>
      </div>

      <!-- 评论区 -->
      <Title>评论</Title>

      <div class="comments-content">
        <div class="comments-none" v-if="commentData.length === 0">
          <img src="@/assets/images/icon/none.png" alt="" />
          暂无评论，快去发布吧。
        </div>
        <ul class="comments-content-ul">
          <li
            v-for="(c, i) in commentData"
            :key="i"
            class="comments-content-block"
          >
            <!-- 作者头像 -->
            <div class="author-img">
              <img :src="$store.state.baseUrl + c.imgpath" alt="" />
            </div>
            <!-- 评论内容 -->
            <div class="author-details">
              <div class="author-details2">
                <!-- 作者名称 -->
                <h4 class="author-name">
                  {{ c.nickname }}
                  <!-- 评论时间 -->
                  <span class="comment-date-time">
                    {{ c.fbtime }}
                  </span>
                </h4>
              </div>
              <div class="comment-content">{{ c.textinfo }}</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 发布评论 -->
      <Title>发布评论</Title>

      <div class="send-comment">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="comment" class="form-item2">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="ruleForm.comment"
              class="detail-el-input"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="form-item3">
            <el-button
              type="primary"
              @click="submitPlInfo('ruleForm')"
              class="button1"
            >
              提交
              </el-button>
            <el-button @click="resetForm('ruleForm')" class="button2">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title";

export default {
  components: {
    Title,
  },
  data() {
    var validateComment = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("评论内容为空"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      id: this.$route.query.id, // 当前的婚礼id

      // 展示的婚礼数据
      dataShow: {
        id: 1,
        title: "伦敦时装周春夏| 2019 ...",
        time: "TIME:2018/10/20",
        comments: 3,
        fabulous: 25,
        desc:
          "每一季潘通色彩研究所(Pantone Color Institute™)的团队都会制作潘通时装流行色趋势报告(PANTONE Fashion Color Trend Report)",
        content: [
          "说起波点，人们总是会联想起法式风情，但在刚刚结束的2019春夏伦敦时装周上，Erdem（左）、博柏利（Burberry）（中）和Ryan Lo（右）则展现了黑白波点的英伦风格。无论是黑纱黑点的复古裙装、白底黑点的干练半裙还是黑底白点的田园风格，都是设计师们对经典图案的现代演绎。",
          "2019春夏伦敦时装周已经落下帷幕，Riccardo Tisci执掌的博柏利（Burberry）颇受好评，Victoria Beckham的十周年大秀不负众望，Anya Hindmarch的Chubby Cloud装置艺术更是时装周日程之外最热门的打卡之地。我们为你总结2019春夏伦敦时装周新鲜出炉的十大时尚趋势，为你提供新一季的穿搭灵感！",
        ],
      },

      // 评论
      commentData: [
        {
          imgpath: require("@/assets/images/blog-writer.png"),
          nickname: "John Doe",
          textinfo:
            "因为我最小的时候，我们中间有谁受了肉体的刺青，并且痛苦地死了，除非他能接受。",
          fbtime: "2019/12/14 10:26",
        },
      ],

      commentCount: 0, // 评论数
      FabulousCount: 0, // 点赞数

      // 表单验证规则
      ruleForm: {
        comment: "",
      },
      rules: {
        comment: [{ validator: validateComment, trigger: "blur" }],
      },
      isCollection: false, // 是否收藏
      isFabulous: false, // 是否点赞
    };
  },
  
  created() {
    this.getWeddingInfo(this.id);
    this.getPlList();
  },

  methods: {
    // 后退
    goBack() {
      history.back();
    },

    // 根据婚礼Id,获取婚礼信息
    getWeddingInfo(id) {
      this.$axios.post(`/getHlinfoById?id=${id}`).then((res) => {
        if (res.data.code === "0") {
          this.dataShow = res.data.data;
          // 查询当前用户是否给当前婚礼点赞
          let dzListArr;
          let dzlist = res.data.data.dzlist || "";
          dzListArr = dzlist.split(",");
          this.FabulousCount = dzListArr.length;

          dzListArr.map((item) => {
            if (item == this.$store.state.user.id) {
              this.isFabulous = true;
            } else {
              this.isFabulous = false;
            }
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "warning",
          });
        }
      });
    },

    // 评论提交
    submitPlInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              `/insPlinfo?hlid=${this.id}&textinfo=${this.ruleForm.comment}&userid=${this.$store.state.user.id}`
            )
            .then((res) => {
              if (res.data.code === "0") {
                this.$message({
                  message: "评论成功",
                  type: "success",
                });
                this.$refs[formName].resetFields();
                this.getPlList();
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "warning",
                });
              }
            });
        } else {
          this.$message({
            message: "评论失败",
            type: "warning",
          });
          return false;
        }
      });
    },

    // 评论重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 获取评论列表
    getPlList() {
      this.$axios.get(`/getPlInfoList?hlid=${this.id}`).then((res) => {
        if (res.data.code === "0") {
          this.commentData = [];
          this.commentData = res.data.data;
          this.commentCount = res.data.count;
          // 请求用户信息
          this.$axios
            .get(`/getUserinfoById?id=${this.$store.state.user.id}`)
            .then((userRes) => {
              if (userRes.data.code === "0") {
                // 获取用户昵称，头像
                for (var i = 0; i < this.commentData.length; i++) {
                  if (this.commentData[i].id === userRes.data.data.id) {
                    this.commentData[i].nickname = userRes.data.data.nickname;
                    this.commentData[i].imgpath = userRes.data.data.imgpath;
                  }
                }
                // 获取用户收藏列表
                // 查询当前用户是否收藏该婚礼
                let scListArr;
                let sclist = userRes.data.data.sclist || "";
                scListArr = sclist.split(",");

                scListArr.map((item) => {
                  if (item == this.id) {
                    this.isCollection = true;
                  } else {
                    this.isCollection = false;
                  }
                });
              }
            });
        } else {
          this.commentData = [];
        }
      });
    },

    // 点赞
    fabulous() {
      this.$axios.post(`/dzaction?id=${this.id}`).then((dzRes) => {
        if (dzRes.data.code === "0") {
          this.isFabulous = !this.isFabulous;
          if (!this.isFabulous) {
            this.$message({
              message: "取消点赞",
              type: "success",
              duration: 2000,
            });
            --this.FabulousCount;
          } else {
            this.$message({
              message: "点赞成功",
              type: "success",
              duration: 2000,
            });
            ++this.FabulousCount;
          }
        } else {
          this.$message({
            message: "点赞失败",
            type: "warning",
            duration: 2000,
          });
        }
      });
    },

    // 收藏
    collection() {
      this.$axios.post(`/scaction?id=${this.id}`).then((scRes) => {
        if (scRes.data.code === "0") {
          this.isCollection = !this.isCollection;
          if (!this.isCollection) {
            this.$message({
              message: "取消收藏",
              type: "success",
              duration: 2000,
            });
          } else {
            this.$message({
              message: "收藏成功",
              type: "success",
              duration: 2000,
            });
          }
        } else {
          this.$message({
            message: "收藏失败",
            type: "warning",
            duration: 2000,
          });
        }
      });
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
  width: 100%;
  display: flex;
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
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
}
.block-flx {
  display: flex;
}

.desc {
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin: 0 auto;
  font-weight: 600;
  color: rgb(182, 180, 180);
  line-height: 30px;
}
.text {
  width: 80%;
  margin-left: 10%;
}
.text-img2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img2 {
  width: 80%;
  height: 400px;
  object-fit: cover;
  object-position: center center;
  border: none;
  box-shadow: 0 6px 9px 0 rgba(16, 17, 39, 0.2);
  margin: 30px 0;
  overflow: hidden;
  border-radius: 0;
}
.text-content {
  width: 100%;
  margin: 30px auto;
}
.text2 {
  font-size: 18px;
  line-height: 36px;
  text-indent: 36px;
  text-align: justify;
  margin-bottom: 15px;
}
.collection-img {
  width: 30px;
  height: 30px;
  display: flex;
  margin-right: 10px;
}
.collection-img img {
  width: 100%;
  height: 100%;
}
.dataShow-span {
  margin-left: 10px;
  line-height: 30px;
  max-width: 200px;
}
/* 评论区样式 */
.comments-content {
  width: 100%;
}
.comments-content-ul {
  width: 80%;
  margin: 0 auto;
}
.comments-content-block {
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
  display: flex;
}
.author-img {
  width: 60px;
  height: 60px;
}
.author-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.author-details {
  padding-left: 26px;
}
.author-name {
  color: #101127;
  font-size: 16px;
}
.comment-date-time {
  color: #777c87;
  font-size: 12px;
  padding-top: 4px;
  display: block;
}
.comment-content {
  width: 100%;
  padding: 15px 0 0 0;
  text-align: left;
}

/* 发布评论 */
.send-comment {
  width: 100%;
  margin-top: 20px;
}
.demo-ruleForm {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}
.detail-el-input {
  width: 100%;
  margin-left: -50px;
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
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
          {{ dataShow.comments }}
        </div>
        <!-- 点赞数 -->
        <div class="card-footer-share">
          <i class="el-icon-thumb"></i>
          {{ dataShow.fabulous }}
        </div>
      </div>

      <!-- 婚礼详情 -->
      <Title>婚礼详情</Title>

      <div class="desc">
        <p>{{ dataShow.desc }}</p>
      </div>

      <div class="text">
        <div class="text-img2">
          <img class="img2" v-for="img in dataShow.img2" :src="img" />
        </div>

        <div class="text-content">
          <p class="text2" v-for="text in dataShow.content">
            {{ text }}
          </p>
        </div>
      </div>

      <!-- 评论区 -->
      <Title>评论</Title>

      <div class="comments-content">
        <ul class="comments-content-ul">
          <li
            v-for="(c, i) in commentData"
            :key="i"
            class="comments-content-block"
          >
            <!-- 作者头像 -->
            <div class="author-img">
              <img :src="c.author_head" alt="" />
            </div>
            <!-- 评论内容 -->
            <div class="author-details">
              <div class="author-details2">
                <!-- 作者名称 -->
                <h4 class="author-name">
                  {{ c.author_name }}
                  <!-- 评论时间 -->
                  <span class="comment-date-time">
                    {{ c.time }}
                    <!-- {{
                      item.time.slice(0, 10) + "  " + item.time.slice(11, 19)
                    }} -->
                  </span>
                </h4>
              </div>
              <div class="comment-content">{{ c.content }}</div>
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
              class="el-input"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="form-item3">
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="button1"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')" class="button2"
              >重置</el-button
            >
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
  // 详情页: {{this.$route.query.id}}
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
      dataShow: {
        w_id: 1,
        img: [require("../../assets/images/wednews/top-img.jpg")],
        img2: [
          require("../../assets/images/wednews/ssss1.jpg"),
          require("../../assets/images/wednews/ssss3.jpg"),
        ],
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
      commentData: [
        {
          author_head: require("@/assets/images/blog-writer.png"),
          author_name: "John Doe",
          content:
            "因为我最小的时候，我们中间有谁受了肉体的刺青，并且痛苦地死了，除非他能接受。",
          time: "2019/12/14 10:26",
        },
        {
          author_head: require("@/assets/images/blog-writer.png"),
          author_name: "Liu Long",
          content: "这是我的第一条评论。",
          time: "2020/10/11 12:42",
        },
      ],
      ruleForm: {
        comment: "",
      },
      rules: {
        comment: [{ validator: validateComment, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 后退
    goBack() {
      history.back();
    },

    // 评论提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 评论重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  width: 80%;
  margin: 0 auto;
}
.text2 {
  font-size: 18px;
  line-height: 36px;
  text-indent: 36px;
  text-align: justify;
  margin-bottom: 15px;
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
.el-input {
  width: 100%;
  margin-left: -50px;
}
</style>
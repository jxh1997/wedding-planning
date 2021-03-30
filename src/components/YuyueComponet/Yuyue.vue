<template>
  <div>
    <!-- 服务咨询开始 -->
    <div class="service">
      <div class="s_title">
        <img src="@/assets/images/n_zixun_img.png" alt />
      </div>
      <div class="service_show">
        <div class="s_k1"></div>
        <div class="s_k2"></div>
        <div class="s_bm">
          <div class="s_bm_title">
            <p>
              请填写您的信息, 提交成功工作人员将在24小时内审核通过后,
              请在个人中心查看并完成支付.
            </p>
          </div>
          <div class="s_left">
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              label-width="80px"
              class="yuyue-form"
            >
              <el-form-item label="预约婚礼" prop="hlId">
                <el-select
                  v-model="title"
                  placeholder="请选择所预约的婚礼"
                  :change="setPrice()"
                >
                  <el-option
                    v-for="item in hlOptions"
                    :key="item.id"
                    :label="item.titletext"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="价格" prop="price">
                <el-input v-model="price" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>

              <el-form-item label="婚期" required prop="hunqi">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.hunqi"
                  style="width: 100%"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd HH:mm:ss"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="电话" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                  class="yuyue-form-button"
                  >立即预约</el-button
                >
                <el-button
                  @click="resetForm('ruleForm')"
                  class="yuyue-form-button"
                  >重新填写</el-button
                >
              </el-form-item>
            </el-form>
          </div>

          <div class="s_right">
            <img src="@/assets/images/login-bj3.jpg" alt="" />
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </div>
    <!-- 服务咨询结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        hlId: "",
        name: "",
        hunqi: "",
        tel: "",
      },
      rules: {
        name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        hunqi: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "blur",
          },
        ],
        tel: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
      },
      // 婚礼列表
      hlOptions: [],
      title: "",
      price: 0,
    };
  },

  created() {
    // 获取婚礼列表
    this.$axios.get(`/getHlInfoList`).then((res) => {
      if (res.data.code === "0") {
        this.hlOptions = res.data.data;
      }
    });
  },

  methods: {
    // 设置订单价格
    setPrice() {
      this.hlOptions.map((item) => {
        if (item.id === this.title) {
          this.price = item.price;
        }
      });
    },

    // 订单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              `/insDdinfo?hlid=${this.title}&userid=${this.$store.state.user.id}&price=${this.price}&yydate=${this.ruleForm.hunqi}`
            )
            .then((res) => {
              if (res.data.code === "0") {
                this.$message({
                  message: res.data.msg,
                  type: "success",
                });
              } else {
                this.$message({
                  message: res.data.msg,
                  type: "warning",
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
/*****************服务咨询部分**************************/
.service {
  width: 100%;
  position: relative;
}
.s_title {
  width: 1200px;
  height: 62px;
  margin: 100px auto 30px;
  text-align: center;
}
.service_show {
  width: 1200px;
  height: 600px;
  margin: 0 auto 30px;
  position: relative;
}
.s_k1 {
  width: 1200px;
  height: 530px;
  border: 2px solid #beaac9;
  position: absolute;
  top: 10px;
}
.s_k2 {
  width: 1200px;
  height: 530px;
  border: 2px solid #beaac9;
  position: absolute;
  right: 10px;
  top: 24px;
}
.s_bm {
  width: 1070px;
  position: relative;
  margin: 0 60px;
}
.s_left {
  width: 449px;
  height: 403px;
  border: 1px solid rgba(200, 200, 200, 0.5);
  padding: 2% 6% 4% 6%;
  box-shadow: 1px 2px 11px 0 #909090;
  position: relative;
  float: left;
  top: 80px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin-top: 10px;
}
.s_bm_title {
  display: block;
  position: absolute;
  top: 40px;
  font-size: 18px;
}
.yuyue-form {
  margin-top: 50px;
}

.yuyue-form-button {
  margin-top: 20px;
}

.s_right {
  width: 500px;
  height: 350px;
  margin-right: 0;
  float: right;
  position: relative;
  top: 100px;
}
.s_right img {
  width: 100%;
  height: 100%;
}
.cl {
  clear: both;
}
</style>
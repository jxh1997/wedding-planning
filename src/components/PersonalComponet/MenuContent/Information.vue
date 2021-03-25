<template>
  <div>
    <!-- 个人信息 -->
    <div class="information">
      <div class="information-title">个人基本信息</div>
      <el-form
        :model="infoRuleForm"
        :rules="infoRules"
        ref="infoRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="infoRuleForm.username"
            disabled
            class="info-input"
          ></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="userhead">
          <el-avatar
            shape="square"
            :size="100"
            :fit="fit"
            :src="infoRuleForm.userhead"
            class="info-input"
          ></el-avatar>
          <!-- 上传头像 -->
          <el-button type="text"  @click="dialogFormVisibleHead = true">
            修改头像
          </el-button>
        </el-form-item>
      </el-form>
    </div>


    <el-dialog title="头像上传" :visible.sync="dialogFormVisibleHead">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleHead = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleHead = false">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoRuleForm: {
        username: this.$store.state.user.username,
        userhead: require("@/assets/images/blog-writer.png"), // 用户头像
      },
      infoRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      dialogFormVisibleHead: false, // 修改头像弹出
      dialogFormVisiblePass: false, // 修改密码弹出
      imageUrl: "", // 上传图片地址
    };
  },
  methods: {
    // 图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
.information {
  margin-top: 50px;
  width: 100%;
  padding: 50px;
}
.information-title {
  font-size: 20px;
  color: rgb(73, 73, 73);
  margin-bottom: 30px;
}
.info-input {
  margin-left: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  padding: 75px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.information2 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
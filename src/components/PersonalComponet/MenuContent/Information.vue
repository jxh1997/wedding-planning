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
        <el-form-item label="昵称" prop="nickname">
          <el-input
            v-model="infoRuleForm.nickname"
            class="info-input"
          ></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="imgpath">
          <img
            :src="$store.state.baseUrl + imgpath"
            class="info-input head-img"
          />
          <!-- 上传头像 -->
          <el-button type="text" @click="dialogFormVisibleHead = true">
            修改头像
          </el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="saveInfo"> 保存修改 </el-button>
    </div>

    <!-- 头像上传 -->
    <el-dialog title="头像上传" :visible.sync="dialogFormVisibleHead">
      <el-upload
        :action="baseUrl"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <!-- 图片预览 -->
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>

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
      baseUrl: "/test/uploadfile",
      infoRuleForm: {
        username: this.$store.state.user.username,
        nickname: this.$store.state.user.nickname,
      },
      infoRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      dialogFormVisibleHead: false, // 修改头像弹出
      dialogFormVisiblePass: false, // 修改密码弹出
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    // 文件列表移除文件时的钩子
    handleRemove() {
    },

    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 图片上传成功
    handleAvatarSuccess(res) {
      if (res.code === "0") {
        // 修改 store中 imgpath 的路径
        // this.saveHead(res.path);
        this.$store.dispatch("uploadAvatar", res.path);

        this.$message({
          message: "头像上传成功",
          type: "success",
        });
      } else {
        this.$message({
          message: res.msg,
          type: "warning",
        });
      }
    },

    // 头像上传
    saveHead(path) {
      this.$store.dispatch("uploadAvatar", path);
    },

    // 信息修改
    saveInfo() {
      this.$axios
        .post(`/upUserinfo?id=${this.$store.state.user.id}&nickname=${this.infoRuleForm.nickname}&imgpath=${this.imgpath}`)
        .then(res => {
          if(res.data.code === '0') {
            this.$message({  
              message: '修改成功',
              type: 'success'
            })
            this.$store.dispatch("uploadNickname", this.infoRuleForm.nickname);
          } else {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
          }
        })
    },
  },

  // 计算属性
  computed: {
    imgpath() {
      // 因为要做修改 num 的值  所以放在 计算属性里
      return this.$store.state.user.imgpath;
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
.head-img{
  height: 100px;
  width: 100px;
  object-fit:cover;
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
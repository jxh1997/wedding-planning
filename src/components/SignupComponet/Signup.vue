<template>
  <div class="login-content">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-from"
    >
      <div class="login-title">账 号 注 册</div>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="username"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input
          type="nickname"
          v-model="ruleForm.nickname"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="RegisterForm(ruleForm)">
          注册
        </el-button>
      </el-form-item>

      <div class="gohome" @click="goHome">已有账号，去登录</div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var username = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var nickname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        nickname: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }],
        nickname: [{ validator: nickname, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 注册
    RegisterForm(formName) {
      let username = formName.username;
      let nickname = formName.nickname;
      let password = formName.pass;
      let password2 = formName.checkPass;

      if (username && nickname && password === password2) {
        this.$axios
          .post(
            `/reguser?username=${username}&nickname=${nickname}&password=${password}`
          )
          .then((res) => {
            // console.log(res.data);
            if (res.data.code === "0") {
              this.$message({
                message: "注册成功",
                type: "success",
              });

              setTimeout(() => {
                this.$router.push({
                  path: "/signin",
                });
              }, 3000);
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning",
              });
            }
          });
      } else {
        this.$message({
          message: "请填写注册信息",
          type: "warning",
        });
      }
    },

    // 返回登录
    goHome() {
      this.$router.push({
        path: "/signin",
      });
    },
  },
};
</script>

<style>
.login-content {
  height: 100vh;
  padding-top: 200px;
  background-image: url("../../assets/images/login-bj.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.login-from {
  max-width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: 30px 20px 6px;
}
.gohome {
  display: flex;
  justify-content: flex-end;
  color: rgb(253, 253, 253);
  margin: 10px 0;
}
.gohome:hover {
  transform: scale(1.1);
  margin-right: 15px;
  color: rgb(214, 250, 211);
}
</style>
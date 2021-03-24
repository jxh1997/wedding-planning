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
      <div class="login-title">登 录</div>
      <el-form-item label="用户名" prop="username">
        <el-input
          type="username"
          v-model="ruleForm.username"
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

      <el-form-item>
        <el-button type="primary" @click="LoginForm(ruleForm)">
          登录
        </el-button>
        <el-button @click="registerForm(ruleForm)">
          注册
        </el-button>
      </el-form-item>

      <div class="gohome" @click="goHome">
        暂不登录，返回首页
      </div>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    return {
      ruleForm: {
        pass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录
    LoginForm(formName) {
      let username = formName.username;
      let password = formName.pass;

      console.log(username, password);
      if(username && password) {
        this.$message({
          message: '登录成功',
          type: 'success'
        });


        console.log(this.$store.state);
        this.$store.state.isLogin = true;

        this.$store.dispatch('setUserName', formName);

        // 3s后跳转到首页
        setTimeout(() => {
          this.$router.push({
            path: '/home'
          })
        } , 3000)


      } else {
        this.$message({
          message: '登录失败',
          type: 'warning'
        });
      }
    },

    // 注册跳转
    registerForm() {
      this.$router.push({
        path: '/signup'
      })
    },

    // 返回首页
    goHome() {
      this.$router.push({
        path: '/home'
      })
    }
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
.login-title {
  font-size: 25px;
  display: flex;
  justify-content: center;
  /* line-height: 60px; */
  margin-bottom: 20px;
}

</style>
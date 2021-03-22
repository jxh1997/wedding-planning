<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="header">
        <div class="h_logo">
          <a href="#">
            <img src="@/assets/images/logo.png" alt />
          </a>
        </div>
        <div class="h_menu">
          <!-- 过渡 -->
          <router-link
            :to="item.link"
            class="a_list"
            :key="index"
            v-for="(item, index) of content"
            :title="item.cn"
          >
            <span class="cn">{{ item.cn }}</span>
            <span class="en">{{ item.en }}</span>
          </router-link>
        </div>
        <!-- 登录注册 -->
        <div class="h_tel">
          <a>登录</a> |
          <a>注册</a>
        </div>

        <!-- 自动播放音乐 -->
        <!-- 在最新版的Chrome浏览器（以及所有以Chromium为内核的浏览器）中，已不再允许自动播放音频和视频。 -->
        <!-- 这是因为，Chrome只允许用户对网页进行主动触发后才可自动播放音频和视频。其实，严格地来说，是Chrome不允许在用户对网页进行触发之前播放音频，而视频其实是不受限制的。但因为视频文件同样包含了音频，所以也一同被禁止了。Chrome这样做的目的是为了防止开发者滥用自动播放功能而对用户产生骚扰。 -->
        <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="330"
          height="86"
          src="//music.163.com/outchain/player?type=2&id=27899008&auto=1&height=66"
        ></iframe>
      </div>
    </header>
    <!-- header结束 -->
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      content: Object.freeze([
        { cn: "网站首页", en: "HOME", link: "/home" },
        { cn: "套餐选择", en: "CHOICE", link: "/choice" },
        { cn: "婚礼类型", en: "TYPE", link: "/type" },
        { cn: "婚纱礼服", en: "DRESS", link: "/dress" },
        { cn: "婚纱摄影", en: "GRSPHY", link: "/graphy" },
        { cn: "个人中心", en: "PERSONAL", link: "/personal" },
      ]),
    };
  },
};
</script>

<style scoped>
/*****************header部分**************************/
.header {
  width: 1200px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  align-items: center;
}
.h_logo {
  width: 125px;
  height: 50px;
}
.h_logo a img {
  width: 100%;
  height: 100%;
}
.h_menu {
  width: 800px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
}
.h_tel {
  width: 165px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
}
.h_tel a {
  text-decoration: none;
}
.a_list {
  width: 80px;
  height: 50px;
  float: left;
  font-size: 13px;
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  line-height: 50px;
  transition: all 0.5s linear;
  color: #333;
}

.header .h_menu .a_list .cn {
  width: 60px;
  height: 50px;
}
.header .h_menu .a_list .en {
  width: 60px;
  height: 50px;
}

.header .h_menu .a_list:hover {
  transform: translate(0, -50px);
  overflow: visible;
}

.header .h_menu .a_list:hover .en {
  border-bottom: 5px solid #000;
  height: 45;
  text-decoration: none;
  color: #333;
}
</style>
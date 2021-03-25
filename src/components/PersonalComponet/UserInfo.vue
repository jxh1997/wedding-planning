//用户信息

<template>
  <div class="info">
    <div class="portrait">
      <img :src="userInfo.head" width="80" height="80" />
    </div>

    <div class="user-info">
      <div class="nick" v-text="userInfo.name"></div>

      <div class="uid" v-text="'ID:' + userInfo.uid"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {
        head: require("@/assets/images/blog-writer.png"),
        name: "John Doe",
        uid: "10000",
      },
    };
  },
};
</script>

<style scoped>
.info {
  background: rgb(247, 247, 247);
  width: 300px;
  height: 180px;
  text-align: left;
}
.portrait {
  width: 80px;
  height: 80px;
  overflow: hidden;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  -ms-border-radius: 40px;
  -o-border-radius: 40px;
  border-radius: 40px;
  background-color: #cccccc;
  margin: 40px 18px 0 30px;
}
.user-info {
  margin: 50px 0 0 0;
  vertical-align: top;
}
.portrait,
.user-info,
.w-star,
.w-diamond,
.nick,
.level {
  display: inline-block;
}
.nick {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
}
.nick,
.level {
  vertical-align: middle;
}
.cut {
  padding: 0 10px;
  color: #e9e9e9;
  font-size: 15px;
}

.uid,
.wealth {
  margin-top: 14px;
}
.uid {
  font-size: 13px;
}
.nick-level {
}
.level {
  padding: 0 6px;
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
}
.level .icons {
  display: inline-block;
}
.level1 {
  background: #50e4ce;
}
.level2 {
  background: #4a87f6;
}
.level3 {
  background: #fa9f47;
}
.level4 {
  background: #fad247;
}
.level5 {
  background: #5061e4;
}
.level6 {
  background: #ac47fa;
}
.level .num {
  display: inline-block;
}
.wealth {
  font-size: 12px;
  white-space: nowrap;
}
.wealth .icons {
  margin-top: -3px;
  vertical-align: middle;
}
</style>

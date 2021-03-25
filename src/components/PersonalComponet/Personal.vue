<template>
  <div class="per-container">
    <div class="left">
      <!-- 用户信息 -->
      <UserInfo></UserInfo>
      <!-- 菜单 -->
      <UserMenu></UserMenu>
    </div>
    <div>
      <!-- 内容展示 -->
      <UserContent></UserContent>
    </div>

  </div>
</template>

<script>
import UserInfo from "./UserInfo.vue";
import UserMenu from "./UserMenu.vue";
import UserContent from "./UserContent.vue";

export default {
  components: {
    UserInfo,
    UserMenu,
    UserContent,
  },
};
</script>

<style>
.per-container {
  padding-top: 40px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;
  overflow: hidden;
  /* background: red; */
  display: flex;
}
</style>
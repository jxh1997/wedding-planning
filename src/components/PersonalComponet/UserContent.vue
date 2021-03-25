<template>
  <div class="content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "UserContent",
};
</script>

<style scoped>
.content {
  background: rgb(247, 247, 247);
  vertical-align: top;
  display: inline-block;
  width: 850px;
  height: 935px;
  margin-left: 20px;
  overflow-y: auto;
  overflow: hidden;
}
.content-main {
  margin: 20px;
  text-align: left;
}
</style>

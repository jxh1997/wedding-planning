<template>
  <div class="menu">
    <ul class="menu-ul">
      <router-link class="menu-link" to="/personal/information" tag="li">
        个人信息 
      </router-link>
      <router-link class="menu-link" to="/personal/collection" tag="li">
        我的收藏
      </router-link>
      <router-link class="menu-link" to="/personal/yuyue" tag="li">
        我的预约
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserMenu",
};
</script>

<style scoped>
.menu {
  background: rgb(247, 247, 247);
  width: 300px;
  height: 740px;
  margin-top: 15px;
  text-align: left;
  color: #737373;
}
.menu-ul {
  padding: 0;
  margin: 0;
}
.router-link-active {
  font-weight: bold;
  color: #353535;
  background: #dcf9f5;
}
.menu-link {
  list-style-type: none;
  height: 60px;
  cursor: pointer;
  line-height: 60px;
  padding: 0 0 0 25px;
  transition: all 0.4s;
}
</style>
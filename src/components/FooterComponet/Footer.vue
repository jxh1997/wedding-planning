<template>
  <div>
    <!-- footer开始 -->
    <footer>
      <div class="footer">
        <p class="f_address">公司地址：总店位置</p>
        <p class="f_banquan">婚庆策划© 2021 版权所有 京ICP备 1213453号-1</p>
        <div class="f_zztj">
          <img src="@/assets/images/pic.gif" alt />
        </div>
        <div class="f_link">
          <a href="javascript:;" title="友情链接">友情链接</a>
          <a href="#" target="_blank" title="婚礼策划">婚礼策划</a>
          <a href="#" target="_blank" title="韩式婚纱摄影">韩式婚纱摄影</a>
          <a href="#" target="_blank" title="北京婚纱摄影">北京婚纱摄影</a>
          <a href="#" target="_blank" title="成都婚纱摄影">成都婚纱摄影</a>
          <a href="#" target="_blank" title="古装艺术照">古装艺术照</a>
          <a href="#" target="_blank" title="昆明婚纱摄影">昆明婚纱摄影</a>
          <a href="#" target="_blank" title="韩式婚纱摄影">韩式婚纱摄影</a>
          <a href="#" target="_blank" title="北京结婚网">北京结婚网</a>
        </div>
      </div>
    </footer>
    <!-- footer结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/*****************footer部分**************************/
.footer {
  width: 1423;
  background: #434343;
  padding: 30px 0 20px;
}
.f_erweima {
  width: 1423px;
  text-align: center;
}
.f_erweima img {
  width: 168px;
  height: 143px;
  padding: 0 20px 15px;
}
.f_address {
  width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  color: #fff;
  text-align: center;
}
.f_banquan {
  width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  color: #fff;
  text-align: center;
  padding-top: 30px;
}
.f_zztj {
  width: 50px;
  margin: 10px auto;
}
.f_link {
  width: 1200px;
  margin: 10px auto;
  text-align: center;
}
.f_link a {
  color: #fff;
  margin: 0 5px;
  font-size: 12px;
  text-decoration: none;
}
.f_link a:hover {
  color: #9c9c9c;
}
</style>
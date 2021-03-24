<template>
  <div>
    <!-- 首页轮播图 -->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="img in images" :key="img">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>

    <!-- 套餐选择 -->
    <wMenu></wMenu>

    <!-- 婚礼礼服 -->
    <wDress></wDress>

    <!-- 婚纱摄影 -->
    <wGraphy></wGraphy>

  </div>
</template>

<script>

import wMenu from "@/components/MenuComponet/Menu";
import wDress from "@/components/DressComponet/Dress";
import wGraphy from "@/components/GraphyComponet/Graphy";


export default {
    components: {
      wMenu,
      wDress,
      wGraphy
    },

  data() {
    return {
      images: [
        'https://img-blog.csdnimg.cn/20210323155637534.jpg',
        'https://img-blog.csdnimg.cn/20210323155652593.jpg',
        'https://img-blog.csdnimg.cn/20210323155702425.jpg',
        'https://img-blog.csdnimg.cn/2021032315570893.jpg',
      ]
    }
  },
  
}
</script>

<style>
.el-carousel {
  height: 630px;
  width: 100%;
}
.el-carousel__container {
  height: 600px !important;
  width: 100%;
}
.el-carousel__item {
  height: 100%;
  width: 100%;
}
.el-carousel__item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
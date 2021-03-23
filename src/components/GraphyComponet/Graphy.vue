<template>
  <div>
    <div class="banner">
      <!--背景图片-->
      <div class="img-box">
        <img src="@/assets/images/classic-gallery-bg.jpg" />
      </div>

      <!--标题-->
      <div class="title">
        <div class="main-title">Wedding Photography</div>
        <div class="main-title-2">婚纱摄影</div>
      </div>
    </div>

    <div class="page-area">
      <!-- 图片列表渲染 -->
      <transition-group tag="ul" class="lists" name="animate">
        <li class="animate-item" :key="item.g_id" v-for="item in graphyImages">
          <el-image :src="item.img" :preview-src-list="imgList1"> </el-image>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphyImages: [
        {
          g_id: "1",
          img: "https://img-blog.csdnimg.cn/20210323155751983.jpg",
        },
        {
          g_id: "2",
          img: "https://img-blog.csdnimg.cn/20210323155751964.jpg",
        },
        {
          g_id: "3",
          img: "https://img-blog.csdnimg.cn/20210323155751959.jpg",
        },
        {
          g_id: "4",
          img: "https://img-blog.csdnimg.cn/20210323155751850.jpg",
        },
        {
          g_id: "5",
          img: "https://img-blog.csdnimg.cn/20210323155751927.jpg",
        },
        {
          g_id: "6",
          img: "https://img-blog.csdnimg.cn/20210323155751937.jpg",
        },
        {
          g_id: "7",
          img: "https://img-blog.csdnimg.cn/20210323155751897.jpg",
        },
        {
          g_id: "8",
          img: "https://img-blog.csdnimg.cn/20210323155751890.jpg",
        },
      ],
    };
  },
  computed: {
    // 图片渲染
    imgList1() {
      let imgList = this._data.graphyImages.map((item) => {
        return item.img;
      });
      return imgList;
    },
  },
};
</script>

<style>
.banner {
  position: relative;
  height: 420px;
  width: 100%;
  font-family: "华文隶书";
}
.img-box {
  height: 100%;
  width: 100%;
}
.img-box img {
  height: 100%;
  width: 100%;
}
.title {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 1px;
}
.main-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-family: "华文隶书";
}
.main-title-2 {
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-family: "华文隶书";
}

/* 图片列表样式 */
.lists:after {
  clear: both;
  content: "";
  display: block;
}
.lists {
  width: 100%;
  column-count: 3;
  column-gap: 10px;
  box-sizing: border-box;
  padding: 30px 50px;
}
.lists li {
  text-align: center;
  margin-bottom: 10px;
}
.animate-item {
  transition: all 1s;
  display: inline-block;
}
.animate-enter,
.animate-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.animate-leave-active {
  position: absolute;
}

.el-image img:hover {
  transform: scale(1.1);
  transition: all ease-in-out 0.7s;
  opacity: 0.8;
}
.page-area{
  width: 80%;
  margin: 0 auto;
  padding: 30px 0 50px;
}
</style>
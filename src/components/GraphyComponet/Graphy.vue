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
      </div>
    </div>

    
    <!-- 图片列表渲染 -->
    <transition-group tag="ul"  class="lists" name="animate">
      <li class="animate-item" :key="item.g_id" v-for="item in graphyImages">
        <el-image :src="item.img" :preview-src-list="imgList1">
        </el-image>
      </li>
    </transition-group>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphyImages: [
        {
          g_id: '1',
          img: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },{
          g_id: '2',
          img: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        },{
          g_id: '3',
          img: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        },{
          g_id: '5',
          img: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
        },{
          g_id: '6',
          img: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
        },{
          g_id: '7',
          img: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
        },{
          g_id: '8',
          img: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        }
      ]
    }
  },
  computed: {
    // 图片渲染
    imgList1 () {
      let imgList = this._data.graphyImages.map((item) => {
        return item.img
      })
      return imgList
    }
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
.title{
  background: rgba(0, 0, 0, .6);
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 1px;
}
.main-title{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-family: '华文隶书';
}

/* 图片列表样式 */
.lists:after {
  clear: both;
  content: '';
  display: block;
}
.lists {
  width: 100%;
  column-count: 3;
  column-gap: 10px;
  box-sizing: border-box;
  padding: 30px 50px ;
}
.lists li {
  text-align: center;
  margin-bottom: 10px;
}
.animate-item {
  transition: all 1s;
  display: inline-block;
}
.animate-enter, .animate-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.animate-leave-active {
  position: absolute;
}

.el-image img:hover{
  transform: scale(1.1);
  transition: all ease-in-out 0.7s;
  opacity: 0.8;
}
</style>
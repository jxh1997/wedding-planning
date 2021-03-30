<template>
  <div class="tab-box">
    <!-- 类型切换 -->
    <ul class="tab-title">
      <li
        :class="{ classred: index == current }"
        :key="index"
        @click="
          filt = item.d_id;
          addClass(index);
        "
        v-for="(item, index) in tabItems"
      >
        {{ item.name }}
      </li>
    </ul>

    <!-- 图片展示 -->
    <transition-group tag="ul" class="lists" name="animate">
      <li class="animate-item" :key="i + 1" v-for="(item, i) in filteredItems">
        <el-image :src="item"> </el-image>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      tabItems: [
        { name: "全部", d_id: 1 },
        { name: "西式婚纱", d_id: 2 },
        { name: "中式婚纱", d_id: 3 },
        { name: "晚礼服", d_id: 4 },
        { name: "汉服", d_id: 5 },
      ],
      filt: 1,
      DressItems: [
        {
          d_id: 2,
          url: [
            "https://img-blog.csdnimg.cn/20210323160243811.png",
            "https://img-blog.csdnimg.cn/20210323160243797.png",
            "https://img-blog.csdnimg.cn/20210323160243360.png",
            "https://img-blog.csdnimg.cn/20210323160243317.png",
            "https://img-blog.csdnimg.cn/20210323160243229.png",
            "https://img-blog.csdnimg.cn/20210323160242803.png",
          ],
        },
        {
          d_id: 3,
          url: [
            "https://img-blog.csdnimg.cn/20210323160312761.png",
            "https://img-blog.csdnimg.cn/20210323160312724.png",
            "https://img-blog.csdnimg.cn/20210323160312646.png",
            "https://img-blog.csdnimg.cn/20210323160312265.jpg",
            "https://img-blog.csdnimg.cn/20210323160312254.png",
            "https://img-blog.csdnimg.cn/20210323160312180.jpg",
          ],
        },
        {
          d_id: 4,
          url: [
            "https://img-blog.csdnimg.cn/20210323160415306.png",
            "https://img-blog.csdnimg.cn/20210323160415320.png",
            "https://img-blog.csdnimg.cn/20210323160415285.jpg",
            "https://img-blog.csdnimg.cn/20210323160415241.png",
            "https://img-blog.csdnimg.cn/20210323160415114.png",
            "https://img-blog.csdnimg.cn/2021032316041586.png",
          ],
        },
        {
          d_id: 5,
          url: [
            "https://img-blog.csdnimg.cn/20210323160437111.jpg",
            "https://img-blog.csdnimg.cn/2021032316043784.jpg",
            "https://img-blog.csdnimg.cn/20210323160436920.jpg",
            "https://img-blog.csdnimg.cn/20210323160436453.jpg",
            "https://img-blog.csdnimg.cn/20210323160436406.jpg",
            "https://img-blog.csdnimg.cn/20210323160435798.jpg",
          ],
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      var result;
      if (this.filt != 1) {
        this.DressItems.map((item) => {
          if (item.d_id == this.filt) {
            console.log(item);
            result = item.url;
          }
        });
        return result;
      } else {
        var AllImg = [];
        for (var i = 0; i < this.DressItems.length; i++) {
          AllImg.push(...this.DressItems[i].url);
        }
        return AllImg;
      }
    },
    imgList1() {
      let imgList = this.filteredItems.map((item) => {
        return item.img;
      });
      return imgList;
    },
  },
  methods: {
    //   给当前选中的tab添加选中样式
    addClass(index) {
      this.current = index;
    },
  },

  created() {
    
  },

};
</script>
<style scoped>
.tab-box {
  width: 80%;
  margin: 0 auto;
}

.lists:after {
  clear: both;
  content: "";
  display: block;
}
.lists {
  width: 100%;
  column-count: 3;
  column-gap: 10px;
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
.tab-title {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}
.tab-title li {
  display: inline-block;
  margin: 10px 10px;
  cursor: default;
  text-transform: capitalize;
}
.tab-title .classred {
  border-bottom: 1px solid #ff4061;
  color: #ff4061;
}
.tab-title li:hover {
  border-bottom: 1px solid #ff4061;
  color: #ff4061;
}
</style>

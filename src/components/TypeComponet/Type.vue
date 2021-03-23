<template>
  <!-- 婚礼资讯 -->
  <div class="newswed">
    <div class="news">
      <div class="news_tit">
        <h4>婚礼类型</h4>
      </div>

      <!-- 查询框 -->
      <div class="select_content">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="formInline.type"
              placeholder="婚礼类型"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.price" placeholder="价格排序">
              <el-option label="价格由低到高" value="asc"></el-option>
              <el-option label="价格由高到低" value="desc"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 查询结束 -->

      <!-- 婚礼类型  手风琴效果: 每次只能展开一个面板 -->
      <div class="type-content">
        <div v-if="resultType.length == 0">
          <el-collapse
            v-model="activeNames"
            @change="handleChange"
            v-for="(tp, index) in type"
            v-bind:key="index"
          >
            <el-collapse-item :title="tp.type" :name="tp.t_id">
              <div>{{ tp.desc }}</div>
              <div>{{ tp.content }}</div>
              <div>价格一般在: {{ tp.price }} 元左右。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div v-else>
          <el-collapse
            v-model="activeNames"
            @change="handleChange"
            v-for="(tp, index) in resultType"
            v-bind:key="index"
          >
            <el-collapse-item :title="tp.type" :name="tp.t_id">
              <div>{{ tp.desc }}</div>
              <div>{{ tp.content }}</div>
              <div>价格一般在: {{ tp.price }} 元左右。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [],
      type: [
        {
          t_id: 1,
          type: "西式婚礼",
          price: 10000,
          desc:
            "指的是欧美教堂婚礼，采用这种婚礼形式的新人，至少有一位是基督教徒。",
          content: "其主要内容是教堂、神父、圣经、圣水、婚誓、婚戒、唱诗班等。",
        },
        {
          t_id: 2,
          type: "中西合壁式婚礼",
          price: 13000,
          desc: "是指教堂婚礼和现代流行式婚礼的结合。",
          content: "这种形式在港、澳、台地区很常见。",
        },
        {
          t_id: 3,
          type: "自助餐式婚礼",
          price: 15000,
          desc: "是很有特色的婚礼，它采用自助餐的形式，别开生面。",
          content:
            "婚礼融入舞会和表演之中，大家载歌载舞，众星捧月共同为新人祝福。",
        },
        {
          t_id: 4,
          type: "公证式结婚",
          price: 5000,
          desc: "是近年来，随着新婚姻法的制定而诞生的婚礼形式。",
          content:
            "它由法定婚姻登记机构的人员主持，其仪式过程简洁但充满庄重和神圣氛围，给没有时间和不想有太过隆重仪式形式的新人提供了很方便的结婚方式。",
        },
        {
          t_id: 5,
          type: "新潮婚礼",
          price: 20000,
          desc: "其形式多种多样，如：空中结婚、水下结婚等。",
          content: "目的是标新立异，与众不同，新颖刺激，终身难忘。",
        },
        {
          t_id: 6,
          type: "现代流行式婚礼",
          price: 14000,
          desc: "就是我们最常见的富有时代特征的婚庆形式。",
          content: "花车娶亲、酒店典礼、大宴宾朋、新人敬酒、喜闹洞房等。",
        },
        {
          t_id: 7,
          type: "集体婚礼",
          price: 8000,
          desc: "是最省心省事的选择，也是政府大力提倡的。",
          content: "但不利于突出婚礼个性。",
        },
        {
          t_id: 8,
          type: "传统婚礼",
          price: 18000,
          desc: "又称纯中式婚礼。",
          content:
            "其主要内容是花轿摇、哎呐响、接新娘、红霞帧、红盖头、戴红花、点花烛、拜天地、敬高堂、入洞房等。",
        },
        {
          t_id: 9,
          type: "民族特色婚礼",
          price: 15000,
          desc:
            "每个民族的婚礼都有自己的传统和特色，我国有五十六个民族，婚礼“十里不同风，百里不同俗”，各有千秋。",
          content:
            "想使自己的婚礼办得新颖别致，充满异乡情调，借鉴少数民族的婚庆习俗不失为一种很好的选择。",
        },
      ],
      formInline: {
        type: "",
        price: "asc",
      },
      resultType: []
    };
  },
  methods: {
    // 查询表单内容
    onSubmit() {
      this.resultType = [];
      let result = [];
      let formInlineType = this.formInline.type;
      let formInlinePrice = this.formInline.price;
      for (var i = 0; i < this.type.length; i++) {
          if (this.type[i].type.indexOf(formInlineType) >= 0) {
            result.push(this.type[i])
          }
      }

      
      result.sort(function(a,b) {
        if(formInlinePrice == 'asc') {
          // 升序：由低到高
          return a.price - b.price
        } else {
          // 降序：由高到低
          return b.price - a.price
        }
      })

      this.resultType = result;
    },

    // 折叠面板展开内容
    handleChange() {}
  },
};
</script>

<style>
.select_content {
  display: flex;
}
.newswed {
  width: 100%;
  background-color: #f3f3f3;
  padding: 40px 0;
  margin: 0 auto 30px;
}
.news {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.news .news_tit {
  width: 100%;
  display: flex;
  margin: 0 auto 20px;
}
.news .news_tit h4 {
  width: 1230px;
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}
.type-content {
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}
</style>
<template>
  <!-- 婚礼资讯 -->
  <div class="newswed">
    <div class="news">
      <div class="news_tit">
        <h4>婚礼类型</h4>        
      </div>

      <!-- 婚礼类型  手风琴效果: 每次只能展开一个面板 -->
      <div class="type-content">
        <el-collapse v-model="activeName" accordion v-for="tp in type" >
          <el-collapse-item :title="tp.title" :name="tp.t_id">
            <div>{{tp.desc}}</div>
            <div>{{tp.content}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeName: '1',
        type: [{
          t_id: 1,
          title: '西式婚礼',
          desc: '指的是欧美教堂婚礼，采用这种婚礼形式的新人，至少有一位是基督教徒。',
          content: '其主要内容是教堂、神父、圣经、圣水、婚誓、婚戒、唱诗班等。',
        },{
          t_id: 2,
          title: '中西合壁式婚礼',
          desc: '是指教堂婚礼和现代流行式婚礼的结合。',
          content: '这种形式在港、澳、台地区很常见。',
        },{
          t_id: 3,
          title: '自助餐式婚礼',
          desc: '是很有特色的婚礼，它采用自助餐的形式，别开生面。',
          content: '婚礼融入舞会和表演之中，大家载歌载舞，众星捧月共同为新人祝福。',
        },{
          t_id: 4,
          title: '公证式结婚',
          desc: '是近年来，随着新婚姻法的制定而诞生的婚礼形式。',
          content: '它由法定婚姻登记机构的人员主持，其仪式过程简洁但充满庄重和神圣氛围，给没有时间和不想有太过隆重仪式形式的新人提供了很方便的结婚方式。',
        },{
          t_id: 5,
          title: '新潮婚礼',
          desc: '其形式多种多样，如：空中结婚、水下结婚等。',
          content: '目的是标新立异，与众不同，新颖刺激，终身难忘。',
        },{
          t_id: 6,
          title: '现代流行式婚礼',
          desc: '就是我们最常见的富有时代特征的婚庆形式。',
          content: '花车娶亲、酒店典礼、大宴宾朋、新人敬酒、喜闹洞房等。',
        },{
          t_id: 7,
          title: '集体婚礼',
          desc: '是最省心省事的选择，也是政府大力提倡的。',
          content: '但不利于突出婚礼个性。',
        },{
          t_id: 8,
          title: '传统婚礼',
          desc: '又称纯中式婚礼。',
          content: '其主要内容是花轿摇、哎呐响、接新娘、红霞帧、红盖头、戴红花、点花烛、拜天地、敬高堂、入洞房等。',
        },{
          t_id: 9,
          title: '民族特色婚礼',
          desc: '每个民族的婚礼都有自己的传统和特色，我国有五十六个民族，婚礼“十里不同风，百里不同俗”，各有千秋。',
          content: '想使自己的婚礼办得新颖别致，充满异乡情调，借鉴少数民族的婚庆习俗不失为一种很好的选择。',
        }] 
      };
    }
};
</script>

<style>
/***************** 婚礼资讯**************** */
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
.type-content{ 
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;

}
</style>
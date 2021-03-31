<template>
  <div class="yuyue">
    <div class="yuyue-title">我的预约</div>
    <div class="yuyue-list">
      <el-tabs v-model="activeName">
        <!-- 待确认 -->
        <el-tab-pane label="待确认" name="daiqueren">
          <el-card class="box-card" v-for="dd0 in DdinfoList0" :key="dd0.id">
            <div slot="header" class="clearfix">
              <span>预约内容</span>
            </div>
            <div class="text item">
              <ul>
                <li class="yuyue-list-item">
                  <span> 创建时间： </span>
                  <span>
                    {{ dd0.createtime }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 婚礼价格： </span>
                  <span> {{ dd0.price }} 元 </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 预约时间： </span>
                  <span>
                    {{ dd0.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{
                      dd0.tag === "1" ? "待管理员确认" : "状态异常，请联系客服"
                    }}
                  </span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-tab-pane>

        <!-- 待支付 -->
        <el-tab-pane label="待支付" name="weizhifu">
          <el-card class="box-card" v-for="dd1 in DdinfoList1" :key="dd1.id">
            <div slot="header" class="clearfix">
              <span>预约内容</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="dialog1 = true"
              >
                完成支付
              </el-button>

              <el-dialog title="完成支付" :visible.sync="dialog1" width="30%">
                <div class="zhifu-dialog">
                  <p>您本次预约的婚礼价格为{{ dd1.price }}，请完成支付。</p>
                  <p>本次订单需支付 {{ dd1.price }} 元。</p>
                  <p>确认无误后请点击“确定”完成支付。</p>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialog1 = false">取 消</el-button>
                  <el-button
                    type="primary"
                    @click="completelPay(dd1.id, dd1.price)"
                  >
                    确 定
                  </el-button>
                </span>
              </el-dialog>
            </div>
            <div class="text item">
              <ul>
                <li class="yuyue-list-item">
                  <span> 创建时间： </span>
                  <span>
                    {{ dd1.createtime }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 婚礼价格： </span>
                  <span> {{ dd1.price }} 元 </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 预约时间： </span>
                  <span>
                    {{ dd1.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{ dd1.tag === "3" ? "待支付" : "状态异常，请联系客服" }}
                  </span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-tab-pane>

        <!-- 已支付 -->
        <el-tab-pane label="已支付" name="yizhifu">
          <el-card class="box-card" v-for="dd2 in DdinfoList2" :key="dd2.id">
            <div slot="header" class="clearfix">
              <span>预约内容</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="dialog2 = true"
              >
                取消订单
              </el-button>

              <el-dialog title="完成支付" :visible.sync="dialog2" width="30%">
                <div class="zhifu-dialog">
                  <p>您本次预约的婚礼价格为{{ dd2.price }}</p>
                  <p>本次订单已支付 {{ dd2.price }} 元。</p>
                  <p>确认无误后请点击“退款”完成退款。</p>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialog2 = false">取 消</el-button>
                  <el-button
                    type="primary"
                    @click="YizhifuCompletelPay(dd2.id)"
                  >
                    退款
                  </el-button>
                </span>
              </el-dialog>
            </div>
            <div class="text item">
              <ul>
                <li class="yuyue-list-item">
                  <span> 创建时间： </span>
                  <span>
                    {{ dd2.createtime }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 婚礼价格： </span>
                  <span> {{ dd2.price }} 元 </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 预约时间： </span>
                  <span>
                    {{ dd2.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{ dd2.tag === "4" ? "已支付" : "状态异常，请联系客服" }}
                  </span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-tab-pane>

        <!-- 已退款 -->
        <el-tab-pane label="已退款" name="yituikuan">
          <el-card class="box-card" v-for="dd3 in DdinfoList3" :key="dd3.id">
            <div slot="header" class="clearfix">
              <span>预约内容</span>
            </div>
            <div class="text item">
              <ul>
                <li class="yuyue-list-item">
                  <span> 创建时间： </span>
                  <span>
                    {{ dd3.createtime }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 婚礼价格： </span>
                  <span> {{ dd3.price }} 元 </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 预约时间： </span>
                  <span>
                    {{ dd3.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{ dd3.tag === "5" ? "已退款" : "" }}
                  </span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog0: false, // 待确认弹窗
      dialog1: false, // 未支付弹窗
      dialog2: false, // 已支付弹窗
      dialog3: false, // 已退款弹窗

      activeName: "weizhifu",

      // 待确认
      DdinfoList0: [],
      // 未支付
      DdinfoList1: [],
      // 已支付订单
      DdinfoList2: [],
      // 退款订单
      DdinfoList3: [],
    };

    // tag === 1   =>  提交申请
    // tag === 2   =>  后台管理员确认待支付
    // tag === 3   =>  待支付
    // tag === 4   =>  支付完成
    // tag === 5   =>  退款
  },

  created() {
    this.initOrder();
  },

  methods: {
    // 初始化订单
    initOrder() {
      // 清空数组
      this.DdinfoList0 = [];
      this.DdinfoList1 = [];
      this.DdinfoList2 = [];
      this.DdinfoList3 = [];

      this.$axios
        .get(`/getDdinfoList?userid=${this.$store.state.user.id}`)
        .then((res) => {
          if (res.data.code === "0") {
            let DdList = res.data.data;
            console.log("DdList: ", DdList);
            DdList.map((item) => {
              // 待确认
              if (item.tag === "1") {
                this.DdinfoList0.push(item);
              }
              // tag === 3   =>  待支付
              if (item.tag === "3") {
                this.DdinfoList1.push(item);
              }
              // tag === 4   =>  支付
              if (item.tag === "4") {
                this.DdinfoList2.push(item);
              }
              // tag === 5   =>  退款
              if (item.tag === "5") {
                this.DdinfoList3.push(item);
              }
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
    },

    // 完成支付
    completelPay(dd_id, price) {
      this.$axios
        .post(`/upDdinfo?id=${dd_id}&tag=4&price=${price}`)
        .then((res) => {
          if (res.data.code === "0") {
            this.$message({
              message: "订单支付完成",
              type: "success",
            });
            this.dialog1 = false;
          } else {
            this.$message({
              message: "订单支付失败",
              type: "warning",
            });
          }
        });
    },

    // 退款
    YizhifuCompletelPay(dd_id) {
      this.$axios
        .post(`/upDdinfo?id=${dd_id}&tag=5`)
        .then((res) => {
          if (res.data.code === "0") {
            this.$message({
              message: "订单退款完成",
              type: "success",
            });
            this.dialog2 = false;
          } else {
            this.$message({
              message: "订单退款失败",
              type: "warning",
            });
          }
        });
    },
  },

  watch: {
    $route: {
      handler(route) {
        if (route.path == "/personal/yuyue") {
          this.initOrder();
        }
      },
    },
  },
};
</script>

<style>
.yuyue {
  margin-top: 50px;
  width: 100%;
  padding: 50px;
}
.yuyue-title {
  font-size: 20px;
  color: rgb(73, 73, 73);
  margin-bottom: 30px;
}
.yuyue-list-item {
  line-height: 50px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin-bottom: 20px;
}
.zhifu-dialog {
  line-height: 30px;
  text-align: center;
  font-size: 16px;
}
.zhifu-dialog p {
  margin-bottom: 10px;
}
</style>
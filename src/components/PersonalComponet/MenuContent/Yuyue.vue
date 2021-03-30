<template>
  <div class="yuyue">
    <div class="yuyue-title">我的预约</div>
    <div class="yuyue-list">
      <el-tabs v-model="activeName">
        <el-tab-pane label="未支付" name="weizhifu">
          <el-card class="box-card" v-for="(dd, i) in DdinfoList0" :key="i">
            <div slot="header" class="clearfix">
              <span>预约内容</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="payment(dd.id)"
              >
                完成支付
              </el-button>

              <el-dialog
                title="完成支付"
                :visible.sync="dialogWeiZhifu"
                width="30%"
              >
                <div class="zhifu-dialog">
                  <p>您本次预约的婚礼价格为{{ dd.price }}，请完成支付。</p>
                  <p>本次订单需支付 {{ dd.price }} 元。</p>
                  <p>确认无误后请点击“确定”完成支付。</p>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="cancelPay(dd.id)">取 消</el-button>
                  <el-button
                    type="primary"
                    @click="completelPay(dd.id, dd.price)"
                    >确 定</el-button
                  >
                </span>
              </el-dialog>
            </div>
            <div class="text item">
              <ul>
                <li class="yuyue-list-item">
                  <span> 创建时间： </span>
                  <span>
                    {{ dd.createtime }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 价格： </span>
                  <span> {{ dd.price }} 元 </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 预约时间： </span>
                  <span>
                    {{ dd.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{ dd.tag === "1" ? "未支付" : "已支付" }}
                  </span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-tab-pane>

        <!-- 已支付 -->
        <el-tab-pane label="已支付" name="yizhifu">
          <el-card
            class="box-card"
            v-for="(dd2, i) in DdinfoList1"
            :key="i + a"
          >
            <div slot="header" class="clearfix">
              <span>预约内容</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="YiZhifuPayment(dd2.id)"
              >
                取消订单
              </el-button>

              <el-dialog
                title="完成支付"
                :visible.sync="dialogYiZhifu"
                width="30%"
              >
                <div class="zhifu-dialog">
                  <p>您本次预约的婚礼价格为{{ dd.price }}</p>
                  <p>本次订单已支付 {{ dd2.price }} 元。</p>
                  <p>确认无误后请点击“退款”完成退款。</p>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="YizhifuCancelPay(dd2.id)">取 消</el-button>
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
                    {{ dd.yydate }}
                  </span>
                </li>
                <li class="yuyue-list-item">
                  <span> 订单状态： </span>
                  <span>
                    {{ dd.tag === "1" ? "未支付" : "已支付" }}
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
      dialogYiZhifu: false, // 已支付弹窗
      dialogWeiZhifu: false, // 未支付弹窗
      activeName: "weizhifu",

      // 未支付
      DdinfoList0: [],

      // 已支付订单
      DdinfoList1: [],
    };
  },

  created() {
    this.initOrder();
  },

  methods: {
    // 初始化订单
    initOrder() {
      this.$axios
        .get(`/getDdinfoList?userid=${this.$store.state.user.id}`)
        .then((res) => {
          if (res.data.code === "0") {
            let DdList = res.data.data;
            DdList.map((item) => {
              // tag === 1   => 未支付
              if (item.tag == "1") {
                this.DdinfoList0.push(item);
                // this.getWeddingInfo(item.id);
              } else if(item.tag == "2") {
                console.log(item.tag);
                // 已支付订单
                this.DdinfoList1 = item;
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

    // 通过婚礼id获取婚礼信息
    // getWeddingInfo(id) {
    //   this.$axios
    //     .get(`/getHlinfoById?id=${id}`)
    //     .then((res) => {
    //       console.log(res);
    //       if(res.data.data == id) {

    //       }
    //     })
    // },

    // 点击完成支付
    payment(dd_id) {
      this.dialogWeiZhifu = true;
    },

    // 取消订房
    YiZhifuPayment(dd_id) {
      this.dialogYiZhifu = true;
    },

    // 取消支付（未支付）
    cancelPay(dd_id) {
      this.$message({
        message: "订单" + dd_id + "取消支付",
        type: "warning",
      });
      this.dialogWeiZhifu = false;
    },

    // 完成支付
    completelPay(dd_id, price) {
      this.$axios
        .post(`/upDdinfo?id=${dd_id}&tag=2&price=${price}`)
        .then((res) => {
          if (res.data.code === "0") {
            this.$message({
              message: "订单" + dd_id + "支付完成",
              type: "success",
            });
            this.dialogWeiZhifu = false;
          } else {
            this.$message({
              message: "订单" + dd_id + "支付失败",
              type: "warning",
            });
          }
        });
    },

    // 已支付
    YizhifuCancelPay() {
      this.$message({
        message: "取消退款",
        type: "warning",
      });
      this.dialogYiZhifu = false;
    },

    YizhifuCompletelPay(dd_id) {
      this.$message({
        message: "订单" + dd_id + "退款完成",
        type: "success",
      });
      this.dialogYiZhifu = false;
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
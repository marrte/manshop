<template>
  <div>
    <div
      style="display:flex;justify-content: space-between;background:#ccc;color:#333;font-weight:800;font-size:24px;overflow:auto"
      infinite-scroll-distance="30px"
      infinite-scroll-immediate="true"
    >
      <span>男士购,男士专用</span>
      <span style="display:inline-block;padding:0 10px">
        <button
          style="margin-right:15px;border:none;color:red;font-weight:bolder"
          @click="toLogin"
        >
          登录
        </button>
        <button
          style="border:none;color:blue;font-weight:bolder"
          @click="toReg"
        >
          注册
        </button>
      </span>
    </div>
    <el-carousel height="300px">
      <el-carousel-item v-for="item in lunbo" :key="item.data">
        <img :src="item.image" alt="" style="width:100% ;height:100%" />
      </el-carousel-item>
    </el-carousel>
    <div class="infinite-list" style="overflow:auto">
      <div v-for="item in data" :key="item.title" class="infinite-list-item">
        <h3
          style="padding:0 0 5px 20px;color:#ff0000;font-size:22px;margin:10px 0px"
        >
          {{ item.title }}
        </h3>
        <el-row :gutter="20">
          <el-col
            v-for="item in item.item"
            :key="item.goods_id"
            :span="12"
            style="text-align:center"
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="2"
          >
            <el-card
              :body-style="{ padding: '0px', height: '400px' }"
              @click.native="to(item.goods_id)"
            >
              <img :src="item.goods_image" class="image" />
              <div style="padding: 14px;">
                <h4>{{ item.goods_name }}</h4>
                <div
                  class="bottom clearfix"
                  style="display:flex;justify-content: space-around;padding:10px 0"
                >
                  <span style="color:red;font-weight:bolder;font-size:25px">{{
                    item.goods_price
                  }}</span
                  >&nbsp;<del style="color:blue;font-size:20px">{{
                    parseInt(item.goods_promotion_price)
                  }}</del>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 轮播图数据
      lunbo: [],
      data: [],
    };
  },
  mounted() {
    this.$axios({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "get",
      url: "https://www.nanshig.com/mobile/index.php?act=index",
      data: {},
      // responseType: "string",
      // success: (item) => {
      //   console.log(item);
      // },
    }).then((item) => {
      console.log(item.data.datas[1].goods);
      this.lunbo = item.data.datas[0].adv_list.item;
      this.data = item.data.datas.slice(1).map((item) => {
        return item.goods;
      });
    });
  },
  methods: {
    to(id) {
      this.$router.push({ name: "goods-message", params: { id } });
    },
    toReg() {
      this.$router.push({ name: "reg" });
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
  },
  // 组件内的守卫
  /* 当前路由失活 */
  beforeRouteLeave(to, from, next) {
    console.log(to);
    console.log(from);
    // 进入下一个页面
    next();
  },
  // beforeRouterEnter(to, from, next) {
  //   console.log(to, from, next);
  // },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-size: 18px;
  color: #333;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
.el-carousel__indicators {
  display: none;
}
.el-carousel__indicators::after {
  content: "123 ";
}
.wrapper {
  // position: fixed;
  // top:0px;
  // left: 0;
  // bottom: 0;
  width: 100%;
  overflow: hidden;
}
</style>

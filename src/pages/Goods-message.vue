<template>
  <div>
    <div class="top" style="text-align:center">
      <img :src="this.xiang.goods_image" alt="" />
    </div>
    <div class="center">
      <div
        class="man-name"
        style="font-size:16px;width:500px;font-weight:bolder"
      >
        {{ this.xiang.goods_name }}
      </div>
      <div
        class="man-price"
        style="display:flex; justify-content: space-between;font-size:24px"
      >
        <span style="color:orange"><b>￥</b>{{ this.xiang.goods_price }}</span>
        <span style="font-size:16px"
          >销量:{{ this.xiang.goods_salenum }}件</span
        >
      </div>
      <div style="padding:10px 0px;color:gray">
        送至 <span style="color:red;font-weight:bolder">全国 </span>有货
        <p style="font-weight:bolde;color:#333">免运费</p>
      </div>
      <div style="color:blue;font-weight:bolder">已选颜色:green</div>
      <div style="padding:10px 0">商品评价: <span>好评率100%</span></div>
      <div style="display:flex ; justify-content: space-between;padding:0px;">
        <el-button type="success" style="font-size:20px" @click="addlist"
          >添加购物车</el-button
        >
        <el-button type="warning" style="font-size:20px" @click="buy"
          >立即购买</el-button
        >
      </div>
    </div>
    <div class="bottom">
      <div
        style="text-align:center;color:green;font-weight:bolder;font-size:25px"
      >
        {{ this.xiang.store_name }}
      </div>
      <div style="color:red;margin-bottom:10px;">描述相符100</div>
    </div>
    <div class="a-list" style="width:100%">
      <h4>店铺推荐</h4>
      <div
        v-for="i in xiang.goods_commend_list"
        :key="i.goods_id"
        style="float:left;width:140px;text-align:center"
      >
        <div style="height:200px;width:25%" @click="gotoDetail(i.goods_id)">
          <img :src="i.goods_image_url" alt="" style="width:80px;height:80px" />
          <p style="width:120px;font-size:12px">{{ i.goods_name }}</p>
          <p style="color:red;font-weight: bolder;font-size:12px">
            ￥{{ i.goods_promotion_price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods-message",
  data() {
    return {
      num: 0,
      xiang: {},
    };
  },
  methods: {
    buy() {
      this.addlist();
      this.$router.push({ name: "cart" });
    },
    addlist() {
      let {
        goods_image: image,
        goods_name: name,
        goods_price: price,
        goods_id: id,
      } = this.xiang;
      // let { goodlist } = this.$store.state;
      // console.log(goodlist);
      // let current = goodlist.filter((item) => item.id === id)[0];
      // if (current) {
      //   this.$store.commit("changeQty", { id, qty: current.qty + 1 });
      // } else {
      let goods = {
        id,
        qty: 1,
        name,
        price: (price * 0.8).toFixed(2),
        image,
      };
      this.$store.commit("addlist", goods);
      // }
    },
    get_id() {
      this.id = this.$route.params && this.$route.params.id;
    },
    gotoDetail(id) {
      // this.$router.push(`/goods-message/${id}`);
      /* 动态路由切换，默认会采用复用原则,组件不会重建销毁 */
      this.$router.push({ name: "goods-message", params: { id } });
    },
    getData() {
      this.$axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        methods: "get",
        url: `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${this.id}&key=${this.id}`,
        data: "",
      }).then((item) => {
        // console.log(item);
        //   this.xiang = item.data.datas.map((item) => {
        //     return item.xiang;
        //   });
        let { data } = item;
        let { datas } = data;
        // console.log(datas);
        let { goods_image, goods_info, goods_commend_list, store_info } = datas;
        let {
          goods_name,
          goods_price,
          goods_promotion_price,
          goods_salenum,
          goods_id,
        } = goods_info;
        let { store_name } = store_info;
        this.xiang = {
          goods_image,
          goods_name,
          goods_price,
          goods_id,
          goods_promotion_price,
          goods_salenum,
          goods_commend_list,
          store_name,
        };
        // console.log(this.xiang);
      });
    },
  },
  created() {
    this.get_id();
  },
  mounted() {
    this.getData();
  },
  // 数据监听修改，同页面数据刷新
  // watch: {
  //   $route: function(newValue, oldValue) {
  //     if (newValue.params.id !== oldValue.params.id) {
  //       this.getData();
  //     }
  //   },
  // },
  //   beforeRouterEnter(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   console.log(next);
  // },
  beforeRouterUpdata(to, from, next) {
    to((a, b) => {
      if (a.params.id !== b.params.id) {
        this.getData();
      }
    });
    from(), next();
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<template>
  <div>
    <h1 style="text-align:center">Cart</h1>
    <div v-for="item in goodlists" :key="item.id" class="abc">
      <el-row :gutter="30" style="padding:30px;">
        <el-col :span="4">
          <img :src="item.image" alt="" style="width:100px;height:100px;" />
        </el-col>
        <el-col :span="16">
          <h4 style="padding:15px;">{{ item.name }}</h4>
          <p style="margin: 0 15px">
            <span style="margin-right:20px;color:red;font-weight:bolder"
              >￥{{ item.price }}</span
            >
            <span> x </span>
            <el-input-number
              v-model="item.qty"
              :min="0"
              @change="changeItem(item.id, $event)"
            ></el-input-number>
          </p>
        </el-col>
        <el-col
          :span="4"
          style="text-align:right;height:100px;line-height:120px;"
        >
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="removeItem(item.id)"
            circle
          ></el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
    <div
      style="display:flex;justify-content: space-between;margin-top:40px;margin-left:40px;height:40px;line-height:40px;"
    >
      <el-button
        type="warning"
        icon="el-icon-delete"
        style="font-size:18px"
        @click="removeAllitem"
        >清空购物车</el-button
      >
      <span
        style="display:inline-block;font-weight:900;font-size:18px;width:170px;color:red"
        >总计:{{ totalPrice.toFixed(2) }}</span
      >
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "cart",
  data() {
    return {};
  },
  methods: {
    removeItem(id) {
      this.$store.commit("removeCart", id);
    },
    removeAllitem() {
      this.$store.commit("removeAllitem");
    },
    changeItem(id, qty) {
      this.$store.commit("changeQty", { id, qty });
    },
  },
  computed: {
    totalPrice() {
      return this.goodlists.reduce(
        (prev, item) => prev + item.price * item.qty,
        0
      );
    },
    goodlists() {
      return this.$store.state.goodlists;
    },
  },
  created() {
    console.log(store);
  },
};
</script>

<style lang="scss">
.abc {
  .el-divider {
    margin: -10px;
    background-color: #333;
  }
}
</style>

<template>
  <div style="background:#f2f2f2;height:1000px">
    <h1 style="text-align:center;margin-bottom:30px">Login</h1>
    <el-form
      label-position="right"
      label-width="80px"
      :model="ruleFrom"
      class="fo"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleFrom.password"></el-input>
      </el-form-item>
      <el-button
        type="primary"
        style="width:200px;height:50px;margin-left:230px;margin-top:20px"
        @click="togo"
        >点击登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleFrom: {
        username: "",
        password: "",
        repassword: "",
      },
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    togo() {
      this.$router.push({ path: "/home" });
    },
  },
  mounted() {
    console.log(this.$store.getters.a, this.$store.mutations.a);
  },
};
</script>

<style></style>

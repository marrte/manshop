<template>
  <div style="background:#f2f2f2;height:1000px">
    <h1 style="text-align:center;margin-bottom:30px">Reg</h1>
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
      <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="ruleFrom.repassword"></el-input>
      </el-form-item>
      <el-button
        type="primary"
        style="width:200px;height:50px;margin-left:230px;margin-top:20px"
        @click="toLog"
        >注册</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "reg",
  data() {
    return {
      ruleFrom: {
        username: "",
        password: "",
        repassword: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
        repassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    toLog() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss">
.fo {
  font-weight: bold;
}
</style>

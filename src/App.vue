<template>
  <div >
    <ul>
      <li v-for="item in menu" :key="item.name">
        <router-link
          :to="item.path"
          active-class="active"
          class="router"
          @click="to(item)"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      menu: [
        {
          name: "home",
          path: "/home",
          text: "首页",
        },
        {
          name: "list",
          path: "/list",
          text: "分类",
        },
        {
          name: "message",
          path: "/message",
          text: "消息",
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
        },
      ],
    };
  },
  methods: {
    to(item) {
      this.$router.push({ name: item.name });
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
.active {
  font-weight: bold;
  color: #fff;
  background-color: #000;
}
ul {
  display: flex;
  position: fixed;
  bottom: 0px;
  height: 65px;
  line-height: 65px;
  background-color: #f6f6f6;
  width: 100%;
}
li {
  width: 20%;
  text-align: center;
}
a {
  display: block;
  color: #000;
}
</style>

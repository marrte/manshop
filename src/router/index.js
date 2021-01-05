import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/pages/Home.vue"
import List from "@/pages/List.vue"
import GoodsMessage from "@/pages/Goods-message"
import Message from "@/pages/Message.vue"
import Cart from "@/pages/Cart.vue"
import Mine from "@/pages/Mine.vue"
import Reg from "@/pages/Reg.vue"
import Login from "@/pages/Login.vue"
import Error from "@/pages/Error.vue"
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [{
        name: "home",
        path: "/home",
        component: Home
    }, {
        name: "list",
        path: "/list",
        component: List
    }, {
        name: "message",
        path: "/message",
        component: Message
    },
    {
        name: "goods-message",
        path: "/goods-message/:id",
        component: GoodsMessage
    }, {
        name: "cart",
        path: "/cart",
        component: Cart
    }, {
        name: "mine",
        path: "/mine",
        component: Mine
    },
    {
        name: "reg",
        path: "/reg",
        component: Reg
    },
    {
        name: "login",
        path: "/login",
        component: Login
    }, {
        path: "/",
        redirect: "/home"
    }, {
        path: "*",
        name: "error",
        component: Error,
    }],
})
// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     next();
// })

// 注册全局守卫
// router.beforeEach((to, from, next) => {
//     next();
// })
export default router
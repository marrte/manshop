import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// 实例化仓库(一个应用只允许有一个仓库)
const store = new Vuex.Store({
    state: {
        // 获取属性
    },
    getters: {
        // 获取方法
        a(a) {
            a = 123;
            console.log(a);
        }
    },
    mutations: {
        a(a) {
            a = "123";
            console.log(a);
        },
        b() {
            console.log("12312313");
        }
    }
});
export default store;
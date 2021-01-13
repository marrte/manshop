import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// 实例化仓库(一个应用只允许有一个仓库)
const store = new Vuex.Store({
    state: {
        // 获取属性
        goodlists: [
            {
                id: "1",
                name: "华为P30",
                image:
                    "https://img12.360buyimg.com/n2/jfs/t1/73332/20/6981/49845/5d523cd0E25be59fd/9f24bc66c250add5.jpg",
                price: 4300,
                qty: 5,
            },
            {
                id: "2",
                name: "华为P32",
                image:
                    "https://img12.360buyimg.com/n2/jfs/t1/73332/20/6981/49845/5d523cd0E25be59fd/9f24bc66c250add5.jpg",
                price: 4310,
                qty: 5,
            },
            {
                id: "3",
                name: "华为P34",
                image:
                    "https://img12.360buyimg.com/n2/jfs/t1/73332/20/6981/49845/5d523cd0E25be59fd/9f24bc66c250add5.jpg",
                price: 4320,
                qty: 5,
            },
        ],
    },
    mutations: {
        // (state,payload)
        // 修改state里面的方法
        /* ----------------------------------------------------------- */
        // 添加商品
        addlist(state, payload) {
            state.goodlists.unshift(payload);
        },
        /* ----------------------------------------------------------- */
        // 删除单个商品
        removeCart(state, id) {
            state.goodlists = state.goodlists.filter((item) => { return item.id != id });
        },
        /* ----------------------------------------------------------- */
        // 清空购物车
        removeAllitem(state) {
            state.goodlists = [];
        },
        /* ----------------------------------------------------------- */
        changeQty(state, payload) {
            state.goodlists.forEach((item) => {
                if (item.id === payload.id) {
                    item.qty = payload.qty
                }
            });
        }
    },
    actions: {

    }
})
export default store;
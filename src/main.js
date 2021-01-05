import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import axios from "axios"
import ElementUi from 'element-ui';
import store from "./store/index"
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

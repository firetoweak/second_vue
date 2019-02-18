// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./store";

// 引用axios，并设置基础URL为后端服务api地址
// var axios = require('axios');
// axios.default.baseURL ='http://localhost:8843/api';

Vue.use(ElementUI);
// 将API方法绑定到全局
// Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(function (h) {
    return h(App);
  })
}).$mount('#app');

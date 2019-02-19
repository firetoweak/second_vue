// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./store";

Vue.use(ElementUI);
Vue.config.productionTip = false;

// process.env.MOCK&&require('@/mock');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(function (h) {
    return h(App);
  })
}).$mount('#app');

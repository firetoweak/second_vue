import Vuex from 'Vuex';
import Vue from 'vue';
import carts from './modules/carts'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    carts,
  },
});

export default store;

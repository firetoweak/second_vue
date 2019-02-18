import Vuex from 'Vuex';
import Vue from 'vue';
import carts from './modules/carts'
import userState from './modules/userState'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    carts,
    userState
  },
});

export default store;

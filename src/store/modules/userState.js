const state = {
  userMessage: null,
  userCode: null
};

const getters = {
  getCode: state => {
    if (!state.userCode) {
      state.userCode = JSON.parse(localStorage.getItem('dataLogin')).code;
      if (200 === state.userCode) {
        return '注销'
      }
    } else {
      return '登陆'
    }
  },
  getMessage: state => {
    if (!state.userMessage) {
      state.userMessage = JSON.parse(localStorage.getItem('dataLogin')).data;
    }
    return state.userMessage
  }
};

const mutations = {
  $_setStorage(state, value) {
    state.userMessage = value;
    localStorage.setItem('dataLogin', JSON.stringify(value))
  },
  $_removeStorage(state) {
    state.userMessage = null;
    state.userCode = null;
    localStorage.clear()
  }
};

export default {
  state,
  getters,
  mutations
}


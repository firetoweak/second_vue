const state = {
  userMessage: null
}

const getters = {
  getStorage: state => {
    if (!state.userMessage) {
      state.userMessage = JSON.parse(localStorage.getItem(key))
    }
    return state.userMessage
  }
};

const mutations = {
  $_setStorage(state, value) {
    state.userMessage = value;
    localStorage.setItem(key, JSON.stringify(value))
  },
  $_removeStorage(state) {
    state.userMessage = null;
    localStorage.removeItem(key)
  }
};

export default {
  state,
  getters,
  mutations
}


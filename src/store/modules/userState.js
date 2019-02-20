const state = {
  userMessage: { username:'未登录',name:' ',sex:' ',email:' ',address:' '},
  isLoginChoice: false,
  userCode: null
};

const getters = {
  getCode: state => {
    if (null != state.userCode) {
     // state.userCode = JSON.parse(localStorage.getItem('codeLogin'));
      if (200 === state.userCode) {
        // console.info('判断数据号是否已登陆',state.userCode);
        state.isLoginChoice = true
      }
    }
    return state.isLoginChoice
  },
  getMessage: state => {
     // state.userMessage = JSON.parse(localStorage.getItem('dataLogin'));
     //  console.info('userMessage是否可以get到data', state.userMessage);
    return state.userMessage
  }
};

const mutations = {
  $_setCode(state, value) {
    state.userCode = value;
    // console.info('返回数据号：',state.userCode);
    //localStorage.setItem('codeLogin', JSON.stringify(value))
  },
  $_setMessage(state, value) {
    state.userMessage = value;
    // console.info('存入store个人信息', state.userMessage);
    //localStorage.setItem('dataLogin', JSON.stringify(value))
  },
  $_removeStorage(state) {
    state.userMessage = {username:'未登录',name:' ',sex:' ',email:' ',address:' '};
    state.userCode = null;
    state.isLoginChoice = false;
    //localStorage.clear()
  }
};

export default {
  state,
  getters,
  mutations
}


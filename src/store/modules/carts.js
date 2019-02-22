const state = {

  book_list: [
    {id: 1, 'pro_name': '百年孤独', 'pro_price': 58, 'pro_img': require('../../assets/images/百年孤独.png')},
    {id: 2, 'pro_name': '眠', 'pro_price': 66, 'pro_img': require('../../assets/images/眠.png')},
    {id: 3, 'pro_name': '人间失格', 'pro_price': 70, 'pro_img': require('../../assets/images/人间失格.png')},
    {id: 4, 'pro_name': '袭击面包店', 'pro_price': 40, 'pro_img': require('../../assets/images/袭击面包店.png')},
  ],
  baihuo_list: [
    {id: 5, 'pro_name': '紫砂壶', 'pro_price': 160, 'pro_img': require('../../assets/images/cup.png')},
    {id: 6, 'pro_name': '书包', 'pro_price': 90, 'pro_img': require('../../assets/images/bag.png')},
    {id: 7, 'pro_name': '洗发水', 'pro_price': 69, 'pro_img': require('../../assets/images/洗发水.png')},
    {id: 8, 'pro_name': '运动鞋', 'pro_price': 99, 'pro_img': require('../../assets/images/鞋.png')}
  ],
  dianqi_list: [
    {id: 9, 'pro_name': '金灶煮茶器', 'pro_price': 390, 'pro_img': require('../../assets/images/煮茶器.png')},
    {id: 10, 'pro_name': '凡撒帝电磁炉', 'pro_price': 480, 'pro_img': require('../../assets/images/电磁炉.png')},
    {id: 11, 'pro_name': '联想游戏本', 'pro_price': 8800, 'pro_img': require('../../assets/images/电脑.png')},
    {id: 12, 'pro_name': '小米电视', 'pro_price': 5900, 'pro_img': require('../../assets/images/电视.png')},
  ],
  added: []
};

const getters = {
  bookList: state => state.book_list,
  baihuoList: state => state.baihuo_list,
  dianqiList: state => state.dianqi_list,

  cartProducts: state => {
    return state.added.map(({id, num1}) => {
      let product = state.dianqi_list.find(item => item.id == id);
      // console.info('product', product);
      if (null != product) {
        return {
          ...product,
          num1
        }
      }
      product = state.book_list.find(item => item.id == id);
      // console.info('product', product);
      if (null != product) {
        return {
          ...product,
          num1
        }
      }
      product = state.baihuo_list.find(item => item.id == id);
      // console.info('product', product);
      return {
        ...product,
        num1
      }
    })
  }
};

const actions = {
  addToCart({commit}, product) {
    commit('ADD_TO_CART', {
      id: product.id
    });
    // console.info('id',product.id)
  },
  delProduct({commit}, product) {
    commit('DELETE', product)
  }
};

const mutations = {
  ADD_TO_CART(state, {id}) {
    let record = state.added.find(item => item.id == id);
    if (!record) {
      state.added.push({
        id,
        num1: 1
      })
    } else {
      record.num1++
    }
    // console.info('record',record)
    // console.info('added', state.added)
  },
  DELETE(state, product) {
    state.added.forEach((item, index) => {
      if (item.id == product.id) {
        state.added.splice(index, 1);
      }
    })
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}

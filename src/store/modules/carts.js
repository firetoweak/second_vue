const state={

  book_list: [
    {'pro_name': '百年孤独', 'pro_price': 58, 'pro_img': require('../../assets/images/百年孤独.png')},
    {'pro_name': '眠', 'pro_price': 66, 'pro_img': require('../../assets/images/眠.png')},
    {'pro_name': '人间失格', 'pro_price': 70, 'pro_img': require('../../assets/images/人间失格.png')},
    {'pro_name': '袭击面包店', 'pro_price': 40, 'pro_img': require('../../assets/images/袭击面包店.png')},
  ],
  baihuo_list: [
    {'pro_name': '紫砂壶', 'pro_price': 160, 'pro_img': require('../../assets/images/cup.png')},
    {'pro_name': '书包', 'pro_price': 90, 'pro_img': require('../../assets/images/bag.png')},
    {'pro_name': '洗发水', 'pro_price': 69, 'pro_img': require('../../assets/images/洗发水.png')},
    {'pro_name': '运动鞋', 'pro_price': 99, 'pro_img': require('../../assets/images/鞋.png')}
  ],
  dianqi_list: [
    {'pro_name': '金灶煮茶器', 'pro_price': 390, 'pro_img': require('../../assets/images/煮茶器.png')},
    {'pro_name': '凡撒帝电磁炉', 'pro_price': 480, 'pro_img': require('../../assets/images/电磁炉.png')},
    {'pro_name': '联想游戏本', 'pro_price': 8800, 'pro_img': require('../../assets/images/电脑.png')},
    {'pro_name': '小米电视', 'pro_price': 5900, 'pro_img': require('../../assets/images/电视.png')},
  ],
  added:[]
};

const getters={
  bookList: state=>state.book_list,
  baihuoList: state=>state.baihuo_list,
  dianqiList: state=>state.dianqi_list,

  tableData: state=>{
    return state.added.map((id,num)=>{
      let product = state.book_list.find(n=>n.id == id);
      return{
        ...product,num
      }
    })
  }
};

const actions={
  addToCart({commit},product){
    commit('add',{
      id:product.id
    })
  }
};

const mutations={
  add(state,{id}){
    let record = state.added.find(n=>n.id ==id);
    if(!record){
      state.added.push({
        id,num:1
      })
    }else {
      record.num++
    }
    console.info(record,state.added)
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}

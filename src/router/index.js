import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import register from "../components/register";
import baihuo from "../components/baihuo";
import book from "../components/book";
import dianqi from "../components/dianqi";
import home from "../components/home";
import shopping from "../components/shopping";

Vue.use(Router);

const routes =[
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/register',
    component:register,
  },
  {
    path:'/baihuo',
    component:baihuo,
  },
  {
    path:'/book',
    component:book,
  },
  {
    path:'/dianqi',
    component:dianqi,
  },
  {
  path:'/shopping',
    component:shopping,
  }
];

export default new Router({
  mode:'history',
  routes,
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import register from "../components/register";


Vue.use(Router);

const routes =[
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/register',
    component:register,
  }
];

export default new Router({
  routes,
})

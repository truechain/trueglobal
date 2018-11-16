import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import SignIn from '@/pages/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
      // meta: {
      //   isHeader: true
      // },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

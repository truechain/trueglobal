import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import SignIn from '@/pages/SignIn'
import { pagestar } from '@/util'

Vue.use(Router)

const router = new Router({
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

router.afterEach((to, from) => {
  pagestar()
})

export default router

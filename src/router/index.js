import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import SignIn from '@/pages/SignIn'
import Active from '@/pages/Active'
import Topic from '@/pages/Topic'
import Vote from '@/pages/Vote'
import News from '@/pages/News'
import Detail from '@/pages/Detail'
import { pagestar } from '@/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

router.beforeEach((to, from, next) => {
  const goHomeList = [ '/inter', '/pw', '/rni', '/rule', '/claim', '/contact' ]
  if (goHomeList.includes(to.fullPath)) {
    next('/')
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  pagestar()
})

export default router

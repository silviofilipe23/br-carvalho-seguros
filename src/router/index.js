import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'home', title: 'Home', required: false, layout: 'default'
    },
    component: () => import(/* webpackChunkName: "Home" */ '../pages/home/Home')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      icon: 'home', title: 'Dashboard', required: true, layout: 'dashboard'
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '../pages/dashboard/Dashboard')
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: 'Login', layout: 'login' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - BR Carvalho`
  console.log(to.meta)

  if (!window.uid && to.meta.required === true) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router

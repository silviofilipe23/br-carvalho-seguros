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
  },
  {
    path: '/auto',
    name: 'Auto',
    meta: { title: 'Seguro Auto', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/auto/Auto')
  },
  {
    path: '/residencia',
    name: 'Residência',
    meta: { title: 'Seguro Residencial', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/residencia/Residencia')
  },
  {
    path: '/vida',
    name: 'Vida',
    meta: { title: 'Seguro de Vida', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/vida/Vida')
  },
  {
    path: '/acdt-pessoais',
    name: 'Acidentes Pessoais',
    meta: { title: 'Acidentes Pessoais', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/acdtPessoais/AcdtPessoais')
  },
  {
    path: '/pscard',
    name: 'Cartão Porto Seguro',
    meta: { title: 'Cartão Porto Seguro', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/pscard/Pscard')
  },
  {
    path: '/consorcio-imobiliario',
    name: 'Consórcio Imobiliário',
    meta: { title: 'Consórcio Imobiliário', layout: 'default' },
    component: () => import(/* webpackChunkName: "login" */ '../pages/consImobiliario/ConsImobiliario')
  }

  // Consórcio Imobiliário
  // Financiamentos
  // Previdência
  // Residencia
  // Viagem
  // Automóveis/Caminhoes
  // Consorcio Auto
  // empresarial/Condominio
  // notebook
  // planos de saude
  // previdencia infantil
  // seguro moto
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

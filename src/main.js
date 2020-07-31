import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FireBase from './firebase'
import DefaultLayout from './components/layout/Default'
import DashboardLayout from './components/layout/Dashboard'
import LoginLayout from './components/layout/Login'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(FireBase)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.component('default-layout', DefaultLayout)
Vue.component('dashboard-layout', DashboardLayout)
Vue.component('login-layout', LoginLayout)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

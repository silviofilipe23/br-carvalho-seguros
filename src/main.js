import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FireBase from './firebase'
import DefaultLayout from './components/layout/Default'
import DashboardLayout from './components/layout/Dashboard'
import LoginLayout from './components/layout/Login'
import Loading from 'vue-loading-overlay'
import VueToast from 'vue-toast-notification'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.use(FireBase)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast, {
  position: 'top-right',
  duration: 4000,
  dismissible: true
})
Vue.use(Loading, {
  container: null,
  canCancel: false,
  onCancel: self.onCancel,
  color: '#43a5a8',
  loader: 'dots',
  width: 64,
  height: 64,
  backgroundColor: '#ffffff',
  opacity: 0.5,
})

Vue.config.productionTip = false

Vue.component('default-layout', DefaultLayout)
Vue.component('dashboard-layout', DashboardLayout)
Vue.component('login-layout', LoginLayout)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

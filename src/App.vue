<template>
  <div id="app">
    <base-spinner></base-spinner>
    <component :is='layout'>
      <transition mode="out-in" name='router-anim'>
        <router-view/>
      </transition>
    </component>
  </div>
</template>

<script>
import BaseSpinner from './components/global/BaseSpinner'
const Layout = 'default'

export default {
  name: 'App',
  components: {
    BaseSpinner
  },
  // data: () => ({ isLogged: false }),
  mounted () {
    // this.$firebase.auth().onAuthStateChanged(user => {
    //   window.uid = user ? user.uid : null
    //   this.isLogged = !!user
    //   this.$router.push({ name: window.uid ? 'dashboard' : 'login' })
    setTimeout(() => {
      this.$root.$emit('Spinner::hide')
    }, 2000)
    // })
  },
  computed: {
    layout () {
      return `${(this.$route.meta.layout || Layout)}-layout`
    }
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>

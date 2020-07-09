<template>
  <div>
    <base-spinner></base-spinner>

  </div>
</template>

<script>
import BaseSpinner from '../../components/global/BaseSpinner'

export default {
  name: 'Dashboard',
  components: {
    BaseSpinner
  },
  data: () => ({ isLogged: false }),
  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      this.$router.push({ name: window.uid ? 'dashboard' : 'login' })
      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 300)
    })
  }
}
</script>

<style>

</style>

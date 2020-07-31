
<template>
  <div class="container-fluid m-0 p-0">
		<nav-bar-top></nav-bar-top>
    <slot />
  </div>
</template>

<script>
import NavBarTop from '../global/NavBarTop'

export default {
	name: 'Default',
	components: {
		NavBarTop
	}
}
</script>

<style lang="scss" scoped>
</style>

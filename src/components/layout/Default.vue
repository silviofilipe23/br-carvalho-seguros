
<template>
  <div class="container-fluid m-0 p-0 container-default">
		<nav-bar-top></nav-bar-top>
    <slot/>
		<footer-component></footer-component>
  </div>
</template>

<script>
import NavBarTop from '../global/NavBarTop'
import FooterComponent from '../footer/Footer'

export default {
	name: 'DefaultLayout',
	components: {
		NavBarTop,
		FooterComponent
	}
}
</script>

<style lang="scss" scoped>
.container-default {
	padding-top: 168px !important;
}
</style>

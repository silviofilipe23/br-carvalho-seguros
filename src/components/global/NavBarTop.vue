<template>
  <div>
		<b-navbar class="top" toggleable="lg" fixed="top">
			<div class="container">
			</div>
		</b-navbar>
		<b-navbar toggleable="lg"  class="fixed">
			<div class="container">
				<b-navbar-brand href="#/">NavBar</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item right>
							<router-link to="/auto">Auto</router-link>
						</b-nav-item>
						<b-nav-item right>
							<router-link to="/residencia">Residência</router-link>
						</b-nav-item>
						<b-nav-item right>
							<router-link to="/vida">Vida</router-link>
						</b-nav-item>
						<b-nav-item-dropdown text="Seguro Pra Você" right>
							<b-dropdown-item href="#/vida"><router-link to="/vida">Vida</router-link></b-dropdown-item>
							<b-dropdown-item href="#/acdt-pessoais"><router-link to="/acdt-pessoais">Acidentes Pessoais</router-link></b-dropdown-item>
							<b-dropdown-item href="#/pscard"><router-link to="/acdt-pessoais">Cartão Porto Seguro</router-link></b-dropdown-item>
							<b-dropdown-item href="#/consorcio-imobiliario"><router-link to="/consorcio-imobiliario">Consórcio Imobiliário</router-link></b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: 'NavBarTop',
	data () {
		return {
			menu: []
		}
	},
	mounted () {
		this.createNav()
	},
	methods: {
		createNav () {
			const self = this
			console.log(this.$router)

			self.menu = this.$router.options.routes

			console.log(self.menu)
		}
	}
}
</script>

<style lang="scss" scoped>
	// .navbar {
	// 	background-color: var(--light);
	// }
	.top {
		height: 110px;
		background-color: var(--dark);
	}
	.fixed {
		position: fixed;
		top: 110px;
		right: 0;
		left: 0;
		z-index: 1030;
		background-color: #ffffff;
		border-top-color: #b2defb;
		border-top-width: 1px;
		border-top-style: solid;
		border-bottom-color: #eee;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
</style>

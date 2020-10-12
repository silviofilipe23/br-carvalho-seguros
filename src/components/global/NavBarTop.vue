<template>
  <div>
		<b-navbar class="top transform" :class="{ 'navbar--hidden': !showNavbar }" toggleable="lg" fixed="top">
			<div class="container">
			</div>
		</b-navbar>
		<b-navbar toggleable="lg" :class="{ 'navbar--hidden1': !showNavbar }"  class="fixed transform1">
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
			menu: [],
			showNavbar: true,
			lastScrollPosition: 0
		}
	},
	mounted () {
		this.createNav()
		window.addEventListener('scroll', this.onScroll)
	},
	methods: {
		createNav () {
			const self = this
			console.log(this.$router)

			self.menu = this.$router.options.routes

			console.log(self.menu)
		},
		onScroll () {
			const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
			if (currentScrollPosition < 0) {
				return
			}
			// Stop executing this function if the difference between
			// current scroll position and last scroll position is less than some offset
			if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
				return
			}
			this.showNavbar = currentScrollPosition < this.lastScrollPosition
			this.lastScrollPosition = currentScrollPosition
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
	.transform {
		transform: translate3d(0, 0, 0);
		transition: 0.2s all ease-out;
		opacity: 0.9;
	}
	.transform1 {
		transform: translate3d(0, 0, 0);
		transition: 0.2s all ease-out;
	}
	.navbar.navbar--hidden {
		box-shadow: none;
		transform: translate3d(0, -100%, 0);
	}
	.navbar.navbar--hidden1 {
		box-shadow: none;
		transform: translate3d(0, -200%, 0);
	}
</style>

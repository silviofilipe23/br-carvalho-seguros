<template>
  <div>
		<b-navbar class="top" toggleable="lg" fixed="top">
			<div class="container">
			</div>
		</b-navbar>
		<b-navbar toggleable="lg"  class="fixed">
			<div class="container">
				<b-navbar-brand href="#">NavBar</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>

					<!-- Right aligned nav items -->
					<b-navbar-nav class="ml-auto">
						<b-nav-item-dropdown text="Lang" right>
							<b-dropdown-item href="#">EN</b-dropdown-item>
							<b-dropdown-item href="#">ES</b-dropdown-item>
							<b-dropdown-item href="#">RU</b-dropdown-item>
							<b-dropdown-item href="#">FA</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown right>
							<!-- Using 'button-content' slot -->
							<template v-slot:button-content>
								<em>User</em>
							</template>
							<b-dropdown-item href="#">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Sign Out</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: 'NavBarTop'
}
</script>

<style lang="scss" scoped>
	// .navbar {
	// 	background-color: var(--light);
	// }
	.top {
		height: 110px;
		background-color: var(--light);
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

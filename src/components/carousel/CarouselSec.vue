<template>
  <div class="container-fluid carousel-sec">
		<div class="container">
			<h4>Seguros que Trabalhamos</h4>
			<div class="row">
				<b-carousel
					id="carousel-1"
					:interval="4000"
					img-width="100%"
					img-height="124"
					background="#ababab"
					style="text-shadow: 1px 1px 2px #333;"
				>
					<b-carousel-slide>
						<template v-slot:img>
							<div class="row partners">
								<div class="col-3">
									<div class="">
										<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/ALLIANZ.jpg"
										alt="image slot"
									>
									</div>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/AZUL SEGUROS.jpg"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/BRADESCO SEGUROS.jpg"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/HDI.png"
										alt="image slot"
									>
								</div>
							</div>
						</template>
					</b-carousel-slide>
					<b-carousel-slide>
						<template v-slot:img>
							<div class="row partners">
								<div class="col-3">
									<div class="">
										<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/LIBERTY.jpg"
										alt="image slot"
									>
									</div>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/METLIFE.jpg"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/PORTO SEGURO.png"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/SOMPO SEGUROS.jpg"
										alt="image slot"
									>
								</div>
							</div>
						</template>
					</b-carousel-slide>
					<b-carousel-slide>
						<template v-slot:img>
							<div class="row partners">
								<div class="col-3">
									<div class="">
										<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/SUHAI.jpg"
										alt="image slot"
									>
									</div>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/SULAMERICA.jpg"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/TOKIO MARINE.png"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="@/assets/seguros/UNIMED.jpg"
										alt="image slot"
									>
								</div>
							</div>
						</template>
					</b-carousel-slide>
				</b-carousel>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CarouselSec'
}
</script>

<style lang="scss" scoped>
.carousel-sec {
	height: 310px;
	padding: 50px 0px;
	background-color: #eee;
}
h4 {
	text-align: center;
	font-weight: bold;
	color: var(--dark);
}
.partners {
	padding: 20px;
}
.partners img {
	border-color: #ccc;
	border-width: 1px;
	border-style: solid;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
}
.carousel,
.carousel-item {
	background: #eee none repeat scroll 0% 0% !important;
}
</style>

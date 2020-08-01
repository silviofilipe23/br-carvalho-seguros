<template>
  <div class="container-fluid carousel-sec">
		<div class="container">
			<h4>Seguros que Trabalhamos</h4>
			<div class="row">
				<b-carousel
					id="carousel-1"
					v-model="slide"
					:interval="4000"
					img-width="100%"
					img-height="124"
					background="#ababab"
					style="text-shadow: 1px 1px 2px #333;"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
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
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
									</div>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
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
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
									</div>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
										alt="image slot"
									>
								</div>
								<div class="col-3">
									<img
										class="d-block"
										width="100%"
										height="124"
										src="https://picsum.photos/1920/514"
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

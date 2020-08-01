<template>
	<div class="container-fluid carousel-home">
		<div class="row">
			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				indicators
				img-width="100%"
				img-height="514"
				background="#ababab"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<b-carousel-slide>
					<template v-slot:img>
						<img
							class="d-block"
							width="100%"
							height="514"
							src="https://picsum.photos/1920/514"
							alt="image slot"
						>
					</template>
				</b-carousel-slide>

				<!-- Slides with img slot -->
				<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
				<b-carousel-slide>
					<template v-slot:img>
						<img
							class="d-block"
							width="100%"
							height="514"
							src="https://picsum.photos/1920/514"
							alt="image slot"
						>
					</template>
				</b-carousel-slide>
			</b-carousel>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Carousel',
	data () {
		return {
			slide: 0,
			sliding: null
		}
	},
	methods: {
		onSlideStart (slide) {
			this.sliding = true
		},
		onSlideEnd (slide) {
			this.sliding = false
		}
	}
}
</script>

<style lang="scss" scoped>
.carousel-home {
	height: 514px;
}
</style>

<template>
  <div>
    <carousel></carousel>
    <carousel-sec></carousel-sec>
    <renovation></renovation>
    <div style="height: 100px">

    </div>
  </div>
</template>

<script>
import Carousel from '../../components/carousel/Carousel'
import CarouselSec from '../../components/carousel/CarouselSec'
import Renovation from '../../components/renovation/Renovation'

export default {
  name: 'Home',
  components: {
    Carousel,
    CarouselSec,
    Renovation
  }
}
</script>

<style>

</style>

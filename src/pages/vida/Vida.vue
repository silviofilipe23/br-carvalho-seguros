<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <carousel-sec></carousel-sec>
    <h1>dsafasd</h1>
  </div>
</template>

<script>
import TitlePage from '../../components/global/Title'
import CarouselSec from '../../components/carousel/CarouselSec'

export default {
  name: 'Vida',
  components: {
    TitlePage,
    CarouselSec
  }
}
</script>

<style>

</style>

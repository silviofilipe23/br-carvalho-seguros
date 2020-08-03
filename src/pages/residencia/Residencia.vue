<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <carousel-sec></carousel-sec>
  </div>
</template>

<script>
import TitlePage from '../../components/global/Title'
import CarouselSec from '../../components/carousel/CarouselSec'

export default {
  name: 'Residencia',
  components: {
    TitlePage,
    CarouselSec
  }
}
</script>

<style>

</style>

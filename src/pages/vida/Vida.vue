<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <div class="container" style="padding-bottom: 30px">
      <div class="row choise">
        <div class="col-lg-6">
          <div class="card">
            <img src="@/assets/vida.jpg" style="height: 20rem;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Seguro de Vida</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <img src="@/assets/saude.jpg" style="height: 20rem;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Planos de Saúde</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <carousel-sec></carousel-sec>
  </div>
</template>

<script>
import TitlePage from '../../components/global/Title'
import CarouselSec from '../../components/carousel/CarouselSec'

export default {
  name: 'Vida',
  components: {
    TitlePage,
    CarouselSec,
  },
}
</script>

<style lang="scss" scoped>
  .choise {
    padding: 40px 0px;
  }
</style>

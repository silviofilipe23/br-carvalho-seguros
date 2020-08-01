<template>
  <footer>
    <div class="container-fluid footer m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2><b><i class="fas fa-circle"></i></b> Informações Contato</h2>
            <h5><i class="fa fa-phone"></i> +55 62 5555-8888</h5>
            <h5><i class="fas fa-mobile-alt"></i> +55 62 99999-8888</h5>
            <h5><i class="fab fa-whatsapp"></i> +55 62 99999-8888</h5>
            <h5><i class="far fa-envelope"></i> contato@brcarvalho.com.br</h5>
          </div>
          <div class="col-md-4">
            <h2><b><i class="fas fa-circle"></i></b> Nossa Localização</h2>
            <h5><b><i class="fas fa-map-marked-alt"></i></b> Rua dos Coqueiros, Quadra 36, Lote 06. Pq. Primavera - Ap. de Goiania - GO - 74913-117</h5>
          </div>
          <div class="col-md-4">
            <h2><b><i class="fas fa-circle"></i></b> Principais Seguros</h2>
            <h5><a href="http://"><b><i class="fas fa-circle circle-short"></i></b> Seguro Auto</a></h5>
            <h5><a href="http://"><b><i class="fas fa-circle circle-short"></i></b> Seguro Residencial</a></h5>
            <h5><a href="http://"><b><i class="fas fa-circle circle-short"></i></b> Seguro de Vida</a></h5>
            <h5><a href="http://"><b><i class="fas fa-circle circle-short"></i></b> Seguro Moto</a></h5>
            <h5><a href="http://"><b><i class="fas fa-circle circle-short"></i></b> Viagem</a></h5>
          </div>
        </div>
      </div>
    </div>
    <copy-right></copy-right>
  </footer>
</template>

<script>
import CopyRight from './CopyRight'
export default {
  name: 'Footer',
  components: {
    CopyRight
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #212B30;
  padding: 40px 0px;
  color: #fff
}
h2 {
  font-size: 18px;
  padding-bottom: 30px;
}
h2 b, i{
  color: var(--dark-medium);
}
h5 {
  font-size: 14px;
}
ul li {
  font-size: 14px;
}
.circle-short {
  font-size: 8px !important;
}
a {
  text-decoration: none !important;
  color: #fff;
}
</style>

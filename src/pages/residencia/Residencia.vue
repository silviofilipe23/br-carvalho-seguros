<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <div class="container" style="padding-bottom: 30px">
      <div class="row box-cotacao">
        <div class="col-lg-12 titulo-cotacao">
          <h2>Cotação para Seguro Residencial</h2>
        </div>
      </div>
      <div class="row  box-cotacao" style="margin-top: 30px">
        <div class="col-lg-12">
          <h3>Dados do Proprietário</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form>
            <div class="row">
              <div class="form-group col-lg-6">
                <label for="segurado">Nome do Proprietário:</label>
                <input placeholder="Digite o nome completo" type="text" class="form-control" id="segurado" required>
              </div>
              <div class="form-group col-lg-6">
                <label for="email">Email para Contato:</label>
                <input placeholder="pedro@exemplo.com" type="email" class="form-control" id="email" required>
              </div>
              <div class="form-group col-lg-6">
                <label for="telefone">Telefone para Contato:</label>
                <input placeholder="(xx) XXXX-XXXX" type="text" class="form-control" id="telefone" required>
              </div>
              <div class="form-group col-lg-6">
                <label for="nome">Nome do Solicitante:</label>
                <input placeholder="Digite o nome completo" type="text" class="form-control" id="nome" required>
              </div>
            </div>
            <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-lg-12">
                <h3>Dados do Imóvel</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6">
                <label for="ocupacao">Ocupação do Imóvel:</label>
                <select class="form-control" id="ocupacao">
                  <option disabled selected>Selecione</option>
                  <option>Habitual</option>
                  <option>Veraneio</option>
                </select>
              </div>
              <div class="form-group col-lg-6">
                <label for="tipo">Tipo de Moradia:</label>
                <select class="form-control" id="tipo">
                  <option disabled selected>Selecione</option>
                  <option>Madeira</option>
                  <option>Madeira/Alvenaria</option>
                  <option>Alvenaria</option>
                  <option>Alvenaria/Forro de Madeira</option>
                </select>
              </div>
              <div class="form-group col-lg-6">
                <label for="cep">CEP da Residência:</label>
                <input placeholder="00000-000" type="text" class="form-control" id="cep" required>
              </div>
            </div>
            <div class="row">
               <div class="form-group col-lg-12" style="margin-bottom: 0px">
                <label for="">Equipamentos de Segurança:</label>
              </div>
              <div class="form-group col-lg-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="alarmeLocal">
                  <label class="custom-control-label" for="alarmeLocal">Alarme Local</label>
                </div>
              </div>
              <div class="form-group col-lg-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="alarmevigilancia">
                  <label class="custom-control-label" for="alarmevigilancia">Alarme por Empresa de Vigilância</label>
                </div>
              </div>
              <div class="form-group col-lg-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="grade">
                  <label class="custom-control-label" for="grade">Grades nas Janelas</label>
                </div>
              </div>
              <div class="form-group col-lg-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="condFechado">
                  <label class="custom-control-label" for="condFechado">Condomínio Fechado</label>
                </div>
              </div>
            </div>
             <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-lg-12">
                <h3>Coberturas do Imóvel - Valores em R$</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6">
                <label for="seguro">Seguro:</label>
                <select class="form-control" id="seguro">
                  <option disabled selected>Selecione</option>
                  <option>Novo</option>
                  <option>Renovação</option>
                </select>
              </div>
              <div class="form-group col-lg-6">
                <label for="incendio">Incêndio:</label>
                <input placeholder="" type="text" class="form-control" id="incendio">
              </div>
              <div class="form-group col-lg-6">
                <label for="vendaval">Vendaval/Impacto de Veículos:</label>
                <input placeholder="" type="text" class="form-control" id="vendaval">
              </div>
              <div class="form-group col-lg-6">
                <label for="danos">Danos Elétricos:</label>
                <input placeholder="" type="text" class="form-control" id="danos">
              </div>
              <div class="form-group col-lg-6">
                <label for="vidros">Quebra de Vídros:</label>
                <input placeholder="" type="text" class="form-control" id="vidros">
              </div>
              <div class="form-group col-lg-6">
                <label for="aluguel">Aluguel Perda ou Pagamento</label>
                <input placeholder="" type="text" class="form-control" id="aluguel">
              </div>
              <div class="form-group col-lg-6">
                <label for="desmor">Desmoronamento:</label>
                <input placeholder="" type="text" class="form-control" id="desmor">
              </div>
              <div class="form-group col-lg-6">
                <label for="resp">Responsabilidade Familiar:</label>
                <input placeholder="" type="text" class="form-control" id="resp">
              </div>
              <div class="form-group col-lg-6">
                <label for="rouboFurto">Roubo ou Furto:</label>
                <input placeholder="" type="text" class="form-control" id="rouboFurto">
              </div>
              <div class="form-group col-lg-6">
                <label for="assist">Assistência 24Hrs:</label>
                <input placeholder="" type="text" class="form-control" id="assist">
              </div>
              <div class="form-group col-lg-12">
                <label for="info">Outras Coberturas / Informações:</label>
                <textarea class="form-control" id="info" rows="3"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-12">
                <button type="submit" class="btn form-control btn-primary">Enviar Cotação</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container" style="padding: 50px 15px">
      <div class="row">
        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-12" style="margin-top: 15px">
              <span>Muros, grades e cães protegem sua casa, mas não garantem que ela nunca será roubada. Além disso, existem outros imprevistos (incêndio, explosão, vendaval, queda de raios, entre outros.) que podem causar prejuízos, muitas vezes irrecuperáveis.</span>
            </div>
            <div class="col-lg-12" style="margin-top: 15px">
              <span>Por isso, mais do que proteger, você precisa garantir seu patrimônio. É exatamente isto que o Seguro Residência oferece. Um seguro com diversas vantagens a um preço reduzido.</span>
            </div>
            <div class="col-lg-12" style="margin-top: 15px">
              <span class="titulo2">Principais Vantagens e Benefícios:</span>
            </div>
            <div class="col-lg-12">
              <ul>
                <li>Pagamento em até 12 parcelas ou em até 4 vezes sem juros;</li>
                <li>Sem interrupção das coberturas contratadas durante as férias (30 dias);</li>
                <li>Preços especiais para apartamentos;</li>
                <li>Descontos especiais para renovação Porto Seguro sem sinistro;</li>
                <li>Desconto para cliente Porto Seguro;</li>
                <li>Descontos especiais para residências em condomínios fechados (horizontais);</li>
                <li>Abrangência para Residências de Veraneio, com cobertura para subtração de bens.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-5 img-seguro-auto">
          <!-- <figure>
            <img class="img-thumbnail" :src="require('@/assets/seguro-auto.jpg')" alt="seguro-auto.png">
          </figure> -->
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
  name: 'Residencia',
  components: {
    TitlePage,
    CarouselSec
  }
}
</script>

<style lang="scss" scoped>

.img-seguro-auto {
  background-color: #FFFFFF;
  background-position: center center;
  background-image: url('../../assets/seguro-residencial.jpg');
}

.box-cotacao h2 {
    font-size: 40px;
    color: #FF6200;
    font-weight: 700;
    display: table;
    margin: 0 auto 0;
    position: relative;
    padding: 0 40px;
    background-color: #FFFFFF;
    margin-top: 40px;
}

.titulo-cotacao:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #BFDFFF;
    position: absolute;
    top: calc(50% - 0.5px);
    left: 0;
    z-index: 0;
    margin-top: 20px;
}

.box-cotacao h3 {
    color: #08588C;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 20px;
    float: left;
    width: 100%;
}

span.titulo1 {
    font-size: 17px;
    color: #000000;
    font-weight: 700;
}

span.titulo2 {
    font-size: 25px;
    color: #FF6200;
    font-weight: 700;
}
</style>

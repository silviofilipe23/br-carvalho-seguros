<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <div class="container" style="padding-bottom: 30px">
      <div class="row box-cotacao">
        <div class="col-12 titulo-cotacao">
          <h2>Cotação para Seguro Automóvel</h2>
        </div>
      </div>
      <div class="row  box-cotacao" style="margin-top: 30px">
        <div class="col-12">
          <h3>Dados do Segurado (Proprietário)</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form>
            <div class="row">
              <div class="form-group col-6">
                <label for="segurado">Segurado:</label>
                <input placeholder="Digite o nome completo" type="text" class="form-control" id="segurado">
              </div>
              <div class="form-group col-6">
                <label for="email">Email:</label>
                <input placeholder="pedro@exemplo.com" type="email" class="form-control" id="email">
              </div>
              <div class="form-group col-3">
                <label for="telefone">Telefone Residencial:</label>
                <input placeholder="(xx) XXXX-XXXX" type="text" class="form-control" id="telefone">
              </div>
              <div class="form-group col-3">
                <label for="celular">Celular:</label>
                <input placeholder="(xx) XXXXX-XXXX" type="text" class="form-control" id="celular">
              </div>
              <div class="form-group col-3">
                <label for="nascimento">Data de Nascimento:</label>
                <input placeholder="dd/mm/aaaa" type="text" class="form-control" id="nascimento">
              </div>
              <div class="form-group col-3">
                <label for="nascimento">Profissão:</label>
                <input placeholder="Exemplo: Professor" type="text" class="form-control" id="nascimento">
              </div>
              <div class="form-group col-3">
                <label for="cpf">CPF:</label>
                <input placeholder="000.000.000-00" type="text" class="form-control" id="cpf">
              </div>
              <div class="form-group col-3">
                <label for="sexo">Sexo:</label>
                <select class="form-control" id="sexo">
                  <option disabled>Selecione</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
              </div>
              <div class="form-group col-3">
                <label for="estcivil">Estado Civil:</label>
                <select class="form-control" id="estcivil">
                  <option disabled>Selecione</option>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Viúvo(a)</option>
                </select>
              </div>
              <div class="form-group col-3">
                <label for="cep">CEP Residencial:</label>
                <input placeholder="00000-000" type="text" class="form-control" id="cep">
              </div>
            </div>
            <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-12">
                <h3>Dados do Veículo</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-6">
                <label for="veiculo">Veículo:</label>
                <input placeholder="Exemplo: Gol" type="text" class="form-control" id="veiculo">
              </div>
              <div class="form-group col-3">
                <label for="ano">Ano de Fabricação:</label>
                <input placeholder="Exemplo: 2020" type="text" class="form-control" id="ano">
              </div>
              <div class="form-group col-3">
                <label for="modelo">Modelo:</label>
                <input placeholder="Exemplo: 1.0 Plus 16v" type="text" class="form-control" id="modelo">
              </div>
              <div class="form-group col-4">
                <label for="0km">Veículo 0km:</label>
                <select class="form-control" id="0km">
                  <option disabled>Selecione</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>
              <div class="form-group col-4">
                <label for="placa">Placa:</label>
                <input placeholder="XXX0000" type="text" class="form-control" id="placa">
              </div>
              <div class="form-group col-4">
                <label for="Financiado">Financiado:</label>
                <select class="form-control" id="Financiado">
                  <option disabled>Selecione</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-12">
                <button type="submit" class="btn form-control btn-primary">Enviar Cotação</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container" style="padding: 50px 0px 50px 0px">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <span class="titulo1">Aproveite hoje mesmo para garantir a melhor proteção para o seu automóvel, a preços muito especiais.</span>
            </div>
            <div class="col-12" style="margin-top: 15px">
              <span class="titulo2">Automóveis / Caminhões</span>
            </div>
            <div class="col-12">
              <ul>
                <li>Reposição pelo valor de veículo 0 km por 6 meses;</li>
                <li>Assistência 24 Horas (assistência ao veículo e à residência);</li>
                <li>Danos aos vidros*;</li>
                <li>Assistência Jurídica;</li>
                <li>Centro Automotivo;</li>
                <li>Linha de Inspeção Veicular;</li>
                <li>Desconto na franquia ou Carro Extra por até 7 dias consecutivos;</li>
                <li>Certificado de Procedência;</li>
                <li>Instalação de dispositivos de segurança;</li>
                <li>Diagnóstico e avaliação de diversos itens do veículo;</li>
                <li>Benefícios e serviços exclusivos para jovens, caminhoneiros e motociclistas;</li>
                <li>Desconto no seguro de até 35%;</li>
                <li>Desconto em estacionamentos, táxi, locação de veículos blindados, renovação da CNH, serviços de despachantes, entre outros benefícios.</li>
              </ul>
            </div>
            <div class="col-12" style="margin-top: 15px">
              <span class="titulo2">Tabela FIPE</span>
            </div>
            <div class="col-12" style="margin-top: 15px">
              <span>Valor de Mercado Referenciado: Em caso de um sinistro de Perda Total por roubo, furto ou colisão, o segurado recebe da seguradora como indenização o Valor de Mercado Referenciado do seu veículo. O Valor da Indenização é igual ao valor do veículo constante na Tabela FIPE, considerando o fator de ajuste que você escolher quando da contratação do seguro.</span>
            </div>
          </div>
        </div>
        <div class="col-4 img-seguro-auto">
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
  name: 'Auto',
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
  background-image: url('../../assets/seguro-auto.jpg');
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

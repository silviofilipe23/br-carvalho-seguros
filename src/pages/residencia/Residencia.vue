<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <div class="container" style="padding-bottom: 30px">
      <div class="row box-cotacao">
        <div class="col-sm-12 titulo-cotacao">
          <h2>Cotação para Seguro Residencial</h2>
        </div>
      </div>
      <div class="row  box-cotacao" style="margin-top: 30px">
        <div class="col-sm-12">
          <h3>Dados do Proprietário</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form @submit="sendForm">
            <div class="row">
              <div class="form-group col-lg-6 col-sm-12">
                <label for="segurado">Nome do Proprietário:</label>
                <input v-model="residence.person.fullName" placeholder="Digite o nome completo" type="text" class="form-control" id="segurado" required>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="email">Email para Contato:</label>
                <input v-model="residence.person.email" placeholder="pedro@exemplo.com" type="email" class="form-control" id="email" required>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="telefone">Telefone para Contato:</label>
                <input v-model="residence.person.phone" placeholder="(xx) XXXX-XXXX" type="text" class="form-control" id="telefone" required>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="nome">Nome do Solicitante:</label>
                <input v-model="residence.person.requester" placeholder="Digite o nome completo" type="text" class="form-control" id="nome" required>
              </div>
            </div>
            <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-lg-12 col-sm-12">
                <h3>Dados do Imóvel</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6 col-sm-12">
                <label for="ocupacao">Ocupação do Imóvel:</label>
                <select v-model="residence.home.ocupation" class="form-control" id="ocupacao">
                  <option disabled selected>Selecione</option>
                  <option>Habitual</option>
                  <option>Veraneio</option>
                </select>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="tipo">Tipo de Moradia:</label>
                <select v-model="residence.home.homeType" class="form-control" id="tipo">
                  <option disabled selected>Selecione</option>
                  <option>Madeira</option>
                  <option>Madeira/Alvenaria</option>
                  <option>Alvenaria</option>
                  <option>Alvenaria/Forro de Madeira</option>
                </select>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="cep">CEP da Residência:</label>
                <input v-model="residence.home.cep" placeholder="00000-000" type="text" class="form-control" id="cep" required>
              </div>
            </div>
            <div class="row">
               <div class="form-group col-lg-12 col-sm-12" style="margin-bottom: 0px">
                <label for="">Equipamentos de Segurança:</label>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <div class="custom-control custom-checkbox">
                  <input v-model="residence.home.localAlarm" type="checkbox" class="custom-control-input" id="alarmeLocal">
                  <label class="custom-control-label" for="alarmeLocal">Alarme Local</label>
                </div>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <div class="custom-control custom-checkbox">
                  <input v-model="residence.home.companyAlarm" type="checkbox" class="custom-control-input" id="alarmevigilancia">
                  <label class="custom-control-label" for="alarmevigilancia">Alarme por Empresa de Vigilância</label>
                </div>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <div class="custom-control custom-checkbox">
                  <input v-model="residence.home.windowGrid" type="checkbox" class="custom-control-input" id="grade">
                  <label class="custom-control-label" for="grade">Grades nas Janelas</label>
                </div>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <div class="custom-control custom-checkbox">
                  <input v-model="residence.home.cond" type="checkbox" class="custom-control-input" id="condFechado">
                  <label class="custom-control-label" for="condFechado">Condomínio Fechado</label>
                </div>
              </div>
            </div>
             <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-lg-12 col-sm-12">
                <h3>Coberturas do Imóvel - Valores em R$</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6 col-sm-12">
                <label for="seguro">Seguro:</label>
                <select v-model="residence.coverage.insurance" class="form-control" id="seguro">
                  <option disabled selected>Selecione</option>
                  <option>Novo</option>
                  <option>Renovação</option>
                </select>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="incendio">Incêndio:</label>
                <input v-model="residence.coverage.fire" placeholder="" type="text" class="form-control" id="incendio">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="vendaval">Vendaval/Impacto de Veículos:</label>
                <input v-model="residence.coverage.vendaval" placeholder="" type="text" class="form-control" id="vendaval">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="danos">Danos Elétricos:</label>
                <input v-model="residence.coverage.danoEletrico" placeholder="" type="text" class="form-control" id="danos">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="vidros">Quebra de Vídros:</label>
                <input v-model="residence.coverage.quebraVidro" placeholder="" type="text" class="form-control" id="vidros">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="aluguel">Aluguel Perda ou Pagamento</label>
                <input v-model="residence.coverage.perdaPagamento" placeholder="" type="text" class="form-control" id="aluguel">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="desmor">Desmoronamento:</label>
                <input v-model="residence.coverage.desmoronamento" placeholder="" type="text" class="form-control" id="desmor">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="resp">Responsabilidade Familiar:</label>
                <input v-model="residence.coverage.respFamiliar" placeholder="" type="text" class="form-control" id="resp">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="rouboFurto">Roubo ou Furto:</label>
                <input v-model="residence.coverage.roubo" placeholder="" type="text" class="form-control" id="rouboFurto">
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="assist">Assistência 24Hrs:</label>
                <input v-model="residence.coverage.assist24" placeholder="" type="text" class="form-control" id="assist">
              </div>
              <div class="form-group col-lg-12 col-sm-12">
                <label for="info">Outras Coberturas / Informações:</label>
                <textarea v-model="residence.coverage.informacoes" class="form-control" id="info" rows="3"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-12 col-sm-12">
                <button type="submit" class="btn form-control btn-primary">Enviar Cotação</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container" style="padding: 50px 15px">
      <div class="row">
        <div class="col-lg-7 col-sm-12">
          <div class="row">
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span>Muros, grades e cães protegem sua casa, mas não garantem que ela nunca será roubada. Além disso, existem outros imprevistos (incêndio, explosão, vendaval, queda de raios, entre outros.) que podem causar prejuízos, muitas vezes irrecuperáveis.</span>
            </div>
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span>Por isso, mais do que proteger, você precisa garantir seu patrimônio. É exatamente isto que o Seguro Residência oferece. Um seguro com diversas vantagens a um preço reduzido.</span>
            </div>
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span class="titulo2">Principais Vantagens e Benefícios:</span>
            </div>
            <div class="col-lg-12 col-sm-12">
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
        <div class="col-lg-5 col-sm-12 img-seguro-residence">
          <!-- <figure>
            <img class="img-thumbnail" :src="require('@/assets/seguro-residence.jpg')" alt="seguro-residence.png">
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
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'Residencia',
  components: {
    TitlePage,
    CarouselSec
  },
  data: () => ({
    residence: {
      person: {
        fullName: '',
        email: '',
        phone: '',
        requester: '',
      },
      home: {
        ocupation: 'Selecione',
        homeType: 'Selecione',
        cep: '',
        localAlarm: false,
        companyAlarm: false,
        windowGrid: false,
        cond: false,
      },
      coverage: {
        insurance: 'Selecione',
        fire: '',
        vendaval: '',
        danoEletrico: '',
        quebraVidro: '',
        perdaPagamento: '',
        desmoronamento: '',
        respFamiliar: '',
        roubo: '',
        assist24: '',
        informacoes: '',
      }
    }
  }),
  mounted () {
    // this.sendEmail()
  },
  methods: {
    async sendForm (event) {
      event.preventDefault()

      const self = this

      const loader = self.$loading.show()

      try {
        const mail = await this.$firebase.firestore().collection('mail').add({
          to: 'cotacoes@brcarvalho.com.br',
          message: {
            subject: 'Cotação para Seguro Residencial',
            html: `
              <h1>Cotação para Seguro Residencial</h1>
              <h2>Dados do Proprietário</h2>
              <ul>
                <li>Nome do Proprietário: <b>${self.residence.person.fullName}</b></li>
                <li>Email para Contato: <b>${self.residence.person.email}</b></li>
                <li>Telefone para Contato: <b>${self.residence.person.phone}</b></li>
                <li>Nome do Solicitante: <b>${self.residence.person.requester}</b></li>
              </ul>
              <h2>Dados do Imóvel</h2>
              <ul>
                <li>Ocupação do Imóvel: <b>${self.residence.home.ocupation}</b></li>
                <li>Tipo de Moradia: <b>${self.residence.home.homeType}</b></li>
                <li>CEP da Residência: <b>${self.residence.home.cep}</b></li>
              </ul>
              <h2>Equipamentos de Segurança</h2>
              <ul>
                <li>Alarme Local: <b>${self.residence.home.localAlarm}</b></li>
                <li>Alarme por Empresa de Vigilância: <b>${self.residence.home.companyAlarm}</b></li>
                <li>Grades nas Janelas: <b>${self.residence.home.windowGrid}</b></li>
                <li>Condomínio Fechado: <b>${self.residence.home.cond}</b></li>
              </ul>
              <h2>Coberturas do Imóvel - Valores em R$</h2>
              <ul>
                <li>Seguro: <b>${self.residence.coverage.insurance}</b></li>
                <li>Incêndio: <b>${self.residence.coverage.fire}</b></li>
                <li>Vendaval/Impacto de Veículos: <b>${self.residence.coverage.vendaval}</b></li>
                <li>Danos Elétricos: <b>${self.residence.coverage.danoEletrico}</b></li>
                <li>Quebra de Vídros: <b>${self.residence.coverage.quebraVidro}</b></li>
                <li>Aluguel Perda ou Pagamento: <b>${self.residence.coverage.perdaPagamento}</b></li>
                <li>Desmoronamento: <b>${self.residence.coverage.desmoronamento}</b></li>
                <li>Responsabilidade Familiar: <b>${self.residence.coverage.respFamiliar}</b></li>
                <li>Roubo ou Furto: <b>${self.residence.coverage.roubo}</b></li>
                <li>Assistência 24Hrs: <b>${self.residence.coverage.assist24}</b></li>
                <li>Outras Coberturas / Informações: <b>${self.residence.coverage.informacoes}</b></li>
              </ul>
              <style>
                li {
                  font-size: 15px
                }
              </style>
            `
          },
        })
        console.log(mail)

        this.$toast.success('Cotação enviada com sucesso!')
      } catch (error) {
        console.log(error)
      }
      loader.hide()
    }
  }
}
</script>

<style lang="scss" scoped>

.img-seguro-residence {
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

<template>
  <div>
    <title-page :title="this.$route.meta.title"></title-page>
    <div class="container" style="padding-bottom: 30px">
      <div class="row box-cotacao">
        <div class="col-sm-12  titulo-cotacao">
          <h2>Cotação para Seguro Automóvel</h2>
        </div>
      </div>
      <div class="row  box-cotacao" style="margin-top: 30px">
        <div class="col-sm-12">
          <h3>Dados do Segurado (Proprietário)</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form @submit="sendForm">
            <div class="row">
              <div class="form-group col-lg-6 col-sm-12">
                <label for="segurado">Segurado:</label>
                <input v-model="auto.person.fullName" placeholder="Digite o nome completo" type="text" class="form-control" id="segurado" required>
              </div>
              <div class="form-group col-lg-6 col-sm-12">
                <label for="email">Email:</label>
                <input v-model="auto.person.email" placeholder="pedro@exemplo.com" type="email" class="form-control" id="email" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="telefone">Telefone Residencial:</label>
                <input v-model="auto.person.phone" placeholder="(xx) XXXX-XXXX" type="text" class="form-control" id="telefone">
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="celular">Celular:</label>
                <input v-model="auto.person.cellphone" placeholder="(xx) XXXXX-XXXX" type="text" class="form-control" id="celular">
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="nascimento">Data de Nascimento:</label>
                <input v-model="auto.person.birthday" placeholder="dd/mm/aaaa" type="text" class="form-control" id="nascimento" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="prof">Profissão:</label>
                <input v-model="auto.person.profession" placeholder="Exemplo: Professor" type="text" class="form-control" id="prof" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="cpf">CPF:</label>
                <input v-model="auto.person.cpf" placeholder="000.000.000-00" type="text" class="form-control" id="cpf" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="sexo">Sexo:</label>
                <select v-model="auto.person.sex" class="form-control" id="sexo" required>
                  <option disabled selected>Selecione</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </select>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="estcivil">Estado Civil:</label>
                <select v-model="auto.person.civilStatus" class="form-control" id="estcivil">
                  <option disabled selected>Selecione</option>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Viúvo(a)</option>
                </select>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="cep">CEP Residencial:</label>
                <input v-model="auto.person.cep" placeholder="00000-000" type="text" class="form-control" id="cep" required>
              </div>
            </div>
            <div class="row  box-cotacao" style="margin-top: 30px">
              <div class="col-lg-12 col-sm-12">
                <h3>Dados do Veículo</h3>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-lg-6 col-sm-12">
                <label for="veiculo">Veículo:</label>
                <input v-model="auto.car.type" placeholder="Exemplo: Gol" type="text" class="form-control" id="veiculo" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="ano">Ano de Fabricação:</label>
                <input v-model="auto.car.dateFabrication" placeholder="Exemplo: 2020" type="text" class="form-control" id="ano" required>
              </div>
              <div class="form-group col-lg-3 col-sm-12">
                <label for="modelo">Modelo:</label>
                <input v-model="auto.car.model" placeholder="Exemplo: 1.0 Plus 16v" type="text" class="form-control" id="modelo" required >
              </div>
              <div class="form-group col-lg-4 col-sm-12">
                <label for="0km">Veículo 0km:</label>
                <select v-model="auto.car.new" class="form-control" id="0km">
                  <option disabled selected>Selecione</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>
              <div class="form-group col-lg-4 col-sm-12">
                <label for="placa">Placa:</label>
                <input v-model="auto.car.plate" placeholder="XXX0000" type="text" class="form-control" id="placa">
              </div>
              <div class="form-group col-lg-4 col-sm-12">
                <label for="Financiado">Financiado:</label>
                <select v-model="auto.car.financed" class="form-control" id="Financiado">
                  <option disabled selected>Selecione</option>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
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
    <div class="container container-enjoy">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <span class="titulo1">Aproveite hoje mesmo para garantir a melhor proteção para o seu automóvel, a preços muito especiais.</span>
            </div>
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span class="titulo2">Automóveis / Caminhões</span>
            </div>
            <div class="col-lg-12 col-sm-12">
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
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span class="titulo2">Tabela FIPE</span>
            </div>
            <div class="col-lg-12 col-sm-12" style="margin-top: 15px">
              <span>Valor de Mercado Referenciado: Em caso de um sinistro de Perda Total por roubo, furto ou colisão, o segurado recebe da seguradora como indenização o Valor de Mercado Referenciado do seu veículo. O Valor da Indenização é igual ao valor do veículo constante na Tabela FIPE, considerando o fator de ajuste que você escolher quando da contratação do seguro.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 img-seguro-auto">
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
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'Auto',
  components: {
    TitlePage,
    CarouselSec
  },
  data: () => ({
    auto: {
      person: {
        fullName: '',
        email: '',
        phone: '',
        cellphone: '',
        birthday: '',
        profession: '',
        cpf: '',
        sex: 'Selecione',
        civilStatus: 'Selecione',
        cep: ''
      },
      car: {
        type: '',
        dateFabrication: '',
        model: '',
        new: 'Selecione',
        plate: '',
        financed: 'Selecione'
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

      console.log(self.auto)

      try {
        const mail = await this.$firebase.firestore().collection('mail').add({
          to: 'cotacoes@brcarvalho.com.br',
          message: {
            subject: 'Cotação para Seguro Automóvel',
            html: `
              <h1>Cotação para Seguro Automóvel</h1>
              <h2>Dados do Segurado (Proprietário)</h2>
              <ul>
                <li>Segurado: <b>${self.auto.person.fullName}</b></li>
                <li>Email: <b>${self.auto.person.email}</b></li>
                <li>Telefone Residencial: <b>${self.auto.person.phone}</b></li>
                <li>Celular: <b>${self.auto.person.cellphone}</b></li>
                <li>Data de Nascimento: <b>${self.auto.person.birthday}</b></li>
                <li>Profissão: <b>${self.auto.person.profession}</b></li>
                <li>CPF: <b>${self.auto.person.cpf}</b></li>
                <li>Sexo: <b>${self.auto.person.sex}</b></li>
                <li>Estado Civil: <b>${self.auto.person.civilStatus}</b></li>
                <li>CEP Residencial: <b>${self.auto.person.cep}</b></li>
              </ul>
              <h2>Dados do Veículo</h2>
              <ul>
                <li>Veículo: <b>${self.auto.car.type}</b></li>
                <li>Ano de Fabricação: <b>${self.auto.car.dateFabrication}</b></li>
                <li>Modelo: <b>${self.auto.car.model}</b></li>
                <li>Veículo 0km: <b>${self.auto.car.new}</b></li>
                <li>Placa: <b>${self.auto.car.plate}</b></li>
                <li>Financiado: <b>${self.auto.car.financed}</b></li>
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

.container-enjoy {
  padding: 50px 15px
}
</style>

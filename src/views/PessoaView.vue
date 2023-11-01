<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <!-- <router-link :to="`/regioes/${$route.params.regiao}/${$route.params.estado}/${$route.params.municipio}`" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link> -->
            <h2 style="margin-left: 45px;">{{ dados.nome}}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ dados.regiao }}/{{ dados.estado }}/{{ dados.municipio }}/{{ dados.nome }}</span>
        <div class="row px-5 mt-3">
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%; background-color: #E8F4FF;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Geral</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Idade</h6>
                            <h6 class="card-text-trigramas">{{ dados.idade }} anos</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Sexo</h6>
                            <h6 class="card-text-trigramas">{{ dados.sexo }}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Telefone</h6>
                            <h6 class="card-text-trigramas">{{ dados.telefone }}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Cidade</h6>
                            <h6 class="card-text-trigramas">{{ dados.endereco.cidade }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%; background-color: #FFE1BF;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Nível de deficiência</h5>
                    </div>
                    <div class="card-body">
                        <div v-for="nivel in dados.nivel_de_deficiencia" :key="nivel.id" class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">{{ nivel.nome }}</h6>
                            <h6 class="card-text-trigramas">{{ nivel.valor }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%; background-color: #E9E9EA;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Planos de Tratamento</h5>
                    </div>
                    <div class="card-body">
                        <div  v-for="plano in dados.ultimos_planos_tratamento" :key="plano.id" class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">{{ plano.tratamento }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="d-flex justify-content-between">
                    <h3 v-if="historico == 'linhaDoTempo'">Histórico</h3>
                    <h3 v-else>Trigramas</h3>
                    <!-- <div>
                        <button class="btn btn-light" type="button" @click="alterarHistorico('linhaDoTempo')" style="margin-right: 5px;">Histórico</button>
                        <button class="btn btn-light" type="button" @click="alterarHistorico('trigramas')">Trigramas</button>
                    </div> -->
                </div>
            </div>
            <div class="table-responsive-sm mt-3" v-if="historico == 'linhaDoTempo'">
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Agente</th>
                    <th scope="col">Procedimento</th>
                    <th scope="col">Sintomas</th>
                    <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="info in dados.historico" :key="info.id">
                        <td>{{ info.data }}</td>
                        <td>{{ info.unidade_saude }}</td>
                        <td>{{ info.procedimento }}</td>
                        <td>{{ info.sintomas }}</td>
                        <td>{{ info.tipo }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="mt-3" v-else>
                <p>
                    Trigramas - O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ips
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted () {
    this.carregarDadosPessoa();
  },
  data() {
    return {
        historico:"linhaDoTempo",
        dados:{
            "id": 0,
            "nome": "Fulano de Tal",
            "sexo": "Masculino",
            "idade": 0,
            "data_cadastro": "01/01/1999",
            "numero_infeccoes": 0,
            "data_diagnostico": "01/01/1999",
            "Telefone": "99 99999-9999",
            "endereco": {
                "estado": "Exemplo",
                "cidade": "Exemplo",
                "coordenadas": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "nivel_de_deficiencia": [
                {
                    "id": 1,
                    "nome": "Exemplo",
                    "valor": 1,
                },
                {
                    "id": 2,
                    "nome": "Exemplo",
                    "valor": 1,
                }
            ],
            "ultimos_planos_tratamento": [
                {
                    "id": 1,
                    "tratamento": "Exemplo"
                },
                {
                    "id": 2,
                    "tratamento": "Exemplo"
                }
            ],
            "historico": [
                {
                    "id": 1,
                    "data": "01/01/1999",
                    "unidade_saude": "Exemplo",
                    "procedimento": "Exemplo",
                    "sintomas": "Exemplo",
                    "tipo": "Exemplo",
                },
                {
                    "id": 2,
                    "data": "01/01/1999",
                    "unidade_saude": "Exemplo",
                    "procedimento": "Exemplo",
                    "sintomas": "Exemplo",
                    "tipo": "Exemplo",
                }
            ]
        },
    };
  },
  methods: {
    carregarDadosPessoa(){
        const token = localStorage.getItem('token');

        axios
        .get('http://localhost:8081/casos/pessoa/1', { 
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.dados = response.data;
            console.log("opa",this.dados.nome);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
        });

    }
  },
};
</script>
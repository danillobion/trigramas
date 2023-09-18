<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <router-link :to="`/regioes/${$route.params.regiao}/${$route.params.estado}/${$route.params.municipio}`" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link>
            <h2 style="margin: 0px;">{{ $route.params.pessoa }}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ $route.params.regiao }}/{{ $route.params.estado }}/{{ $route.params.municipio }}/{{ $route.params.pessoa }}</span>
        <div class="row px-5 mt-3">
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Geral</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Código</h6>
                            <h6 class="card-text-trigramas">0000000000001</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Idade</h6>
                            <h6 class="card-text-trigramas">43</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Sexo</h6>
                            <h6 class="card-text-trigramas">Feminino</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Telefone</h6>
                            <h6 class="card-text-trigramas">(81) 3361-1234</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Endereço</h6>
                            <h6 class="card-text-trigramas">Rua José Lourenço</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Alergias</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Alimento</h6>
                            <h6 class="card-text-trigramas">Leite</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="height: 100%;">
                    <div class="card-header">
                        <h5 style="margin: 0px;">Medicamentos</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h6 class="card-text-trigramas">Versa</h6>
                            <h6 class="card-text-trigramas">40mg oral</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="d-flex justify-content-between">
                    <h3 v-if="historico == 'linhaDoTempo'">Histórico</h3>
                    <h3 v-else>Trigramas</h3>
                    <div>
                        <button class="btn btn-light" type="button" @click="alterarHistorico('linhaDoTempo')" style="margin-right: 5px;">Histórico</button>
                        <button class="btn btn-light" type="button" @click="alterarHistorico('trigramas')">Trigramas</button>
                    </div>
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
                    <tr>
                        <td>19/09/2023</td>
                        <td>Enfermeiro</td>
                        <td>Exame</td>
                        <td>Calafrio</td>
                        <td>Negativo</td>
                    </tr>
                    <tr>
                        <td>18/09/2023</td>
                        <td>Enfermeiro</td>
                        <td>Exame</td>
                        <td>Calafrio, febre e sudorese</td>
                        <td>Malária - Tipo: I</td>
                    </tr>
                    <tr>
                        <td>15/09/2023</td>
                        <td>Saúde</td>
                        <td>Cadastro no sistema</td>
                        <td>-</td>
                        <td>-</td>
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
  name: 'LoginView',
  mounted () {
  },
  data() {
    return {
        historico:'linhaDoTempo'
    };
  },
  methods: {
    alterarHistorico(acao){
        this.historico = acao == "linhaDoTempo" ? "linhaDoTempo" : "trigramas";
    }
  },
};
</script>
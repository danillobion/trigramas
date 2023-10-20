<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <router-link :to="`/regioes/${$route.params.regiao}`" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link>
            <h2 style="margin: 0px;">{{ dados.estado }}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ dados.regiao }}/{{ dados.estado }}</span>
            <div class="row px-5 mt-3">
                <div class="col-sm-12 col-md-3 mb-1">
                    <div class=" card">
                        <div class="card-body">a</div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 mb-1">
                    <div class=" card">
                        <div class="card-body">a</div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 mb-1">
                    <div class=" card">
                        <div class="card-body">a</div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 mb-1">
                    <div class=" card">
                        <div class="card-body">a</div>
                    </div>
                </div>
            </div>
        <div class="table-responsive-sm mt-3 px-5">
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col" style="width: 25%;">Municípios</th>
                <th scope="col" style="width: 25%;">Casos</th>
                <th scope="col" style="width: 25%;">Recorrências</th>
                <th scope="col" style="width: 25%;">Óbitos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="municipio in dados.municipios" :key="municipio.id">
                    <td>
                    <RouterLink :to="'/regioes/estados/municipios/pacientes/' + municipio.id" style="text-decoration: none;">{{ municipio.nome }}</RouterLink>
                    </td>
                    <td>{{ municipio.casos }}</td>
                    <td>{{ municipio.recorrencias }}</td>
                    <td>{{ municipio.obitos }}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted () {
    this.carregarRegioes();
  },
  data() {
    return {
        dados:{
            id:0,
            regiao:null,
            estado:null,
            municipios:[
                {
                    id:0,
                    nome:"teste",
                    casos:0,
                    recorrencias:0,
                    obitos:0
                }
            ]
        },
    };
  },
  methods: {
    carregarRegioes(){
        const token = localStorage.getItem('token');

        axios
        .get('http://localhost:8081/regioes/estados/municipios/1', { 
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.dados = response.data;
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
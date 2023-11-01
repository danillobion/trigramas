<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <!-- <router-link to="/regioes" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link> -->
            <h2 style="margin-left:45px;">{{ dados.regiao }}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ dados.regiao }}</span>
        <div class="row px-5 mt-3">
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="background-color: #FFC2C2;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between" style="margin-bottom: -15px;">
                            <h6>Casos Notificados</h6>
                            <h4 style="margin-top:-5px">{{ casos }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="background-color: #FFE1BF;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between" style="margin-bottom: -15px;">
                            <h6>Recorrência</h6>
                            <h4 style="margin-top:-5px">{{ recorrencias }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-1">
                <div class=" card shadow" style="background-color: #ECECEC;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between" style="margin-bottom: -15px;">
                            <h6>Óbitos</h6>
                            <h4 style="margin-top:-5px">{{ obitos }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive-sm mt-3 px-5">
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col" style="width: 25%;">Estados</th>
                <th scope="col" style="width: 25%;">Casos</th>
                <th scope="col" style="width: 25%;">Recorrências</th>
                <th scope="col" style="width: 25%;">Óbitos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="estado in dados.estados" :key="estado.id">
                    <td>
                    <RouterLink :to="'/regioes/estados/' + estado.id" style="text-decoration: none;">{{ estado.nome }}</RouterLink>
                    </td>
                    <td>{{ estado.casos }}</td>
                    <td>{{ estado.recorrencias }}</td>
                    <td>{{ estado.obitos }}</td>
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
    const regiaoId = this.$route.params.id;
  },
  data() {
    return {
        dados:{
            id:0,
            regiao:null,
            estados:[
                {
                    id:0,
                    nome:"teste",
                    casos:0,
                    recorrencias:0,
                    obitos:0
                }
            ]
        },
        casos:null,
        recorrencias:null,
        obitos:null
    };
  },
  methods: {
    carregarRegioes(){
        const token = localStorage.getItem('token');

        axios
        .get('http://localhost:8081/regioes/estados/1', { 
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.dados = response.data;
            if(response.data.estados){
                response.data.estados.map(e =>{
                    this.casos = this.casos + e.casos;
                    this.recorrencias = this.recorrencias + e.recorrencias;
                    this.obitos = this.obitos + e.obitos;
                });
            }
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
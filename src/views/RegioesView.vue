<template>
    <div class="container mt-4">
        <div class="mt-4 w-100 d-flex">
            <h2 style="margin-left: 50px; margin-bottom: 0px;">Regiões</h2>
        </div>
        <span style="margin-left: 50px; color: #9c9c9c;">Regiões</span>
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
                <th scope="col">Nome</th>
                <th scope="col">Casos</th>
                <th scope="col">Recorrências</th>
                <th scope="col">Óbitos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="regiao in regioes">
                    <td class="w-25">
                        <RouterLink  aria-current="page" :to="'/regioes/' + regiao.id" style="text-decoration: none;">{{ regiao.nome }}</RouterLink>
                    </td>
                    <td class="w-25">{{ regiao.casos }}</td>
                    <td class="w-25">{{ regiao.recorrencias }}</td>
                    <td class="w-25">{{ regiao.obitos }}</td>
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
        regioes:null,
        casos:null,
        recorrencias:null,
        obitos:null
    };
  },
  methods: {
    carregarRegioes(){
        const token = localStorage.getItem('token');

        axios
        .get('http://localhost:8081/regioes', { 
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.regioes = response.data.regioes;
            if(response.data.regioes){
                response.data.regioes.map(e =>{
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

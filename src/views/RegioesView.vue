<template>
    <div class="container mt-4">
        <div class="mt-4 w-100 d-flex">
            <h2 style="margin-left: 50px; margin-bottom: 0px;">Regiões</h2>
        </div>
        <span style="margin-left: 50px; color: #9c9c9c;">Regiões</span>
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

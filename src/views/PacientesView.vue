<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <router-link :to="`/regioes/${$route.params.regiao}/${$route.params.estado}`" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link>
            <h2 style="margin: 0px;">{{ $route.params.municipio }}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ $route.params.regiao }}/{{ $route.params.estado }}/{{ $route.params.municipio }}</span>
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
                <th scope="col">Nome</th>
                <th scope="col">Sexo</th>
                <th scope="col">Idade</th>
                <th scope="col">Status</th>
                <th scope="col">Data de cadastro</th>
                <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" :to="`/regioes/${$route.params.regiao}/${$route.params.estado}/${$route.params.municipio}/Benedita Heloise Alice da Costa`" style="text-decoration: none;">Benedita Heloise Alice da Costa</RouterLink>
                    </td>
                    <td>Feminino</td>
                    <td>43</td>
                    <td>Contaminado</td>
                    <td>18/09/2023</td>
                    <td>
                        <button class="btn btn-sm btn-dark">abc</button>
                    </td>
                </tr>
            </tbody>
            </table>
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
    };
  },
  methods: {
    handleAction(action) {
      // Lógica a ser executada quando uma opção do dropdown é selecionada
      console.log(`Ação selecionada: ${action}`);
    },
  },
};
</script>
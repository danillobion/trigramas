<template>
    <div class="container mt-3">
        <div class="mt-4 w-100 d-flex">
            <router-link to="/regioes" class="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg></router-link>
            <h2 style="margin: 0px;">{{ $route.params.regiao }}</h2>
        </div>
        <span style="margin-left: 44px; color: #9c9c9c;">Regiões/{{ $route.params.regiao }}</span>
        <div class="table-responsive-sm mt-3 px-5">
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Estados</th>
                <th scope="col">Casos</th>
                <th scope="col">Monitorados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" :to="`/regioes/${$route.params.regiao}/Pernambuco`" style="text-decoration: none;">Pernambuco</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
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
  },
};
</script>
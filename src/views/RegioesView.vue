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
                <th scope="col">Monitorados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" to="/regioes/Centro-Oeste" style="text-decoration: none;">Centro-Oeste</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
                </tr>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" to="/regioes/Norte" style="text-decoration: none;">Norte</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
                </tr>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" to="/regioes/Nordeste" style="text-decoration: none;">Nordeste</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
                </tr>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" to="/regioes/Sudeste" style="text-decoration: none;">Sudeste</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
                </tr>
                <tr>
                    <td>
                        <RouterLink  aria-current="page" to="/regioes/Sul" style="text-decoration: none;">Sul</RouterLink>
                    </td>
                    <td>3.245</td>
                    <td>245</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>
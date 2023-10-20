<template>
    <header class="navbar sticky-top flex-md-nowrap p-0 shadow" style="background-color: white;">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" style="box-shadow: inset -1px 0 0 rgb(255, 255, 255);">Panorama da Malária</a>
        <!-- <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="navbar-nav">
            <div class="btn-group">
                <!-- <a title="Localizar" style="margin-right: 15px; margin-top:8px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" > <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                </a> -->
                <div class="dropdown">
                    <button
                    class="btn btn-link dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="margin-right: 15px;text-decoration:none; color:black"
                    >
                    Olá, Fulana!
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownMenuButton1" style="position: absolute; margin-top:10px; margin-left: -32px;">
                        <li><button class="dropdown-item" @click="sair()">Sair</button></li>
                    </ul>
                </div>
            </div>

        </div>
    </header>

    <div class="container-fluid">
        <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-4">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <h6 style="margin-left: 15px; color:#a5a5a5">Menu</h6>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/visao-geral" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/> </svg>
                    <span style="margin-left: 15px;">Visão geral</span>
                </RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/regioes" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/> <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/> </svg>                    
                    <span style="margin-left: 15px;">Regiões</span>
                </RouterLink>
                </li>
                <!-- <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/monitorados" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/> </svg>
                    <span style="margin-left: 15px;">Monitorados</span>
                </RouterLink>
                </li>
                <li class="nav-item"><hr style="margin-left: 15px;margin-right: 15px; color: #a5a5a5;"></li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/configuracoes" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"> <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/> </svg>
                    <span style="margin-left: 15px;">Configurações</span>
                </RouterLink>
                </li> -->
            </ul>
            </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10" style="padding: 0px;">
            <div class="chartjs-size-monitor"> 
                <div class="chartjs-size-monitor-expand"> 
                    <div class=""></div> 
                </div>
                <div class="chartjs-size-monitor-shrink"> 
                    <div class=""></div>
                </div>
            </div>
            <RouterView />
        </main>
        </div>
    </div>
</template>



<script>
export default {
  methods: {
    sair(){
        localStorage.removeItem('token');
        this.$router.push('/');
    }
  },
};
</script>
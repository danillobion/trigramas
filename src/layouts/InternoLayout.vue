<template>
    <header class="navbar sticky-top flex-md-nowrap p-0 shadow" style="background-color: white;">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Panorama da Malária</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
                <a class="nav-link px-3" href="#"></a>
            </div>
        </div>
    </header>

    <div class="container-fluid">
        <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/visao-geral" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Visão geral
                </RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/regioes" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Regiões
                </RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/monitorados" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Monitorados
                </RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" aria-current="page" to="/configuracoes" active-class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Configurações
                </RouterLink>
                </li>
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
import { createRouter, createWebHistory } from 'vue-router'

//layout
import ExternoLayout from '../layouts/ExternoLayout.vue'
import InternoLayout from '../layouts/InternoLayout.vue'

//views
import LoginView from '../views/LoginView.vue'
import ErroView from '../views/ErroView.vue'
import VisaoGeralView from '../views/VisaoGeralView.vue'
import RegioesView from '../views/RegioesView.vue'
import EstadosView from '../views/EstadosView.vue'
import MunicipiosView from '../views/MunicipiosView.vue'
import PacientesView from '../views/PacientesView.vue'
import PessoaView from '../views/PessoaView.vue'
import MonitoradosView from '../views/MonitoradosView.vue'
import ConfiguracoesView from '../views/ConfiguracoesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // # LOGIN
    {
      path: '/',
      name: 'Login',
      component: ExternoLayout,
      children: [
        { path: '', component: LoginView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next('/visao-geral');
        } else {
          next();
        }
      },
    },
    // # PAGINA NÃO ENCONTRADA
    {
      path: '/:pathMatch(.*)*',
      name: 'Erro',
      component: ExternoLayout,
      children: [
        { path: '', component: ErroView },
      ],
    },
    // # VISÃO GERAL
    {
      path: '/visao-geral',
      name: 'Visão geral',
      component: InternoLayout,
      children: [
        { path: '', component: VisaoGeralView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },
    // # REGIOES
    {
      path: '/regioes',
      component: InternoLayout,
      children: [
        { path: '', component: RegioesView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },    
    // # ESTADOS
    {
      path: '/regioes/:id',
      component: InternoLayout,
      children: [
        { path: '', component: EstadosView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    }, 
    // # MUNICIPIOS
    {
      path: '/regioes/estados/:id',
      component: InternoLayout,
      children: [
        { path: '', component: MunicipiosView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    }, 
    // # PACIENTES
    {
      path: '/regioes/estados/municipios/pacientes/:id',
      component: InternoLayout,
      children: [
        { path: '', component: PacientesView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },   
    {
      path: '/regioes/estados/municipios/pacientes/pessoa/:id',
      component: InternoLayout,
      children: [
        { path: '', component: PessoaView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },  
    // ### REGIOES
    {
      path: '/monitorados',
      name: 'Monitorados',
      component: InternoLayout,
      children: [
        { path: '', component: MonitoradosView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },    
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: InternoLayout,
      children: [
        { path: '', component: ConfiguracoesView },
      ],
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');

        if (token != null) {
          next();
        } else {
          next('/');
        }
      },
    },
  ]
})

export default router

<template>
  <div style='background-color: antiquewhite;'>
    <div id="map" style="width: 100%; height: calc(100vh - 48px)"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet.markercluster';

import axios from 'axios';

export default {
  name: 'LoginView',
  mounted () {
    const map = ref(null);
    this.carregarMapa();
    this.marcarNoMapa();
  },
  data() {
    return {
      email: '',
      senha: '',
      permanecer_conectado: false,
    };
  },
  methods: {
    carregarMapa(){
      map.value = L.map('map').setView([-13.7472116,-55.5525641], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map.value);
    },
    marcarNoMapa(){

      const markers = L.markerClusterGroup();
      const token = localStorage.getItem('token');

      axios
      .get('http://localhost:8081/visao-geral/casos', { 
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        if(response.data.casos.length>0){
          response.data.casos.map(e=>{
            let marker = L.marker([e.endereco.coordenadas.latitude,e.endereco.coordenadas.longitude]);
            marker.bindPopup(this.popup(e));
            markers.addLayer(marker);
            map.value.addLayer(markers);
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
      });
    },
    popup(data){
      return `
        <div class="form-group mt-4 mb-4" style="width:250px">
          <div class="d-flex justify-content-between mb-2">
            <h6 style="font-weight:bold">${data.nome}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6 style="font-size:12.5px">Idade</h6>
            <h6 style="font-size:12.5px">${data.idade} anos</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6 style="font-size:12.5px">Sexo</h6>
            <h6 style="font-size:12.5px">${data.sexo}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6 style="font-size:12.5px">Nº de infecções</h6>
            <h6 style="font-size:12.5px">${data.numero_infeccoes}</h6>
          </div>
          <button class="btn btn-sm btn-light w-100">Ver perfil</button>
        </div>
      `;
    }
  },
};
</script>

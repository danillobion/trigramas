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
    this.teste();
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

      const marker1 = L.marker([51.505, -0.09]);
      const marker2 = L.marker([51.55, -0.12]);

      markers.addLayer(marker1);
      markers.addLayer(marker2);

      map.value.addLayer(markers);
    },
    teste(){
      const token = localStorage.getItem('token');
      console.log("token salvo", token);

      axios
      .get('http://localhost:8081/visao-geral/casos', { 
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log("reponse data: ", response.data);
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

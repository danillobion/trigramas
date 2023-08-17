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

export default {
  name: 'Map',
  setup() {
    const map = ref(null);

    onMounted(() => {
      map.value = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map.value);

      // L.marker([51.505, -0.09]).addTo(map.value);

      const markers = L.markerClusterGroup();

      const marker1 = L.marker([51.505, -0.09]);
      const marker2 = L.marker([51.55, -0.12]);

      markers.addLayer(marker1);
      markers.addLayer(marker2);

      map.value.addLayer(markers);
    });
    
    return {
      map,
    };
  }
};
</script>

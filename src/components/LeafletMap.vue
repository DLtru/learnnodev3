<script setup>
 import L from 'leaflet';
 import 'leaflet/dist/leaflet.css';
 import { onMounted, useId, watch, ref } from 'vue';
 
 // Fix Leaflet's default icon path problem
 delete L.Icon.Default.prototype._getIconUrl;
 L.Icon.Default.mergeOptions({
   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
 });
 
 let { center, zoom, marker, polygon } = defineProps({
   center: {
     type: Array,
     required: true
   },
   zoom: {
     type: Number,
     required: true
   },
   marker: {
     type: Array,
     default: null
   },
   polygon: {
     type: Array,
     default: () => []
   }
 });
 
 let id = 'map-' + useId();
 let map;
 let markerInstance = ref(null);
 let polygonInstance = ref(null);

 // Function to add or update marker
 const updateMarker = (coords) => {
   if (!map) return;
   
   // Remove existing marker if it exists
   if (markerInstance.value) {
     map.removeLayer(markerInstance.value);
   }
   
   // Add new marker if coordinates provided
   if (coords) {
     markerInstance.value = L.marker(coords).addTo(map);
   }
 };
 
 // Function to add or update polygon
 const updatePolygon = (points) => {
   if (!map || !points || points.length < 3) return;
   
   // Remove existing polygon if it exists
   if (polygonInstance.value) {
     map.removeLayer(polygonInstance.value);
   }
   
   // Add new polygon
   polygonInstance.value = L.polygon(points, { color: 'red' }).addTo(map);
 };

 onMounted(() => {
     console.log(document.getElementById(id));
 
     map = L.map(id).setView(center, zoom);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     }).addTo(map);
     
     // Initialize marker and polygon if provided
     if (marker) updateMarker(marker);
     if (polygon && polygon.length > 0) updatePolygon(polygon);
 });
 
 watch(() => center, (newCenter, oldCenter) => {
     console.log(newCenter, oldCenter);
     map.panTo(newCenter);
 });
 
 watch(() => zoom, newZoom => {
     map.setZoom(newZoom);
 });
 
 // Watch for marker changes
 watch(() => marker, (newMarker) => {
     updateMarker(newMarker);
 });
 
 // Watch for polygon changes
 watch(() => polygon, (newPolygon) => {
     updatePolygon(newPolygon);
 }, { deep: true });
 </script>
 
 <template>
      <div :id="id"></div>
 </template>
 
 <style scoped>
 div { 
     height: 40vh;
 }
 </style>
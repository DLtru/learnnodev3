<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';
 
let coords = ref([59.42691, 24.74344]); // Initial map center
let zoom = ref(19);
let homeCoords = [59.403227, 24.689270];
let homePolygon = [
  [59.403236, 24.688746],
  [59.403344, 24.689640],
  [59.403211, 24.689712],
  [59.403097, 24.688800],
  [59.403236, 24.688746]
];
</script>

<template>
    <button class="button is-primary" @click="coords=homeCoords">Go to my home</button>
    <input type="range" min="1" max="19" step="1" v-model="zoom">
    <LeafletMap 
        :center="coords" 
        :zoom="zoom"
        :marker="homeCoords"
        :polygon="homePolygon"
    ></LeafletMap>
</template>
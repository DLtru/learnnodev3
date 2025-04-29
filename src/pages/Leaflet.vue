<script setup>
 import { ref } from 'vue';
 import LeafletMap from '../components/LeafletMap.vue';
 
 let coords = ref([59.42691, 24.74344]);
 let zoom = ref(19);
 </script>
 <template>
     <button class="button is-primary" @click="coords=[58.378003935892494, 26.727245723399832]">Go to Tartu</button>
     <input type="range" min="1" max="19" step="1" v-model="zoom">
     <LeafletMap :center="coords" :zoom="zoom"></LeafletMap>
     <LeafletMap :center="[59.4332429007378, 24.75129553356808]" :zoom="10"></LeafletMap>
 </template>
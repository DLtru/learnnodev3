<script setup>
 function vibrate() {
     if (navigator.vibrate) {
         navigator.vibrate(200);
     }
 }
 function starwars() {
     if (navigator.vibrate) {
         navigator.vibrate([
             500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40,
             500,
         ])
     }
 }
 
 </script>
 <template>
     <button class="button is-primary" @click="vibrate">Vibrate</button>
     <button class="button is-primary" @click="starwars">StarWars tune</button>
 </template>
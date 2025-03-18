<script setup>
import { computed, ref } from 'vue';

const cookies = ref(0);
const buildings = ref([
    { name: 'Cursor', price: 15, cps: 0.1, count: 0},
    { name: 'Grandma', price: 100, cps: 1, count: 0},
    { name: 'Farm', price: 1000, cps: 10, count: 0},
    { name: 'Factory', price: 10_000, cps: 100, count: 0},
]);

function buyBuilding(building){
    cookies.value -= building.price;
    building.price += Math.ceil(building.price / 100 * 15);
    building.count++;
}
let cps = computed(() => {
    let cps = 0;
    buildings.value.forEach(building => {
       cps+=building.cps*building.count;
    });
    return cps;
});
setInterval(()=>{
   cookies.value+=cps.value;

   document.title ='🍪' + +cookies.value.toFixed(1) + ' Cookies!';
},1000);

</script>
<template>
    <div class="columns">
        <div class="column is-4 has-background-primary has-text-centered">
            <h1 class="is-size-1">{{ +cookies.toFixed(1) }} cookies</h1>
            <h3 class="is-size-3">{{ +cps.toFixed(1) }} cps</h3>
            <figure class="image is-square" @click="cookies++">
                <img src="https://sweetlorens.com/cdn/shop/products/Copy-of-Chocolate-Chunk-Full-Cookie-transparent-background.png?v=1687811511" />
            </figure>
        </div>
        <div class="column is-6 has-background-link">
            asdas
        </div>
        <div class="column is-2 has-background-warning">
            <button v-for="building in buildings" :disabled="cookies<building.price" @click="buyBuilding(building)" class="button is-primary is-large is-fullwidth">
                {{ building.name }} 🍪{{ building.price }} #{{ building.count }}
            </button>
        </div>
    </div>
</template>
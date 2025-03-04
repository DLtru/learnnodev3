<script setup>
import { ref } from 'vue';


let joke = ref('')

let response = await fetch('https://api.chucknorris.io/jokes/random');
let data = await response.json();
joke.value = data.value;

</script>

<template>
    {{ joke }}
</template>
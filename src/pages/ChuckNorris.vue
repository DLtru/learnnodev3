<script setup>
import { ref } from 'vue';
import axios from 'axios';

let joke = ref('')

let response = await axios.get('https://api.chucknorris.io/jokes/random');
joke.value = response.data.value;
// axios.get('https://api.chucknorris.io/jokes/random').then(res => {
//    joke.value = res.data.value;
// });
</script>

<template>
    {{ joke }}
</template>
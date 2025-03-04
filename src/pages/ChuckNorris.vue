<script setup>
import { ref } from 'vue';

let joke = ref('')


function reqListener() {
    let data = JSON.parse(this.responseText)
    joke.value = data.value
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://api.chucknorris.io/jokes/random");
req.send();
</script>

<template>
    {{ joke }}
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
let response = await axios.get('https://rickandmortyapi.com/api/character');
console.log(response.data);
let characters = ref(response.data.results);
let pagination = ref(response.data.info);
</script>

<template>
    <div class="columns">
        <div class="column" v-for="character in characters">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Card header</p>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
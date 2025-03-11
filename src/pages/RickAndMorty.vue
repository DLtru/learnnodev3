<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let characters = ref([]);
let pagination = ref([]);

await getCharacters('https://rickandmortyapi.com/api/character');

async function getCharacters(url) {
    let response = await axios.get(url);
    console.log(response.data);
    characters.value = response.data.results;
    pagination.value = response.data.info;
}

async function next() {
    await getCharacters(pagination.value.next);
}

async function prev() {
    await getCharacters(pagination.value.prev);
}
</script>

<template>
    <div class="buttons">
        <button class="button is-primary" @click="prev" :disabled="!pagination.prev">Previous</button>
        <button class="button is-primary" @click="next" :disabled="!pagination.next">Next</button>
    </div>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>
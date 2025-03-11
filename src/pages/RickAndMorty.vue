<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import PagedPagination from '../components/PagedPagination.vue';

let characters = ref([]);
let pagination = ref({});
let currentPage = ref(1);
let searchValue = ref('');
let searchTimeout = null;
await page(currentPage.value);

async function getCharacters() {
    let response = await axios.get('https://rickandmortyapi.com/api/character',{
        params: {
            page: currentPage.value,
            name: searchValue.value
        }
    });
    characters.value = response.data.results;
    pagination.value = response.data.info;
}

async function next() {
    currentPage.value++;
    await getCharacters();
}

async function prev() {
    currentPage.value--;
    await getCharacters();
}

async function page(page) {
    currentPage.value = page;
    await getCharacters();
}

async function search(){
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        await getCharacters();
    }, 750);
}

</script>

<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" placeholder="Search..." @input="search" v-model="searchValue">
        </div>
        <div class="control">
            <button class="button is-info" @click="search">
                Search
            </button>
        </div>
    </div>
    <PagedPagination :current="currentPage" :pagination="pagination" @next="next" @prev="prev" @page="page"></PagedPagination>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>
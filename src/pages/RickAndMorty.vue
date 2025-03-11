<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import PagedPagination from '../components/PagedPagination.vue';

let characters = ref([]);
let pagination = ref({});
let currentPage = ref(1);
await page(currentPage.value);

async function getCharacters(url) {
    let response = await axios.get(url);
    console.log(response.data);
    characters.value.push(...response.data.results);
    console.log(characters.value);
    pagination.value = response.data.info;
}

async function next(){
    currentPage.value++;
    await getCharacters(pagination.value.next);
}

async function prev(){
    currentPage.value--;
    await getCharacters(pagination.value.prev);
}

async function page(page){
    currentPage.value = page;
    await getCharacters('https://rickandmortyapi.com/api/character?page=' + page);
}

onMounted(() => {
    document.addEventListener('scroll', () => {
        if(window.scrollY+window.innerHeight > document.body.clientHeight-300 ) {
            if(pagination.value.next){
                next()
            }
            
        }
        //console.log(document.body.clientHeight, window.scrollY+window.innerHeight);
    });
});

</script>

<template>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>
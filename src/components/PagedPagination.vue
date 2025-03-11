<script setup>
import { computed } from 'vue';

let {current, pagination} = defineProps(['current', 'pagination']);

let links = computed(() => {
    let links = [];
    for(let i = 1; i<=3 && i<=pagination.pages; i++){
        links[i] = i;
    }
    if(current > 6){
        links[current-3] = '...';
    }
    if(current > 1 && current < pagination.pages){
        for(let i = current-2; i<=current+2 && i<=pagination.pages; i++){
            links[i] = i;
        }
    }
   
    if(current < pagination.pages-5) {
        links[current+3] = '...';
    }
    for(let i = pagination.pages-2; i<=pagination.pages; i++){
        links[i] = i;
    }
    return links.filter(link => link);
});

</script>

<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <button @click="$emit('prev')" :disabled="!pagination.prev" class="pagination-previous">Previous</button>
        <button @click="$emit('next')" :disabled="!pagination.next" class="pagination-next" >Next page</button>
        <ul class="pagination-list">
            <li v-for="link in links">
                <button class="pagination-link"
                    :class="{ 'is-current': current == link }"
                    @click="$emit('page', link)"
                    v-if="link != '...'">
                    {{ link }}
                </button>
                <span class="pagination-ellipsis" v-else>&hellip;</span>
            </li>
        </ul>
    </nav>
</template>
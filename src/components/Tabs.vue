<script setup>
import { ref } from 'vue';

defineProps(['items']);
let emit = defineEmits(['change']);
let active = ref(0);

function setActive(key){
    active.value = key;
    emit('change', key);
}

</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li :class="{'is-active': active === key}" v-for="(item,key) in items" @click="setActive(key)">
                <a>{{ item }}</a>
            </li>
        </ul>
    </div>
</template>
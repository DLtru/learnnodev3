<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';


</script>
<template>
    <RouterTabs></RouterTabs>
    <div class="container">
        <section class="section">
            <RouterView></RouterView>
        </section>
    </div>
</template>
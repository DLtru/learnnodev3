<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');
</script>
<template>
    <div class="container">
        <div class="content">
            <button class="button is-primary">Click me!</button>
            <h1>{{ message }}</h1>
        </div>
    </div>
</template>
<style>
</style>
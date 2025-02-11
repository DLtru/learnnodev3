<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');

</script>
<template>
    <div class="container mt-3">
        <div class="content">
            <button class="button is-primary" @click="message='Hello TA23B!'">Click me!</button>
            <input class="input my-1" v-model="message">
            <h1>{{ message.split('').reverse().join('') }}</h1>
            
        </div>
    </div>
</template>
<style>
</style>
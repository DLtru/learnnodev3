<script setup>
import axios from 'axios';
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);
// polling
setInterval(async () => {
    let res = await axios.get('http://localhost:3000/messages');
    messages.value = res.data;
}, 1000);


async function send() {
    let res = await axios.post('http://localhost:3000/messages', {
        message: message.value
    });
    message.value = '';
    messages.value.push(res.data);
}
</script>

<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="message" @keypress.enter="send">
        </div>
        <div class="control">
            <button class="button is-primary" @click="send">Send</button>
        </div>
    </div>
    <div class="notification is-primary" v-for="msg in messages">
        {{ msg.message }}        
    </div>
</template>
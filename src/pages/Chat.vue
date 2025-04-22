<script setup>
import axios from 'axios';
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);


let res = await axios.get('http://localhost:3000/messages');
messages.value.push(...res.data);

const eventSource = new EventSource('http://localhost:3000/messages/sse');

eventSource.addEventListener('newmessage', (event) => {
    console.log(event);
    let data = JSON.parse(event.data);
    messages.value.push(...data);
});



async function send() {
    let res = await axios.post('http://localhost:3000/messages', {
        message: message.value
    });
    message.value = '';
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
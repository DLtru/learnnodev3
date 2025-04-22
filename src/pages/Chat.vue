<script setup>
import axios from 'axios';
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);


// let res = await axios.get('http://localhost:3000/messages');
// messages.value.push(...res.data);

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  //socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
  
  let data = JSON.parse(event.data);
  console.log(data);
  if(data.type === 'messages') {
    messages.value.push(...data.messages);
  }
  if(data.type === 'message') {
    messages.value.push(data);
  }
});



async function send() {
    socket.send(JSON.stringify({type: 'message', message: message.value}));
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
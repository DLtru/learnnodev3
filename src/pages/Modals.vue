<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';
let modalActive = ref(false);
let modalActive2 = ref(false);

</script>
<template>
  <div class="buttons">
    <button class="button is-primary" @click="modalActive = true">Open Modal</button>
    <button class="button is-warning" @click="modalActive2 = true">Open Modal 2</button>
  </div>

  <ImgModal :active="modalActive" @close="modalActive = false" url="https://picsum.photos/seed/dimitri/1280/960">

  </ImgModal>

  <Modal :active="modalActive2" @close="modalActive2 = false">
    <div class="notification is-link">
      <button class="delete"></button>
      Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
      dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
      nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a>felis venenatis</a> efficitur.
    </div>
  </Modal>
</template>
<style></style>
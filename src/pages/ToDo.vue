<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let id = 1;
let items = ref([
  {id: id++, name: 'Milk', isDone: true },
  {id: id++, name: 'Bread', isDone: false },
  {id: id++, name: 'Vodka', isDone: true },
  {id: id++, name: 'Beer', isDone: false },
  {id: id++, name: 'Chips', isDone: false },
]);
let newItem = ref('')

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({ id: id++, name: newItem.value, isDone: false });
  }
  newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));


</script>
<template>
  <div class="container mt-3">
    <div class="content">

      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" v-model="newItem" @keypress.enter="add">
        </div>
        <div class="control">
          <button class="button is-primary" @click="add">Add</button>
        </div>
      </div>

      <ItemList :items="items" title="All Items"></ItemList>
      <ItemList :items="doneItems" title="Done Items"></ItemList>
      <ItemList :items="toDoItems" title="ToDo Items"></ItemList>

    </div>
  </div>
</template>
<style></style>
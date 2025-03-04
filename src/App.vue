<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

let titles = [
  'ToDo',
  'Modals',
];

let contents = [
  ToDo,
  Modals,
]

let activeTab = ref(0);
function change(key){
  activeTab.value = key;
}

</script>
<template>
  <Tabs :items="titles" @change="change"></Tabs>
  <component :is="contents[activeTab]"></component>
</template>
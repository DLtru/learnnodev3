<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';


</script>
<template>
    <RouterTabs></RouterTabs>
    <div class="container" v-if="$route.meta.container === undefined">
        <section class="section">
            <Suspense>
                <RouterView></RouterView>
            </Suspense>
        </section>
    </div>
    <Suspense v-else>
        <RouterView></RouterView>
    </Suspense>
</template>
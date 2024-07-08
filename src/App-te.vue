<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { RouterView } from 'vue-router'
import { useBodyStore } from "@/stores/body-store";
import { useHead } from '@unhead/vue';

const bodyStore = useBodyStore();
useHead({ title: 'Seguimiento de Asuntos Relevantes.' })

onMounted(async () => { /* Remover spinner de espera */
  nextTick(() => {
    bodyStore.removeBodyClassName("page-loading");
  });
});
</script>

<template>
  <RouterView />
</template>
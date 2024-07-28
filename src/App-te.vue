<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { RouterView } from 'vue-router'
import { useBodyStore } from "@/stores/body-store";
import { useAuthAzure } from '@/core/composables/useAuthAzure'
import { useHead } from '@unhead/vue';

const bodyStore = useBodyStore();
const { initializeMsal, handleRedirect, state } = useAuthAzure()


useHead({ title: 'Seguimiento de Asuntos Relevantes.' })
const handleInitialize = async () => {
  console.log("App.te - handleInitialize")
  await initializeMsal();
  await handleRedirect();
  console.log(state)
  console.log(state.isAuthenticated)
  console.log(state.user?.username)
  console.log("App.te - handleInitialize-d")
}


onMounted(async () => { /* Remover spinner de espera */
  console.log("App.te - onMounted")
  await handleInitialize();
  nextTick(() => {
    bodyStore.removeBodyClassName("page-loading");
  });
});
</script>

<template>
  <RouterView />
</template>
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
<style lang="scss">
/*
  TODO. Remover y convertir a SASS
*/
  
  * {
    margin: 0px;
    padding: 0px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

    .btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }

</style>

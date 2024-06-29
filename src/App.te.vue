<template>
    <router-view />    
</template>
<script setup lang="ts">
    import { onMounted, nextTick} from "vue";
    import { useMeta }          from "./composables/use-meta";
    import { useBodyStore }     from "./stores/vista/body-store";
    import "@/assets/tecdmx/sass/app.scss"; /* IFR */

    useMeta({ title: "Seguimiento de Asuntos Relevantes" });
    const bodyStore   = useBodyStore();

    onMounted(async() => { /* Remover spinner de espera */
        nextTick(() => {
            bodyStore.removeBodyClassName("page-loading");
        });
    });
</script>
<template>

    <div v-if="props.trabajando"
        class="spinner-border text-success align-self-center loader-lg position-absolute top-50 start-50">
        Trabajando...</div>

</template>
<script setup lang="ts">
interface Props {
    trabajando: boolean,
}
const props = defineProps<Props>()
</script>
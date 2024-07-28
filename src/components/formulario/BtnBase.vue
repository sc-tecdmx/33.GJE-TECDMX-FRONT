<template>
    <button 
    class="btn btn-dark float-end border-0 mt-0 mb-4" 
    type="submit"
    :style="{background: colorFondo}">
    {{ titulo }}</button>
</template>

<script setup lang="ts">
    interface Props {
    titulo: string;
    colorFondo: string;
    }

    const props = defineProps<Props>();
</script>

<template>
    <button :style="{background: colorFondo, color: colorTexto, width: ancho + '%', height: alto + 'px' }">{{ textBtn }}</button>
</template>

<script setup lang="ts">

    import { defineProps } from 'vue';

    interface Props {
    colorFondo: string;
    colorTexto: string;
    ancho: number;
    alto: number;
    textBtn: string;
    }

    const props = defineProps<Props>();
</script>


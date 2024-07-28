<template>
    <h1 class="h5 text-start mt-3 p-2">{{ texto }}</h1>
</template>

<script setup lang="ts">
   import { defineProps } from 'vue';

    interface Props {
    texto?: string; 
    }

    const props = defineProps<Props>();
    const defaultTexto = props.texto || '';
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";
    h1 {
        color: $bg-dark;
    }

    @media screen and (max-width: 678px) {
        h1 {
            font-size: $text-md;
         }
    }
</style>
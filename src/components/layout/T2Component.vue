<template>
    <h2 class="h6 text-center fw-bold m-1 text-dark p-2">{{ titulo2 }}</h2>
</template>

<script setup lang="ts">
   import { defineProps } from 'vue';

    interface Props {
    titulo2?: string; 
    }

    const props = defineProps<Props>();
</script>

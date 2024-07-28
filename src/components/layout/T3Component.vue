<template>
    <h3 class="h6 text-start fw-bold m-1 ms-0 text-dark pt-4 pb-3 ">{{ titulo3 }}</h3>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    interface Props {
    titulo3?: string; 
    }

    const props = defineProps<Props>();
</script>

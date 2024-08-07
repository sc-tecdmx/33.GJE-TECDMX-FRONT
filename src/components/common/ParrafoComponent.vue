<template>
        <p>{{ parrafo }}</p>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    interface Props {
    parrafo?: string; 
    }
    const props = defineProps<Props>();

</script>

<template>
    <h5 class="text-start ms-5 fs-6 ps-1 fw-bold lh-1">{{ data }}</h5>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    // Definir la interfaz para el objeto data
    interface DataProps {
    titulo: string;
    }

    interface Props {
    data: DataProps;
    }

    const props = defineProps<Props>();
</script>

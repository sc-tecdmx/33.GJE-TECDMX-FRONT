<template>
    <div :style="{ width: ancho + '%', height: alto + 'px' }">

    </div>
</template>

<script setup lang="ts">

    interface Props {
    ancho?: number;
    alto: number;
    }

    const props = defineProps<Props>();
</script>

<template>
    <figure class="figure-log" :style="{ width: ancho + 'px', height: alto + 'px' }"></figure>
</template>

<script setup lang="ts">
        interface Props {
        ancho?: number;
        alto: number;
        }

        const props = defineProps<Props>();
</script>

<style lang="scss" scoped>

    .figure-log {
        background-image: url(../../assets/tecdmx/images/image.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        margin-top: 5px;
    }
</style>
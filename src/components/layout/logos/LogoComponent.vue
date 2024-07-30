<template>
    <figure class="figure" :style="{ width: ancho + 'px', height: alto + 'px', marginLeft: Mleft + 'px' }">
        <img class="img" src="../../../assets/tecdmx/images/logo_tecdmx_300.png" alt="">
    </figure>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    interface Props {
    ancho?: number;
    alto: number;
    Mleft: number;
    }
    const props = defineProps<Props>();
</script>

<style scoped>
    .img {
        width: 85%;
        padding: 5px;
    }

</style>
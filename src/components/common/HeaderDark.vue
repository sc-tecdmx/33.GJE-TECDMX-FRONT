<template>
     <div class="ps-0 pt-0 pb-3 text-start d-flex justify-content-between h6 div-header" @click="toggle">
      {{ title }} 
    </div>
</template>

<script setup lang="ts">

    import { defineProps } from 'vue';

    const props = defineProps<{
    title: string;
    }>();

</script>

<style lang="scss" scoped>
    @import "../../assets/tecdmx/sass/jel/_var.scss";
    .div-header {
        cursor: pointer;
        border-bottom: $border-width $border-style $border-color-gris;
    }

</style>
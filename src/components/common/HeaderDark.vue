<template>
     <div class="bg-dark p-3 text-start rounded border-bottom text-white d-flex justify-content-between h6 div-header" @click="toggle">
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

    .div-header {
        cursor: pointer;
    }

</style>
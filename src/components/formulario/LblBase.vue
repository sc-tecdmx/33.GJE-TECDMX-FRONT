<template>
        <label 
        class="text-start d-block mt-2 fw-normal">
        {{ lbl }}
        </label>
</template>

<script setup lang="ts">
    interface Props {
    lbl: string;
    }

    const props = defineProps<Props>();

    const lbl = props.lbl ?? 'ingresa texto';
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";
    label {
        color: $text-sm;
    }
</style>

<template>
        <label 
        class="text-start text-dark d-block mt-2">
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

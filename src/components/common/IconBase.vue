<template>
    <i :class="iconClass"></i>
</template>

<script setup lang="ts">
    interface Props {
    iconClass: string;
    }

    const props = defineProps<Props>();
</script>

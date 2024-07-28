<template>
    <span :class="spanClass">
        <icon-base
        :iconClass="iconClass"
        />
        {{ texto }}
    </span>
</template>

<script setup lang="ts">
    import IconBase from './IconBase.vue';
    interface Props {
    spanClass: string;
    iconClass: string;
    texto: string;
    }

    const props = defineProps<Props>();
</script>

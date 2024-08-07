<template>
    <button >
    <icon-base
    :iconClass="iconClass"
    />
    {{ texto }}
    </button>
</template>

<script setup lang="ts">
    import IconBase from '../common/IconBase.vue';


    interface Props {
    texto?: string;
    iconClass: string;
    }

    const props = defineProps<Props>();
</script>

<style lang="scss" scoped>

    button {
      background: grey;
    }
</style>

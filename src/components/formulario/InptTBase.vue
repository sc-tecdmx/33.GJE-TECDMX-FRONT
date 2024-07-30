<template>
    <label 
    class="text-start d-block ">{{ lbl }}</label>
    <input 
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup lang="ts">
    interface Props {
    lbl?: string; // Propiedad opcional con valor por defecto
    }

    const props = defineProps<Props>();

    // Opcional: establecer un valor predeterminado si no se proporciona
    const lbl = props.lbl || ' ';
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .inpt {
        color: $bg-dark!important;
        padding: 7px 5px 7px 8px!important;
        outline: none;
        border: none!important;
    }

</style>
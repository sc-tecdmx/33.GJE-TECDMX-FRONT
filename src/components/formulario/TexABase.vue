<template>
    <label class="text-start text-dark d-block">{{ lbl }}</label>
    <textarea 
        class="form-control"
        v-model="texto"
        :rows="rows"
        :cols="cols"
        @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
</template>

<script setup lang="ts">
   import { defineProps } from 'vue';

    interface Props {
    lbl: string;
    rows: number;
    }
    const props = defineProps<Props>();

    // Opcionalmente, puedes asignar valores por defecto en el código si no están presentes
    const defaultLbl = props.lbl || 'ingresa texto';
    const defaultRows = props.rows || 4;
</script>

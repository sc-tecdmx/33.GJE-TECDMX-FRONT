<template>
    <label class="text-start text-dark d-block">{{ lbl }}</label>
    <select 
    v-bind="$attrs"
    class="form-select mr-sm-2"
    @change="$emit('update:modelValue', $event.target.value)">
        <option selected></option>
        <option id="op" v-for="(option, index) in opciones" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

    interface Option {
    label: string;
    value: any;
    }

    interface Props {
    lbl: string;
    opciones: Option[];
    preselectedOption: string;
    }

    // Define los props sin usar `type` y `default` en el objeto
    const props = defineProps<Props>();

    // Opcionalmente, puedes asignar valores por defecto en el código si no están presentes
    const defaultLbl = props.lbl || 'ingresa texto';
    const defaultPreselectedOption = props.preselectedOption || '';
</script>

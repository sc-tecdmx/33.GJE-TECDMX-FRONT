<template>
    <label class="d-block text-start">{{ lbl }}</label>
    <Multiselect
    v-model="selectedOptions"
    :options="options"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    :preserve-search="true"
    placeholder=""
    label="label"
    track-by="value"
    :custom-label="customLabel"
    class="select-control"
    >
      <template #tag="{ option, remove }">
            <span class="me-2 ms-2">{{ option.label }}</span>
            <span class="rounded-circle bg-dark d-inline-block text-white text-center span-cerrar" @click="remove(option)">×</span>
      </template>
    </Multiselect>
    <!--
    <div>
      <p>Selecciones:</p>
      <ul>
        <li v-for="selection in selectedOptions" :key="selection.value">{{ selection.label }}</li>
      </ul>
    </div>
    -->

</template>

<script setup lang="ts">

// import Multiselect from 'vue-multiselect';
//import 'vue-multiselect/dist/vue-multiselect.css';


    import { defineProps, computed, toRefs } from 'vue';

    interface Option {
    value: any; // Ajusta 'any' al tipo adecuado según tu caso
    label: string;
    }

    interface Props {
    options: Option[];
    modelValue: Option[];
    lbl: string;
    }

    const props = defineProps<Props>();

    // Usando computed para `selectedOptions`
    const selectedOptions = computed({
    get: () => props.modelValue,
    set: (value: Option[]) => {
        // Emitiendo evento para sincronizar el estado del valor
        emit('update:modelValue', value);
    }
    });
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";
    .span-cerrar {
        width: $w-20!important;
        height: $w-20!important;
    }

    label {
        color: $file!important;
    }

</style>
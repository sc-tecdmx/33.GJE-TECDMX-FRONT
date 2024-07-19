<template>
    <label class="text-start text-dark d-block mt-2">{{ lbl }}</label>
    <select 
    v-bind="$attrs"
    class="form-select mr-sm-2"
    @change="$emit('update:modelValue', $event.target.value)">
        <option selected></option>
        <option id="op" v-for="(option, index) in opciones" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
    export default {
        name: 'InptSelecBase',
        props: {
            lbl: {
                type: String,
                default:  'ingresa texto'
            },
            opciones: {
                type: Array,
                required: true
            },
            preselectedOption: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
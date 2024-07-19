<template>
    <label 
    class="text-start text-dark d-block mt-2">{{ lbl }}</label>
    <input 
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>

    export default {
        name: 'InptTBase',
        props: {
            lbl: {
                type: String,
                default:  'ingresa texto'
            }
        }
    }
</script>

<style lang="scss" scoped>
        .check {
            position: relative;
            top: -25px;
    }
</style>
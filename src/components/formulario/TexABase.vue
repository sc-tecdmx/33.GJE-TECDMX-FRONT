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

<script>
    export default {
        name: 'TextABase',
        props: {
            lbl: {
                type: String,
                default:  'ingresa texto'
            },
            rows: {
            type: Number,
            default: 4
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
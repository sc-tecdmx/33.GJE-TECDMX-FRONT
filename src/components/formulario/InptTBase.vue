<template>
    <label 
    class="text-start d-block ">{{ lbl }}</label>
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

    @import "../../assets/tecdmx/sass/jel/_var.scss";
      /*  .check {
            position: relative;
            top: -25px;
    }
*/
    .inpt {
        color: $bg-dark!important;
        padding: 7px 5px 7px 8px!important;
        outline: none;
        border: none!important;
    }

</style>
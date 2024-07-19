<template>
        <label 
        class="text-start text-dark d-block mt-2">
        {{ lbl }}
        </label>
</template>

<script>
    export default {
        name: 'LblBase',
        props: {
            lbl: {
                type: String,
                default:  'ingresa texto'
            }
        }
    }
</script>

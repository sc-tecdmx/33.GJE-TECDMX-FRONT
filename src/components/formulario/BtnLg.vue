<template>
    <button :style="{background: colorFondo, color: colorTexto, width: ancho + '%', height: alto + 'px' }">{{ textBtn }}</button>
</template>

<script>
    export default {
        name: 'BtnLg',
        props: {
            colorFondo: {
                type: String,
                required: true
            },
            colorTexto: {
                type: String,
                required: true
            },
            ancho: {
                type: Number,
                required: true
            },
            alto: {
                type: Number,
                required: true
            },
            textBtn: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

    .btn-guardar {
        background: #0a2241;
    }

</style>
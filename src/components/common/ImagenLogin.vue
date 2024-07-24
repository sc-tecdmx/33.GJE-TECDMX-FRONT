<template>
    <figure class="figure-log" :style="{ width: ancho + 'px', height: alto + 'px' }"></figure>
</template>

<script>
    export default {
        name: 'ImagenLogin',
        props: {
            ancho: {
                type: Number,
                required: false
            },
            alto: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

    .figure-log {

        background-image: url(../../assets/tecdmx/images/image.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%;
        margin-top: 5px;
    }
</style>
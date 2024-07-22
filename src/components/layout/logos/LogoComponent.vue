<template>
    <figure class="figure" :style="{ width: ancho + 'px', height: alto + 'px', marginLeft: Mleft + 'px' }">
        <img class="img" src="../../../assets/tecdmx/images/logo_tecdmx_300.png" alt="">
    </figure>
</template>

<script>
    export default {
        name: 'LogoComponent',
        props: {
            ancho: {
                type: Number,
                required: false
            },
            alto: {
                type: Number,
                required: true
            },
            Mleft: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style  scoped>

    .img {
        width: 85%;
        padding: 5px;
    }

</style>
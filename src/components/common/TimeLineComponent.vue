<template>
    <section class="col-md p-2">
    <div class="timeline shadow-sm" :style="{background: color, opacity: opacidad }"></div>
     <p class="p-1 m-3 mt-2 rounded ptl " :style="{border: borde, opacity: opacidad}">{{ texto }}</p>
    </section>
</template>

<script>
    export default {
        name: 'TimeLineComponent',
        props: {
            color: String,
            texto: String,
            opacidad: Number,
            borde: String
        }
    }
</script>

<style lang="scss" scoped>
    .timeline {
        width: 24px;
        height: 24px;
        background: rgb(168, 168, 168);
        border: 5px solid rgb(243, 243, 243);
        border-radius: 50%;
        margin: 0px auto;
        opacity: .5;
    }

    .ptl {
        opacity: .5;
        font-size: 16px;
    }
</style>
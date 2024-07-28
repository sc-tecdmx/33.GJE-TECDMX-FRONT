<template>
    <section class="col-md  p-2 col-w">
    <div class="timeline shadow-sm" :style="{background: color, opacity: opacidad }"></div>
     <p class="p-1 m-3 mt-2 rounded ptl " :style="{border: borde, opacity: opacidad}">{{ texto }}</p>
    </section>
</template>

<script setup lang="ts">
    interface Props {
    color: string;
    texto: string;
    opacidad: number;
    borde: string;
    }

    const props = defineProps<Props>();
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/var";

    .timeline {
        width: $w-24;
        height: $w-24;
        background: $timeLine;
        border: 5px $border-style $timeLine-borde;
        border-radius: 50%;
        margin: 0px auto;
        opacity: .5;
    }

    .ptl {
        opacity: .5;
        font-size: $text-md;
    }

    @media screen and (max-width: 1140px) {

        .ptl {
            font-size: $text-sm;
        }
    }


    @media screen and (max-width: 776px) {

        .col-w {
        position: relative;
        padding: 4px 0px 0px 0px!important;
        margin-left: -45px;
        }
        .timeline {
            margin-top: 20ppx;
            float: left;
        }

        .ptl {
            display: none!important;
        }
        }
</style>
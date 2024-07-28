<template>
    <!--FONDO SOMBRA SombraFormulario-->
    <div class="sombra-formulario" :style="{width: ancho + 'px', height: alto + 'px' }"></div>
    <!--END FONDO SOMBRA-->
</template>

<script setup lang="ts">

    import { defineProps } from 'vue';

    interface Props {
    ancho: number;
    alto: number;
    }

    const props = defineProps<Props>();

</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/var";
    .sombra-formulario {
        box-shadow: 0px 0px 16px 3px $opacity;
    }
</style>
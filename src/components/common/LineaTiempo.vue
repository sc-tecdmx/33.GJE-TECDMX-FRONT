<template>
    <!--LÍNEA DE TIEMPO-->
    <time-line-component
    v-for="(parametros, index) in listaParametros" 
    :key="index" 
    :color="parametros.color"
    :texto="parametros.texto"
    :opacidad="parametros.opacidad"
    :borde="parametros.borde"
    />
    <!--END LÍNEA DE TIEMPO-->
</template>

<script setup lang="ts">

    import TimeLineComponent from './TimeLineComponent.vue';
    
    interface Parametro {
    color: string;
    texto: string;
    opacidad: string;
    borde: string;
    }

    interface Props {
    listaParametros: Parametro[];
    }

    const props = defineProps<Props>();
</script>
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

<script>

    import TimeLineComponent from './TimeLineComponent.vue';
    
    export default {
        name: 'LineaTiempo',
        components: {
            TimeLineComponent
        },
        props: {
            listaParametros: {
                type: Array,
                required: true,
                },
            },
    }
</script>

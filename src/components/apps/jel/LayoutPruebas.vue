<template>
    <!--LAYOUT-->
    <div class="layou">

        <!--TIMELINE-->
        <div class="position-relative m-2 w-100 h-auto d-inline-block ">
            <div class="row">
                <linea-tiempo
                :listaParametros="listaParametros"
                /> 
            </div>
        </div>
        <!--END TIMELINE-->

        <!--ROW CONTENIDO-->
        <div class="row mt-2 p-3 rounded shadow-sm principal">
        
            <!--FORMULARIO-->
            <form class="mt-1 pb-1 mb-5">

                <!--INPUT FILE-->
                <div class="form-group mt-3">
                    <inpt-t-base 
                    type="file"
                    lbl="Cargar pruebas"
                    v-model="archivo"
                    @change="handleFileSelect"
                    class="form-control"
                    />
                </div>
                <!--END INPUT FILE-->

                <!--BUTTONS-->
                <div v-if="fileSelected" class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    :colorFondo="color2"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout', 'LayoutFirma')"
                    />
                    <btn-base
                    titulo="Anterior"
                    :colorFondo="color2"
                    class="btn-cancelar"
                    @click="$emit('cambiarLayout', 'LayoutPruebas')"
                    />
                </div>
                <!--END BUTTONS-->
                <component :is="layoutActual"></component>
            </form>
            <!--END FORMULARIO-->
        </div>
        <!--END ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->
            
</template>

<script>

import LineaTiempo from '../../common/LineaTiempo.vue';

import InptTBase from '@/components/formulario/InptTBase.vue'

import EspaciadorBase from '../../common/EspaciadorBase.vue';

import BtnBase from '../../formulario/BtnBase.vue';

    export default {
        name: 'LayoutPruebas',
        components: {
            LineaTiempo,
            InptTBase,
            BtnBase,
            EspaciadorBase
        },
        watch: {
            expediente(value) {
            console.log(value)
            }
        },
        data() {
            return {
            fileSelected: false,
                listaParametros: [
                    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Responsables', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#28A745', texto: 'Pruebas', opacidad: '1', borde: '1px solid #28A745!important'},
                    { color: '', texto: 'Firmar escrito', opacidad: '', borde: ''},
                    ],
            }
        },
        methods: {
                handleFileSelect(event) {
                // Lógica para manejar la selección de archivo
                if (event.target.files && event.target.files.length > 0) {
                    this.fileSelected = true; // Mostrar el div cuando se selecciona un archivo
                } else {
                    this.fileSelected = false; // Ocultar el div si no hay archivo seleccionado
                }
                },
                
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
    }
    
    .tl1 {
        background: rgb(168, 168, 168);
    }

    .btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }


</style>
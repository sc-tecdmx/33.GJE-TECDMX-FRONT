<template>

    <!--LAYOUT-->
    <div class="layout">

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
            <form class="mt-1 pb-1">

                <!--ROW DIVIDE EN DOS COLUMNAS LOS SELECT-->
                <div class="row">
                    <div class="col-md-6">
                    <!--SELECT-->
                    <div class="form-group mt-2">
                        <inpt-selec-base 
                        lbl="¿Cómo deses presentar tu demanda?"
                        v-model="demanda"
                        :opciones="opcionDemanda"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>

                    <div class="col-md-6">
                    <!--SELECT-->
                    <div class="form-group mt-2">
                        <inpt-selec-base 
                        lbl="¿Desea adjuntar pruebas?"
                        v-model="pruebas"
                        :opciones="opcionPrueba"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>
                </div>
                <!--END ROW DIVIDE EN DOS COLUMNAS LOS SELECT-->

                <!--DRAG AND DROP-->
                <div v-if="showFileInput" class="form-group mt-3">
                    <inpt-t-base 
                    type="file"
                    lbl="Carga tu demanda"
                    v-model="archivo"
                    @change="handleFileUpload"
                    class="form-control"
                    />
                </div>
                <!--END DRAG AND DROP-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-4">
                    <text-a-base
                    type="text"
                    lbl="Hechos que motivan a demanda"
                    v-model="hechos"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-4">
                    <text-a-base
                    type="text"
                    lbl="Agravios que causa el acto o resolución"
                    v-model="agravios"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-4">
                    <text-a-base
                    type="text"
                    lbl="Normas que consideradas vulneradas"
                    v-model="normas"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--BUTTONS-->
                <div v-if="showButtons" class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    :colorFondo="color2"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout', 'LayoutResponsables')"
                    />
                    <btn-base
                    titulo="Anterior"
                    :colorFondo="color2"
                    class="btn-cancelar"
                    @click="$emit('cambiarLayout', 'LayoutPromocion')"
                    />
                </div>
                <!--END BUTTONS-->

                <!--ESPACIADOR-->
                <espaciador-base 
                :ancho="100" 
                :alto="48"
                />
                <!--END ESPACIADOR-->

            </form>
            <!--END FORMULARIO-->
        </div>
        <!--END ROW CONTENIDO-->
    </div>
    <!--END LAYOUT-->
           

</template>

<script>

import TextABase from '@/components/formulario/TexABase.vue'
import LblBase from '@/components/formulario/LblBase.vue'
import InptSelecBase from '@/components/formulario/InptSelecBase.vue'
import LineaTiempo from '../../common/LineaTiempo.vue'
import EspaciadorBase from '../../common/EspaciadorBase.vue'
import BtnBase from '../../formulario/BtnBase.vue'
import InptTBase from '@/components/formulario/InptTBase.vue'

    export default {
        name: 'LayoutDemanda',
        components: {
            InptSelecBase,
            LblBase,
            InptTBase,
            TextABase,
            BtnBase,
            EspaciadorBase,
            LineaTiempo
        },
        watch: {
        expediente(value) {
        console.log(value)
        }
    },
    data() {
        return {
            demanda: '',
            pruebas: '',
            hechos: '',
            agravios: '',
            normas: '',

            listaParametros: [
                    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#28A745', texto: 'Demanda', opacidad: '1', borde: '1px solid #28A745!important'},
                    { color: '', texto: 'Responsables', opacidad: '', borde: ''},
                    { color: '', texto: 'Pruebas', opacidad: '', borde: ''},
                    { color: '', texto: 'Firmar escrito', opacidad: '', borde: ''},

                ],

            opcionDemanda: [
                {value: 'cargarDemanda', label: 'Cargar demanda' },
                {value: 'generarDocumento', label: 'Generar documento' }

                ],
            opcionPrueba: [
                {value: 'si', label: 'Si' },
                {value: 'no', label: 'No' }

                ],
                selectedOption: '',
            }
        },
            computed: {
                showFileInput() {
                // Mostrar el input de archivo solo si se selecciona "Cargar demanda de otra persona"
                return this.demanda === 'cargarDemanda';
                },
                showInput() {
                // Ocultar el espaciador si la opción seleccionada es "Cargar demanda o generar documento"
                return this.demanda !== 'cargarDemanda' && this.demanda !== 'generarDocumento';
                },
                showTextA() {
                // Mostrar los TextArea si la opción seleccionada es "Generar documento"
                return this.demanda === 'generarDocumento';
                },
                showButtons() {
                // Mostrar los TextArea si la opción seleccionada es "Cargar demanda o generar documento"
                return this.demanda === 'cargarDemanda' || this.demanda === 'generarDocumento';
                }
                

            },
            methods: {
        
                handleFileDrop(file) {
                console.log('Archivo recibido:', file);
                // Aquí puedes manejar el archivo recibido, por ejemplo, enviarlo a un servidor
                }
             
            },
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

    .tl2 {
        background: #008489;
        opacity: .6;
    }

    .btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }

    .ltt {
        font-size: 3px!important;
    }

</style>
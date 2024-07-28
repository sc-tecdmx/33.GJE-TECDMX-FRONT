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
                        class="form-control form-control-sm"
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
                        class="form-control form-control-sm"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>
                </div>
                <!--END ROW DIVIDE EN DOS COLUMNAS LOS SELECT-->

                <!--DRAG AND DROP-->
                <div v-if="showFileInput" class="form-group mt-2">
                    <inpt-t-base 
                    type="file"
                    lbl="Carga tu demanda"
                    v-model="archivo"
                    @change="handleFileUpload"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END DRAG AND DROP-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-2">
                    <tex-a-base
                    type="text"
                    lbl="Hechos que motivan a demanda"
                    v-model="hechos"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-2">
                    <tex-a-base
                    type="text"
                    lbl="Agravios que causa el acto o resolución"
                    v-model="agravios"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--TEXTAREA-->
                <div  v-if="showTextA" class="form-group mt-2">
                    <tex-a-base
                    type="text"
                    lbl="Normas que consideradas vulneradas"
                    v-model="normas"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--BUTTONS-->
                <div v-if="showButtons" class="form-group mt-2">
                    <btn-base
                    titulo="Siguiente"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout')"
                    />
                    <btn-base
                    titulo="Anterior"

                    class="btn-cancelar"
                    @click="$emit('regresar-layout')"
                    />
                </div>
                <!--END BUTTONS-->

                <!--ESPACIADOR-->
                <espaciador-base 
                :ancho="100" 
                :alto="32"
                />
                <!--END ESPACIADOR-->

            </form>
            <!--END FORMULARIO-->
        </div>
        <!--END ROW CONTENIDO-->
    </div>
    <!--END LAYOUT-->
           

</template>

<script setup lang="ts">


    import LblBase from '@/components/formulario/LblBase.vue'
    import InptSelecBase from '@/components/formulario/InptSelecBase.vue'
    import LineaTiempo from '../../common/LineaTiempo.vue'
    import EspaciadorBase from '../../common/EspaciadorBase.vue'
    import BtnBase from '../../formulario/BtnBase.vue'
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import TexABase from '@/components/formulario/TexABase.vue'
    import { ref, computed, watch } from 'vue';

    // ESTADO REACTIVO DE COMPONENTES
    const demanda = ref<string>('');
    const pruebas = ref<string>('');
    const hechos = ref<string>('');
    const agravios = ref<string>('');
    const normas = ref<string>('');

    // lISTA DE PARAMETROS DE  
    const listaParametros = ref([
    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#28A745', texto: 'Demanda', opacidad: '1', borde: '1px solid #28A745!important' },
    { color: '', texto: 'Responsables', opacidad: '', borde: '' },
    { color: '', texto: 'Pruebas', opacidad: '', borde: '' },
    { color: '', texto: 'Firmar escrito', opacidad: '', borde: '' }
    ]);

    // OPCIONES DEMANDA
    const opcionDemanda = ref([
    { value: 'cargarDemanda', label: 'Cargar demanda' },
    { value: 'generarDocumento', label: 'Generar documento' }
    ]);

    const opcionPrueba = ref([
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' }
    ]);

    const selectedOption = ref<string>('');

    // COMPUTED
    const showFileInput = computed(() => demanda.value === 'cargarDemanda');
    const showInput = computed(() => demanda.value !== 'cargarDemanda' && demanda.value !== 'generarDocumento');
    const showTextA = computed(() => demanda.value === 'generarDocumento');
    const showButtons = computed(() => demanda.value === 'cargarDemanda' || demanda.value === 'generarDocumento');

    // WATCHER EXPEDIENTE
    watch(demanda, (newValue) => {
    console.log('Demanda actualizada:', newValue);
    });

    // MÉTODOS
    function handleFileDrop(file: File): void {
    console.log('Archivo recibido:', file);

    }
</script>

<style lang="scss" scoped>


    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
    }

    .btn-guardar {
        background: $btn-guardar;
    }
    .btn-cancelar {
        margin-right: $margin-sm;
        background: $btn-secondary;
    }
    @media screen and (max-width: 776px) {
        
        .layout {
            position: relative;
        }
        .principal {
            position: absolute;
            top: 0px;
        }


    }

</style>
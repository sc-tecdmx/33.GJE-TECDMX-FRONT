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
            <form class="mt-1 pb-1 mb-5">

                <!--INPUT FILE-->
                <div class="form-group mt-3">
                    <inpt-t-base 
                    type="file"
                    lbl="Cargar pruebas"
                    v-model="archivo"
                    @change="handleFileSelect"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT FILE-->

                <!--BUTTONS-->
                <div class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout')"
                    />
                    <btn-base
                    titulo="Anterior"
                    class="btn-cancelar"
                    @click="$emit('regresar-Layout')"
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

<script setup lang="ts">

    import LineaTiempo from '../../common/LineaTiempo.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import EspaciadorBase from '../../common/EspaciadorBase.vue';
    import BtnBase from '../../formulario/BtnBase.vue';
    import { ref, watch } from 'vue';

    // DEFINIR TIPO DE OBJETOS
    interface Parametro {
    color: string;
    texto: string;
    opacidad: string;
    borde: string;
    }

    // PARAMETROS PARA LÍNEA DE TIEMPO
    const fileSelected = ref<boolean>(false);
    const listaParametros = ref<Parametro[]>([
    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Responsables', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#28A745', texto: 'Pruebas', opacidad: '1', borde: '1px solid #28A745!important' },
    { color: '', texto: 'Firmar escrito', opacidad: '', borde: '' }
    ]);

    // SIMULACIÓN DE EXPEDIENTE 
    const expediente = ref<string | null>(null);

    // WATCHER PARA EXPEDIENTE
    watch(expediente, (newValue) => {
    console.log(newValue);
    });

    // MÉTODO PARA MANEJAR LA SELECCIÓN DE ARCHIVOS
    function handleFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        fileSelected.value = true;
    } else {
        fileSelected.value = false;
    }
    }
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
    }

    .btn-guardar {
        background: $btn-guardar;
        box-shadow: none;
    }
    .btn-cancelar {
        margin-right: $margin-sm;
        background: $btn-secondary;
        box-shadow: none;
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
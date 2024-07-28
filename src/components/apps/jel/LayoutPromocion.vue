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
                <!--SELECT-->
                <div class="form-group mt-2">
                    <inpt-selec-base 
                    lbl="¿Está actuando en su propio nombre o en representación de otra persona?"
                    v-model="presentaDemanda"
                    :opciones="opciones"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END SELECT-->

                <!--SELECT-->
                <div class="form-group mt-3">
                    <inpt-selec-base 
                    lbl="Entidad federativa"
                    v-model="entidadFederativa"
                    :opciones="entidad"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END SELECT-->

                <!--INPUT TEXTO-->
                <div class="form-group mt-3">
                    <inpt-t-base 
                    type="text"
                    lbl="Tipo de medio"
                    v-model="tipoMedio"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT TEXTO-->

                <!--TEXTAREA-->
                <div class="form-group mt-3">
                    <tex-a-base
                    type="text"
                    lbl="Descripción del acto impugnado"
                    v-model="actoImpugnado"
                    rows="4"
                    class="mt5"
                    />
                </div>
                <!--END TEXTAREA-->

                <!--INPUT FILE-->
                <div v-if="showFileInput" class="form-group mt-3">
                    <inpt-t-base 
                    type="file"
                    lbl="Si representas a otra persona, adjunta el documento con el que lo demuestres"
                    v-model="archivo"
                    :disabled="!isFileInputEnabled"
                    @change="handleFileUpload"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT FILE-->

                <!--BUTTONS-->
                <div class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    class="btn-guardar"
                    @click="$emit('cambiar-layout')"
                    />
                    <btn-base
                    titulo="Anterior"
                    class="btn-cancelar"
                    @click="$emit('regresar-layout')"
                    />
                </div>
                <!--END BUTTONS-->
               
            </form>
            <!--END FORMULARIO-->
        </div>
        <!--END ROW CONTENIDO-->
    </div>
    <!--END LAYOUT-->

</template>

<script setup lang="ts">

    import InptSelecBase from '../../formulario/InptSelecBase.vue'
    import BtnBase from '../../formulario/BtnBase.vue';
    import LineaTiempo from '../../common/LineaTiempo.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue'
    import TexABase from '@/components/formulario/TexABase.vue';
    import { ref, computed, watch } from 'vue';

    // ESTADO REACTIVO PARA LOS DATOS
    const presentaDemanda = ref<string>('');
    const entidadFederativa = ref<string>('');
    const tipoMedio = ref<string>('');
    const actoImpugnado = ref<string>('');
    const archivo = ref<string>('');
    const selectedOption = ref<string>('');
    const selectedFile = ref<File | null>(null);

    const opciones = ref([
    { value: 'propio', label: 'A nombre propio' },
    { value: 'representacion', label: 'En representación de otra persona' }
    ]);

    const entidad = ref([
    { value: 'Aguascalientes', label: 'Aguascalientes' },
    { value: 'BajaCalifornia', label: 'Baja California' },
    { value: 'BajaCaliforniaSur', label: 'Baja California Sur' },
    { value: 'Campeche', label: 'Campeche' },
    { value: 'Chiapas', label: 'Chiapas' },
    { value: 'Chihuahua', label: 'Chihuahua' },
    { value: 'CiudaddeMexico', label: 'Ciudad de México' },
    { value: 'Coahuila', label: 'Coahuila' },
    { value: 'Colima', label: 'Colima' },
    { value: 'Durango', label: 'Durango' },
    { value: 'EstadoDeMexico', label: 'Estado de México' },
    { value: 'Guanajuato', label: 'Guanajuato' },
    { value: 'Guerrero', label: 'Guerrero' },
    { value: 'Hidalgo', label: 'Hidalgo' },
    { value: 'Jalisco', label: 'Jalisco' },
    { value: 'Michoacan', label: 'Michoacán' },
    { value: 'Morelos', label: 'Morelos' },
    { value: 'Nayarit', label: 'Nayarit' },
    { value: 'NuevoLeon', label: 'Nuevo León' },
    { value: 'Oaxaca', label: 'Oaxaca' },
    { value: 'Puebla', label: 'Puebla' },
    { value: 'Queretaro', label: 'Querétaro' },
    { value: 'QuintanaRoo', label: 'Quintana Roo' },
    { value: 'SanLuisPotosi', label: 'San Luis Potosí' },
    { value: 'Sinaloa', label: 'Sinaloa' },
    { value: 'Sonora', label: 'Sonora' },
    { value: 'Tabasco', label: 'Tabasco' },
    { value: 'Tamaulipas', label: 'Tamaulipas' },
    { value: 'Tlaxcala', label: 'Tlaxcala' },
    { value: 'Veracruz', label: 'Veracruz' },
    { value: 'Yucatan', label: 'Yucatán' },
    { value: 'Zacatecas', label: 'Zacatecas' }
    ]);

    const listaParametros = ref([
    { color: '#28A745', texto: 'Presentar demanda', opacidad: '1', borde: '1px solid #28A745!important' },
    { color: '', texto: 'Demanda', opacidad: '', borde: '' },
    { color: '', texto: 'Responsables', opacidad: '', borde: '' },
    { color: '', texto: 'Pruebas', opacidad: '', borde: '' },
    { color: '', texto: 'Firmar escrito', opacidad: '', borde: '' }
    ]);

    // COMPUTADOS PARA MOSTRAR LOS ARCHIVOS  IMPUTS
    const showFileInput = computed(() => presentaDemanda.value === 'representacion');
    const isFileInputEnabled = computed(() => presentaDemanda.value === 'representacion');

    // MÉTODOS
    function handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        selectedFile.value = target.files[0];
        console.log('Archivo seleccionado:', selectedFile.value);
    }
    }

    // EJEMPLO DE WATCHER
    watch(presentaDemanda, (newVal) => {
    console.log('presentaDemanda ha cambiado:', newVal);
    });
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
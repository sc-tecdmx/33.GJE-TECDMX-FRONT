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
                    />
                </div>
                <!--END SELECT-->

                <!--SELECT-->
                <div class="form-group mt-3">
                    <inpt-selec-base 
                    lbl="Entidad federativa"
                    v-model="entidadFederativa"
                    :opciones="entidad"
                    />
                </div>
                <!--END SELECT-->

                <!--INPUT TEXTO-->
                <div class="form-group mt-3">
                    <inpt-t-base 
                    type="text"
                    lbl="Tipo de medio"
                    v-model="tipoMedio"
                    class="form-control"
                    />
                </div>
                <!--END INPUT TEXTO-->

                <!--TEXTAREA-->
                <div class="form-group mt-4">
                    <text-a-base
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
                    class="form-control"
                    />
                </div>
                <!--END INPUT FILE-->

                <!--BUTTONS-->
                <div class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    :colorFondo="color2"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout', 'LayoutDemanda')"
                    />
                    <btn-base
                    titulo="Anterior"
                    :colorFondo="color2"
                    class="btn-cancelar"
                    @click="$emit('cambiarLayout', 'LayoutResponsables')"
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

   
import MenuLayout from './MenuLayout.vue';


import InptSelecBase from '../../formulario/InptSelecBase.vue'

import BtnBase from '../../formulario/BtnBase.vue';


import LineaTiempo from '../../common/LineaTiempo.vue';
import InptTBase from '@/components/formulario/InptTBase.vue'

    export default {
        name: 'LayoutPromociones',
        components: {
            MenuLayout,
            LineaTiempo,
            InptTBase,
       
            InptSelecBase,
            BtnBase,

   
        },
        watch: {
            expediente(value) {
            console.log(value)
            }
        },
        data() {
            return {
            presentaDemanda: '',
            entidadFederativa: '',
            tipoMedio: '',
            actoImpugnado: '',
            archivo: '',

            opciones: [
                {value: 'propio', label: 'A nombre propio' },
                {value: 'representacion', label: 'En representación de otra persona' }

            ],
            entidad: [
                {value: 'Aguascalientes', label: 'Aguascalientes' },
                {value: 'BajaCalifornia', label: 'Baja California' },
                {value: 'BajaCaliforniaSur', label: 'Baja California Sur' },
                {value: 'Campeche', label: 'Campeche' },
                {value: 'Chiapas', label: 'Chiapas' },
                {value: 'Chihuahua', label: 'Chihuahua' },
                {value: 'CiudaddeMexico', label: 'Ciudad de México' },
                {value: 'Coahuila ', label: 'Coahuila' },
                {value: 'Colima ', label: 'Colima ' },
                {value: 'Durango', label: 'Durango' },
                {value: 'EstadoDeMexico', label: 'Estado de México' },
                {value: 'Guanajuato', label: 'Guanajuato' },
                {value: 'Guerrero', label: 'Guerrero' },
                {value: 'Hidalgo ', label: 'Hidalgo' },
                {value: 'Jalisco', label: 'Jalisco' },
                {value: 'Michoacan', label: 'Michoacán' },
                {value: 'Morelos', label: 'Morelos a' },
                {value: 'Nayarit', label: 'Nayarit' },
                {value: 'NuevoLeon', label: 'Nuevo León' },
                {value: 'Oaxaca', label: 'Oaxaca' },
                {value: 'Puebla', label: 'Puebla' },
                {value: 'Queretaro', label: 'Querétaro' },
                {value: 'QuintanaRoo', label: 'Quintana Roo' },
                {value: 'SanLuisPotosi', label: 'San Luis Potosí' },
                {value: 'Sinaloa', label: 'Sinaloa' },
                {value: 'Sonora', label: 'Sonora' },
                {value: 'Tabasco', label: 'Tabasco' },
                {value: 'Tamaulipas ', label: 'Tamaulipas ' },
                {value: 'Tlaxcala ', label: 'Tlaxcala ' },
                {value: 'Veracruz', label: 'Veracruz' },
                {value: 'Yucatan', label: 'Yucatán' },
                {value: 'Zacatecas', label: 'Zacatecas' }
            ],
            selectedOption: '',
            selectedFile: null,
                listaParametros: [
                    { color: '#28A745', texto: 'Presentar demanda', opacidad: '1', borde: '1px solid #28A745!important'},
                    { color: '', texto: 'Demanda', opacidad: '', borde: ''},
                    { color: '', texto: 'Responsables', opacidad: '', borde: ''},
                    { color: '', texto: 'Pruebas', opacidad: '', borde: ''},
                    { color: '', texto: 'Firmar escrito', opacidad: '', borde: ''},

                ],
            }
        },
    computed: {
            showFileInput() {
            // Mostrar el input de archivo solo si se selecciona "Representaión de otra persona"
            return this.presentaDemanda === 'representacion';
            },
            isFileInputEnabled() {
            // Habilitar el input de archivo solo si se selecciona "Representaión de otra persona"
            return this.presentaDemanda === 'representacion';
            },
    },
        methods: {
                // Enviar al siguiente Layout

                // Método para la selección de archivos con el fie input
                handleFileUpload(event) {
                this.selectedFile = event.target.files[0];
                console.log('Archivo seleccionado:', this.selectedFile);
                }
            }
    }
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .tm {
        height:auto;
        display: inline-block
    }
    .timeline {
        width: 24px;
        height: 24px;
    }

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
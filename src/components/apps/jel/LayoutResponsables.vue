<template>
    <!--lAYOUT-->
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
                        lbl="Entidad federativa"
                        v-model="EntidadFederativa"
                        :opciones="entidad"
                        class="form-control form-control-sm"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>

                    <div class="col-md-6">
                    <!--SELECT-->
                    <div class="form-group mt-2">
                        <sel-m
                        lbl="Agregar autoridades responsables"
                        :options="options"
                        v-model="selectedOptions"
                        id="select"
                        class="select1"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>
                </div>
                <!--END ROW DIVIDE EN DOS COLUMNAS LOS SELECT-->
                    
                <!--BUTTONS-->
                <div class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    :colorFondo="color2"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout')"
                    />
                    <btn-base
                    titulo="Anterior"
                    :colorFondo="color2"
                    class="btn-cancelar"
                    @click="$emit('regresar-Layout')"
                    />
                </div>
                <!--END BUTTONS-->

            </form>
            <!--END FORMULARIO-->

            <!--ESPACIADOR-->
            <espaciador-base 
            :ancho="100" 
            :alto="32"
            />
            <!--END ESPACIADOR-->
        </div>
        <!--END ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->
</template>

<script setup lang="ts">

    import LineaTiempo from '../../common/LineaTiempo.vue'
    import InptSelecBase from '../../formulario/InptSelecBase.vue'
    import BtnBase from '../../formulario/BtnBase.vue'
    import EspaciadorBase from '../../common/EspaciadorBase.vue'
    import SelM from '../../formulario/SelM.vue'
    import { ref } from 'vue'


    // DEFINICIÓN PARA LOS OBJETOS DE LA LISTA
    interface Parametro {
    color: string;
    texto: string;
    opacidad: string;
    borde: string;
    }

    interface Opcion {
    label: string;
    value: string;
    }

    interface Entidad {
    value: string;
    label: string;
    }
    //PARAMETROS DE LINEA DE TIEMPO
    const listaParametros = ref<Parametro[]>([
    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#28A745', texto: 'Responsables', opacidad: '1', borde: '1px solid #28A745!important' },
    { color: '', texto: 'Pruebas', opacidad: '', borde: '' },
    { color: '', texto: 'Firmar escrito', opacidad: '', borde: '' }
    ]);

    const options = ref<Opcion[]>([
    { label: 'Otro', value: 'otro' },
    { label: 'Consejo Distrital', value: 'consejoDistrital' },
    { label: 'Consejo Municipal', value: 'consejoMunicipal' },
    { label: 'Diputación', value: 'diputacion' },
    { label: 'Legislatura', value: 'legislatura' },
    { label: 'Órgano de Ayuntamiento', value: 'organoAyuntamiento' },
    { label: 'Organismo Público Local Electoral', value: 'organismoPublicoLocalElectoral' },
    { label: 'Partido político', value: 'partidoPolitico' },
    { label: 'Poder Ejecutivo', value: 'poderEjecutivo' },
    { label: 'Presidencia Municipal', value: 'presidenciaMunicipal' }
    ]);

    const entidad = ref<Entidad[]>([
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

    // ESTADO REACTIVO PARA LAS OPCIONES
    const selectedOptions = ref<string[]>([]);
    const selectedOption = ref<string>('');
    const EntidadFederativa = ref<string>('');
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
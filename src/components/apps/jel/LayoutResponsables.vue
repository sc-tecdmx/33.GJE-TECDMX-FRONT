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
                        />
                    </div>
                    <!--END SELECT-->
                    </div>

                    <div class="col-md-6">
                    <!--SELECT-->
                    <div class="form-group mt-2">
                        <selec-multiple
                        lbl="Agregar autoridades responsables"
                        :options="options"
                        v-model="selectedOptions"
                        id="select"
                        />
                    </div>
                    <!--END SELECT-->
                    </div>
                </div>
                <!--END ROW DIVIDE EN DOS COLUMNAS LOS SELECT-->
                    
                <!--BUTTONS-->
                <div v-if="EntidadFederativa !== ''" class="form-group mt-4">
                    <btn-base
                    titulo="Siguiente"
                    :colorFondo="color2"
                    class="btn-guardar"
                    @click="$emit('cambiarLayout', 'LayoutPruebas')"
                    />
                    <btn-base
                    titulo="Anterior"
                    :colorFondo="color2"
                    class="btn-cancelar"
                    @click="$emit('cambiarLayout', 'LayoutDemanda')"
                    />
                </div>
                <!--END BUTTONS-->

            </form>
            <!--END FORMULARIO-->

            <!--ESPACIADOR-->
            <espaciador-base 
            :ancho="100" 
            :alto="48"
            />
            <!--END ESPACIADOR-->
        </div>
        <!--END ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->
</template>

<script>

    import LineaTiempo from '../../common/LineaTiempo.vue'
    import InptSelecBase from '../../formulario/InptSelecBase.vue'
    import BtnBase from '../../formulario/BtnBase.vue'
    import EspaciadorBase from '../../common/EspaciadorBase.vue'
    import SelecMultiple from '@/components/formulario/SelecMultiple.vue'

    export default {
        name: 'LayoutResponsables',
        components: {
            LineaTiempo,
            InptSelecBase, 
            BtnBase,
            EspaciadorBase,
            SelecMultiple
        },
        data() {
            return {

                listaParametros: [
                    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#28A745', texto: 'Responsables', opacidad: '1', borde: '1px solid #28A745!important'},
                    { color: '', texto: 'Pruebas', opacidad: '', borde: ''},
                    { color: '', texto: 'Firmar escrito', opacidad: '', borde: ''},

                ],
                options: [
                    { label: 'Otro', value: 'otro' },
                    { label: 'Consejo Distrital', value: 'consejoDistrital' },
                    { label: 'Consejo Municipal', value: 'consejoMunicipal' },
                    { label: 'Diputación', value: 'diputacion' },
                    { label: 'Legislatura', value: 'legislatura' },
                    { label: 'Órgano de Ayuntamiento', value: 'organoAyuntamiento' },
                    { label: 'Organismo Público Local Electoral', value: 'organismoPublicoLocalElectoral' },
                    { label: 'Partido político', value: 'partidoPolitico' },
                    { label: 'Poder Ejecutivo', value: 'poderEjecutivo' },
                    { label: 'Presidencia Municipal', value: 'Presidencia Municipal' }

                ],
                selectedOptions: [],
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
            selectedOptiones: '',
            EntidadFederativa: '',
            }
                
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


</style>
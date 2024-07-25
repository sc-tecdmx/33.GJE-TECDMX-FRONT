<template>
    <!--LAYOUT-->
   <div class="container">
        <!--ROW-->
        <div class="row">

            <div class="col-md-6">
                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-t-base 
                    type="text"
                    lbl="Nombres"
                    v-model="nombres"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->
            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-t-base 
                    type="text"
                    lbl="Apellido paterno"
                    v-model="apellidoP"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

        </div>
        <!--END ROW DIVIDE EN DOS COLUMNAS -->

        <!--ROW-->
        <div class="row">

            <div class="col-md-6">
                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-t-base 
                    type="text"
                    lbl="Apellido materno"
                    v-model="apellidoM"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-t-base 
                    type="date"
                    lbl="Fecha de nacimiento"
                    v-model="fechaNac"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

        </div>
        <!--END ROW DIVIDE EN DOS COLUMNAS-->

        <!--ROW-->
        <div class="row">

            <div class="col-md-6">
                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-selec-base 
                    lbl="Genero"
                    v-model="genero"
                    :opciones="opcion"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group mt-0">
                    <inpt-t-base 
                    type="text"
                    lbl="Teléfono"
                    v-model="tel"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

        </div>
        <!--END ROW DIVIDE EN DOS COLUMNAS -->

        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="48"
        />
        <!--END ESPACIADOR-->

   </div>
   <!--END CONTAINER-->
               
</template>

<script>

    import InptTBase from '@/components/formulario/InptTBase.vue';
    import InptSelecBase from '@/components/formulario/InptSelecBase.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    export default {
        name: 'LayoutUserRegistro',
        components: {
            InptTBase,
            InptSelecBase,
            EspaciadorBase 
        },
        data() {
            return {
                genero: '',
                opcion: [
                {value: 'Hombre', label: 'Hombre' },
                {value: 'Mujer', label: 'Mujer' },
                {value: 'Otro', label: 'Otro' }

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
          
            }
        },
      
    }
</script>

<style lang="scss" scoped>

.btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }


</style>
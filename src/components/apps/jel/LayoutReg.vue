<template>
    <div class="container">

        <!--ROW-->
        <div class="row">

            <div class="col-md-6">
                <!--INPUT-->
                <div class="form-group">
                    <inpt-t-base 
                    type="text"
                    lbl="Calle y número"
                    v-model="calle"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group">
                    <inpt-t-base 
                    type="text"
                    lbl="Colonia"
                    v-model="colonia"
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
                <div class="form-group">
                    <inpt-t-base 
                    type="text"
                    lbl="Código postal"
                    v-model="cp"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group">
                    <inpt-t-base 
                    type="text"
                    lbl="Ciudad"
                    v-model="ciudad"
                    class="form-control form-control-sm"
                    />
                </div>
                <!--END INPUT-->

            </div>

        </div>
        <!--END ROW DIVIDE EN DOS COLUMNAS -->

        <!--SELECT-->
        <div class="form-group ">
            <inpt-selec-base 
            lbl="Entidad federativa"
            v-model="entidadFederativa"
            :opciones="entidad"
            class="form-control form-control-sm"
            />
        </div>
        <!--END SELECT-->

        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="32"
        />
        <!--END ESPACIADOR-->

    </div>
    <!--END CONTAINER-->
</template>

<script setup lang="ts">

    import InptTBase from '@/components/formulario/InptTBase.vue';
    import InptSelecBase from '@/components/formulario/InptSelecBase.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    
</script>

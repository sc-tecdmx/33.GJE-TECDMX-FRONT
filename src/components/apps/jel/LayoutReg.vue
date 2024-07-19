<template>
    <div class="container">

        <!--ROW-->
        <div class="row">

            <div class="col-md-6">
                <!--INPUT-->
                <div class="form-group mt-2">
                    <inpt-t-base 
                    type="text"
                    lbl="Calle y número"
                    v-model="calle"
                    class="form-control"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group mt-2">
                    <inpt-t-base 
                    type="text"
                    lbl="Colonia"
                    v-model="colonia"
                    class="form-control"
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
                <div class="form-group mt-2">
                    <inpt-t-base 
                    type="text"
                    lbl="Código postal"
                    v-model="cp"
                    class="form-control"
                    />
                </div>
                <!--END INPUT-->

            </div>

            <div class="col-md-6">

                <!--INPUT-->
                <div class="form-group mt-2">
                    <inpt-t-base 
                    type="text"
                    lbl="Ciudad"
                    v-model="ciudad"
                    class="form-control"
                    />
                </div>
                <!--END INPUT-->

            </div>

        </div>
        <!--END ROW DIVIDE EN DOS COLUMNAS -->

        <!--SELECT-->
        <div class="form-group mt-3">
            <inpt-selec-base 
            lbl="Entidad federativa"
            v-model="entidadFederativa"
            :opciones="entidad"
            />
        </div>
        <!--END SELECT-->

        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="48"
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

<style lang="scss" scoped>

</style>
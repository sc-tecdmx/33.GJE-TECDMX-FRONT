<template>
    <!--LAYOUT-->
    <div class="layout">
    
        <!--MENÚ LAYOUT-->
        <menu-layout />
        <!--END MENÚ LAYOUT-->
            
        <!--INPUT BUSQUEDA-->
        <div class="row ">
            <div class="col-md-7 col-sm-12 mt-3">

                <inpt-selec-base 
                lbl="Mostrar registros"
                v-model="recordLimit" 
                :opciones="limitOptions"
                class="w-25 form-control form-control-sm"
                />

            </div>

            <div class="col-md-5 col-sm-12 d-flex justify-content-end align-items-end ">
                <form action="" class="d-flex justify-content-end align-items-end ">
                    <div class=" w-75 d-flex justify-content-end align-items-end ">
                        <inpt-t-base 
                        type="text"
                        lbl=""
                        v-model="archivo"
                        class="form-control form-control-sm w-100"
                        placeholder="Buscar"
                        />
                    </div>
                    <div class="w-25 d-flex justify-content-end ">
                        <btn-base
                        titulo="Buscar"
                        class="btn-guardar position-relative ms-5"
                        @click="$emit('cambiarLayout', '')"
                        />
                    </div>
                    
                </form>
            </div>
        </div>
        <!--END INPUT BUSQUEDA-->

        <!--ROW CONTENIDO-->
        <div class="row mt-1 p-2 rounded principal">
                
            <!--TABLE-->
            <tabla-principal 
            :headers="tableHeaders" 
            :data="tableData"
            :limit="recordLimit"
            />
            <!--END TABLE-->

        </div>
        <!--End ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->

</template>

<script setup lang="ts">

    import { ref, watch } from 'vue';
    import InptSelecBase from '@/components/formulario/InptSelecBase.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue';
    import BtnBase from '@/components/formulario/BtnBase.vue';
    import TablaPrincipal from './TablaPrincipal.vue';
    import MenuLayout from './MenuLayout.vue';

    // DEFINIR LOS TIPOS DE DATO PARA LA TABLE
    interface TableDataItem {
    li: string;
    icon: string;
    url: string;
    texto: string;
    }

    // DEDIFINIR DATOS DEL HEADER TABE
    const tableHeaders = ref<string[]>([
    'Fecha de envío',
    'Fecha de lectura',
    'Remitente',
    'Asunto',
    'Estatus',
    'Acuerdo',
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
    ['25/07/2024', '25/07/2024', 'Lorem ipsum dolor sit amet...', 'En pausa', 'Recurso de revisión', 'Legislatura' ],
    ['25/07/2024', '25/07/2024', 'Lorem ipsum dolor sit amet...', 'En pausa', 'Recurso de revisión', 'Legislatura' ],
    // MÁS DATOS
    ]);

    const recordLimit = ref<number>(3); 
    const limitOptions = ref<{ value: number; label: string }[]>([
    { value: 3, label: '3' },
    { value: 5, label: '5' },
    { value: 10, label: '10' }
    ]);

    // FUNCIÓN DE ACCIÓN AL BOTÓN
    function someAction() {
    console.log('Button clicked!');
    }

    // OBSERVAR CAMBIOS DE LOS DATOS
    watch(() => tableData.value, (newValue) => {
    console.log('Table data changed:', newValue);
    });

</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    form {
        width:100%;
    }

        .btn-guardar {
        background: $btn-guardar;
        top: 20px;
        margin-left: 18px;
    }
</style>
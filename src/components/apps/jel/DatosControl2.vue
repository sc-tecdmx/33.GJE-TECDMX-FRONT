<template>
    <div class="container-fluid w-100  mt-5">
         
            <!--TABLE-->
            <tabla-control-acceso 
            :headers="tableHeaders" 
            :data="tableData"
            :limit="recordLimit"
            class="w-75"
           />
           <!--END TABLE-->

           <!--BUTTON-->
           <div class="container h-25 float-start mt-4 contenedor-button">
                <btn-base
                titulo="Agregar Submódulo"
                class="btn-guardar"
                @click="$emit('open-modal', 'ModalControlUsuario3')"
                />
                <btn-base
                titulo="Agregar módulo"
                class="btn-cancelar"
                @click="$emit('open-modal', 'ModalControlUsuario2')"
                />
           </div>
           <!--END BUTTON-->

          <!--ESPACIADOR-->
          <espaciador-base 
          :ancho="100" 
          :alto="50"
          class="bgprimary"
          />
          <!--END ESPACIADOR-->
</div>
</template>

<script setup lang="ts">

    import BtnBase from '@/components/formulario/BtnBase.vue';
    import TablaControlAcceso from './TablaControlAcceso.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

     // DEFINIR TIPOS DE DATOS
     interface TableDataItem {
      li: string;
      icon: string;
      url: string;
      texto: string;
    }

    // DEFIIR DATOS DEL HEADER DE LA TABLA
    const tableHeaders = ref<string[]>([
      'Apliación',
      'Módulo',
      'Submódulo',
      'Pantalla',
    ]);

    //DEFINIR LOS DATOS DE LA TABLA
    const tableData = ref<(number | string | TableDataItem)[][]>([
      ['Juicio en línea', 'Juicio en línea público', '', ''],
      // MÁS REGISTROS...
    ]);

    const emit = defineEmits(['open-modal']);
    function openModal() {
    emit('open-modal');
    }

</script>

<style lang="scss" scoped>

@import "../../../assets/tecdmx/sass/jel/_var.scss";
    .btn-guardar {
        background: $btn-guardar;
        box-shadow: none;
    }
    .btn-cancelar {
        margin-right: $margin-sm;
        box-shadow: none;
        background: $btn-secondary;
    }
    .contenedor-button {
      width: 96%;
    }
</style>
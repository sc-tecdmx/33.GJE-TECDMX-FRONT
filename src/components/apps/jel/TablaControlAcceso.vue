<template>
  <!--CONTENEDOR DE TABLE-->
  <div class="table-responsive-xxl mt-1 rounded table-container p-4">

      <!--TABLE-->
      <table  class="table table-striped table-hover p-0 border-0 table-container__style-table">
          <!--THEAD-->
          <thead >
              <tr>
                  <th v-for="(header, index) in headers" :key="index" class="col2 align-middle text-center fw-light table-container__style-table__th">{{ header }}</th>
              </tr>
          </thead>
          <!--END THEAD-->

          <!--TBODY-->
          <tbody>
              <!--<tr v-for="(row, rowIndex) in data" :key="rowIndex">-->
                  <tr v-for="(row, rowIndex) in visibleData" :key="rowIndex">
                  <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="align-middle text-center fe-normal table-container__style-table__td">
                      <span v-if="cell.icon && cell.url && cell.texto  && cell.li">
                          <lista-menu 
                      :liClass="cell.li"
                      :rutaName="cell.url"
                      :iconClass="cell.icon"
                      :texto="cell.texto"
                      />
                      </span>
                      <span  v-else-if="cell.icon">
                        <icon-base
                        :iconClass="cell.icon"
                        />
                      </span>
                      <span v-else>{{ cell }}</span>
                  </td>
              </tr>
          </tbody>
          <!--END TBODY-->

      </table>
      <!--END TABLE-->

  </div>
  <!--END CONTENEDOR DE TABLE-->
</template>

<script setup lang="ts">

  import { defineProps, computed } from 'vue';
  import ListaMenu from '../../common/ListaMenu.vue';
  import IconBase from '@/components/common/IconBase.vue';

  //DEFINIR TIPO DE DATOS
  interface Props {
  headers: string[];
  data: any[][];
  limit: number;
  }

  
  const props = defineProps<Props>();

  const visibleData = computed(() => {
  return props.data.slice(0, props.limit);
  });

</script>

<style lang="scss" scoped>

  @import "../../../assets/tecdmx/sass/jel/var";

    .table-container {
         width: 95%!important;
         border: $border-color $border-width $border-style;
     &__style-table {
         border: $border-color $border-width $border-style;
         border-radius: 10px;
      &__th {
          font-size: $td!important;
          border: none;
      }
      &__th:first-of-type {
          border-radius: 10px 0px 0px 0px;
          width: $w-sm!important;
      }
      &__th:nth-of-type(2) {
          width: $w-md;
      }
      &__th:nth-last-of-type(3){
          width: $w-md-l!important;
      }
      &__th:last-of-type {
          border-radius: 0px 10px 0px 0px;
          width: $w-sm!important;
      }
      &__td {
          color: $bg-dark!important;
          font-size: $thead!important;
          border: none;
          border-bottom: $border-color $border-width $border-style;
      }
      &__td:first-of-type {
          width: $w-md!important;
      }
      &__td:nth-of-type(2) {
          width: $w-md;
      }
      &__td:nth-last-of-type(3){
          width: $w-md!important;
      }
      &__td:last-of-type {
          width: $w-md!important;
      }
  }

}
  
</style>
<template>
    <table class="table table-striped table-hover p-0 border-0 table-container__style-table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index" class="col2 align-middle text-center fw-light table-container__style-table__th">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in visibleData" :key="rowIndex" @click="handleRowClick(row)">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="align-middle text-center fe-normal table-container__style-table__td">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface Props {
    headers: string[];
    data: (string | { text: string })[][];
    limit: number;
  }
  
  const props = defineProps<Props>();
  const router = useRouter();
  
  const visibleData = computed(() => {
    return props.data.slice(0, props.limit);
  });
  
  function handleRowClick(row: (string | { text: string })[]) {
    // Aquí podrías definir una lógica específica para manejar clics en filas,
    // como verificar un valor en una celda para navegar a una ruta específica.
    // Ejemplo: Asumir que la última celda contiene una URL.
    const lastCell = row[row.length - 1];
    if (typeof lastCell === 'string') {
      router.push(lastCell);
    }
  }
  </script>
  
  <style scoped>
  /* Agrega tus estilos aquí */
  </style>
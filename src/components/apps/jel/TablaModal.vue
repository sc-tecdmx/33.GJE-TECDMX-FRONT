<!-- TableComponent.vue -->
<template>
    <div>
      <button class="btn btn-primary" @click="showModal">Agregar Registro</button>
      <table class="table mt-3">
        <thead>
          <tr>
            <th>Aplicación</th>
            <th>Módulo</th>
            <th>Submódulo</th>
            <th>Ventana</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.app }}</td>
            <td>{{ item.mod }}</td>
            <td>{{ item.sub }}</td>
            <td>{{ item.ven }}</td>
          </tr>
        </tbody>
      </table>
        <modal-tabla

        :show="isModalVisible"
        :title="'Agregar Nuevo Registro'"
        :inputs="modalInputs"
        @close="hideModal"
        @save="addItem"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ModalTabla from '@/components/common/ModalTabla.vue';
  
  interface Item {
    id: number;

    app: String,
    mod: String,
    sub: String,
    ven: String
  }
  
  const items = ref<Item[]>([]);
  const isModalVisible = ref(false);
  
  const showModal = () => {
    isModalVisible.value = true;
  };
  
  const hideModal = () => {
    isModalVisible.value = false;
  };
  
  const addItem = (newItem: any) => {
    items.value.push({
      id: Date.now(), // Un ID único
      app: newItem.app,
      mod: newItem.mod,
      sub: newItem.sub,
      ven: newItem.ven
    });
    hideModal();
  };
  
  const modalInputs = ref([
    { id: 'app', type: 'text', label: 'Aplicación', model: 'app' },
    { id: 'mod', type: 'text', label: 'Módulo', model: 'mod' },
    { id: 'sub', type: 'text', label: 'Submódulo', model: 'sub' },
    { id: 'ven', type: 'text', label: 'Ventana', model: 'ven' }
  ]);
  </script>
<template>
    <div>
        <h1>Temática</h1>
        <TematicaForm :initialValues="currentTematica" :isEditing="isEditing" @submit="handleFormSubmit" />
        <TematicaList :tematicas="tematicas" @edit="editTematica" @remove="removerTematica" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TematicaForm from './TematicaFormView.vue';
import TematicaList from './TematicaListView.vue';

const tematicas = ref([]);
const currentTematica = ref({ s_tematica: '' });
const isEditing = ref(false);

const handleFormSubmit = (tematica) => {
    if (isEditing.value) {
        const index = tematicas.value.findIndex((t) => t.id === currentTematica.value.id);
        tematicas.value[index] = { ...tematica, id: currentTodo.value.id };
        isEditing.value = false;
    } else {
        tematicas.value.push({ ...tematica, id: Date.now() });
    }
    currentTematica.value = { s_tematica: '' };
}

const editTematica = (tematica) => {
    currentTematica.value = { ...tematica }
    isEditing.value = true;
}

const removerTematica = (id) => {
    tematicas.value = tematicas.value.filter((tematica) => tematica.id !== id)
}

</script>
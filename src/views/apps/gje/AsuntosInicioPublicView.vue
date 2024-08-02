<template>
    <div class="container">
        <!-- .\Breadcrum -->
        <div class="row mt-2 mb-2 " style="">
            <div class="col-md-11">
                <Breadcrumb/>
            </div>
        </div>
        <!-- ./Breadcrum -->

        <!-- .\Titulo y botón buscar   -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="d-flex justify-content-between items-center">
                <h2 class="encabezado">Asuntos</h2>
                <div class="d-flex justify-end items-center bd-highlight mb-3">
                    <div class="ml-3 p-2">
                        <input v-model="params.search" type="text" class="form-control inpt-form"
                            placeholder="Expediente, parte actora o ponencia instructora." />
                    </div>
                    <div class="ml-3 p-2">
                        <button type="button" class="btn btn-primary"
                            style="height: 100%; width: 140px;">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
        <!--./Titulo y botón buscar  -->

        <!-- .\Datatable -->
        <div class="d-flex flex-column mb-3 tabla-container">
            <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows"
                :isServerMode="false" :pagination="true" :pageSize="params.pagesize" :search="params.search"
                noDataContent="Aún no se han agregado registros."
                class="table-date"
                paginationInfo="Mostrando {0} a {1} asuntos de {2} en total">
                <template #ver="data">
                    <router-link :to="{ path: '/gje/ficha-tecnica/' + data.value.n_id_medio_impugnacion }">Ver
                        asunto</router-link>
                </template>
            </vue3-datatable>
        </div>
        <!-- ./Datatable -->
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';

import IconHome from '@/assets/svg/IconHome.vue'
import { crudApiService }  from '@/core/services/axios/CrudApiService'
import type { TCrud } from '@/core/types/gje/crud.t';

import Breadcrumb from "@/components/layout/Breadcrumb.vue";

const loading: any = ref(true);
const total_rows = ref(0);

const params = reactive({
    current_page: 1,
    pagesize: 50,
    search: '',
    column_filters: [],
});
const rows: any = ref(null);


const cols =
    ref([
        { field: 's_expediente', title: 'Asunto', isUnique: true, type: 'string' },
        { field: 's_parte_actora', title: 'Parte actora' },
        { field: 's_magistrado', title: 'Ponencia Instructora' },
        { field: 'ver', title: '', sort: false },
    ]) || [];

onMounted(() => {
    getMedios();
});

let controller: any;
const getMedios = async () => {
    // {{api-asuntos}}/api/gje/medio/s_publicacion/Publicar
    let catalogo = 'medio/s_publicacion/Publicar';
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        loading.value = true;

        const response = await crudApiService().getAll<TCrud>(catalogo);
        const data = await response?.data;

        rows.value = data;
        total_rows.value = data?.length;
    } catch ( error ) {
        console.log(error)
    }
    loading.value = false;
};
</script>

<style scoped>
.container {
    max-width: 85%;
    max-height: 80%;
    margin: auto;
    background: #FFFFFF;
    padding: 20px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
}

.encabezado {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #002466;
}

.inpt-form {
    border: 2px solid #002466;
}

.inpt-form:focus {
    border-color: #0A2241;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}

.containter-titulo {
    font-family: Arial, sans-serif;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
}

.advanced-table .progress-bar {
    width: 80%;
    min-width: 120px;
    height: 8px;
    background-color: #ebedf2;
    border-radius: 9999px;
    display: flex;
}

.advanced-table .progress-line {
    height: 8px;
    border-radius: 9999px;
}

.tabla-container {
    border: 2px solid #002466;
    border-radius: 14px;
    margin-bottom: 498px;
}

.table-date {
    border-radius: 304px;
    padding: 10px;
}

.table-date a {
    color: #3E7DE6;
    text-decoration: underline;
}

table thead {
    background: pink !important;
}

.bh-table-responsive {
    border-radius: 40px !important;
}

table .bh-table-responsive>.bh-table-hover {
    background: red !important;
    padding: 40px;
}
</style>
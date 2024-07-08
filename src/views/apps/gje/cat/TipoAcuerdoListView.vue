<template>
    <div class="container">
        <div class="d-flex flex-column bd-highlight mb-3 border border-4">

            <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows"
                :isServerMode="false" :pagination="true" :pageSize="params.pagesize" :search="params.search"
                noDataContent="Aún no se han agregado registros."
                paginationInfo="Mostrando {0} a {1} tipos de acuerdo de {2} en total" @change="changeServer">
                <template #userId="data">
                    <strong class="text-info">#{{ data.value.id }}</strong>
                </template>
                <template #ver="data">
                    <router-link :to="{ name: 'tipo-acuerdo-editar', params: { n_id_tipo_acuerdo: '1' } }"><a>
                            Editar</a></router-link>
                </template>
                <template #age>
                    <div class="progress-bar">
                        <div class="progress-line"
                            :style="`width:${getRandomNumber(15, 100)}%; background-color:${randomColor()}`"></div>
                    </div>
                </template>
            </vue3-datatable>
        </div>
    </div>
</template>
<script setup lang="ts">
console.log('TipoAcuerdoList.vue')
import { reactive, onMounted, ref } from 'vue';
import Vue3Datatable from '@bhplugin/vue3-datatable';
import { useRouter } from 'vue-router';
import TipoAcuedoService from '@/core/services/gje/tipo-acuerdo.service';
const router = useRouter();

/*--- Data Table */
const params = reactive({
    current_page: 1,
    pagesize: 10,
    //  search: '',
    column_filters: [],
});

const total_rows = ref(0);
const cols =
    ref([
        { field: 'n_id_tipo_acuerdo', title: '#', isUnique: true, type: 'number' },
        { field: 's_tipo_acuerdo', title: 'Tipo de acuerdo' },
        { field: 'ver', title: '', sort: false },
    ]) || [];
const rows: any = ref(null);

const loading: any = ref(true);
let controller: any;

onMounted(() => {
    getTiposDeAcuerdo();
});

const getTiposDeAcuerdo = async () => {
    let urlApiAsuntos = import.meta.env.VITE_API_GJE + "/api/gje/cat/tipo-acuerdo";
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;
        loading.value = true;

        const response = await fetch(urlApiAsuntos, {
            method: 'GET',
            //   body: JSON.stringify(params),
            signal: signal, // Assign the signal to the fetch request
        });
        const data = await response.json();
        console.log(data)
        rows.value = data.data;
        total_rows.value = 10;
    } catch (error) {
        console.log(error)
    }
    loading.value = false;
}


/** Funciones a borrar */
const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const changeServer = (data: any) => {
    console.log("Change Server")
    params.current_page = data.current_page;
    params.pagesize = data.pagesize;
    params.column_filters = data.column_filters;
    params.search = data.search;

    if (data.change_type === 'search') {
        //  filterUsers();
    } else {
        //  getUsers();
    }
}

</script>
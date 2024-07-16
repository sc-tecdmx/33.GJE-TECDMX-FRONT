<template>
    <div class="container">
        <!-- .\Breadcrum -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="col-md-11">
                <div class="panel-body">
                    <nav class="breadcrumb-one" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="https://www.tecdmx.org.mx">
                                    <IconHome />
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="/gje/">Gestión Judicial Electoral</a></li>
                            <li class="breadcrumb-item active">Asuntos en trámite.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->


        <!-- .\Titulo y botón buscar   -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="d-flex justify-content-between items-center">
                <h2 class="encabezado">Asuntos en Trámite</h2>
                <div class="d-flex justify-end items-center bd-highlight mb-3">
                    <div class="ml-3 p-2">
                        <input v-model="params.search" type="text" class="form-control inpt-form" placeholder="Buscar..." />
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
        <div class="d-flex flex-column mb-3 table-datos">
            <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows"
                :isServerMode="false" :pagination="true" :pageSize="params.pagesize" :search="params.search" class="table-date"
                noDataContent="Aún no se han agregado registros."
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
import { useRouter } from 'vue-router';



const router = useRouter();
const loading: any = ref(true);
const total_rows = ref(0);

const params = reactive({
    current_page: 1,
    pagesize: 20,
    search: '',
    column_filters: [],
});
const rows: any = ref(null);
let dataUrl: string = '';

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
    let urlApiMedios = import.meta.env.VITE_API_GJE + "/api/gje/medio";
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;
        loading.value = true;
        const response = await fetch(urlApiMedios, {
            method: 'GET',
            signal: signal,
        });
        const data = await response.json();
        rows.value = data.data;
        total_rows.value = data.data?.length;
    } catch (error) {
        console.log(error)
    }
    loading.value = false;
};
</script>

<style scoped>
.container {
    max-width: 75%;
    max-height: 80%;
    margin: auto;
    background: #FFFFFF;
    padding: 20px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
}

.header {
    background: #0A2241;
    color: white;
    padding: 15px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.encabezado {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #002466;
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
.table-datos {
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

table thead{
    background: pink!important;
}
.bh-table-responsive {
    border-radius: 40px!important;
}
table .bh-table-responsive>.bh-table-hover {
    background: red!important;
    padding: 40px;
}
</style>
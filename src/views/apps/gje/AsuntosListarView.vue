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
                        <input v-model="params.search" type="text" class="form-control" placeholder="Expediente, parte actora o ponencia instructora." />
                    </div>
                    <div class="ml-3 p-2">
                        <button type="button" class="btn btn-primary"
                            style="height: 100%; width: 140px;">Buscar</button>
                    </div>
                    <div class="ml-3 p-2">
                        <button @click="agregarAsunto" class="btn btn-secundary"
                            style="height: 100%; width: 140px;">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
        <!--./Titulo y botón buscar  -->
        <!-- .\Datatable -->
        <div class="d-flex flex-column  tabla-container">
            <vue3-datatable :rows="rows" :columns="cols" :loading="loading" :totalRows="total_rows"
                :isServerMode="false" :pagination="true" :pageSize="params.pagesize" :search="params.search"
                noDataContent="Aún no se han agregado registros."
                class="table-date"
                paginationInfo="Mostrando {0} a {1} asuntos de {2} en total">

                <template #ver="data">
                    <router-link
                        :to="{ path: '/gje/admin/editar/' + data.value.n_id_medio_impugnacion }"><a>Editar</a></router-link>
                </template>
            </vue3-datatable>
        </div>
        <!-- ./Datatable -->
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import Vue3Datatable from "@bhplugin/vue3-datatable";
import '@bhplugin/vue3-datatable/dist/style.css';
import Breadcrumb from "@/components/layout/Breadcrumb.vue";

import { useAuthAzure } from '@/core/composables/useAuthAzure'
const { state } = useAuthAzure()

import IconHome from '@/assets/svg/IconHome.vue'
import { crudApiService } from '@/core/services/axios/CrudApiService'
import type { TCrud } from '@/core/types/gje/crud.t'

import { useRouter } from 'vue-router';
const router = useRouter();

const loading: any = ref(true);
const total_rows = ref(0);

const params = reactive({
    current_page: 1,
    pagesize: 30,
    search: '',
    column_filters: [],
});
const rows: any = ref(null);

const cols =
    ref([
        { field: 's_expediente', title: 'Asunto', isUnique: true, type: 'string' },
        { field: 's_parte_actora', title: 'Parte actora' },
        { field: 's_magistrado', title: 'Ponencia instructora' },
        { field: 's_publicacion', title: 'Estatus' },
        { field: 'ver', title: '', sort: false },
    ]) || [];

onMounted(async () => {
    getMedios();
});

let controller: any;

const getMedios = async () => {
    //-- TODO. Ugly get medios, i need correct.
    console.log('----- getMedios(1):')
    console.log('----- PERFIL--> ' + state?.perfil)
    console.log('----- USUARIO-> ' + state?.user)
    console.log(state)
    console.log('----- ' + state?.ponencia)

    let catalogo =''; //ok 'medio/s_email_autor/' + state?.user?.username;
    if ( state?.perfil ==='PRESIDENCIA' || state?.perfil === 'USI'){
        catalogo = 'medio';
    }
    if ( state?.ponencia =='AAH'){ /* n_id_ponencia_instructora = 1 */
        catalogo = 'medio/n_id_ponencia_instructora/1';
    }
    if ( state?.ponencia =='JCSL'){/* n_id_ponencia_instructora = 2 */
        catalogo = 'medio/n_id_ponencia_instructora/2';
    }
    if ( state?.ponencia =='OVR'){ /* n_id_ponencia_instructora = 3 */
        catalogo = 'medio/n_id_ponencia_instructora/3';
    }
    if ( state?.ponencia =='MAGM'){/* n_id_ponencia_instructora = 4 */
        catalogo = 'medio/n_id_ponencia_instructora/4';
    }
    
    console.log('getMedios(2):' + catalogo)
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        loading.value = true;

        const response = await crudApiService().getAll<TCrud>(catalogo);
        const data = await response?.data;
        console.log('getMedios(3):')
        console.log(data)

        rows.value = data;
        total_rows.value = data.data?.length;
    } catch ( error ) { 
        console.log(error)
    }
    loading.value = false;
};

const agregarAsunto = () => {
    console.log('agregarAsunto');
    router.push({ name: 'sge-admin-agregar' });
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

.header {
    background: #0A2241;
    color: white;
    padding: 15px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-control {
    border-color: #002466;

}

.form-control:focus {
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
</style>
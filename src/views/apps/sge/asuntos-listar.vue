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
                                    <IconHome/>
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="/gje/">Gestión Judicial Electoral</a></li>
                            <li class="breadcrumb-item"><a href="/gje/admin">Admin</a></li>
                            <li class="breadcrumb-item active">Seguimiento de Expediente.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
         <!--
            <div class="flex items-center justify-between mb-5">
        -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="d-flex justify-content-between items-center">
                <h2 class="encabezado">Asuntos en Trámite</h2>
                <div class="d-flex justify-end items-center bd-highlight mb-3">
                    <div class="ml-3 p-2">
                        <input v-model="params.search" type="text" class="form-control" placeholder="Buscar..." />
                    </div>
                    <div class="ml-3 p-2">
                        <button type="button" class="btn btn-primary" style="height: 100%; width: 140px;">Buscar</button>
                    </div>
                    <div class="ml-3 p-2">
                        <button @click="agregarAsunto" class="btn btn-secundary" style="height: 100%; width: 140px;">Agregar</button>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="d-flex flex-column bd-highlight mb-3 border border-4">
        
            <vue3-datatable
                :rows="rows"
                :columns="cols"
                :loading="Cargando"
                :totalRows="total_rows"
                :isServerMode="false"
                :pagination="true"
                :pageSize="params.pagesize"
                :search="params.search"
                noDataContent="Aún no se han agregado registros."
                paginationInfo="Mostrando {0} a {1} asuntos de {2} en total"
                @change="changeServer"
            >
                <template #userId="data">
                    <strong class="text-info">#{{ data.value.id }}</strong>
                </template>
                <template #ver="data">
                    <router-link :to="{ path: '/gje/ficha-tecnica/'+ data.value.n_id_medio_impugnacion }" ><a >Ver Asunto</a></router-link>
                </template>
                <template #age>
                    <div class="progress-bar">
                        <div class="progress-line" :style="`width:${getRandomNumber(15, 100)}%; background-color:${randomColor()}`"></div>
                    </div>
                </template>
            </vue3-datatable>
        </div>
        
    </div>
</template>
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
        .form-control {
            border-color: #002466;
            
        }

        .form-control:focus {
          border-color: #0A2241;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
        }

.containter-titulo{
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
            color : #002466;
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
<script setup lang="ts">
    import {reactive,  onMounted, ref } from 'vue';
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import '@bhplugin/vue3-datatable/dist/style.css';

    import { useRouter } from 'vue-router';
    const router = useRouter(); 



    const loading: any = ref(true);
    const total_rows = ref(0);

    const params = reactive({
        current_page: 1,
        pagesize: 5,
        search: '',
        column_filters: [],
    });
    const rows: any = ref(null);

    const cols =
        ref([
            { field: 's_expediente', title: 'Asunto', isUnique: true, type: 'string' },
            /* { field: 'n_id_medio_impugnacion', title: 'id' }, */
            { field: 's_jel_parte_actora', title: 'Parte actora' },
            { field: 's_tmp_ponencia_instructora', title: 'Ponencia Instructora' },
            { field: 'ver', title: '', sort: false },
        ]) || [];

            //---------| Style
        import IconHome             from '@/assets/svg/IconHome.vue'


        const color = ref('#000000');
        const styleObject = reactive({
        styles: {
            border: '.3rem solid goldenrod',
        },
        });
    //---------

    onMounted(() => {
        getUsers();
    });

    let controller: any;
    let timer: any;
    const filterUsers = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            getUsers();
        }, 300);
    };
    const getUsers = async () => {

        let urlApiAsuntos = import.meta.env.VITE_API_ASUNTOS + "/api/gje/asuntos";
        console.log('urlApiAsuntos:', urlApiAsuntos);
        try {
            // cancel request if previous request still pending before next request fire
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
            console.log(data);

            rows.value = data.data;
//            console.log(rows.value);
            total_rows.value = 5;  // data?.meta?.total;
        } catch {}

        loading.value = false;
  
    };
    const changeServer = (data: any) => {
        params.current_page = data.current_page;
        params.pagesize = data.pagesize;
        params.column_filters = data.column_filters;
        params.search = data.search;

        if (data.change_type === 'search') {
            filterUsers();
        } else {
            getUsers();
        }
    };

    const randomColor = () => {
        const color = ['#5367ff', '#0dcaf0', '#00d09c', '#ff585d', '#ffb61b', '#1da1f2'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    };
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const agregarAsunto= () => {
        console.log('agregarAsunto');
        router.push({ name: 'sge-admin-agregar' });
    };
</script>
<template>
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
                        <li class="breadcrumb-item active">Seguimiento de Expediente</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- ./Breadcrum -->


    <div class="layout-px-spacing apps-invoice-list">

        <!-- .\ Breadcrum template en sub-navbar-->
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Gestión Judicial
                                        Electoral</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>
        <!-- ./Breadcrum template en sub-navbar-->

        <div class="row layout-top-spacing">

            <div class="row mb-2 mt-4 ms-2" style="">
                <div class="col-md-11">
                    <h3 class="fw-bolder">Seguimiento de asuntos.</h3>
                </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <!--- .\Tabla -->
                <div class="panel br-6">
                    <div class="custom-table">
                        <v-client-table :data="asuntos" :columns="columnas" :options="opciones_tabla">
                           
                            <template #expediente="props">
                                <router-link to="{name:'gje-ficha-tecnica', params:{expediente: props.row.expediente} }">
                                    <span class="inv-number">{{ props.row.expediente }}</span>
                                </router-link>
                            </template>
                            
                            <template #avance="props">
                                <!-- <span class="badge inv-status" :class="'badge-' + props.row.avance.class">{{ props.row.avance.key }}</span> -->
                                <div class="panel-body">
                                    <div class="progress progress-lg br-40" min="0">

                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
                                            class="progress-bar" style="width: {{ props.row.avance}}%">{{ props.row.avance}}</div>
                                    </div>
                                </div>

                            </template>

                        </v-client-table>
                    </div>
                </div>
                <!--- ./Tabla -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref }   from "vue";
import IconHome             from '@/assets/svg/IconHome.vue'
import IconFeatherCalendar  from '@/assets/svg/IconFeatherCalendar.vue';

import "/src/assets/ck/sass/apps/invoice-list.scss";
import "/src/assets/ck/sass/scrollspyNav.scss";
import highlight from "/src/components/plugins/highlight.vue";

import { useMeta } from "/src/composables/use-meta";
useMeta({ title: "Seguimiento de asuntos" });

const columnas = ref(["id", "expediente", "actor", "magistratura", "avance"]);
const opciones_tabla = ref({
    perPage: 10, 
    perPageValues: [5, 10, 20, 50],
    skin: "table table-hover",
    pagination: { nav: "scroll", chunk: 5 },
    texts: {
        count: "Mostrando {from} a {to} de {count}",
        filter: "",
        filterPlaceholder: "Buscar...",
        limit: "Resultados:",
    },
    resizableColumns: false,
    
    sortable: ["expediente", "actor", "magistratura", "avance"],
    sortIcon: {
        base: "sort-icon-none",
        up: "sort-icon-asc",
        down: "sort-icon-desc",
    },
    hiddenColumns: [],
});     

const asuntos =ref([]);

onMounted(() => {
    bind_data();
});

const bind_data = () => {
    asuntos.value = [
        {
            id: 1,
            expediente: "TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 2,
            expediente: "TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 3,
            expediente: "TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 4,
            expediente: "TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 5,
            expediente: "TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 6,
            expediente: "TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 7,
            expediente: "TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 8,
            expediente: "TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },

        {
            id: 9,
            expediente: "TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 10,
            expediente: "TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 11,
            expediente: "TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
        {
            id: 12,
            expediente: "TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 }
        },
    ];
};


</script>

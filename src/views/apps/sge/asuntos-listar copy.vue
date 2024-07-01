<template>
    <div class="layout-px-spacing apps-invoice-list">

        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Seguimiento de asuntos</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">

            <div class="row mb-2 mt-4 ms-2" style="">
                <div class="col-md-11">
                    <h3 class="fw-bolder">Tablero de asuntos</h3>
                </div>
            </div>

            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6">
                    <div class="custom-table">









                        <v-client-table :data="asuntos" :columns="columnas" :options="opciones_tabla">
                            <template #beforeFilter>
                                <router-link to="/sa/agregar" class="btn me-2 btn-primary"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-plus"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Agregar asunto
                                </router-link>

                                <button type="button" class="btn ml-2 btn-danger" @click="delete_row()">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-trash-2"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                    Actualizar-
                                </button>
                            </template>
                            <!-- <template #h__id>
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input variant="primary" type="checkbox" class="custom-control-input" :id="props.row.id" />
                                    <label class="custom-control-label" :for="props.row.id"></label>
                                </div>
                            </template> -->
                            <template #id="props">
                                <div class="checkbox-outline-primary custom-control custom-checkbox">
                                    <input 
                                        variant="primary"
                                        type="checkbox"
                                        class="custom-control-input"
                                        :id="'chk' + props.row.id" @change="selcted_row(props.row.id)" />
                                    <label class="custom-control-label" :for="'chk' + props.row.id"></label>
                                </div>
                            </template>
                            <template #expediente="props">
                                <router-link to="/seguimiento/invoice/preview">
                                    <span class="inv-number">{{ props.row.expediente }}</span>
                                </router-link>
                            </template>
                            <template #name="props">
                                <div class="d-flex">
                                    <div class="usr-img-frame me-2 rounded-circle">
                                        <img :src="'/src/assets/ck/images/' + props.row.thumb" class="img-fluid rounded-circle" alt="avatar" />
                                    </div>
                                    <p class="align-self-center mb-0 admin-name">{{ props.row.name }}</p>
                                </div>
                            </template>
                            <template #email="props">
                                <span class="inv-email">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-mail"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    {{ props.row.email }}
                                </span>
                            </template>
                            <template #date="props">
                                <span class="inv-date">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-calendar"
                                    >
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {{ props.row.date }}
                                </span>
                            </template>
                            <template #amount="props"> ${{ props.row.amount }} </template>
                            <template #status="props">
                                <span class="badge inv-status" :class="'badge-' + props.row.status.class">{{ props.row.status.key }}</span>
                            </template>
                            <template #actions="props">
                                <div class="mb-4 me-2 custom-dropdown dropdown btn-group">
                                    <a class="btn dropdown-toggle btn-icon-only" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            style="width: 24px; height: 24px"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="pendingTask">
                                        <li>
                                            <router-link href="javascript:void(0);" to="/apps/invoice/edit" class="dropdown-item action-edit"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-edit-3"
                                                >
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                </svg>
                                                Edit
                                            </router-link>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" @click="delete_row(props.row)" class="dropdown-item action-delete"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-trash"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import "/src/assets/ck/sass/apps/invoice-list.scss";

    import { useMeta } from "/src/composables/use-meta";
    useMeta({ title: "Seguimiento de asuntos" });

    const asuntos = ref([]);
    const columnas = ref(["id", "expediente", "actor", "magistratura", "avance"]);
    const opciones_tabla = ref({
        headings: {
            id: (h, row, index) => {
                return "#";
            },
        },
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: "table table-hover",
        columnsClasses: { actions: "actions text-center" },
        pagination: { nav: "scroll", chunk: 5 },
        texts: {
            count: "Mostrando {from} a {to} de {count}",
            filter: "",
            filterPlaceholder: "Buscar...",
            limit: "Resultados:",
        },
        resizableColumns: false,
        sortable: ["expediente", "actor", "magistratura", "status"],
        sortIcon: {
            base: "sort-icon-none",
            up: "sort-icon-asc",
            down: "sort-icon-desc",
        },
    });
    const selected_rows = ref([]);

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        
        asuntos.value = [
            { id: 1, 
            expediente:"TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 2, 
            expediente:"TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 3, 
            expediente:"TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                                        
            { id: 4, 
            expediente:"TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                    
            { id: 5, 
            expediente:"TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 6, 
            expediente:"TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 7, 
            expediente:"TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                                        
            { id: 8, 
            expediente:"TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                    

            { id: 9, 
            expediente:"TECDMX-JEL-001-2024",
            actor: "Partido Revolucionario Institucional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 10, 
            expediente:"TECDMX-JEL-002-2024",
            actor: "Partido Acción Nacional",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },
            { id: 11, 
            expediente:"TECDMX-JEL-003-2024",
            actor: "Partido de la Revolución Democrática",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                                        
            { id: 12, 
            expediente:"TECDMX-JEL-004-2024",
            actor: "Movimiento de Rgeneración Nacioal",
            magistratura: "Mgdo. Osiris Vázquez Rangel ", avance: { key: "Publicado", class: "Revisión", porcentaje: 100 } },                    
        ];
    };

    const delete_row = (item) => {
        if (confirm("Are you sure want to delete selected row ?")) {
            if (item) {
                asuntos.value = asuntos.value.filter((d) => d.id != item.id);
            } else {
                asuntos.value = asuntos.value.filter((d) => !selected_rows.value.includes(d.id));
            }
        }
    };

    //checkbox selection
    const selcted_row = (val) => {
        selected_rows.value.push(val);
        return;
    };
</script>

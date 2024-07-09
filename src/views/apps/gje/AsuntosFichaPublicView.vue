<template>
    <div class="container">
        <!-- .\Breadcrum -->
        <div class="row mt-2 mb-2 " style="">
            <div class="col-md-11">
                <div>
                    <nav aria-label="breadcrumb align-items-center">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="https://www.tecdmx.org.mx">
                                    <IconHome />
                                </a>
                            </li>
                            <li class="breadcrumb-item"><a href="/gje/">Gestión Judicial Electoral</a></li>
                            <li class="breadcrumb-item active">Ficha Técnica.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
        <!-- .\Título Formulario -->
        <div class="row mb-4 mt-4">
            <div class="d-flex  justify-content-start">
                <h2><strong>Ficha Técnica</strong></h2>
            </div>
        </div>
        <!-- ./Título Formulario -->
        <!-- .\ Ficha -->
        <div class="ficha-container">

            <!-- .\Header Expediente  -->
            <div class="header">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <h3>NÚMERO DE EXPEDIENTE</h3>
                    <h1>{{ medioImpugnacion?.value?.s_expediente }}</h1>
                </div>
                <div class="buttons">
                    <button>Descargar PDF</button>
                    <button>Imprimir</button>
                </div>
            </div>
            <!-- ./Header Expediente  -->
            <!-- .\ Expediente -->
            <div class="section">
                <!-- Renglon 1-->

                <!-- Renglon 2-->
                <div class="d-flex  flex-row  justify-content-between">
                    <div class="renglon">
                        <div class="columna">
                            <h3>Fecha de recepción</h3>
                            <p>{{ medioImpugnacion?.value?.d_fecha_recepcion }}</p>
                        </div>

                        <div class="columna">
                            <h3>Hora de recepción</h3>
                            <p>{{ medioImpugnacion?.value?.d_hora_recepcion }}</p>
                        </div>


                        <div class="columna">
                            <h3>Tipo de medio</h3>
                            <p>{{ medioImpugnacion?.value?.d_hora_recepcion }}</p>
                        </div>
                    </div>
                </div>
                <!-- Renglon 3-->
                <div class="renglon">
                    <div class="columna">
                        <h3>Acto impugnado</h3>
                        <p>{{ medioImpugnacion?.value?.s_acto_impugnado }}</p>
                    </div>
                </div>
                <div class="renglon mb-1">
                    <div class="columna-basis">

                        <h3>Tipo de acto impugnado: <br /></h3>
                        <p>{{ medioImpugnacion?.value?.s_tipo_acto_impugnado }}</p>

                    </div>
                    <div class="columna-basis">

                        <h3> Parte Actora </h3>
                        <p>{{ medioImpugnacion?.value?.s_parte_actora }}</p>


                    </div>
                    <div class="columna-basis">

                        <h3>Autoridad demandada u órgano responsable:</h3>
                        <p>{{ medioImpugnacion?.value?.s_desc_autoridad }}</p>

                    </div>
                    <div class="columna-basis">

                        <h3>Partido o persona tercera interesada</h3>
                        <p>{{ medioImpugnacion?.value?.s_tercer_interesado }}</p>

                    </div>
                </div>
            </div>
            <!-- ./ Expediente -->
            <!-- Inicio Instrucción -->
            <!-- Renglon 4-->
            <div class="section">
                <h2>Instrucción</h2>
                <div class="renglon">
                    <!-- d-flex flex-column bd-highlight mb-3-->
                    <div class="columna">
                        <h3> Turnado a:</h3>
                        <p>{{ medioImpugnacion?.value?.s_magistrado }}</p>
                    </div>
                    <div class="columna">
                        <h3>Temática:</h3>
                        <p>{{ medioImpugnacion?.value?.s_tematica }}</p>

                    </div>
                </div>
                <!-- Renglon 5-->
                <div class="renglon">

                    <table class="table  item-table">
                        <thead>
                            <tr>
                                <!-- <th class=""></th>-->
                                <th>Acuerdo</th>
                                <th class="">Fecha de acuerdo:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="acuerdo in acuerdos" :key="acuerdo.n_id_acuerdo">
                                <td class="description">
                                    <select readonly v-model="acuerdo.n_id_tipo_acuerdo" name="n_id_tipo_acuerdo"
                                        id="n_id_tipo_acuerdo">
                                        <option>Seleccione un Tipo de acuerdo</option>
                                        <option :value="tipoAcuerdo.n_id_tipo_acuerdo"
                                            v-for="tipoAcuerdo in catTiposDeAcuerdo"
                                            :key="tipoAcuerdo.n_id_tipo_acuerdo">
                                            {{ tipoAcuerdo.s_tipo_acuerdo }}
                                        </option>-
                                    </select>
                                </td>
                                <td class="rate">
                                    <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                    <p>{{ acuerdo.d_fecha_acuerdo }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 
                https://stackoverflow.com/questions/76838187/how-can-i-add-a-row-into-the-same-array
                -->

            <!-- Inicio Acuerdo Plenario -->
            <!-- Renglon 6-->
            <div class="section">
                <h2>Acuerdos plenarios</h2>
                <div class="renglon">
                    <div class="columna">
                        <h3> Fecha de resolución: </h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3>Puntos de Acuerdo:</h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3> Número de votos: </h3>
                        <p>{{}}</p>
                    </div>
                </div>

            </div>

            <!-- Inicio Acuerdo Resolución -->
            <!-- Renglon 7-->
            <div class="section">
                <h2>Resolución</h2>
                <div class="renglon">
                    <div class="columna">

                        <h3>Fecha de resolución:</h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3>Resolutivos:</h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3>Número de votos:</h3>
                        <p>{{}}</p>
                    </div>
                </div>
            </div>

            <!-- .\ Incidentes -->
            <!-- Renglon 8-->
            <div class="section">
                <h2>Incidentes</h2>
                <div class="renglon">
                    <div class="columna">
                        <h3>Fecha de resolución: </h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3> Puntos de acuerdo:</h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3> Número de votos:</h3>
                        <p>{{}}</p>
                    </div>
                    <div class="columna">
                        <h3> Sentencias </h3>
                        <p>{{}}</p>
                    </div>
                </div>
            </div>

            <!-- .\ Síntesis -->
            <!-- Renglon 9-->
            <div class="section">
                <h2>Síntesis</h2>
                <div class="renglon">

                    <div class="columna">
                        <p><strong>Síntesis:</strong> </p>
                        <p>{{ medioImpugnacion?.value?.s_sintesis }}</p>
                    </div>

                </div>
                <div class="renglon">

                    <div class="columna">
                        <p><strong>Infografía:</strong> </p>
                        <p>{{ medioImpugnacion?.value?.s_url_infografia }}</p>
                    </div>

                </div>
            </div>



            <br><br><br><br><br>
        </div>
        <!-- ./ Ficha -->

    </div>
</template>

<script setup lang="ts">

import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'

import IconHome from '@/assets/svg/IconHome.vue'

import { useHead } from '@unhead/vue';
useHead({ title: "Agregar Asunto" });

import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import CrudGjeService from '@/core/services/gje/crud-gje.service'

import type { TCrud } from '@/core/types/gje/crud.t'
import type { TMedioImpugnacion } from '@/core/types/gje/medio-impugnacion.t'


const route = useRoute();
const router = useRouter();


// import { plugin, defaultConfig } from '@formkit/vue'


let medioImpugnacion: any = reactive({});

onMounted(() => {

    loadCatTiposDeAcuerdo();

    loadAcuerdos();
    loadFormData();



});

let showRemoverAcuerdo = ref(false);

const loading: any = ref(true);
const id: any = ref(null);
let controller: any;

let catTipoMedio = ref<[{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]>();
let catTiposDeAcuerdo = ref<[{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]>()
/*
const id_tipos_de_medio = [{ label: 'Juicio Electoral', value: 'Juicio Electoral' },
{ label: 'Juicio Ciudadano', value: 'Juicio Ciudadano' },
{ label: 'Asuntos', value: 'Generales' }
];

const id_tipos_de_acuerdo = [{ label: 'Acuerdo de radicación', value: 'Acuerdo de radicación' },
{ label: 'Acuerdo dos', value: 'Acuerdo dos' },
{ label: 'Acuerdo tres', value: 'Acuerdo tres' }
];
*/

const loadCatTipoMedio = async () => {
    console.log('--.| loadCatTipoMedio--')
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('cat/tipo-medio') as TCrud;

    catTipoMedio.value = response.data as [{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]
    console.log('--./loadCatTipoMedio-1-')
    console.log(catTipoMedio.value)
    console.log('--./loadCatTipoMedio-2-')
}

const loadCatTiposDeAcuerdo = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('cat/tipo-acuerdo') as TCrud;
    catTiposDeAcuerdo.value = response.data as [{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]
    console.log('--./loadCatTiposDeAcuerdo-1-')
    console.log(catTiposDeAcuerdo.value)
    console.log('--./loadCatTiposDeAcuerdo-2-')
}

const loadFormData = async () => {
    id.value = route.params.id_medio;

    console.log('route.params')
    console.log(route.params)
    console.log('id.value')
    console.log(id.value)

    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;

        loading.value = true;
        let urlApiMedioImpugnacion = import.meta.env.VITE_API_GJE + '/api/gje/medio/' + id.value;

        const response = await fetch(urlApiMedioImpugnacion, {
            method: 'GET',
            signal: signal,
        });
        const data = await response.json();
        console.log(data)
        medioImpugnacion.value = data.data;
        console.log(medioImpugnacion.value)
        //---

        formData.n_id_medio_impugnacion = medioImpugnacion.value.n_id_medio_impugnacion
        formData.n_id_medio_impugnacion_principal = medioImpugnacion.value.n_id_medio_impugnacion_principal
        formData.s_expediente = medioImpugnacion.value.s_expediente
        formData.s_expediente_principal = medioImpugnacion.value.s_expediente_principal
        formData.s_url_sentencia_doc = medioImpugnacion.value.s_url_sentencia_doc
        formData.s_url_sentencia_pdf = medioImpugnacion.value.s_url_sentencia_pdf

        formData.d_fecha_recepcion = medioImpugnacion.value.d_fecha_recepcion
        formData.d_hora_recepcion = medioImpugnacion.value.d_hora_recepcion
        formData.n_id_tipo_medio = medioImpugnacion.value.n_id_tipo_medio
        formData.s_acto_impugnado = medioImpugnacion.value.s_acto_impugnado
        formData.s_tipo_acto_impugnado = medioImpugnacion.value.s_tipo_acto_impugnado

        console.log(formData)

    } catch (error) {
        console.log(error)
    }
    loading.value = false;
};
const formData = reactive({
    n_id_medio_impugnacion: null,
    n_id_medio_impugnacion_principal: null,
    s_expediente: '',
    s_expediente_principal: '',
    s_url_sentencia_doc: '',
    s_url_sentencia_pdf: '',

    d_fecha_recepcion: '',
    d_hora_recepcion: '',
    n_id_tipo_medio: null,
    s_acto_impugnado: '',
    s_tipo_acto_impugnado: '',

    //---
    s_parte_actora: '',
    n_id_autoridad_responsable: null,
    s_autoridad_responsable: '',
    s_tercer_interesado: '',
    n_id_ponencia_instructora: null,
    s_tematica: '',
    s_sintesis: '',
    s_url_infografia: ''

})

watch(medioImpugnacion, () => {
    formData.n_id_medio_impugnacion = medioImpugnacion.value.n_id_tipo_acuerdo
    formData.n_id_medio_impugnacion_principal = medioImpugnacion.value.n_id_medio_impugnacion_principal
    formData.s_expediente = medioImpugnacion.value.s_expediente
    formData.s_expediente_principal = medioImpugnacion.value.s_expediente_principal
    formData.s_url_sentencia_doc = medioImpugnacion.value.s_url_sentencia_doc
    formData.s_url_sentencia_pdf = medioImpugnacion.value.s_url_sentencia_pdf

    formData.d_fecha_recepcion = medioImpugnacion.value.d_fecha_recepcion
    formData.d_hora_recepcion = medioImpugnacion.value.d_hora_recepcion
    formData.n_id_tipo_medio = medioImpugnacion.value.n_id_tipo_medio
    formData.s_acto_impugnado = medioImpugnacion.value.s_acto_impugnado
    formData.s_tipo_acto_impugnado = medioImpugnacion.value.s_tipo_acto_impugnado
})

const guardando = ref(false)

const acuerdos = ref<TAcuerdo[]>([])
/*
const loadAcuerdosOld = async () => {
    acuerdos.value = [{ n_id_acuerdo: undefined, n_id_medio_impugnacion: undefined, n_id_tipo_acuerdo: 1, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' }];
    // acuerdos.value.push = [{ n_id_acuerdo: 1, n_id_medio_impugnacion: 1, n_id_tipo_acuerdo: 1, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' }];
    console.log('acuerdos')
    console.log(acuerdos)

} */

const loadAcuerdos = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('acuerdos') as TCrud;
    /*acuerdos.value = response.data as [{
        n_id_acuerdo: number, n_id_medio_impugnacion: string,
        n_id_tipo_acuerdo: number, d_fecha_acuerdo: string, s_punto_acuerdo: string,
        s_numero_votos: string, s_url_sentencia_pdf: string, s_url_sentencia_doc: string
    }]
        */

    console.log('--- id medio de impugnacion ')
    // id.value = route.params.id_medio;
    let todosAcuerdos = response.data as [TAcuerdo];

    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value);

    acuerdos.value = filtro
    console.log('--./loadCatTiposDeAcuerdo-1-')
    console.log(catTiposDeAcuerdo.value)
    console.log('--./loadCatTiposDeAcuerdo-2-')

}


const submitFormulario = async (fields) => {
    guardando.value = true;
    //  let urlApiAsuntos = import.meta.env.VITE_API_ASUNTOS + "/api/gje/asuntos";
    let urlApiMedioImpugnacion = import.meta.env.VITE_API_GJE + '/api/gje/medio/' + id.value;

    console.log('urlApiAsuntos:', urlApiMedioImpugnacion);
    console.log(JSON.stringify(fields));
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;
        let response;
        if (medioImpugnacion.value) {
            response = await fetch(urlApiMedioImpugnacion, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields),
                signal: signal, // Assign the signal to the fetch request
            });

        } else {
            response = await fetch(urlApiMedioImpugnacion, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields),
                signal: signal, // Assign the signal to the fetch request
            });
        }
        if (!response.ok) {
            console.log(response.status);
            console.log(response);
            // mostrarMensaje(`Se presentó un problema al actualizar el mapa: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('responseData');
        console.log(responseData);
        router.push({ name: 'sge-admin-listar' });

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        //    alert('Hubo un error al enviar el formulario');
    }
}

function agregarAcuerdo() {
    console.log("Agregar acuerdo")
}

function removerAcuerdo() {
    console.log("Remover acuerdo")
}

</script>
<style scoped>
/* Rev*/
.container {
    max-width: 90%;
    margin-left: 10px;
    margin-right: 20px;

    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
}

/* Sobrescribir para que reconozca width de linea */

.ficha-container {
    border: 4px solid #0A2241;
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.header {
    background: #0A2241;
    color: white;
    padding: 8px;
    border-radius: 8px 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* ml-3 text-white */

.header h1 {
    margin: 0;
    font-size: 1.5em;
    color: white;
}

.header h2 {
    margin: 0;
    color: white;
    padding: 10px;
    border-radius: 4px;
}

.header h3 {
    margin: 0;
    color: white;
    font-size: .875em;
}

.header .buttons {
    /* ml-3 p-2 */
    display: flex;
    gap: 10px;
    padding-right: 10px;
}

.header .buttons button {
    background: white;
    color: #4ee96a;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}


.section h2 {
    background: #0A2241;
    color: white;
    padding: 10px;
    margin: 0;
}

.section h3 {
    margin: 5px 0;
    color: #1E3E78;
    font-size: 1.125rem;
    font-weight: 600;
}

.columna h3 {
    margin: 5px 0;
    color: #1E3E78;
    font-size: 1.125rem;
    font-weight: 600;
}

.section .renglon {
    /* ok */
    /*   display: flex;
    justify-content: stretch;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: .5em; */
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: .5em;
    /* align-items: stretch;*/
}

.strech {
    justify-content: start;
}

/*
.col-una {
    flex-basis: 25%;
    background-color: antiquewhite;
    border: solid 1px;
}*/
.renglon .columna-basis {
    flex-basis: 25%;
    /* background-color: antiquewhite;
    border: solid 1px; */
}

.renglon .columna {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    padding-right: 40px;
    /* background-color: rgb(114, 229, 152);*/
}
</style>
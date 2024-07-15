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
                            <li class="breadcrumb-item">Gestión Judicial Electoral </li>
                            <li class="breadcrumb-item"><a href="/gje/admin">Administración</a></li>
                            <li class="breadcrumb-item active">Editar Ficha Técnica.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
        <!-- .\Titulo y botón buscar   -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="d-flex justify-content-start items-center">
                <h2 class="encabezado">Editar Ficha Técnica</h2>
            </div>
        </div>
        <!--./Titulo y botón buscar  -->

        <!-- .\ Ficha -->
        <div class="ficha-container">
            <form @submit.prevent="submitFormulario">
                <!-- .\Header Expediente  -->
                <div class="header">
                    <h2>Expediente</h2>
                    <div class="buttons">
                        <button :disabled="loading" class="btn primary me-2">Guardar</button>
                    </div>
                </div>
                <!-- ./Header Expediente  -->

                <!-- .\ Expediente -->
                <div class="section">
                    <!-- Renglon 1-->

                    <div class="d-flex  flex-row  justify-content-between">
                        <div class="d-flex flex-column">
                            <div class="renglon">
                                <div class="columna">
                                    <h3>Número de expediente:</h3>
                                    <div>
                                        <input class="form-control mb-2" type="text" v-model="formData.s_expediente"
                                            placeholder="__" required>
                                    </div>
                                </div>

                                <div class="columna">
                                    <h3> Expediente acumulado </h3>
                                    <div>
                                        <input class="form-control mb-2" type="text"
                                            v-model="formData.s_expediente_principal" placeholder="__">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="renglon"> <!-- Renglon 2-->
                                <div class="columna">
                                    <div class="d-flex flex-column bd-highlight">
                                        <h3><!-- TODO Subir Sentencia --> </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Renglon 2-->
                    <div class="d-flex  flex-row  justify-content-between">
                        <div class="renglon">
                            <div class="columna">
                                <h3>Fecha de recepción</h3>
                                <input class="form-control mb-2" type="date" v-model="formData.d_fecha_recepcion">
                            </div>

                            <!-- <div class="columna">
                                <h3>Hora de recepción</h3>
                                <input class="form-control mb-2" type="time" v-model="formData.d_hora_recepcion">
                            </div> -->


                            <div class="columna">
                                <h3>Tipo de medio</h3>
                                <select v-model="formData.n_id_tipo_medio" name="n_id_tipo_medio" id="n_id_tipo_medio">
                                    <option disabled>Seleccione un tipo de Medio</option>
                                    <option :value="tipo.n_id_tipo_medio" v-for="tipo in catTipoMedio"
                                        :key="tipo.n_id_tipo_medio">
                                        {{ tipo?.s_desc_tipo_medio }}
                                    </option>-
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Renglon 3-->
                    <div class="renglon">
                        <div class="columna">
                            <h3>Acto impugnado</h3>
                            <textarea class="text-justify" v-model="formData.s_acto_impugnado" cols="100" rows="3"
                                placeholder="___"></textarea>
                        </div>
                    </div>
                    <div class="renglon mb-1">
                        <div class="columna-basis">

                            <h3>Tipo de acto impugnado: <br /></h3>
                            <input class="form-control mb-2" type="text" v-model="formData.s_tipo_acto_impugnado">

                        </div>
                        <div class="columna-basis">

                            <h3> Parte Actora </h3>
                            <input class="form-control mb-2" type="text" v-model="formData.s_parte_actora">


                        </div>
                        <div class="columna-basis">

                            <h3>Autoridad demandada u órgano responsable:</h3>
                            <input class="form-control mb-2" type="text" v-model="formData.s_autoridad_responsable">

                        </div>
                        <div class="columna-basis">

                            <h3>Partido o persona tercera interesada</h3>
                            <input class="form-control mb-2" type="text" v-model="formData.s_tercer_interesado">

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
                            <select v-model="formData.n_id_ponencia_instructora" name="n_id_ponencia_instructora"
                                id="n_id_ponencia_instructora">
                                <option disabled>Seleccione Ponencia</option>
                                <option :value="ponencia.n_id_ponencia" v-for="ponencia in catPonencia"
                                    :key="ponencia.n_id_ponencia">
                                    {{ ponencia.s_magistrado }}
                                </option>
                            </select>
                        </div>
                        <div class="columna">
                            <h3>Temática:</h3>

                            <textarea v-model="formData.s_tematica" cols="60" rows="3" placeholder="___"></textarea>
                        </div>
                    </div>
                    <!-- Renglon 5-->
                    <div class="renglon">
                        <table class="table  item-table">
                            <thead>
                                <tr>
                                    <!-- <th class=""></th>-->
                                    <th>Tipo de acuerdo</th>
                                    <th class="">Fecha de acuerdo:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="acuerdo in acuerdos" :key="acuerdo.n_id_acuerdo">
                                    <td class="align-top">
                                        <select v-model="acuerdo.n_id_tipo_acuerdo" name="n_id_tipo_acuerdo"
                                            id="n_id_tipo_acuerdo">
                                            <option>Seleccione un Tipo de acuerdo</option>
                                            <option :value="tipoAcuerdo.n_id_tipo_acuerdo"
                                                v-for="tipoAcuerdo in catTiposDeAcuerdo"
                                                :key="tipoAcuerdo.n_id_tipo_acuerdo">
                                                {{ tipoAcuerdo.s_tipo_acuerdo }}
                                            </option>-
                                        </select>
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="date" class="form-control form-control-sm"
                                            v-model="acuerdo.d_fecha_acuerdo" placeholder="Fecha de acuerdo" />
                                    </td>
                                    <td><button type="button" class="btn btn-primary additem btn-sm"
                                            @click="agregarAcuerdo()">+</button></td>
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
                        <table class="table  item-table">
                            <thead>
                                <tr>
                                    <!-- <th class=""></th>-->

                                    <th class="">Fecha de resolución</th>
                                    <th class="">Puntos de Acuerdo</th>
                                    <th class="">Votación</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="acuerdo in acuerdos_plenarios" :key="acuerdo.n_id_acuerdo">
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="date" class="form-control form-control-sm"
                                            v-model="acuerdo.d_fecha_acuerdo" placeholder="Fecha de resolución" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <textarea class="form-control form-control-sm" v-model="acuerdo.s_punto_acuerdo"
                                            placeholder="Puntos de acuerdo" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="text" class="form-control form-control-sm"
                                            v-model="acuerdo.s_numero_votos" placeholder="Número de votos" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <!-- Inicio Acuerdo Resolución -->
                <!-- Renglon 7-->
                <div class="section">
                    <h2>Resolución</h2>
                    <div class="renglon">
                        <table class="table  item-table">
                            <thead>
                                <tr>
                                    <!-- <th class=""></th>-->

                                    <th>
                                        <h3>Fecha de acuerdo:</h3>
                                    </th>
                                    <th>
                                        <h3>Resolutivos:</h3>
                                    </th>
                                    <th>
                                        <h3>Votación:</h3>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="acuerdo in acuerdos_resolucion" :key="acuerdo.n_id_acuerdo">
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="date" class="form-control form-control-sm"
                                            v-model="acuerdo.d_fecha_acuerdo" placeholder="Fecha de resolución" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <textarea class="form-control form-control-sm" v-model="acuerdo.s_punto_acuerdo"
                                            placeholder="Puntos de acuerdo" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="text" class="form-control form-control-sm"
                                            v-model="acuerdo.s_numero_votos" placeholder="Número de votos" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- .\ Incidentes -->
                <!-- Renglon 8-->
                <div class="section">
                    <h2>Incidentes</h2>
                    <div class="renglon">
                        <table class="table  item-table">
                            <thead>
                                <tr>
                                    <th>
                                        <h3>Fecha de resolución:</h3>
                                    </th>
                                    <th>
                                        <h3> Puntos de acuerdo:</h3>
                                    </th>
                                    <th>
                                        <!-- <h3>Número de votos:</h3> -->
                                        <h3>Votación:</h3>
                                    </th>
                                    <th>
                                        <h3> Sentencias </h3>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="acuerdo in acuerdos_incidentes" :key="acuerdo.n_id_acuerdo">
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="date" class="form-control form-control-sm"
                                            v-model="acuerdo.d_fecha_acuerdo" placeholder="Fecha de resolución" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <textarea class="form-control form-control-sm" v-model="acuerdo.s_punto_acuerdo"
                                            placeholder="Puntos de acuerdo" />
                                    </td>
                                    <td class="align-top">
                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                        <input type="text" class="form-control form-control-sm"
                                            v-model="acuerdo.s_numero_votos" placeholder="Número de votos" />
                                    </td>
                                    <td class="align-top"></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- .\ Síntesis -->
                <!-- Renglon 9-->
                <div class="section">
                    <h2>Síntesis</h2>
                    <div class="renglon">

                        <div class="columna">
                            <h3>Síntesis</h3>

                            <textarea v-model="formData.s_sintesis" cols="80" rows="3" placeholder="___"></textarea>
                        </div>

                    </div>
                    <div class="renglon">

                        <div class="columna">
                            <h3>Infografía</h3>
                            <input class="form-control mb-2" type="text" v-model="formData.s_url_infografia">

                        </div>

                    </div>
                </div>

            </form>
            <br>
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

import type { AxiosResponse } from 'axios'
const route = useRoute();
const router = useRouter();


// import { plugin, defaultConfig } from '@formkit/vue'


let medioImpugnacion: any = reactive({});

onMounted(() => {
    loadCatPonencia();
    loadCatTipoMedio();
    loadCatTiposDeAcuerdo();

    loadAcuerdos();

    loadAcuerdosPlenarios();
    loadAcuerdosResolucion();
    loadAcuerdosIncidentes()
    loadFormData();
});

let showRemoverAcuerdo = ref(false);

const loading: any = ref(true);
const id: any = ref(null);
let controller: any;

let catPonencia = ref<[{ n_id_ponencia: number, s_magistrado: string, desc_titular: string }]>();
let catTipoMedio = ref<[{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]>();
let catTiposDeAcuerdo = ref<[{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]>()

const loadCatTipoMedio = async () => {
    /* console.log('--.| XXX_loadCatTipoMedio--') 
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('cat/tipo-medio') as TCrud;

    catTipoMedio.value = response.data as [{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]
    console.log('--./loadCatTipoMedio-1-')
    console.log('VALUE: ',catTipoMedio.value)
    console.log('--./loadCatTipoMedio-2-') */

    /* Añadido por CORS -> Corregir - */
let urlApiMedios = import.meta.env.VITE_API_GJE + "/api/gje/cat/tipo-medio";
    console.log('urlApiTipoMedios:', urlApiMedios);
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
        catTipoMedio.value = data.data as [{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]
        console.log(data);
        
    } catch { }

    loading.value = false;
}

const loadCatPonencia = async () => {
    console.log('--.| loadCatTipoMedio--')
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('cat/ponencia') as TCrud;

    catPonencia.value = response.data as [{ n_id_ponencia: number, s_magistrado: string, desc_titular: string }]
    console.log('--./loadCatTipoMedio-1-')
    console.log(catPonencia.value)
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
    if (!id.value) {
        console.log('-- loadFormData Medioimpugnacion')
        loading.value = false;
        return
    }
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

        formData.s_parte_actora = medioImpugnacion.value.s_parte_actora

        formData.n_id_autoridad_responsable = medioImpugnacion.value.n_id_autoridad_responsable
        formData.s_autoridad_responsable = medioImpugnacion.value.s_autoridad_responsable

        formData.s_tercer_interesado = medioImpugnacion.value.s_tercer_interesado
        formData.n_id_ponencia_instructora = medioImpugnacion.value.n_id_ponencia_instructora
        formData.s_tematica = medioImpugnacion.value.s_tematica
        formData.s_sintesis = medioImpugnacion.value.s_sintesis
        formData.s_url_infografia = medioImpugnacion.value.s_url_infografia


        console.log(formData)

    } catch (error) {
        console.log(error)
    }
    loading.value = false;
};

// let acuerdos: any = reactive([{}]);
const acuerdos_plenarios = ref<TAcuerdo[]>([])
const loadAcuerdosPlenarios = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('acuerdos') as TCrud;
    console.log('--- loadAcuerdosPlenarios ')
    let todosAcuerdos = response.data as [TAcuerdo];
    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value
        && unAcuerdo.n_id_tipo_acuerdo === 11
    );

    console.log(filtro)
    if (filtro.length === 0)
        acuerdos_plenarios.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 11, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else
        acuerdos_plenarios.value = filtro
}


const acuerdos_resolucion = ref<TAcuerdo[]>([])
const loadAcuerdosResolucion = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('acuerdos') as TCrud;
    console.log('--- loadAcuerdosResolucion ')
    let todosAcuerdos = response.data as [TAcuerdo];
    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value
        && unAcuerdo.n_id_tipo_acuerdo === 12
    );

    console.log(filtro)
    if (filtro.length === 0)
        acuerdos_resolucion.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 12, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else
        acuerdos_resolucion.value = filtro
}
const acuerdos_incidentes = ref<TAcuerdo[]>([])
const loadAcuerdosIncidentes = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('acuerdos') as TCrud;
    console.log('--- loadAcuerdosIncidentes ')
    let todosAcuerdos = response.data as [TAcuerdo];
    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value
        && unAcuerdo.n_id_tipo_acuerdo === 13
    );

    console.log(filtro)
    if (filtro.length === 0)
        acuerdos_incidentes.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 13, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else
        acuerdos_incidentes.value = filtro
}

// const acuerdos = ref<TAcuerdo[]>([]);
const acuerdos = ref<TAcuerdo[]>([])

const loadAcuerdos = async () => {
    let crud: CrudGjeService = new CrudGjeService()
    let response = await crud.getAll<TCrud>('acuerdos') as TCrud;
    let todosAcuerdos = response.data as [TAcuerdo];

    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value);

    if (filtro.length === 0)
        acuerdos.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 11, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else
        acuerdos.value = filtro
}

const formData = reactive({
    n_id_medio_impugnacion: 0,
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


    formData.s_parte_actora = medioImpugnacion.value.s_parte_actora
    formData.n_id_autoridad_responsable = medioImpugnacion.value.n_id_autoridad_responsable
    formData.s_autoridad_responsable = medioImpugnacion.value.s_autoridad_responsable
    formData.s_tercer_interesado = medioImpugnacion.value.s_tercer_interesado
    formData.n_id_ponencia_instructora = medioImpugnacion.value.n_id_ponencia_instructora
    formData.s_sintesis = medioImpugnacion.value.s_sintesis
    formData.s_url_infografia = medioImpugnacion.value.s_url_infografia
})

const guardando = ref(false)


const submitFormulario = async () => {
    console.log('submitFormulario [ ' + medioImpugnacion.value?.n_id_medio_impugnacion + ']')
    guardando.value = true;
    let crud: CrudGjeService = new CrudGjeService()

    let id_medio_impugnacion = (medioImpugnacion.value?.n_id_medio_impugnacion === null ||
        medioImpugnacion.value?.n_id_medio_impugnacion === undefined ||
        medioImpugnacion.value?.n_id_medio_impugnacion === 0 ? 0 : parseInt(medioImpugnacion.value?.n_id_medio_impugnacion));

    console.log('submitFormulario + id_medio_impugnacion:' + id_medio_impugnacion)
    try {

        if (id_medio_impugnacion === 0) {
            let response = await crud.store<TMedioImpugnacion>('medio', formData);
            formData.n_id_medio_impugnacion = response?.data?.n_id_medio_impugnacion;
        } else {
            let response = await crud.update<TMedioImpugnacion>('medio', '' + id_medio_impugnacion, formData);
        }
        guardando.value = false;
        router.push({ name: 'sge-admin-listar' });
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
    }
    //--- Guardar todos los acuerdos
    try {
        acuerdos.value.forEach(async acuerdo => {

            acuerdo['n_id_medio_impugnacion'] = (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion);
            let id_acuerdo = (acuerdo.n_id_acuerdo === null
                || acuerdo.n_id_acuerdo === undefined
                || acuerdo.n_id_acuerdo === 0 ? 0 : acuerdo.n_id_acuerdo)
            if (id_acuerdo === 0) {
                let response = await crud.store<TAcuerdo>('acuerdos', acuerdo);
            } else {
                let response = await crud.update<TAcuerdo>('acuerdos', '' + acuerdo?.n_id_acuerdo, acuerdo);
            }

        });
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }

    //-- Guardar los acuerdos Plenarios
    try {
        acuerdos_plenarios.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion);
            let id_acuerdo = (acuerdo.n_id_acuerdo === null
                || acuerdo.n_id_acuerdo === undefined
                || acuerdo.n_id_acuerdo === 0 ? 0 : acuerdo.n_id_acuerdo)
            if (id_acuerdo === 0) {
                let response = await crud.store<TAcuerdo>('acuerdos', acuerdo);
            } else {
                let response = await crud.update<TAcuerdo>('acuerdos', '' + acuerdo?.n_id_acuerdo, acuerdo);
            }

        });
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }

    //-- Guardar los acuerdos Resolución
    try {
        acuerdos_resolucion.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion);
            let id_acuerdo = (acuerdo.n_id_acuerdo === null
                || acuerdo.n_id_acuerdo === undefined
                || acuerdo.n_id_acuerdo === 0 ? 0 : acuerdo.n_id_acuerdo)
            if (id_acuerdo === 0) {
                let response = await crud.store<TAcuerdo>('acuerdos', acuerdo);
            } else {
                let response = await crud.update<TAcuerdo>('acuerdos', '' + acuerdo?.n_id_acuerdo, acuerdo);
            }

        });
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- Guardar los acuerdos Incidentes
    try {
        acuerdos_incidentes.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion);
            let id_acuerdo = (acuerdo.n_id_acuerdo === null
                || acuerdo.n_id_acuerdo === undefined
                || acuerdo.n_id_acuerdo === 0 ? 0 : acuerdo.n_id_acuerdo)
            if (id_acuerdo === 0) {
                let response = await crud.store<TAcuerdo>('acuerdos', acuerdo);
            } else {
                let response = await crud.update<TAcuerdo>('acuerdos', '' + acuerdo?.n_id_acuerdo, acuerdo);
            }

        });
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }

}

function agregarAcuerdo() {
    acuerdos.value.push({ n_id_acuerdo: undefined, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 1, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
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

.encabezado {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #002466;
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
    display: flex;
    gap: 10px;
    padding-right: 10px;
}

input,
textarea {
    color: black;
    background-color: #e9e9e9;
    font-size: 1.125rem;
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


select {
    border-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    background-color: #e9e9e9;
    color: rgb(0, 0, 0);
    padding: 2px 0px;
    font-size: 1.125rem;
}

.table>thead>tr>th {
    color: #1E3E78;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: none;
}
</style>
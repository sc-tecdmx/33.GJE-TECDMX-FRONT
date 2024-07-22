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
        <form @submit.prevent="submitFormulario">

            <!-- .\Titulo y botón guardar   -->
            <div class="row mb-2 mt-4 ms-2" style="">
                <div class="d-flex justify-content-between items-center">
                    <h2 class="encabezado">Editar Ficha Técnica</h2>
                    <div class="d-flex justify-end items-center bd-highlight mb-3">
                        <div class="ml-3 p-2">
                            <button type="button" class="btn btn-secondary"
                                style="height: 100%; width: 140px;">Cancelar</button>
                        </div>

                        <div class="ml-3 p-2">
                            <button :disabled="loading" class="btn btn-primary me-2"
                                style="height: 100%; width: 140px;">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--./Titulo y botón buscar  -->

            <!-- .\ Ficha -->
            <div class="ficha-container">

                <!-- .\Header Expediente  -->
                <div class="header">
                    <h2>Expediente</h2>
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
                                            placeholder="__" required size="20">
                                    </div>
                                </div>

                                <div class="columna">
                                    <!-- Renglon 5-->
                                    <div class="renglon">
                                        <table class="table  item-table">
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Expediente vinculado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="vinculado in vinculados" :key="vinculado.n_id_exp_vinculado">
                                                    <td class="align-top">
                                                        <select v-model="vinculado.s_tipo_vinculacion"
                                                            class="form-select form-select-sm mb-3">
                                                            <option>__ Tipo de vinculación __</option>
                                                            <option v-for="tipoVinculacion in catTiposVinculacion"
                                                                :value="tipoVinculacion.s_tipo_vinculacion"
                                                                :key="tipoVinculacion.s_tipo_vinculacion">
                                                                {{ tipoVinculacion.s_tipo_vinculacion }}
                                                            </option>-
                                                        </select>
                                                    </td>
                                                    <td class="align-top">
                                                        <!--- v-model="acuerdo.d_fecha_acuerdo" -->
                                                        <input type="text" class="form-control form-control-sm"
                                                            v-model="vinculado.s_tmp_expediente_vinculado"
                                                            placeholder="Expediente vinculado" />
                                                    </td>
                                                    <td><button type="button" class="btn btn-primary additem btn-sm"
                                                            @click="agregarVinculacion()">+</button></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div> <!-- ./Renglon 5-->
                                </div>

                                <div>
                                    <div class="mb-3">
                                        <h3>Sentencia PDF:</h3>
                                        <input class="form-control form-control-sm" type="file" id="formSentenciaPDF"
                                            @change="onFileChange" accept=".pdf"
                                            :class="[is_submit_form_pdf ? (formData?.s_url_sentencia_pdf ? 'is-valid' : 'is-invalid') : '']"
                                            multiple />
                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_pdf}`">
                                            {{ formData?.s_url_sentencia_pdf }}
                                        </a>                                            
                                    </div>
                                    <div class="mb-3">
                                        <h3>Sentencia DOC:</h3>
                                        <input class="form-control form-control-sm" type="file" id="formSentenciaDOC"
                                            @change="onFileChange" accept=".doc,*.docx"
                                            :class="[is_submit_form_doc ? (formData?.s_url_sentencia_doc ? 'is-valid' : 'is-invalid') : '']"
                                            multiple />
                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_doc}`">
                                        {{ formData?.s_url_sentencia_doc }}
                                        </a>                                            
                                    </div>
                                    <div>
                                        

                                    </div>


                                    <!-- OKOK 
                                    <input type="file" @change="onFileChange" />
                                    <button @click="uploadFile">Enviar</button>
                                    -->
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

                            <div class="columna">
                                <h3>Tipo de medio</h3>
                                <select v-model="formData.n_id_tipo_medio" name="n_id_tipo_medio" id="n_id_tipo_medio">
                                    <option disabled>_ Tipo de medio _</option>
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
                        <div class="columna-basis-50">
                            <h3>Acto impugnado</h3>
                            <textarea v-model="formData.s_acto_impugnado" cols="100" rows="3"
                                placeholder="___"></textarea>
                        </div>

                    </div>
                    <div class="renglon">

                        <div class="columna-basis-50">
                            <h3>Síntesis</h3>

                            <textarea v-model="formData.s_sintesis" cols="100" rows="3" placeholder="___"></textarea>
                        </div>

                    </div>
                    <div class="renglon">
                        <div class="columna">

                            <h3>Tipo de acto impugnado: <br /></h3>
                            <input class="form-control mb-2" size="40" type="text" v-model="formData.s_tipo_acto_impugnado">

                        </div>
                        <div class="columna">
                            <h3> Parte Actora </h3>
                            <input class="form-control mb-2" size="40"  type="text" v-model="formData.s_parte_actora">
                        </div>

                    </div>
                    <div class="renglon">
                        <div class="columna">

                            <h3>Autoridad demandada u órgano responsable:</h3>
                            <input class="form-control mb-2" size="40" type="text" v-model="formData.s_autoridad_responsable">

                        </div>
                        <div class="columna">

                            <h3>Partido o persona tercera interesada</h3>
                            <input class="form-control mb-2" size="40" type="text" v-model="formData.s_tercer_interesado">

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

                    </div> <!-- ./Renglon 5-->

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

                                    <th class="">Fecha de acuerdo</th>
                                    <th class="">Puntos de acuerdo</th>
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
                                        <select v-model="acuerdo.s_numero_votos"
                                            class="form-select form-select-sm mb-3">
                                            <option>Seleccionar</option>
                                            <option v-for="votacion in catVotacion" :value="votacion.s_tipo_votacion"
                                                :key="votacion.s_tipo_votacion">
                                                {{ votacion.s_tipo_votacion }}
                                            </option>-
                                        </select>

                                    </td>
                                    <td><button type="button" class="btn btn-primary additem btn-sm"
                                            @click="agregarPlenario()">+</button></td>
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
                                        <h3>Fecha de resolución:</h3>
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
                                        <select v-model="acuerdo.s_numero_votos"
                                            class="form-select form-select-sm mb-3">
                                            <option>Seleccionar</option>
                                            <option v-for="votacion in catVotacion" :value="votacion.s_tipo_votacion"
                                                :key="votacion.s_tipo_votacion">
                                                {{ votacion.s_tipo_votacion }}
                                            </option>-
                                        </select>
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
                                        <h3>Votación:</h3>
                                    </th>
                                    <!--
                                    <th>
                                        <h3> Sentencias </h3>
                                    </th>
                                -->
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
                                        <select v-model="acuerdo.s_numero_votos"
                                            class="form-select form-select-sm mb-3">
                                            <option>Seleccionar</option>
                                            <option v-for="votacion in catVotacion" :value="votacion.s_tipo_votacion"
                                                :key="votacion.s_tipo_votacion">
                                                {{ votacion.s_tipo_votacion }}
                                            </option>-
                                        </select>
                                    </td>
                                    <!-- <td class="align-top"></td>-->
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- .\ Síntesis -->
                <!-- Renglon 9-->
                <div class="section">
                    <h2>Infografía</h2>

                    <div class="renglon">

                        <div class="columna">
                            <h3>Infografía:</h3>
                                        <input class="form-control form-control-sm" type="file" id="formSentenciaDOC"
                                            @change="onFileChange" accept=".doc,*.docx"
                                            :class="[is_submit_form_doc ? (formData?.s_url_sentencia_doc ? 'is-valid' : 'is-invalid') : '']"
                                            multiple />
                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_doc}`">
                                        {{ formData?.s_url_sentencia_doc }}
                                        </a>   
                        </div>

                    </div>
                </div>


                <br>
            </div>
            <!-- ./ Ficha -->
        </form>
    </div>
    <br/>.
    <br/>.
    <br/>.
    <br/>.
</template>

<script setup lang="ts">

import { onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'

import IconHome from '@/assets/svg/IconHome.vue'

import { useHead } from '@unhead/vue';
useHead({ title: "Agregar Asunto" });
const route = useRoute();
const router = useRouter();
import { crudApiService } from '@/core/services/axios/CrudApiService'
import type { TCrud } from '@/core/types/gje/crud.t'
import type { TExpVinculado } from '@/core/types/gje/exp-vinculado.t'
import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import type { TMedioImpugnacion } from '@/core/types/gje/medio-impugnacion.t'
import type { TTipoMedio } from "@/core/types/gje/tipo-medio.t";

let medioImpugnacion: any = reactive({});
const urlSentencias = import.meta.env.VITE_API_GJE + '/api/gje/sentencia/'

onMounted(() => {
    loadCatPonencia();

    loadCatTipoMedio();
    loadCatTiposDeAcuerdo();

    loadVinculados();
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

let catTiposVinculacion = [
    { s_tipo_vinculacion: "Acumulación" },
    { s_tipo_vinculacion: "Escisión" },
    { s_tipo_vinculacion: "Reencausamiento" },
];

let catVotacion = [
    { s_tipo_votacion: "Mayoría" },
    { s_tipo_votacion: "Unanimidad" }
];


let catPonencia = ref<[{ n_id_ponencia: number, s_magistrado: string, desc_titular: string }]>();
let catTipoMedio = ref<[{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]>();
let catTiposDeAcuerdo = ref<[{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]>()

const loadCatTipoMedio = async () => {
    console.log('--.| loadCatTipoMedio--')
    const response = await crudApiService().getAll<TCrud>('cat/tipo-medio');

    catTipoMedio.value = await response?.data as [TTipoMedio]
    const data = await response?.data;
    catTipoMedio.value = data as [{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]

    console.log('--./loadCatTipoMedio-1-')
    console.log(catTipoMedio.value)
    console.log('--./loadCatTipoMedio-2-')
}

const loadCatPonencia = async () => {
    console.log('--.| loadCatPonencia--')
    const response = await crudApiService().getAll<TCrud>('cat/ponencia');
    const data = await response?.data;
    catPonencia.value = data as [{ n_id_ponencia: number, s_magistrado: string, desc_titular: string }]

    console.log('--./loadCatPonencia-1-')
    console.log(catPonencia.value)
    console.log('--./loadCatPonencia-2-')
}

const loadCatTiposDeAcuerdo = async () => {
    console.log('--.| loadCatTiposDeAcuerdo--')
    const response = await crudApiService().getAll<TCrud>('cat/tipo-acuerdo');
    const data = await response?.data;
    const todosTiposDeAcuerdo = data as [{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]
    console.log('todosTiposDeAcuerdo');
    console.log(todosTiposDeAcuerdo);

    const filtro = todosTiposDeAcuerdo.filter((unTipoAcuerdo) => unTipoAcuerdo.s_tipo == 'INSTRUCCIÓN');
    console.log(filtro);

    catTiposDeAcuerdo.value = filtro;

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

        const response = await crudApiService().getAll<TCrud>('medio');
        const data = await response?.data;
        medioImpugnacion.value = data;

        /*     let urlApiMedioImpugnacion = import.meta.env.VITE_API_GJE + '/api/gje/medio/' + id.value;
             const response = await fetch(urlApiMedioImpugnacion, {
                 method: 'GET',
                 signal: signal,
             });
             const data = await response.json();
             medioImpugnacion.value = data.data;
             */
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
    const response = await crudApiService().getAll<TCrud>('acuerdos');
        console.log('--- loadAcuerdosPlenarios ')
        let todosAcuerdos = await response?.data as [TAcuerdo];
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
    const response = await crudApiService().getAll<TCrud>('acuerdos');
    console.log('--- loadAcuerdosResolucion ')
    let todosAcuerdos = await response?.data as [TAcuerdo];

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
    const response = await crudApiService().getAll<TCrud>('acuerdos');
    let todosAcuerdos = await response?.data as [TAcuerdo];
    console.log(todosAcuerdos)
    const filtro = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_medio_impugnacion == id.value
        && unAcuerdo.n_id_tipo_acuerdo === 13
    );

    console.log(filtro)
    if (filtro.length === 0)
        acuerdos_incidentes.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 13, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else
        acuerdos_incidentes.value = filtro
}

//-- Expedientes vinculador
const vinculados = ref<TExpVinculado[]>([])
const loadVinculados = async () => {
    const response = await crudApiService().getById<TCrud>('vinculados/medio', route.params.id_medio as string );
    let todosVinculados= await response?.data as [TExpVinculado];
    console.log('todosVinculados--[' + todosVinculados?.length + "]")
    console.log(todosVinculados)
    if (todosVinculados.length === 0)
        vinculados.value.push({
            n_id_exp_vinculado: 0,
            n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion),
            s_tmp_expediente_vinculado: '', s_tipo_vinculacion: ''
        });
    else
        vinculados.value = todosVinculados
}



//-- Acuerdos
const acuerdos = ref<TAcuerdo[]>([])

const loadAcuerdos = async () => {
    const response = await crudApiService().getAll<TCrud>('acuerdos');
        console.log('loadAcuerdos - response');
    console.log(response);
        let todosAcuerdos =await response?.data as [TAcuerdo];

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
    uploadFile();
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

    //----- 
    //-- Guardar los acuerdos Vinculados
    try {
        vinculados.value.forEach(async vinculado => {
            vinculado['n_id_medio_impugnacion'] = (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion);
            let id_vinculado = (vinculado.n_id_exp_vinculado === null
                || vinculado.n_id_exp_vinculado === undefined
                || vinculado.n_id_exp_vinculado === 0 ? 0 : vinculado.n_id_exp_vinculado)
            if (id_vinculado === 0) {
                let response = await crud.store<TExpVinculado>('vinculados', vinculado);
            } else {
                let response = await crud.update<TExpVinculado>('vinculados', '' + vinculado?.n_id_exp_vinculado, vinculado);
            }

        });
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }

}

function agregarAcuerdo() {
    acuerdos.value.push({ n_id_acuerdo: undefined, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 1, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
}

function agregarPlenario() {
    acuerdos_plenarios.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 11, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
}

function removerAcuerdo() {
    console.log("Remover acuerdo")
}

function agregarVinculacion() {
    vinculados.value.push(
        {
            n_id_exp_vinculado: undefined,
            n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion),
            s_tmp_expediente_vinculado: '', s_tipo_vinculacion: ''
        }
    );
}

/* FileUpload */
const documentos = ref([]);
const selected_file_pdf = ref<File | null>(null);
const selected_file_doc = ref<File | null>(null);
const is_submit_form_pdf = ref(false);
const is_submit_form_doc = ref(false);
const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    
    if (target.id=='formSentenciaPDF' && target.files && target.files.length > 0) {
        console.log(target.id);
        selected_file_pdf.value = target.files[0];
        formData.s_url_sentencia_pdf = target.files[0].name
    }
    if (target.id=='formSentenciaDOC' &&  target.files && target.files.length > 0) {
        console.log(target.id);
        selected_file_doc.value = target.files[0];
        formData.s_url_sentencia_doc = target.files[0].name
    }
};

const uploadFile = async () => {
    if (!selected_file.value) {
        return;
    }

    const formDataFile = new FormData();
    formDataFile.append('file', selected_file.value);

    try {
        const uploadUrl = import.meta.env.VITE_API_GJE + '/api/gje/enviarSentencia'
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formDataFile,
        });
        console.log("FileUpload")
        console.log(response)
        if (response.ok) {
            ///  alert('Se subió el archivo de la sentencia!');
            ///formData.s_url_sentencia_pdf = response?.data?.

        } else {
            //  alert('Failed to upload file.');
            console.log("Error al subir el archivo.")
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        //alert('Error uploading file.');
    }
};



/* OKOK
const uploadFile = async () => {
    if (!selectedFile.value) {
        alert('Por favor selecciona un archivo!');
        return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile.value);

    try {
        const uploadUrl = import.meta.env.VITE_API_GJE + '/api/gje/enviarSentencia'
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Se subió el archivo de la sentencia!');

        } else {
            alert('Failed to upload file.');
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
    }
};
OKOK */
</script>























<style scoped>
/* Rev*/
.container {
    max-width: 90%;
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

.table-datos {
    border: 2px solid #002466;
    border-radius: 14px;
    margin-bottom: 498px;
}

.ficha-container {
    border: 2px solid #002466;
    border-radius: 14px;
    margin-bottom: 498px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Sobrescribir para que reconozca width de linea */

.header h2 {

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #0a2241;
    color: white;

    padding: 12px;
    border-radius: 8px 8px 0 0;
    margin: 0;

    font-size: 1.25em;
}

.section h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #0A2241;
    color: white;

    padding: 12px;
    margin: 0;

    font-size: 1.25em;
}


.section h3 {
    margin: 5px 0;
    color: #1E3E78;
    font-size: .875rem;
    font-weight: 600;
}



.section .renglon {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: .5em;
    /* align-items: stretch;*/
}

.strech {
    justify-content: start;
}

.renglon .columna-basis-50 {
    flex-basis: 50%;
    /* background-color: antiquewhite;
    border: solid 1px; */
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

input,
textarea {
    color: black;
    background-color: #e9e9e9;
    font-size: 1.125rem;
}

/*

select {
    border-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    background-color: #e9e9e9;
    color: rgb(0, 0, 0);
    padding: 2px 0px;
    font-size: 1.125rem;

    line-height: 19px;
}
*/
.table>thead>tr>th {
    color: #1E3E78;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: none;
}
</style>
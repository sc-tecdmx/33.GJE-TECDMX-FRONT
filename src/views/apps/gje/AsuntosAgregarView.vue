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
                            <button :disabled="cargando" class="btn btn-primary me-2"
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
                                        <input class="form-control form-control-sm" 
                                            type="file"
                                            id="file__s_url_sentencia_pdf"
                                            @change="onFileChange" accept=".pdf"
                                            :class="[is_submit_form_pdf ? (formData?.s_url_sentencia_pdf ? 'is-valid' : 'is-invalid') : '']"
                                            />

                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_pdf}`">
                                            {{ formData?.s_url_sentencia_pdf }}
                                            |
                                            {{ formData?.file__b64_s_url_sentencia_pdf }}
                                        </a>
                                    </div>
                                    <div class="mb-3">
                                        <h3>Sentencia DOC:</h3>
                                        <input class="form-control form-control-sm"
                                            type="file"
                                            id="file__s_url_sentencia_doc"
                                            @change="onFileChange" accept=".doc;*.docx"
                                            :class="[is_submit_form_doc ? (formData?.s_url_sentencia_doc ? 'is-valid' : 'is-invalid') : '']"
                                            />
                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_doc}`">
                                            {{ formData?.s_url_sentencia_doc }}|
                                            {{ formData?.file__b64_s_url_sentencia_doc }}
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
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_tipo_acto_impugnado">

                        </div>
                        <div class="columna">
                            <h3> Parte Actora </h3>
                            <input class="form-control mb-2" size="40" type="text" v-model="formData.s_parte_actora">
                        </div>

                    </div>
                    <div class="renglon">
                        <div class="columna">

                            <h3>Autoridad demandada u órgano responsable:</h3>
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_autoridad_responsable">

                        </div>
                        <div class="columna">

                            <h3>Partido o persona tercera interesada</h3>
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_tercer_interesado">

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
                                <tr v-for="acuerdo in acuerdos_instruccion" :key="acuerdo.n_id_acuerdo">
                                    <td class="align-top">
                                        <select v-model="acuerdo.n_id_tipo_acuerdo">
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
                                    <td class="align-top">
                                            &nbsp;
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
                            <input class="form-control form-control-sm"
                                            type="file"
                                            id="file__s_url_infografia"
                                            @change="onFileChange" accept=".pdf"
                                            :class="[is_submit_form_doc ? (formData?.s_url_infografia ? 'is-valid' : 'is-invalid') : '']"
                                            />
                                        <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_doc}`">
                                            {{ formData?.s_url_infografia }}|
                                            {{ formData?.file__b64_s_url_infografia }}
                                        </a>


                        </div>

                    </div>
                </div>

                <!-- Renglon 10-->
                <div class="section">
                    <h2>Autorizar publicación</h2>

                    <div class="renglon">

                        <div class="columna">
                            <h3>Autorización:</h3>
                            <div role="radiogroup" tabindex="-1" class="bv-no-focus-ring">
                                <div class="radio-classic radio-primary custom-control d-inline-flex custom-radio me-3">
                                    <input type="radio" class="custom-control-input" value="Guardar"
                                        id="s_publicacion_guardar" name="s_publicacion"
                                        v-model="formData.s_publicacion" />
                                    <label class="custom-control-label" for="s_publicacion_guardar">No publicar</label>
                                </div>
                                <div class="radio-classic radio-primary custom-control d-inline-flex custom-radio me-3">
                                    <input type="radio" class="custom-control-input" value="Publicar"
                                        id="s_publicacion_publicar" name="s_publicacion"
                                        v-model="formData.s_publicacion" />
                                    <label class="custom-control-label" for="s_publicacion_publicar">Publicar</label>
                                </div>
                            </div>
                            <input type="hidden" name="s_email_autor" v-model="formData.s_email_autor" />
                        </div>

                    </div>
                </div>


                <br>
            </div>
            <!-- ./ Ficha -->
        </form>
    </div>
    <br />.
    <br />.
    <br />.
    <br />.
</template>

<script setup lang="ts">

import { onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'

import { unheadVueComposablesImports, useHead } from '@unhead/vue';
useHead({ title: "Agregar Asunto" });

const route = useRoute();
const router = useRouter();

const errors = ref({})
import { crudApiService } from '@/core/services/axios/CrudApiService'
import type { TCrud } from '@/core/types/gje/crud.t'

import type { TExpVinculado } from '@/core/types/gje/exp-vinculado.t'
import type { TTipoMedio } from "@/core/types/gje/tipo-medio.t";
import type { TPonencia } from "@/core/types/gje/ponencia.t";
import type { TTipoAcuerdo } from "@/core/types/gje/tipo-acuerdo.t";

import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import type { TMedioImpugnacion } from '@/core/types/gje/medio-impugnacion.t'

import IconHome from '@/assets/svg/IconHome.vue'

// const isActionCreate = route.name === 'sge-admin-agregar'
const isActionEditar = route.name === 'sge-admin-editar' 
const urlSentencias = import.meta.env.VITE_API_GJE + '/api/gje/sentencia/'
const EMAIL_AUTOR_SEG = 'isai.fararoni@tecdmx.org.mx'

const cargando: any = ref(true);
const guardando: any = ref(false)

//-- (1) Catálogos constantes
const catTiposVinculacion = [
    { s_tipo_vinculacion: "Acumulación" },
    { s_tipo_vinculacion: "Escisión" },
    { s_tipo_vinculacion: "Reencausamiento" },
];

const catVotacion = [
    { s_tipo_votacion: "Mayoría" },
    { s_tipo_votacion: "Unanimidad" }
];

//-- (2) Catálogos base de datos
const catTipoMedio = ref<[TTipoMedio]>();
const catPonencia = ref<[TPonencia]>();
const catTiposDeAcuerdo = ref<[ TTipoAcuerdo ]>()

//-- (3) Editar, expedientes vinculados
const vinculadosEmpty : TExpVinculado= { 
    n_id_exp_vinculado: 0, 
    n_id_medio_impugnacion: 0,
    s_tmp_expediente_vinculado: '', 
    s_tipo_vinculacion: ''};

//-- (4) Expedientes vinculados
const vinculados = ref<TExpVinculado[]>([])

//-- (5) Acuerdos
const acuerdos_instruccion = ref<TAcuerdo[]>([])
const acuerdos_plenarios = ref<TAcuerdo[]>([])
const acuerdos_resolucion = ref<TAcuerdo[]>([])
const acuerdos_incidentes = ref<TAcuerdo[]>([])

//-- (6) Medio de impugacion
let medioImpugnacion: any = reactive({});

onMounted(() => {
    loadCatalogos();
    if (isActionEditar){
        loadFichaTecnica()
    }
    loadVinculados()
    loadAcuerdos();
    console.log('--|  Reemplazar| ------')
  //  loadFormData();
});

//-----------------------| Catálogos
const loadCatalogos = () => {
    console.log('--| loadCatalogos')
    loadCatPonencia();
    loadCatTipoMedio();
    loadCatTiposDeAcuerdo();
}


const loadCatTipoMedio = async () => {
    const response = await crudApiService().getAll<TCrud>('cat/tipo-medio');
    catTipoMedio.value = await response?.data as [TTipoMedio]
}

const loadCatPonencia = async () => {
    const response  = await crudApiService().getAll<TCrud>('cat/ponencia') ;
    catPonencia.value = await response?.data as [TPonencia]
}

const loadCatTiposDeAcuerdo = async () => {
    const response = await crudApiService().getAll<TCrud>('cat/tipo-acuerdo/s_tipo/INSTRUCCIÓN');
    catTiposDeAcuerdo.value = await response?.data as [TTipoAcuerdo]
}

//-----------------------| Expedientes vinculados
function agregarVinculacion() {
    vinculados.value.push(vinculadosEmpty );
}

const loadVinculados = async () => {
    if (isActionEditar){
        console.log('loadVinculados--isActionEditar[' + isActionEditar+ "]")
        const response = await crudApiService().getById<TCrud>('vinculados/medio', route.params.id_medio as string);
        console.log(response)
        // const  todosVinculados: TExpVinculado[] = await response?.data as [TExpVinculado];
        vinculados.value = await response?.data as [TExpVinculado];
    }
    if ( Object.keys(vinculados.value).length === 0){
        console.log('loadVinculados--isActionEditar[' + isActionEditar+ "]")
        vinculados.value.push(vinculadosEmpty);
        console.log(vinculados.value)
    }
}
//-----------------------| Acuerdos
const emptyAcuerdo = (id_tipo_acuerdo : number) : TAcuerdo => {
    return { 
        n_id_acuerdo: 0,
        n_id_medio_impugnacion: 0,
        n_id_tipo_acuerdo: id_tipo_acuerdo,
        d_fecha_acuerdo: '', 
        s_punto_acuerdo: '', 
        s_numero_votos: '', 
        s_url_sentencia_pdf: '' }
}
function agregarAcuerdo() {
    acuerdos_instruccion.value.push(emptyAcuerdo(0));
}

function agregarPlenario() {
    acuerdos_plenarios.value.push(emptyAcuerdo(11));
}

const loadAcuerdos = async () => {
    console.log('loadAcuerdos - isActionEditar[' + isActionEditar+ "]")
    let todosAcuerdos: TAcuerdo[];
    if (isActionEditar){
        const response = await crudApiService().getAll<TCrud>('acuerdos/n_id_medio_impugnacion/' + route.params.id_medio as string);
        todosAcuerdos = await response?.data as [TAcuerdo];
    } else {
        todosAcuerdos = [];
    }
    console.log('loadAcuerdos - todosAcuerdos:' )
    console.log( todosAcuerdos)
    //-- Acuerdos de Instrucción 01
    const filtroInstruccion = todosAcuerdos.filter((unAcuerdo) => (unAcuerdo.n_id_tipo_acuerdo !== 11 && unAcuerdo.n_id_tipo_acuerdo !== 12 && unAcuerdo.n_id_tipo_acuerdo !== 13));
    const filtroPlenario = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 11);
    const filtroResolucion = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 12);
    const filtroIncidentes = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 13);

    if (filtroInstruccion?.length === 0) {
        acuerdos_instruccion.value.push(emptyAcuerdo(0));
    }
    else
        acuerdos_instruccion.value = filtroInstruccion;
    //--
    
    if (filtroPlenario.length === 0)
        acuerdos_plenarios.value.push(emptyAcuerdo(11));
    else
        acuerdos_plenarios.value = filtroPlenario
    //--
    
    console.log(filtroResolucion)
    if (filtroResolucion.length === 0)
        acuerdos_resolucion.value.push(emptyAcuerdo(12));
    else
        acuerdos_resolucion.value = filtroResolucion
    //--
    
    console.log(filtroIncidentes)
    if (filtroIncidentes.length === 0)
        acuerdos_incidentes.value.push(emptyAcuerdo(13));
    else
        acuerdos_incidentes.value = filtroIncidentes
}

//-----------------------| Formulario
const formData = reactive({
    n_id_medio_impugnacion: 0,
    n_id_medio_impugnacion_principal: null,
    s_expediente: '',
    //--
    s_email_autor: EMAIL_AUTOR_SEG,

    s_expediente_principal: '',
    s_url_sentencia_doc: '',    /* Nombre del archivo */
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
    s_url_infografia: '',
    //--
    s_publicacion: 'Guardar',
    //-- 
    file__s_url_sentencia_doc: '', /* Campo FILE en el formulario */
    file__s_url_sentencia_pdf: '',
    file__b64_s_url_sentencia_doc:'',   /* Base64 que será enviado */
    file__b64_s_url_sentencia_pdf:'',
    file__s_url_infografia:'',
    file__b64_s_url_infografia:''
})

const loadFichaTecnica = async ()  => {
    console.log('--| loadFichaTecnica')
    if (controller) {
            controller.abort();
    }
    controller = new AbortController();
    cargando.value = true;

    const response = await crudApiService().getById<TCrud>('medio', route.params.id_medio as string);
        medioImpugnacion.value = await response?.data as TMedioImpugnacion;

    if(response?.data?.status === 'success'){
        formData.n_id_medio_impugnacion = medioImpugnacion.value.n_id_medio_impugnacion
        formData.n_id_medio_impugnacion_principal = medioImpugnacion.value.n_id_medio_impugnacion_principal
        formData.s_expediente = medioImpugnacion.value.s_expediente
        formData.s_email_autor = medioImpugnacion.value.s_email_autor
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
        formData.s_publicacion = medioImpugnacion.value.s_publicacion
        console.log(formData)
    }
    cargando.value = false;        
}

watch(medioImpugnacion, () => {
    formData.n_id_medio_impugnacion = medioImpugnacion.value.n_id_medio_impugnacion
    formData.n_id_medio_impugnacion_principal = medioImpugnacion.value.n_id_medio_impugnacion_principal
    formData.s_expediente = medioImpugnacion.value.s_expediente
    formData.s_email_autor = medioImpugnacion.value.s_email_autor

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
    formData.s_publicacion = medioImpugnacion.value.s_publicacion
})

/****
 *  Guardar
 */
 const submitFormulario = async () => {
    console.log('submitFormulario [ ' + medioImpugnacion.value?.n_id_medio_impugnacion + ']')
    guardando.value = true;
    let response: TCrud;
    try {
        if (isActionEditar ){
            response = await crudApiService().update<TCrud>('medio',
            '' + medioImpugnacion.value?.n_id_medio_impugnacion as string, formData) as TCrud;
        } else {
            response = await crudApiService().store<TCrud>('medio', formData) as TCrud;
        }
        if (response?.status ==='success'){
            let medio: TMedioImpugnacion = response?.data as TMedioImpugnacion;
            const n_id_medio_impugnacion = medio.n_id_medio_impugnacion
            guardarAcuerdos (n_id_medio_impugnacion )
            guardarVinculados(n_id_medio_impugnacion)
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
    }
 }

 //-- Acuerdos
  const guardarAcuerdos = (id_medio_impugnacion: number ) => {
    //-- 1 Acuerdos de instrucción
    try {
        acuerdos_instruccion.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 ){
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- 2 Acuerdos de plenarios
    try {
        acuerdos_plenarios.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 ){
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- 3 Acuerdos de resolución
    try {
        acuerdos_resolucion.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 ){
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- 3 Acuerdos de incidentes
    try {
        acuerdos_incidentes.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 ){
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
 }

 //-- Vinculados
 const guardarVinculados= (id_medio_impugnacion: number) => {
    try {
        vinculados.value.forEach(async vinculado => {
            vinculado['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (vinculado.n_id_exp_vinculado === 0 ){
                await crudApiService().store<TCrud>('vinculados', vinculado) as TCrud;
            } else {
                await crudApiService().update<TCrud>('vinculados', vinculado?.n_id_exp_vinculado?.toString(), vinculado) as TCrud;
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
 }

//--- Carga de multiples archivos
    /* file__b64_s_url_sentencia_doc
    file__b64_s_url_sentencia_pdf */


const onFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const archivo = target.files[0]; 
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = async () => {
            if (target.id === 'file__s_url_sentencia_pdf') {
                formData.file__b64_s_url_sentencia_pdf =  reader?.result?.split(",")[1]
                formData.s_url_sentencia_pdf = archivo.name
            }    
            if (target.id === 'file__s_url_sentencia_doc') {
                formData.file__b64_s_url_sentencia_doc =  reader?.result?.split(",")[1]
                formData.s_url_sentencia_doc = archivo.name
            }
            if (target.id === 'file__s_url_infografia') {
                formData.file__b64_s_url_infografia =  reader?.result?.split(",")[1]
                formData.s_url_infografia = archivo.name
            }
        }
    }
}


//---| Reemplazar
let showRemoverAcuerdo = ref(false);

//--| 
let controller: any;
/***
 * Catálogos
*/
//--- loadFormData







/* function guardarFormulario(){
    console.log('guardarFormulario [ ' + medioImpugnacion.value?.n_id_medio_impugnacion + ']')

} */



/* function removerAcuerdo() {
    console.log("Remover acuerdo")
} */





/* FileUpload */
const documentos = ref([]);
const selected_file_pdf = ref<File | null>(null);
const selected_file_doc = ref<File | null>(null);
const is_submit_form_pdf = ref(false);
const is_submit_form_doc = ref(false);
const onFileChangeOldOk = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.id == 'formSentenciaPDF' && target.files && target.files.length > 0) {
        console.log(target.id);
        selected_file_pdf.value = target.files[0];
        formData.s_url_sentencia_pdf = target.files[0].name
    }
    if (target.id == 'formSentenciaDOC' && target.files && target.files.length > 0) {
        console.log(target.id);
        selected_file_doc.value = target.files[0];
        formData.s_url_sentencia_doc = target.files[0].name
    }
};

const uploadFiles = async () => {

    const uploadUrl = import.meta.env.VITE_GJE_API + '/api/gje/upload'

    if (!selected_file_pdf.value) {
        return;
    }

    const formDataFile = new FormData();
    formDataFile.append('file', selected_file_pdf.value);
    formDataFile.append('n_id_medio_impugnacion', formData?.n_id_medio_impugnacion.toString());
    formDataFile.append('s_expediente', formData.s_expediente)
    formDataFile.append('s_tipo_documento', 'SENTENCIA')
    formDataFile.append('s_path_repositorio', '/gje/2024')
    formDataFile.append('s_file_repositorio', formData.s_url_sentencia_pdf)
    // formDataFile.append('d_doc_fecha_hora','2024-07-01 10:40:00')



    try {

        console.log('uploadUrl:' + uploadUrl)
        console.log('formDataFile:')
        console.log(formDataFile)
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formDataFile,
        });
        console.log("FileUpload - response:")
        console.log(response)
        if (response.ok) {
            ///  alert('Se subió el archivo de la sentencia!');
            ///formData.s_url_sentencia_pdf = response?.data?.
            console('Upload ok' + selected_file_pdf.value)

        } else {
            //  alert('Failed to upload file.');
            console.log("Error al subir el archivo." + selected_file_pdf.value)
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        //alert('Error uploading file.');
    }
};

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
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
                            <li class="breadcrumb-item">
                                <router-link to="/gje/admin">Administración</router-link>
                            </li>
                            <li class="breadcrumb-item active">Editar Ficha Técnica.</li>
                            
                        </ol>

                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
        <!-- <form @submit.prevent="submitFormulario">-->
        <form @submit.prevent="">
            <!-- Barra botones ficha técnica-->

            <div class="row mb-2 mt-4 ms-2" style="">
                <div class="d-flex justify-content-between items-center">
                    <h2 v-if="isActionEditar===false" class="encabezado">Agregar  Ficha Técnica</h2>
                    <h2 v-if="isActionEditar===true" class="encabezado">Editar Ficha Técnica</h2>
                    <BarraBotonesFichaTécnica :guardando=guardando :cargando=cargando :n_id_medio_impugnacion=formData.n_id_medio_impugnacion
                        @onCancelar="onCancelar" @onPrevisualizar="onPrevisualizar" @submitFormulario="submitFormulario"
                        @onPublicar="onPublicar" />
                </div>
            </div>




            <!-- .\ Ficha -->
            <spinner-guardando :trabajando="guardando"/>
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


                    <!-- #3 Subir Turnao-->
                    <div class="d-flex  flex-row  justify-content-between">
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
                                <textarea v-model="formData.s_tematica" cols="50" rows="3" placeholder="___"></textarea>
                            </div>
                        </div>
                    </div>
                    <!-- #10 Returno-->
                    <div class="renglon">
                        <!-- d-flex flex-column bd-highlight mb-3-->
                        <div class="columna">
                            <h3> Returno a:</h3>

                            <select v-model="formData.n_id_ponencia_returno" name="n_id_ponencia_returno"
                                id="n_id_ponencia_returno">
                                <option disabled>Seleccione Ponencia</option>
                                <option :value="ponencia.n_id_ponencia" v-for="ponencia in catPonencia"
                                    :key="ponencia.n_id_ponencia">
                                    {{ ponencia.s_magistrado }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <!-- Renglon 2-->
                    <div class="d-flex  flex-row  justify-content-between">
                        <div class="renglon">
                            <div class="columna">
                                <h3>Fecha de presentación de demanda</h3>
                                <input class="form-control mb-2" type="date" v-model="formData.d_fecha_recepcion">
                            </div>

                            <div class="columna">
                                <h3>Tipo de medio</h3>
                                <select v-model="formData.n_id_tipo_medio" name="n_id_tipo_medio" id="n_id_tipo_medio">
                                    <option>Seleccionar Tipo de medio</option>
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
                            <h3>Síntesis de sentencia</h3>

                            <textarea v-model="formData.s_sintesis" cols="100" rows="3" placeholder="___"></textarea>
                        </div>

                    </div>
                    <div class="renglon">
                        <div class="columna">

                            <h3>Tipo de acto impugnado: <br /></h3>
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_tipo_acto_impugnado">

                        </div>

                        <div class="renglon align-middle">
                            <div class="columna ">
                                <h3> Testar</h3>
                                <input type="checkbox" :true-value="1" :false-value="0" id="chk_b_testar_parte_actora"
                                    v-model="formData.b_testar_parte_actora" />
                            </div>
                            <div class="columna">
                                <h3> Parte Actora </h3>
                                <input class="form-control mb-2" size="40" type="text"
                                    v-model="formData.s_parte_actora">
                            </div>
                        </div>
                    </div>
                    <div class="renglon">

                        <div class="columna ">
                            <h3> Testar</h3>
                            <input type="checkbox" :true-value="1" :false-value="0"
                                id="chk_b_testar_autoridad_responsable"
                                v-model="formData.b_testar_autoridad_responsable" />
                        </div>
                        <div class="columna">
                            <h3>Autoridad demandada u órgano responsable:</h3>
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_autoridad_responsable">
                        </div>

                        <div class="columna ">
                            <h3> Testar</h3>
                            <input type="checkbox" :true-value="1" :false-value="0" id="chk_b_testar_tercer_interesado"
                                v-model="formData.b_testar_tercer_interesado" />
                        </div>
                        <div class="columna">

                            <h3>Partido o persona tercera interesada</h3>
                            <input class="form-control mb-2" size="40" type="text"
                                v-model="formData.s_tercer_interesado">

                        </div>
                    </div>
                </div>
                <!-- ./ Expediente -->

                <!-- Inicio Acuerdo Plenario -->
                <div class="section">
                    <h2>Acuerdos plenarios</h2>
                    <div class="renglon">
                        <tabla-acuerdos v-model:acuerdos=acuerdos_plenarios v-model:cat_votacion=catVotacion
                            v-model:cargando=cargando :tipo_acuerdo=12></tabla-acuerdos>
                    </div>
                </div>
                <!-- Renglon 6-->



                <!-- Inicio Acuerdo Resolución -->
                <!-- Renglon 7-->
                <div class="section">
                    <h2>Resolución</h2>
                    <div class="renglon">
                        <tabla-acuerdos v-model:acuerdos=acuerdos_resolucion v-model:cat_votacion=catVotacion
                            v-model:cargando=cargando :tipo_acuerdo=13></tabla-acuerdos>
                    </div>
                </div>

                <!-- .\ Incidentes -->
                <!-- Renglon 8-->
                <div class="section">
                    <h2>Incidentes</h2>
                    <div class="renglon">
                        <tabla-acuerdos v-model:acuerdos=acuerdos_incidentes v-model:cat_votacion=catVotacion
                            v-model:cargando=cargando :tipo_acuerdo=14></tabla-acuerdos>
                    </div>
                </div>

                <!-- .\ Síntesis -->
                <!-- Renglon 9-->
                <div class="section">
                    <h2>Infografía</h2>

                    <div class="renglon">

                        <div class="columna">
                            <h3>Infografía:</h3>
                            <input class="form-control form-control-sm" type="file" id="file__s_url_infografia"
                                @change="onFileChange" accept=".pdf" />
                            <a target="_blank" :href="`${urlSentencias}${formData?.s_url_sentencia_doc}`">
                                {{ formData?.s_url_infografia }}
                            </a>


                        </div>

                    </div>
                </div>

                <input type="hidden" name="s_email_autor" v-model="formData.s_email_autor" />
                <br>
            </div>
            <!-- ./ Ficha -->
            <div class="row mb-2 mt-4 ms-2" style="">
                <div class="d-flex justify-content-between items-center">
                    <div></div>
                    <BarraBotonesFichaTécnica :guardando=guardando :cargando=cargando :n_id_medio_impugnacion=formData.n_id_medio_impugnacion
                        @onCancelar="onCancelar" @onPrevisualizar="onPrevisualizar" @submitFormulario="submitFormulario"
                        @onPublicar="onPublicar" />
                </div>
            </div>
           
        </form>
    </div>

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
import IconFeatherLoader from "@/assets/svg/IconFeatherLoader.vue";
import type { TCrud } from '@/core/types/gje/crud.t'

import type { TExpVinculado } from '@/core/types/gje/exp-vinculado.t'
import type { TTipoMedio } from "@/core/types/gje/tipo-medio.t";
import type { TPonencia } from "@/core/types/gje/ponencia.t";
import type { TTipoAcuerdo } from "@/core/types/gje/tipo-acuerdo.t";

import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import type { TMedioImpugnacion } from '@/core/types/gje/medio-impugnacion.t'


import { useAuthStore } from "@/stores/m8-auth"
const authStore = useAuthStore();

import BarraBotonesFichaTécnica from "@/components/apps/gje/BarraBotonesFichaTécnica.vue";
import TablaAcuerdos from '@/components/apps/gje/TablaAcuerdos.vue'
import SpinnerGuardando from "@/components/apps/gje/SpinnerGuardando.vue";

import IconHome from '@/assets/svg/IconHome.vue'

// const isActionCreate = route.name === 'sge-admin-agregar'
const isActionEditar = route.name === 'sge-admin-editar'
const urlSentencias = import.meta.env.VITE_API_GJE + '/api/gje/sentencia/'


//const EMAIL_AUTOR_SEG = 'isai.fararoni@tecdmx.org.mx'
const EMAIL_AUTOR_SEG = authStore.user.email;

const cargando: any = ref(true);
const guardando: any = ref(false)

//-- (1) Catálogos constantes
const catTiposVinculacion = [
    { s_tipo_vinculacion: "Acumulación" },
    { s_tipo_vinculacion: "Escisión" },
    { s_tipo_vinculacion: "Reencauzamiento" },
];

const catVotacion = [
    { s_tipo_votacion: "Mayoría" },
    { s_tipo_votacion: "Unanimidad" }
];

//-- (2) Catálogos base de datos
const catTipoMedio = ref<[TTipoMedio]>();
const catPonencia = ref<[TPonencia]>();
const catTiposDeAcuerdo = ref<[TTipoAcuerdo]>()

//-- (3) Editar, expedientes vinculados
const vinculadosEmpty: TExpVinculado = {
    n_id_exp_vinculado: 0,
    n_id_medio_impugnacion: 0,
    s_tmp_expediente_vinculado: '',
    s_tipo_vinculacion: ''
};

//-- (4) Expedientes vinculados
const vinculados = ref<TExpVinculado[]>([])

//-- (5) Acuerdos
const acuerdos_instruccion = ref<TAcuerdo[]>([])
const acuerdos_plenarios = ref<TAcuerdo[]>([])
const acuerdos_resolucion = ref<TAcuerdo[]>([])
const acuerdos_incidentes = ref<TAcuerdo[]>([])

//-- (6) Medio de impugacion
let medioImpugnacion: any = reactive({});

import { useAuthAzure } from '@/core/composables/useAuthAzure'

const { initializeMsal, handleRedirect, registerAuthorizationHeaderInterceptor, state } = useAuthAzure()


onMounted(async () => {


    await handleInitialize()
    await handleRedirect()

    loadCatalogos();
    if (isActionEditar) {
        loadFichaTecnica()
    }
    loadVinculados()
    loadAcuerdos();
    cargando.value = false
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

const handleInitialize = async () => {
    await initializeMsal()
    registerAuthorizationHeaderInterceptor() // Call the initialize function
}


const loadCatTipoMedio = async () => {
    const response = await crudApiService().getAll<TCrud>('cat/tipo-medio');
    catTipoMedio.value = await response?.data as [TTipoMedio]
}

const loadCatPonencia = async () => {
    const response = await crudApiService().getAll<TCrud>('cat/ponencia');
    catPonencia.value = await response?.data as [TPonencia]
}

const loadCatTiposDeAcuerdo = async () => {
    const response = await crudApiService().getAll<TCrud>('cat/tipo-acuerdo/s_tipo/INSTRUCCIÓN');
    catTiposDeAcuerdo.value = await response?.data as [TTipoAcuerdo]
}

//-----------------------| Expedientes vinculados
function agregarVinculacion() {
    vinculados.value.push(vinculadosEmpty);
}

const loadVinculados = async () => {
    if (isActionEditar) {
        console.log('loadVinculados--isActionEditar[' + isActionEditar + "]")
        const response = await crudApiService().getById<TCrud>('vinculados/medio', route.params.id_medio as string);
        console.log(response)
        // const  todosVinculados: TExpVinculado[] = await response?.data as [TExpVinculado];
        vinculados.value = await response?.data as [TExpVinculado];
    }
    if (Object.keys(vinculados.value).length === 0) {
        console.log('loadVinculados--isActionEditar[' + isActionEditar + "]")
        vinculados.value.push(vinculadosEmpty);
        console.log(vinculados.value)
    }
}
//-----------------------| Acuerdos
const emptyAcuerdo = (id_tipo_acuerdo: number): TAcuerdo => {
    return {
        n_id_acuerdo: 0,
        n_id_medio_impugnacion: 0,
        n_id_tipo_acuerdo: id_tipo_acuerdo,
        d_fecha_acuerdo: '',
        s_punto_acuerdo: '',
        s_numero_votos: '',
        s_url_sentencia_pdf: ''
    }
}


const loadAcuerdos = async () => {
    console.log('loadAcuerdos - isActionEditar[' + isActionEditar + "]")
    let todosAcuerdos: TAcuerdo[];
    if (isActionEditar) {
        const response = await crudApiService().getAll<TCrud>('acuerdos/n_id_medio_impugnacion/' + route.params.id_medio as string);
        todosAcuerdos = await response?.data as [TAcuerdo];
    } else {
        todosAcuerdos = [];
    }
    console.log('loadAcuerdos - todosAcuerdos:')
    console.log(todosAcuerdos)
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

    //formData.n_id_ponencia_returno = medioImpugnacion.value.n_id_ponencia_returno
    n_id_ponencia_returno: null,

    s_tematica: '',
    s_sintesis: '',
    s_url_infografia: '',
    //--
    s_publicacion: 'Guardar',

    b_testar_parte_actora: 0,
    b_testar_tercer_interesado: 0,
    b_testar_autoridad_responsable: 0,

    //-- 
    file__s_url_sentencia_doc: '', /* Campo FILE en el formulario */
    file__s_url_sentencia_pdf: '',
    file__b64_s_url_sentencia_doc: '',   /* Base64 que será enviado */
    file__b64_s_url_sentencia_pdf: '',
    file__s_url_infografia: '',
    file__b64_s_url_infografia: ''


})

const loadFichaTecnica = async () => {
    console.log('--| loadFichaTecnica')
    if (controller) {
        controller.abort();
    }
    controller = new AbortController();
    cargando.value = true;

    const response = await crudApiService().getById<TCrud>('medio', route.params.id_medio as string);
    console.log(response)
    medioImpugnacion.value = await response?.data as TMedioImpugnacion;

    if (response?.data?.status === 'success') {
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
        formData.n_id_ponencia_returno = medioImpugnacion.value.n_id_ponencia_returno
        formData.s_tematica = medioImpugnacion.value.s_tematica
        formData.s_sintesis = medioImpugnacion.value.s_sintesis
        formData.s_url_infografia = medioImpugnacion.value.s_url_infografia
        formData.s_publicacion = medioImpugnacion.value.s_publicacion

        formData.b_testar_parte_actora = (!medioImpugnacion.value.b_testar_parte_actora ? 0 : medioImpugnacion.value.b_testar_parte_actora)
        formData.b_testar_tercer_interesado = medioImpugnacion.value.b_testar_tercer_interesado
        formData.b_testar_autoridad_responsable = medioImpugnacion.value.b_testar_autoridad_responsable


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

    formData.n_id_ponencia_returno = medioImpugnacion.value.n_id_ponencia_returno
    formData.s_tematica = medioImpugnacion.value.s_tematica

    formData.s_sintesis = medioImpugnacion.value.s_sintesis
    formData.s_url_infografia = medioImpugnacion.value.s_url_infografia
    formData.s_publicacion = medioImpugnacion.value.s_publicacion

    formData.b_testar_parte_actora = medioImpugnacion.value.b_testar_parte_actora
    formData.b_testar_tercer_interesado = medioImpugnacion.value.b_testar_tercer_interesado
    formData.b_testar_autoridad_responsable = medioImpugnacion.value.b_testar_autoridad_responsable

})

/***
 *  Eventos botones del formulario
 */
const onCancelar = () => {
    router.push({ name: 'sge-admin-listar' });
}

const onPrevisualizar = async () => {
    formData.s_publicacion = 'Previsualizar'

    await submitFormulario()
    router.push({ name: 'gje-ficha-tecnica', params: { n_id_medio_impugnacion: formData.n_id_medio_impugnacion } });


}
const onPublicar = async () => {
    if (formData.n_id_medio_impugnacion !== 0) {
        formData.s_publicacion = 'Publicar'
    } else {
        formData.s_publicacion = 'Guardar'
    }

    await submitFormulario()
    router.push({ name: 'sge-admin-listar' });
}
/****
 *  Guardar
 */

const submitFormulario = async () => {
    console.log('-----------------------------submitFormulario [ ' + medioImpugnacion.value?.n_id_medio_impugnacion + ']')
    guardando.value = true;
    let response: TCrud;

    try {
        formData.s_email_autor = state.user?.username as string

        if (isActionEditar) {
            response = await crudApiService().update<TCrud>('medio',
                '' + medioImpugnacion.value?.n_id_medio_impugnacion as string, formData) as TCrud;
        } else {
            response = await crudApiService().store<TCrud>('medio', formData) as TCrud;

        }
        if (response?.status === 'success') {
            let medio: TMedioImpugnacion = response?.data as TMedioImpugnacion;
            const n_id_medio_impugnacion = medio.n_id_medio_impugnacion
            formData.n_id_medio_impugnacion = n_id_medio_impugnacion
            guardarVinculados(n_id_medio_impugnacion)
            guardarAcuerdos(n_id_medio_impugnacion)
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
    }
    guardando.value = false;
}

//-- Acuerdos
const guardarAcuerdos = (id_medio_impugnacion: number) => {
    console.log('--------- guardarAcuerdos:' + id_medio_impugnacion);
    //-- 2 Acuerdos de plenarios
    try {
        acuerdos_plenarios.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 && acuerdo.d_fecha_acuerdo !== '') {
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else if (acuerdo.n_id_acuerdo !== 0 && acuerdo.n_id_medio_impugnacion != 0) {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            } else {
                console.log('--------- guardarAcuerdos-acuerdos_plenarios: no store/updtae');
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- 3 Acuerdos de resolución
    try {
        acuerdos_resolucion.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 && acuerdo.d_fecha_acuerdo !== '') {
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else if (acuerdo.n_id_acuerdo !== 0 && acuerdo.n_id_medio_impugnacion != 0) {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            } else {
                console.log('--------- guardarAcuerdos-acuerdos_resolucion: no store/updtae');
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
    //-- 3 Acuerdos de incidentes
    try {
        acuerdos_incidentes.value.forEach(async acuerdo => {
            acuerdo['n_id_medio_impugnacion'] = id_medio_impugnacion
            if (acuerdo.n_id_acuerdo === 0 && acuerdo.d_fecha_acuerdo !== '') {
                await crudApiService().store<TCrud>('acuerdos', acuerdo) as TCrud;
            } else if (acuerdo.n_id_acuerdo !== 0 && acuerdo.n_id_medio_impugnacion != 0) {
                await crudApiService().update<TCrud>('acuerdos', acuerdo?.n_id_acuerdo?.toString(), acuerdo) as TCrud;
            } else {
                console.log('--------- guardarAcuerdos-acuerdos_incidentes: no store/updtae');
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
}

//-- Vinculados
const guardarVinculados = (id_medio_impugnacion: number) => {
    console.log('--------- guardarVinculados:' + id_medio_impugnacion);

    try {
        vinculados.value.forEach(async vinculado => {
            vinculado['n_id_medio_impugnacion'] = id_medio_impugnacion
            console.log('--------- vinculado.n_id_medio_impugnacion:[' + vinculado.n_id_medio_impugnacion + ']');
            console.log('--------- vinculado.n_id_exp_vinculado:[' + vinculado.n_id_exp_vinculado + ']');
            console.log('--------- vinculado.s_tmp_expediente_vinculado:[' + vinculado.s_tmp_expediente_vinculado + ']');
            if (vinculado.n_id_exp_vinculado === 0 && vinculado.s_tmp_expediente_vinculado !== '') {
                await crudApiService().store<TCrud>('vinculados', vinculado) as TCrud;
            } else if (vinculado.n_id_exp_vinculado !== 0 && vinculado.n_id_medio_impugnacion !== 0) {
                await crudApiService().update<TCrud>('vinculados', vinculado?.n_id_exp_vinculado?.toString(), vinculado) as TCrud;
            } else {
                console.log('--------- guardarVinculados: no store/updtae');
            }
        })
    } catch (error) {
        console.error('Error al Guardar los acuerdos:', error);
    }
}
const onFileChange = async (event: Event) => {

    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
        const archivo = target.files[0];
        console.log('onFileChange : ' + archivo.name)
        cargando.value = true
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = async () => {
            const infografia_name = archivo.name.replace(/\s/g, "-")
            const infografia_b64 = reader?.result?.split(",")[1]
            formData.s_url_infografia = infografia_name
            formData.file__b64_s_url_infografia = infografia_b64
            cargando.value = false
            console.log("Infografía..." + formData.s_url_infografia + ":" + formData?.file__b64_s_url_infografia?.substring(formData?.file__b64_s_url_infografia.length - 20, formData?.file__b64_s_url_infografia.length))
        }
    }
}


//---| Reemplazar
let showRemoverAcuerdo = ref(false);

//--| 
let controller: any;

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
    margin-bottom: 16px;
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
</style>
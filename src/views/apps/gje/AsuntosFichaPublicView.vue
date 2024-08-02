<template>
    <div class="container">
        <!-- .\Breadcrum -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="col-md-11">
                <div>
                    <nav class="align-items-center" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="https://www.tecdmx.org.mx">
                                    <IconHome />
                                </a>
                            </li>
                            <li class="breadcrumb-item">Gestión Judicial Electoral</li>
                            <li class="breadcrumb-item"><a href="/gje/">Asuntos</a></li>
                            <li class="breadcrumb-item active">Ficha Técnica.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->


        <!-- .\Titulo y botón buscar   -->
        <div class="row mb-4 mt-4">
            <div class="d-flex justify-content-start">
                <h2 class="encabezado">Ficha Técnica</h2>
            </div>
        </div>
        <!--./Titulo y botón buscar  -->

        <!-- .\ Ficha -->
        <div class="ficha-container">

            <!-- .\Header Expediente  -->
            <div class="header">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <h3>NÚMERO DE EXPEDIENTE</h3>
                    <h1>{{ medioImpugnacion?.value?.s_expediente }}</h1>
                </div>
                <div>
                    <vue-qrcode :value="`${urlFichaTecnica}`" />
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
                            <h3>Fecha de presentación de demanda</h3>
                            <p>{{ medioImpugnacion?.value?.d_fecha_recepcion }}</p>
                        </div>

                        <div class="columna">
                            <h3>Tipo de medio</h3>
                            <p>{{ medioImpugnacion?.value?.s_desc_tipo_medio }}</p>
                        </div>
                    </div>
                    <div class="renglon">

                        <div class="columna align-items-center" v-if="formData?.s_url_infografia">
                            <h3>Infografía</h3>
                            <a target="_blank" :href="`${formData?.s_url_infografia}`">
                                <img src="@/assets/tecdmx/images/icon_info_down_white.png" width="38px" height="48px"
                                    style="border-radius: 6px;" alt="pdf" class="me-2" />
                            </a>
                        </div>


                        <div class="columna align-items-center">
                            <h3>Imprimir</h3>
                            <img src="@/assets/tecdmx/images/icon_print_down_white.png" width="48px" height="48px"
                                style="border-radius: 10px;" alt="pdf" onclick="window.print()">

                        </div>

                    </div>
                </div>


                <!--#3 Mover -->
                <div class="renglon">
                    <!-- d-flex flex-column bd-highlight mb-3-->
                    <div class="columna">
                        <h3> Turnado a:</h3>
                        <!-- <p>{{ medioImpugnacion?.value?.s_magistrado }}</p> -->
                        <select readonly v-model="formData.n_id_ponencia_instructora" name="n_id_ponencia_instructora"
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
                        <p>{{ medioImpugnacion?.value?.s_tematica }}</p>

                    </div>
                </div>

                <!-- #10 Returno-->
                <div class="renglon">
                    <!-- d-flex flex-column bd-highlight mb-3-->
                    <div class="columna">
                        <h3> Returno a:</h3>
                        <!-- <p>{{ medioImpugnacion?.value?.s_magistrado }}</p> -->
                        <select readonly v-model="formData.n_id_ponencia_returno" name="n_id_ponencia_returno"
                            id="n_id_ponencia_returno">
                            <option disabled>Seleccione Ponencia</option>
                            <option :value="ponencia.n_id_ponencia" v-for="ponencia in catPonencia"
                                :key="ponencia.n_id_ponencia">
                                {{ ponencia.s_magistrado }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- Renglon 3-->
                <div class="renglon">
                    <div class="columna">
                        <h3>Acto impugnado</h3>
                        <p class="text-justify">{{ medioImpugnacion?.value?.s_acto_impugnado_testado }}</p>
                    </div>
                </div>
                <div class="renglon">

                    <div class="columna">
                        <p><strong>Síntesis de sentencia:</strong> </p>
                        <p class="text-justify">{{ medioImpugnacion?.value?.s_sintesis }}</p>
                    </div>

                </div>
                <div class="renglon mb-1">
                    <div class="columna">

                        <h3>Tipo de acto impugnado: <br /></h3>
                        <p>{{ medioImpugnacion?.value?.s_tipo_acto_impugnado }}</p>

                    </div>
                    <div class="columna" v-if="medioImpugnacion?.value?.b_testar_parte_actora != 1">

                        <h3> Parte actora </h3>
                        <p>{{ medioImpugnacion?.value?.s_parte_actora }}</p>
                    </div>
                    <div class="columna" v-else>

                        <h3>Parte actora</h3>
                        <!-- <p>[DATO PROTEGIDO]</p> -->
                        <p>[dato protegido]</p>

                    </div>

                </div>
                <div class="renglon">
                    <div class="columna" v-if="medioImpugnacion?.value?.b_testar_autoridad_responsable != 1">

                        <h3>Autoridad demandada u órgano responsable:</h3>
                        <p>{{ medioImpugnacion?.value?.s_autoridad_responsable }}</p>

                    </div>
                    <div class="columna" v-else>

                        <h3>Autoridad demandada u órgano responsable:</h3>
                        <!-- <p>[DATO PROTEGIDO]</p> -->
                        <p>[dato protegido]</p>

                    </div>
                    <div class="columna" v-if="medioImpugnacion?.value?.b_testar_tercer_interesado != 1">

                        <h3>Partido o persona tercera interesada</h3>
                        <p>{{ medioImpugnacion?.value?.s_tercer_interesado }}</p>
                    </div>
                    <div class="columna" v-else>

                        <h3>Partido o persona tercera interesada</h3>
                        <!-- <p>[DATO PROTEGIDO]</p> -->
                        <p>[dato protegido]</p>

                    </div>
                </div>
            </div>
            <!-- ./ Expediente -->
            <!-- Inicio Acuerdo Plenario -->
            <!-- Renglon 6-->
            <div class="section" v-if="acuerdos_plenarios.length > 0">
                <h2>Acuerdos plenarios</h2>
                <div class="renglon">
                    <table class="table  item-table">
                        <thead>
                            <tr>
                                <!-- <th class=""></th>-->

                                <th class="">Fecha de Acuerdo</th>
                                <th class="">Puntos de Acuerdo</th>
                                <th class="">Votación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="acuerdo in acuerdos_plenarios" :key="acuerdo.n_id_acuerdo">
                                <td>
                                    <p style="font-size: 1.125rem;">{{ acuerdo.d_fecha_acuerdo }}</p>
                                </td>
                                <td>
                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_punto_acuerdo }}</p>
                                    <a target="_blank" :href="`${urlSentencias}${acuerdo?.s_url_sentencia_pdf}`">
                                        {{ acuerdo?.s_url_sentencia_pdf }}
                                    </a>
                                </td>
                                <td>
                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_numero_votos }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <!-- Inicio Acuerdo Resolución -->
            <!-- Renglon 7-->
            <div class="section" v-if="acuerdos_resolucion.length > 0">
                <h2>Resolución</h2>
                <div class="renglon">
                    <table class="table  item-table">
                        <thead>
                            <tr>
                                <!-- <th class=""></th>-->

                                <th>
                                    <h3>Fecha de resolución</h3>
                                </th>
                                <th>
                                    <h3>Resolutivos</h3>
                                </th>
                                <th>
                                    <h3>Votación</h3>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="acuerdo in acuerdos_resolucion" :key="acuerdo.n_id_acuerdo">
                                <td class="rate">
                                    <p style="font-size: 1.125rem;">{{ acuerdo.d_fecha_acuerdo }}</p>
                                </td>
                                <td class="rate">
                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_punto_acuerdo }}</p>
                                    <a target="_blank" :href="`${acuerdo?.s_url_sentencia_pdf}`">
                                        <!-- {{ acuerdo?.s_url_sentencia_pdf }} -->
                                        {{ split_url(acuerdo?.s_url_sentencia_pdf + "") }}
                                    </a>
                                </td>
                                <td class="rate">
                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_numero_votos }}</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- .\ Incidentes -->
            <!-- Renglon 8-->
            <div class="section" v-if="acuerdos_incidentes.length > 0">
                <h2>Incidentes</h2>
                <div class="renglon">
                    <table class="table  item-table">
                        <thead>
                            <tr>
                                <th>
                                    <h3>Fecha de resolución</h3>
                                </th>
                                <th>
                                    <h3> Puntos de acuerdo</h3>
                                </th>
                                <th>
                                    <h3>Votación</h3>
                                </th>
                                <th>
                                    <h3> Sentencias </h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="acuerdo in acuerdos_incidentes" :key="acuerdo.n_id_acuerdo">
                                <td class="rate">
                                    <p style="font-size: 1.125rem;">{{ acuerdo.d_fecha_acuerdo }}</p>
                                </td>
                                <td class="rate">
                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_punto_acuerdo }}</p>

                                </td>
                                <td class="rate">

                                    <p style="font-size: 1.125rem;">{{ acuerdo.s_numero_votos }}</p>
                                </td>
                                <td class="rate">
                                    <!-- {{ acuerdo?.s_url_sentencia_pdf }} -->
                                    <a target="_blank" :href="`${acuerdo?.s_url_sentencia_pdf}`">
                                        <!-- {{ acuerdo?.s_url_sentencia_pdf }} -->
                                        {{ split_url(acuerdo?.s_url_sentencia_pdf + "") }}
                                    </a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <!-- .\ Síntesis -->

        </div>
        <!-- ./ Ficha -->
        <p class="p-nota"> NOTA: Esta ficha no tiene efectos jurídicos o vinculantes, los datos contenidos son meramente
            informativos.</p>
    </div>

</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'
import VueQrcode from 'vue-qrcode'
import IconHome from '@/assets/svg/IconHome.vue'
/***
 *  Modals
 */
// import '@/assets/tecdmx/sass/scrollspyNav.scss';

/*
*
***/
import { useHead } from '@unhead/vue';
useHead({ title: "Ver Asunto" });

const route = useRoute();
const router = useRouter();

import { crudApiService } from '@/core/services/axios/CrudApiService'
import type { TCrud } from '@/core/types/gje/crud.t'
import type { TExpVinculado } from '@/core/types/gje/exp-vinculado.t'
import type { TAcuerdo } from '@/core/types/gje/acuerdo.t'
import type { TMedioImpugnacion } from '@/core/types/gje/medio-impugnacion.t'
import type { TTipoMedio } from "@/core/types/gje/tipo-medio.t";
import type { TPonencia } from "@/core/types/gje/ponencia.t";
import type { TTipoAcuerdo } from "@/core/types/gje/tipo-acuerdo.t";
import { log } from "console";


let medioImpugnacion: any = reactive({});
// const urlSentencias = import.meta.env.VITE_API_GJE + '/api/gje/sentencia/'
/// https://repositorio.tecdmx.org.mx/gje/2024/sentencia/TECDMX-JEL-001-2024--INFOGRAFIA.pdf
const urlSentencias = 'https://repositorio.tecdmx.org.mx/gje/2024/sentencia/'
const urlFichaTecnica = import.meta.env.VITE_GJE_APP_VUE + '/gje/ficha-tecnica/' + route.params.id_medio as string


const EMAIL_AUTOR_SEG = 'isai.fararoni@tecdmx.org.mx'
const catPonencia = ref<[TPonencia]>();
// import { plugin, defaultConfig } from '@formkit/vue'

onMounted(() => {

    loadCatPonencia();
    loadCatTipoMedio();
    loadCatTiposDeAcuerdo();

    loadVinculados();
    loadAcuerdos();
    loadFormData();



});

let showRemoverAcuerdo = ref(false);

const loading: any = ref(true);
let controller: any;

/***
 * Catálogos
*/
let catTiposVinculacion = [
    { s_tipo_vinculacion: "Acumulación" },
    { s_tipo_vinculacion: "Escisión" },
    { s_tipo_vinculacion: "Reencauzamiento" },
];

let catVotacion = [
    { s_tipo_votacion: "Mayoría" },
    { s_tipo_votacion: "Unanimidad" }
];

/* let catPonencia = ref<[{ n_id_ponencia: number, s_magistrado: string, desc_titular: string }]>(); */
let catTipoMedio = ref<[{ n_id_tipo_medio: number, s_desc_tipo_medio: string }]>();
let catTiposDeAcuerdo = ref<[{ n_id_tipo_acuerdo: number, s_tipo_acuerdo: string }]>()
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
/*--------------*/
//-----------------------| Expedientes vinculados
const vinculados = ref<TExpVinculado[]>([])
const loadVinculados = async () => {
    const response = await crudApiService().getById<TCrud>('vinculados/medio', route.params.id_medio as string);
    let todosVinculados: TExpVinculado[] = await response?.data as [TExpVinculado];
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
//-----------------------| Acuerdos
const acuerdos_instruccion = ref<TAcuerdo[]>([])
const acuerdos_plenarios = ref<TAcuerdo[]>([])
const acuerdos_resolucion = ref<TAcuerdo[]>([])
const acuerdos_incidentes = ref<TAcuerdo[]>([])
const loadAcuerdos = async () => {
    const response = await crudApiService().getAll<TCrud>('acuerdos/n_id_medio_impugnacion/' + route.params.id_medio as string);
    // TODO EMAIL_AUTOR_SEG
    let todosAcuerdos: TAcuerdo[] = await response?.data as [TAcuerdo];

    //-- Acuerdos de Instrucción 01
    const filtroInstruccion = todosAcuerdos.filter((unAcuerdo) => (unAcuerdo.n_id_tipo_acuerdo !== 11 && unAcuerdo.n_id_tipo_acuerdo !== 12 && unAcuerdo.n_id_tipo_acuerdo !== 13));
    if (filtroInstruccion?.length === 0) {
        acuerdos_instruccion.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 0, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    }
    else
        acuerdos_instruccion.value = filtroInstruccion;
    //--
    const filtroPlenario = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 11);
    /*if (filtroPlenario.length === 0)
        acuerdos_plenarios.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 11, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else*/
    acuerdos_plenarios.value = filtroPlenario
    //--
    const filtroResolucion = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 12);
    console.log(filtroResolucion)
    /* if (filtroResolucion.length === 0)
        acuerdos_resolucion.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 12, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else */
    acuerdos_resolucion.value = filtroResolucion
    //--
    const filtroIncidentes = todosAcuerdos.filter((unAcuerdo) => unAcuerdo.n_id_tipo_acuerdo === 13);
    console.log(filtroIncidentes)
    /* if (filtroIncidentes.length === 0)
        acuerdos_incidentes.value.push({ n_id_acuerdo: 0, n_id_medio_impugnacion: (formData.n_id_medio_impugnacion === null ? 0 : formData.n_id_medio_impugnacion), n_id_tipo_acuerdo: 13, d_fecha_acuerdo: '', s_punto_acuerdo: '', s_numero_votos: '', s_url_sentencia_pdf: '' });
    else */
    acuerdos_incidentes.value = filtroIncidentes
}

//--- loadFormData
const guardando = ref(false)
const formData = reactive({
    n_id_medio_impugnacion: 0,
    n_id_medio_impugnacion_principal: null,
    s_expediente: '',
    //--
    s_email_autor: EMAIL_AUTOR_SEG,

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
    n_id_ponencia_returno: '',
    n_id_ponencia_instructora: null,
    s_tematica: '',
    s_sintesis: '',
    s_url_infografia: '',
    //--
    s_publicacion: ''
})
const loadFormData = async () => {
    if (!route.params.id_medio) {
        console.log('-- loadFormData Medioimpugnacion -- CREAR sin id')
        loading.value = false;
        return
    }

    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        loading.value = true;

        const response = await crudApiService().getById<TCrud>('medio', route.params.id_medio as string);
        medioImpugnacion.value = await response?.data;
        console.log('---- medioImpugnacion.value [ ---')
        console.log(medioImpugnacion.value)
        console.log('---- ] medioImpugnacion.value ---')
        //---

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
        formData.s_acto_impugnado = medioImpugnacion.value.s_acto_impugnado_testado
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
        console.log(formData)

    } catch (error) {
        console.log(error)
    }
    loading.value = false;
};

function split_url(url: string) {

    var splitted = url.split("/");
    /* var split = splitted[splitted.length]; */
    console.log("URL:", url);
    console.log("SPLITTED:", splitted);
    console.log("LAST:", splitted.length);
    return splitted[splitted.length - 1];
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

select[disabled] {
    border-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    background-color: rgb(235, 235, 228);
    color: rgb(0, 0, 0);
    padding: 2px 0px;
    font-size: 1.125rem;
}

.table>thead>tr>th {
    color: #1E3E78;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: none;
}

.p-nota {
    color: #1E3E78;
    padding: 16px;
    font-size: 14px;
    font-weight: 800;
}
</style>
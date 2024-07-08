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
                            <li class="breadcrumb-item"><a href="/gje/admin">Admin</a></li>
                            <li class="breadcrumb-item active">Agregar Ficha Técnica.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
        <!-- .\Título Formulario -->
        <div class="row mb-4 mt-4">
            <div class="d-flex  justify-content-start">
                <h2><strong>Agregar Ficha Técnica</strong></h2>
            </div>
        </div>
        <!-- ./Título Formulario -->
        <!-- .\ Ficha -->
        <div class="ficha-container">
            <FormKit type="form" @submit="submitFichaTecnica" #default="{ value }">
                <!-- .\Header Expediente  -->
                <div class="header">
                    <h2>Expediente</h2>
                    <div class="buttons">
                        <FormKit type="submit" label="Guardar" class="btn btn-danger" />
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
                                    <h3>Número de expediente</h3>
                                    <div>
                                        <FormKit type="text" name="s_expediente" id="s_expediente" validation="required"
                                            validation-visibility="dirty" :validation-messages="{
                                                required: 'Favor de ingresar el número de expediente.',
                                            }" placeholder="___" />
                                    </div>
                                </div>

                                <div class="columna">
                                    <h3> Expediente acumulado </h3>
                                    <div>
                                        <FormKit type="text" name="s_tmp_expediente_acum" id="s_expediente" 
                                            placeholder="___" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="renglon">    <!-- Renglon 2-->
                                <div class="columna">
                                    <div class="d-flex flex-column bd-highlight">
                                        <h3>Sentencia </h3>
                                        <FormKit type="text" accept=".pdf" multiple="false" />
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
                                <FormKit type="date" name="d_fecha_recepcion" id="d_fecha_recepcion" validation="required"
                                    validation-visibility="dirty" :validation-messages="{
                                        required: 'Ingresar Fecha de Recepción.',
                                    }" placeholder="___" />
                            </div>

                            <div class="columna">
                                <h3>Hora de recepción</h3>
                                <FormKit type="time" name="s_tmp_hora_recepcion" id="s_tmp_hora_recepcion"
                                    validation="required" validation-visibility="dirty" :validation-messages="{
                                        required: 'Ingresar Hora de recepción.',
                                    }" placeholder="___" />
                            </div>


                            <div class="columna">
                                <h3>Tipo de medio</h3>
                                <FormKit type="select" name="s_tmp_tipo_de_medio" id="s_tmp_tipo_de_medio"
                                    :options="id_tipos_de_medio" />
                            </div>
                        </div>
                    </div>
                    <!-- Renglon 3-->
                    <div class="renglon">
                        <div class="columna">
                            <h3>Acto impugnado</h3>
                            <FormKit type="textarea" name="s_jel_desc_acto_impugnado" id="s_jel_desc_acto_impugnado"
                                validation="required" :validation-messages="{
                                    required: 'Ingresar Acto impugnado.',
                                }" placeholder="___" cols="100" rows="3" />
                        </div>
                    </div>
                    <div class="renglon mb-1">
                        <div class="columna-basis">
                            
                                <h3>Tipo de acto impugnado: <br /></h3>
                                <FormKit type="text" name="s_jel_tipo_acto_impugnado" id="s_jel_tipo_acto_impugnado"
                                    validation="required" validation-visibility="dirty" :validation-messages="{
                                        required: 'Ingresar Tipo de acto impugnado.',
                                    }" placeholder="___" />
                            
                        </div>
                        <div class="columna-basis">
                            
                                <h3> Parte Actora </h3>
                                <FormKit type="text" name="s_jel_parte_actora" id="s_jel_parte_actora"
                                    validation="required" validation-visibility="dirty" :validation-messages="{
                                        required: 'Ingresar Parte Actora.',
                                    }" placeholder="___" />

                            
                        </div>
                        <div class="columna-basis">
                            
                                <h3>Autoridad demandada u órgano responsable:</h3>
                                <FormKit type="text" name="s_tmp_autoridad_responsable" id="s_tmp_autoridad_responsable"
                                    validation="required" validation-visibility="dirty" :validation-messages="{
                                        required: 'Ingresar utoridad demandada u órgano responsable.',
                                    }" placeholder="___" />
                            
                        </div>
                        <div class="columna-basis">
                            
                                <h3>Partido o persona tercera interesada</h3>
                                <FormKit type="text" name="s_jel_tercer_interesado" id="s_jel_tercer_interesado"
                                    placeholder="___" />
                            
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
                            <FormKit type="select" name="s_tmp_ponencia_instructora" id="s_tmp_ponencia_instructora"
                                :options="id_magistrados" />
                        </div>
                        <div class="columna">
                            <h3>Temática:</h3>
                            <FormKit type="textarea" name="s_tmp_tematica" id="s_tmp_tematica" placeholder="___"
                                cols="60" rows="3" />

                        </div>
                    </div>
<!-- Renglon 5-->
                    <div class="renglon">
                        <div class="columna">
                            <h3>Acuerdo:</h3>
                            <FormKit type="select" name="id_tipos_de_acuerdo" id="id_tipos_de_acuerdo"
                                :options="id_tipos_de_acuerdo" />
                        </div>
                        <div class="columna">
                            <h3> Fecha de acuerdo:</h3>
                            <FormKit type="date" name="d_fecha_radicacion" id="d_fecha_radicacion" placeholder="___" />
                        </div>
                        <div class="columna">
                            <FormKit
                                type="button"
                                label="Agregar"
                                 @click="agregarAcuerdo"
                            />
                            <button class="remove" @click="removerAcuerdo" v-show="showRemoverAcuerdo">
                                - Eliminar
                            </button>
                        </div>
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
                            <h3>  Fecha de resolución: </h3> 
                            <FormKit type="date" name="d_fecha_acuerdo_pleno" id="d_fecha_acuerdo_pleno"
                                placeholder="___" />
                        </div>
                        <div class="columna">
                            <h3>Puntos de Acuerdo:</h3>
                            <FormKit type="textarea" name="s_tmp_efectos" id="s_tmp_efectos" placeholder="___" cols="60"
                                rows="3" />
                        </div>
                        <div class="columna">
                            <h3> Número de votos: </h3>
                            <FormKit type="text" name="s_tmp_efectos" id="s_tmp_efectos" placeholder="___"  />
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
                                <FormKit type="date" name="d_fecha_acuerdo_pleno" id="d_fecha_acuerdo_pleno"
                                    placeholder="___" />
                        </div>
                        <div class="columna">
                                <h3>Resolutivos:</h3>
                                <FormKit type="textarea" name="s_tmp_efectos" id="s_tmp_efectos" placeholder="___" cols="60"
                                    rows="3" />
                        </div>
                        <div class="columna">
                                <h3>Número de votos:</h3>
                                <FormKit type="text" name="s_numero_votos" id="s_numero_votos" placeholder="___" />
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
                            <FormKit type="date" name="d_fecha_acuerdo_pleno" id="d_fecha_acuerdo_pleno"
                                placeholder="___" />
                        </div>
                        <div class="columna">
                            <h3> Puntos de acuerdo:</h3>
                            <FormKit type="textarea" name="s_tmp_efectos" id="s_tmp_efectos" placeholder="___" cols="40"
                                rows="3" />
                        </div>
                        <div class="columna">
                            <h3> Número de votos:</h3>
                            <FormKit type="text" name="s_numero_votos" id="s_numero_votos" placeholder="___" />
                        </div>
                        <div class="columna">
                            <h3> Sentencias </h3>
                            <FormKit type="text" accept=".pdf" multiple="false" />
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
                            <FormKit type="textarea" name="s_tmp_efectos" id="s_tmp_efectos" placeholder="___" cols="80"
                                rows="3" />
                        </div>

                    </div>
                    <div class="renglon">

                        <div class="columna">
                            <p><strong>Infografía:</strong> </p>
                            <FormKit type="text" name="s_tmp_efectos" id="s_tmp_efectos"
                                placeholder="Dirección electrónica de la infografía" size="100" maxleghth="160" />
                        </div>

                    </div>
                </div>

            </FormKit>
        </div>
        <!-- ./ Ficha -->

    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from "vue";
import IconHome from '@/assets/svg/IconHome.vue'
import { useMeta } from "/src/composables/use-meta";
const route = useRoute();
const router = useRouter();


import { plugin, defaultConfig } from '@formkit/vue'


useMeta({ title: "Seguimiento de asuntos" });

onMounted(() => {
    bind_data();

});

let showRemoverAcuerdo = ref(false);

const loading: any = ref(true);
let controller: any;
let row: any = ref(null);

const id_tipos_de_medio = [{ label: 'Juicio Electoral', value: 'Juicio Electoral' },
    { label: 'Juicio Ciudadano', value: 'Juicio Ciudadano' },
    { label: 'Asuntos', value: 'Generales' }
];

const id_tipos_de_acuerdo = [{ label: 'Acuerdo de radicación', value: 'Acuerdo de radicación' },
                            { label: 'Acuerdo dos', value: 'Acuerdo dos' },
                            { label: 'Acuerdo tres', value: 'Acuerdo tres' }
];


const id_magistrados = [{ label: 'Magistrado Armando Ambriz Hernández', value: 'Magistrado Armando Ambriz Hernández' },
{ label: 'Magistrado Juan Carlos Sánchez León', value: 'Magistrado Juan Carlos Sánchez León' },
{ label: 'Magistrado Osiris Vázquez Rangel', value: 'Magistrado Osiris Vázquez Rangel' },
{ label: 'Magistrada María Antonieta Gonzalez Mares', value: 'Magistrado María Antonieta Gonzalez Mares' },
];


const bind_data = async () => {
    const id = route.params.expediente;
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;

        loading.value = true;
        let apiAsuntos = 'https://apigje.tecdmx.org.mx/api/asuntos/' + id;

        const response = await fetch(apiAsuntos, {
            method: 'GET',
            signal: signal,
        });
        const data = await response.json();
        row.value = data;
    } catch { }
    loading.value = false;
};



const submitFichaTecnica = async (fields) => {
    await new Promise((r) => setTimeout(r, 1000))

    let urlApiAsuntos = import.meta.env.VITE_API_ASUNTOS + "/api/gje/asuntos";

    console.log('urlApiAsuntos:', urlApiAsuntos);

    

    console.log(JSON.stringify(fields));
    try {
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        const signal = controller.signal;

        const response = await fetch(urlApiAsuntos, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fields),
            signal: signal, // Assign the signal to the fetch request
        });
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

function agregarAcuerdo(){
    console.log("Agregar acuerdo")
}

function removerAcuerdo(){
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

    .header .buttons { /* ml-3 p-2 */
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
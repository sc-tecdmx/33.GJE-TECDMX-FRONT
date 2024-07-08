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
                            <li class="breadcrumb-item active">Seguimiento de Expediente.</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- ./Breadcrum -->
        <div class="row mb-2 mt-4 ms-2" style="">
            <div class="d-flex justify-content-between items-center">
                <h2 class="encabezado">Ficha Técnica</h2>
                
            </div>
        </div>

    <div class="container-ficha"> 
       
        <div class="header">
            <div class="d-flex flex-column bd-highlight mb-3">
                <h3>NÚMERO DE EXPEDIENTE</h3>   
                <h1>{{ row?.s_expediente  }}</h1>
            </div>
            <div class="buttons">
                <button>Descargar PDF</button>
                <button>Imprimir</button>
            </div>
        </div>
        
        <div class="section">
            
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de recepción</strong></p>
                    <p>{{ row?.d_fecha_recepcion  }}</p>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Hora de recepción</strong></p>
                    <p>{{ row?.s_tmp_hora_recepcion  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de aviso</strong></p>
                    <p> {{ row?.d_fecha_aviso  }}</p>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Tipo de medio</strong></p>
                    <p>{{ row?.s_tmp_tipo_de_medio  }}</p>
                </div>

                
            </div>
            
            <div class="d-flex flex-column bd-highlight mb-3  p-4 ">
                <p><strong>Acto impugnado</strong></p>
                <p>{{ row?.s_jel_desc_acto_impugnado  }}</p>
            </div>
            <div class="d-flex justify-content-between p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Tipo de acto impugnado:</strong></p>
                    <p>{{ row?.s_jel_tipo_acto_impugnado  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Parte Actora:</strong> </p>
                    <p>{{ row?.s_jel_parte_actora  }}</p>

                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Autoridad demandada u órgano responsable:</strong></p>
                    <p>{{ row?.s_tmp_autoridad_responsable  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Partido o persona tercera interesada</strong> </p>
                    <p>{{ row?.s_jel_tercer_interesado  }}</p>

                </div>
            </div>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Turnado a:</strong></p>
                    <p>{{ row?.s_tmp_ponencia_instructora  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de recepción y turno:</strong> </p>
                    <p>{{ row?.d_fecha_recepcion_turno  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Hora de recepción y turno:</strong> </p>
                    <p>{{ row?.d_hora_recepcion_turno  }}</p>
                </div>
            </div>
            
        </div>
      
        <div class="section">
            <h2>Instrucción</h2>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Temática:</strong></p>
                    <p>{{ row?.s_tmp_tematica  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de radicación:</strong> </p>
                    <p>{{ row?.d_fecha_radicacion  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Admisión y cierre de instrucción:</strong> </p>
                    <p>{{ row?.d_fecha_admision_cierre  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Acuerdos:</strong></p>
                    <p>{{ row?.s_jel_desc_acuerdos  }}</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Resolución</h2>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de resolución:</strong> </p>
                    <p>{{ row?.d_fecha_acuerdo_pleno  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Efectos:</strong> </p>
                    <p>{{ row?.s_tmp_efectos  }}</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Número de votos:</strong></p>
                    <p>{{ row?.s_numero_votos  }}</p> 
                </div>
            </div>
            <div class="d-flex justify-content-between  p-4 ">                                          
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Resumen:</strong></p>
                    <p>{{ row?.s_tmp_resumen  }}</p> 
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { onMounted, ref } from "vue";
    import IconHome             from '@/assets/svg/IconHome.vue'
    import { useMeta } from "/src/composables/use-meta";
    const route = useRoute(); 

    useMeta({ title: "Seguimiento de asuntos" });

    onMounted(() => {
        bind_data();
        
    });

    const loading: any = ref(true);
    let controller: any;
    let row: any = ref(null);

  const bind_data = async () => {
        const id = route.params.expediente;
        try {
            if (controller) {
                controller.abort();
            }
            controller = new AbortController();
            const signal = controller.signal;

            loading.value = true;
            
            let urlApiAsuntos = import.meta.env.VITE_API_ASUNTOS + "/api/gje/asuntos/" + id;;

            const response = await fetch(urlApiAsuntos, {
                method: 'GET',
                signal: signal, 
            });
            const data = await response.json();
            row.value = data;
        } catch {}
       loading.value = false;
  };
</script>
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
    
        .container-ficha {
            width: 100%;
            margin: auto;
            background: #fffff;
            /* padding: 20px; */
            padding-right: 0px;
            padding-left: 0px;
            border: 2px solid black; 
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            top: 180px;
            position: absolute;
            top: 160px;
            left: 50%;
            transform: translateX(-50%);
        }
        .encabezado {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 5px;
            color : #002466;
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
        .header h1 {
            margin: 0;
            font-size: 1.5em;
            color: white;
        }
        .header h3 {
            margin: 0;
            font-size: .875em;
            color: white;
        }
        .header .buttons {
            display: flex;
            gap: 10px;
        }
        .header .buttons button {
            background: white;
            color: #2e3b4e;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            background: #2e3b4e;
            color: white;
            padding: 10px;
            margin: 0;
            border-radius: 4px;
        }
        .section .content {
            padding: 0px;
            border: 1px solid #ddd;
            border-radius: 0 0 4px 4px;
            background: #f9f9f9;
        }
        .section p strong{
            margin: 5px 0;
            color: #1E3E78;
        }
        .content p {
            margin: 5px 0;
            color: black;
        }
        .content .item {
            display: flex;
            justify-content: space-between;
            padding: 0px 0;
        }
        .content .item strong {
            margin-right: 0px;
        }

</style>
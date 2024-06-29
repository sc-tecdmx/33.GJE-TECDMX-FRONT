<template>
   <div>
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
    </div>
        <div class="container"> 
        <div class="header">
            <div class="d-flex flex-column bd-highlight mb-3">
                <h3>NÚMERO DE EXPEDIENTE</h3>   
                <h1>TECDMX-JEL-147/2024</h1>
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
                    <p>15/05/24</p>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Hora de recepción</strong></p>
                    <p>10:20</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de aviso</strong></p>
                    <p> 10/05/24</p>
                </div>

                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Tipo de medio</strong></p>
                    <p>Juicio Electoral</p>
                </div>

                
            </div>
            
            <div class="d-flex flex-column bd-highlight mb-3  p-4 ">
                <p><strong>Acto impugnado</strong></p>
                <p>Acuerdo del 22 de mayo de 2024, emitido por la Comisión Permanente de Quejas del IECM en el expedientes IECM-QNA/1030/2024, por el que se determinó desechar la queja presentada por el actor, por la supuesta comisión de actos anticipados de campaña, en contra de Alejandro Cabral González, entonces candidato a la diputación local 03 del Congreso de la Ciudad de México, en Atzcapotzalco, por la publicación de una entrevista en que la plataforma YouTube, de veintinueve de febrero, de la que la parte actora se cercioró el siete de marzo siguiente.</p>
            </div>
            <div class="d-flex justify-content-between p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Tipo de acto impugnado:</strong></p>
                    <p> Diputación local 03</p>    
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Parte Actora:</strong> </p>
                    <p>
                        Partido Revolucionario Institucional
                    </p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Autoridad demandada u órgano responsable:</strong></p>
                    <p> Comisión Permanente de Quejas del Instituto Electoral de la Ciudad de México</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Partido o persona tercera interesada</strong> </p>
                    <p>N/A</p>    
                </div>
            </div>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Turnado a:</strong></p>
                    <p>Magistrado en Funciones Osiris Vázquez Rangel</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de recepción y turno:</strong> </p>
                    <p>02/06/24</p>    
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Hora de recepción y turno:</strong> </p>
                    <p>13:28</p>    
                </div>
            </div>
            
        </div>
      
        <div class="section">
            <h2>Instrucción</h2>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Temática:</strong></p>
                    <ul>
                        <li>Procedimiento Especial Sancionador</li>
                        <li>Entrevista en la Plataforma YouTube</li>
                        <li>Actos anticipados de campaña</li>
                        <li>Extemporaneidad</li>
                    </ul>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de radicación:</strong> </p>
                    <p>03/06/24</p>    
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Admisión y cierre de instrucción:</strong> </p>
                    <p> 06/06/24</p>    
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Acuerdos:</strong></p>
                    <p> N/A</p>    
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Resolución</h2>
            <div class="d-flex justify-content-between  p-4 ">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Fecha de resolución:</strong> </p>
                    <p>06/06/24</p>
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Efectos:</strong> </p>
                    <p>ÚNICO. Se confirma en lo que fue materia de impugnación el acuerdo de veintidós de mayo de este año, emitido por la Comisión Permanente de Quejas del Instituto Electoral de la Ciudad de México, el expediente IECM-QNA/1030/2024.</p>    
                </div>
                <div class="d-flex flex-column bd-highlight mb-3">
                    <p><strong>Número de votos:</strong></p>
                    <p> Unanimidad</p>    
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
  import { onMounted, ref } from "vue";
  // import "/src/assets/ck/sass/apps/invoice-list.scss";
import IconHome             from '@/assets/svg/IconHome.vue'
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
      footerHeadings: true,
      sortable: ["expediente", "actor", "magistratura", "status"],
      sortIcon: {
          base: "sort-icon-none",
          up: "sort-icon-asc",
          down: "sort-icon-desc",
      },
  });
  

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

  
</script>
<style scoped>
    
        .container {
            max-width: 80%;
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
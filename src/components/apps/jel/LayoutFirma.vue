<template>
    <!--LAYOUT-->
    <div class="layout">
        <!--TIMELINE-->
        <div class="position-relative m-2 w-100 h-auto d-inline-block ">
            <div class="row">
                <linea-tiempo
                :listaParametros="listaParametros"
                /> 
            </div>
        </div>
        <!--END TIMELINE-->

        <!--ROW CONTENIDO-->
        <div class="row mt-2 p-3 rounded shadow-sm principal">
            
            <!--Título 3-->
            <t-3-component
            titulo3="Frirmar documento"
            />

        
            <!--END Título 3-->
          <!-- <view-pdf 
            
            pdfUrl="src/assets/pdf/demanda.pdf"
            />
        -->
                <visor-pdf
                :url="archivoPDf"
         

                :selectedFile="selectedFile"
                        />
                        <!--<iframe :src="selectedFile.url" width="100%" height="600px" frameborder="0" class=""></iframe>-->
                        <p>{{ selectedFile.content }}</p>

                <div>
                <button type="button" class="btn btn-primary" @click="openModal">Ventana modal</button>
                <ventana-modal
                :show="showModal"
                title="Desea firmar el documento"
                message="Es necesario firmar la demanda"
                @confirm="handleModalConfirm"
                @close="handleModalClose"
                />

            </div>
  
        </div>
        <!--End ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->

    
</template>

<script setup lang="ts">

    import LineaTiempo from '@/components/common/LineaTiempo.vue';
    import T3Component from '@/components/layout/T3Component.vue';
    import { ref, onMounted } from 'vue';
    import VentanaModal from '@/components/common/VentanaModal.vue';
    import VisorPdf from '@/components/common/VisorPdf.vue';

    interface Parametro {
    color: string;
    texto: string;
    opacidad: string;
    borde: string;
    }
    // LISTA DE PARAMETROS DE TIMELINE
    const listaParametros = ref<Parametro[]>([
    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Responsables', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#008489', texto: 'Pruebas', opacidad: '.6', borde: '1px solid #008489!important' },
    { color: '#28A745', texto: 'Firmar escrito', opacidad: '1', borde: '1px solid #28A745!important' },
    ]);


    //VISOR PDF
    const archivoPdf = '@/assets/tecdmx/pdf/archivo.pdf';

    //VENTANA MODAL
    const showModal = ref(false);

    const openModal = () => {
    showModal.value = true;
    };

    const handleModalConfirm = () => {
    console.log('Modal confirmed');
    showModal.value = false;
    };

    const handleModalClose = () => {
    console.log('Modal closed');
    showModal.value = false;
    };
</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
    }
      
      .tl1 {
        background: rgb(168, 168, 168);
    }

    .btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }

</style>
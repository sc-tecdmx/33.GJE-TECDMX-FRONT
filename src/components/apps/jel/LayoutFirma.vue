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
        <div class="row p-3 pt-0 pb-0 rounded shadow-sm principal">
            
            <!--Título 3-->
            <t-3-component
            titulo3="Frirmar documento"
            />

            <!--VISUALIZACIÓN PDF-->
            <div v-if="selectedFile" class="pb-3 position-relative rounded p-2 pb-4 principal__cont-pdf__file-content ">
                <visor-pdf
                :selectedFile="selectedFile"
                />
                <!--<iframe :src="selectedFile.url" width="100%" height="600px" frameborder="0" class=""></iframe>-->
                <p>{{ selectedFile.content }}</p>
            </div>
            <!--END VISUALIZACIÓN PDF-->

            <!--BUTTONS & MODAL-->
            <div class="mt-3 mb-5">
         
                <btn-base
                titulo="Firmar"
                class="btn btn-primary "
                @click="openModal"
                />
                <btn-base
                titulo="Anterior"
                class="btn-cancelar"
                @click="$emit('regresar-Layout')"
                />

                <modal-form
                :show="showModal"
                title="Firmar documento"
                message="texto de prueba"
                @confirm="handleModalConfirm"
                @close="handleModalClose"
                />

                <ventana-modal
                :show="newModal"
                title=""
                message="Se confirmo orrectamente. La solicitud fue enviada con éxito"
                @redirectToHome="redirectToHome"
                @close="handleModalClose"
                />
            </div>
            <!--END BUTTONS & MODAL-->  

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
    import BtnBase from '@/components/formulario/BtnBase.vue';
    import ModalForm from '@/components/common/ModalForm.vue';
    import { useRouter } from 'vue-router';
    import { TreeNode } from '@/components/ts/types';  
    import Tree from '@/components/common/Tree.vue'; 
    import archivoPdf from '@/assets/tecdmx/pdf/archivo.pdf';

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


    //Visualizar pdf
    const treeData = ref<TreeNode[]>([
        { 
            id: 2, 
            name: "DemandaDoc_Original.pdf", 
            type: 'file', 
            url: archivoPdf
        }
    ]);

    //SELECCIONAR ARCHIVO POR DEFAULT
    const selectedFile = ref<TreeNode | null>(null);

    onMounted(() => {

        if (treeData.value.length > 0) {
            selectedFile.value = treeData.value[0]; 
        }
    });


    //VENTANA MODAL
    const showModal = ref(false);
    const newModal = ref(false);
    const router = useRouter();

    const openModal = () => {
    showModal.value = true;
    };

    const closeModal = () => {
    showModal.value = false;
    };

    const handleModalConfirm = () => {
    console.log('Modal confirmed');
    showModal.value = false;
    newModal.value= true;
    };

    const handleModalClose = () => {
    console.log('Modal closed');
    newModal.value = false;

    };


    const redirectToHome = () => {
    console.log('Redirecting to home...');
    router.push('/'); // Redirige a la página de inicio, ajusta la ruta según tu configuración
    };

</script>

<style lang="scss" scoped>

    @import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
    }

    .btn-guardar {
        background: $btn-guardar;
    }
    .btn-cancelar {
        margin-right: $margin-sm;
        background: $btn-secondary;
    }

    @media screen and (max-width: 776px) {
        
        .layout {
            position: relative;
        }
        .principal {
            position: absolute;
            top: 0px;
        }


    }



</style>
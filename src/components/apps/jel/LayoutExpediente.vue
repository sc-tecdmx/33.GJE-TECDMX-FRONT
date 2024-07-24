<template>

    <!--LAYOUT-->
    <div class="container">

         <!--MENÚ LAYOUT-->
         <menu-layout />
        <!--END MENÚ LAYOUT-->
        
        <!--ROW CONTENIDO-->
        <div class="mt-5 p-3 BORDER rounded shadow-sm principal">

            <!--FORM-->
            <form action="" class="mt-1 pb-1 mb-5">

                <!--ROW-->
                <div class="row">

                    <div class="col-md-3">

                        <!--INPUT TEXTO-->
                        <div class="form-group mt-3">
                            <inpt-t-base 
                            type="text"
                            lbl="Folio"
                            v-model="Folio"
                            class="form-control form-control-sm"
                            />
                        </div>
                        <!--END INPUT TEXTO-->

                    </div>

                    <div class="col-md-3">

                        <!--INPUT TEXTO-->
                        <div class="form-group mt-3">
                            <inpt-t-base 
                            type="text"
                            lbl="Tipo de medio"
                            v-model="tMedio"
                            class="form-control form-control-sm"
                            />
                        </div>
                        <!--END INPUT TEXTO-->
                    
                    </div>

                    <div class="col-md-3">

                        <!--INPUT TEXTO-->
                        <div class="form-group mt-3">
                            <inpt-t-base 
                            type="text"
                            lbl="Consecutivo"
                            v-model="consecutivo"
                            class="form-control form-control-sm"
                            />
                        </div>
                        <!--END INPUT TEXTO-->

                    </div>

                    <div class="col-md-3">

                        <!--INPUT TEXTO-->
                        <div class="form-group mt-3">
                            <inpt-t-base 
                            type="text"
                            lbl="Año"
                            v-model="anio"
                            class="form-control form-control-sm"
                            />
                        </div>
                        <!--END INPUT TEXTO-->

                    </div>

                </div>
                <!--END ROW-->

                <!--BUTTONS-->
                <div class="form-group mt-2">
                    <btn-base
                    titulo="Buscar"
                    class="principal__btn-save"
                    @click="$emit('cambiarLayout', 'LayoutDemanda')"
                    />
                </div>
                <!--END BUTTONS-->

            </form>
            <!--END FORM-->

            <!--HEADER DARK-->
            <header-dark
            title="Documentos"
            />
            <!--END HEADER DARK-->

            <!--CONTENEDOR PDF-->
            <div class="row mt-3 principal__cont-pdf">

                <!--NODOS CARPETAS-->
                <div class="col-sm-12 col-md-12 col-lg-5 shadow-sm rounded principal__cont-pdf__col-exp">
                    <div class="container rounded p-3 rounded principal__cont-pdf__col-exp__cont-borde">
                        <div class="bg-white position-relative z-2 principal__cont-pdf__col-exp__white"></div>
                        <Tree class="principal__cont-pdf__col-exp__tree" :nodes="treeData" @file-selected="handleFileSelected"/>
                    </div>
                </div>
                <!--END NODOS CARPETAS-->

                <!--VISUALIZACIÓN PDF-->
                <div class="col-sm-12 col-md-12 col-lg-7 rounded p-3">
                    <div v-if="selectedFile" class="pb-3 position-relative rounded p-3 principal__cont-pdf__file-content ">
                       <visor-pdf
                       :selectedFile="selectedFile"
                       />
                  <!--<iframe :src="selectedFile.url" width="100%" height="600px" frameborder="0" class=""></iframe>-->
                        <p>{{ selectedFile.content }}</p>
                    </div>
                </div>
                <!--END VISUALIZACIÓN PDF-->

            </div>
            <!--END CONTENEDOR PDF-->

        </div>
        <!--END ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->

</template>
    
<script setup lang="ts">
    import MenuLayout from './MenuLayout.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue';
    import BtnBase from '@/components/formulario/BtnBase.vue';
    import HeaderDark from '@/components/common/HeaderDark.vue';
    import VisorPdf from '@/components/common/VisorPdf.vue';

    import { ref } from 'vue';
    import Tree from '@/components/common/Tree.vue'; 
    import { TreeNode } from '@/components/ts/types';  

    import archivoPdf from '@/assets/tecdmx/pdf/archivo.pdf';
    const treeData = ref<TreeNode[]>([
    {
        id: 1,
        name: "Expediente_Electrónico_JLE",
        type: 'folder',
        children: [
        {
            id: 2,
            name: "Actor",
            type: 'folder',
            children: [
                {
                id: 3,
                name: 'iriana.isabel1',
                type: 'folder',
                children:[
                    {
                        id: 4,
                        name: 'Recurso',
                        type: 'folder',
                        children: [
                            {
                                id: 5,
                                name: 'Firmados',
                                type: 'folder',
                                children: [
                                { id: 3, name: "Demanda.pdf", type: 'file', url: archivoPdf },
                                ]
                            },
                       
                        { id: 4, name: "DemandaDoc_Original.pdf", type: 'file', url: "Archivo original" },
                        ]
                    }
                ]
                }
           
            ],
        },
        ],
    },
    ]);

    const selectedFile = ref<TreeNode | null>(null);

    const handleFileSelected = (file: TreeNode) => {
    selectedFile.value = file;
    };
</script>

<style lang="scss" scoped>

@import "../../../assets/tecdmx/sass/jel/_var.scss";

    .principal {
        border: $border-width $border-style $border-color;
        &__cont-pdf{
            height: auto;
            &__btn-save {
                background: $btn-guardar;
            }
            &__col-exp {
                &__cont-borde {
                    border: $border-width $border-style $border-color;
                }
                &__white {
                    width: 20px;
                    height: 25px;
                    left: -15px;
                    top: 17px;
                }
                &__tree {
                    color: $pdf;
                    font-size: $text-sm;
                }
            }
            &__file-content {
                width: 100%;
                height: auto;
                top: -16px;
                border: $border-width $border-style $border-color;
                background-color: $bg-claro;
           }
        }
    }

</style>
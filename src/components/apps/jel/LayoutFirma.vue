<template>
    <!--LAYOUT-->
    <div class="layout">
        <!--TIMELINE-->
        <div class="position-relative mt-5 m-2 w-100 h-auto d-inline-block">
            <div class="row position-absolute top-50 start-50 translate-middle w-100 mt-1">
                <linea-tiempo
                :listaParametros="listaParametros"
                /> 
            </div>
        </div>
        <!--END TIMELINE-->

        <!--ROW CONTENIDO-->
        <div class="row mt-5 p-3 border rounded shadow-sm principal">
            
            <!--Título 3-->
            <t-3-component
            titulo3="Frirmar documento"
            />
            <!--END Título 3-->
            <view-pdf 
            
            pdfUrl="src/assets/pdf/demanda.pdf"
            />
  
        </div>
        <!--End ROW CONTENIDO-->

    </div>
    <!--END LAYOUT-->

    
</template>

<script>

    import LineaTiempo from '@/components/common/LineaTiempo.vue';
    import T3Component from '@/components/layout/T3Component.vue';
    import ViewPdf from './ViewPdf.vue';

    export default {
        name: 'LayoutFirma',
        components: {
            LineaTiempo,
            T3Component,
            ViewPdf
        },
        data() {
            return {
                listaParametros: [
                    { color: '#008489', texto: 'Presentar demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Demanda', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Responsables', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#008489', texto: 'Pruebas', opacidad: '.6', borde: '1px solid #008489!important'},
                    { color: '#28A745', texto: 'Firmar escrito', opacidad: '1', borde: '1px solid #28A745!important'},
                    ],
            }
        },
    }
</script>

<style lang="scss" scoped>
      
      .tl1 {
        background: rgb(168, 168, 168);
    }

    .principal {
        margin-top: 48px!important;
    }

    
    .btn-guardar {
        background: #0a2241;
    }
    .btn-cancelar {
        margin-right: 16px;
        background: #7B8C90;
    }

</style>
<template>
    <!--HEADER-->
    <header-control-acceso
    icon-class="bi bi-box-arrow-in-left fs-5  p-1"
    texto="Cerrar sesión"
    parrafo="Control de acceso"
    />
    <!--END HEADER-->
   
    <!--BREADCRUMS-->
    <bread-crumb-principal
     :dynamicComponents="components"
     />
     <!--END BREADCRUMS-->

    <!--LAYOUT-->
    <div class="layout w-100 h-auto d-flex justify-content-center mt-5 pt-4">

        <!--CONTAINER-->
        <div class="container-fluid mt-5 p-0 pt-2 rounded contenedor">

            <!--ROW-->
            <div class="row">

                <!--ASIDE-->
                <div class="aside ">
                    <div class="position-fixed start-0 border-end pe-4">
                         <!--MENÚ CONTROL-->
                        <menu-control/>
                        <!--END MENÚ CONTROL-->
                    </div>
                </div>
                <!--END ASIDE-->

                <!--ARTICLE-->
                <div class="article ps-5">

                    <t-1-component 
                    texto="Asignar Roles"
                    />
                    <DatosControl5/>

                </div>
                <!--END ARTICLE-->

            </div>
            <!--END ROW-->

            <!--FOOTER-->
            <footer-app/>
            <!--END FOOTER-->

        </div>
        <!--END CONTAINER-->

    </div>
    <!--END LAYOUT-->  

</template>

<script setup lang="ts">
    import HeaderControlAcceso from '@/components/common/HeaderControlAcceso.vue';
    import MenuControl from '@/components/apps/jel/MenuControl.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import DatosControl5 from '@/components/apps/jel/DatosControl5.vue';
    import FooterApp from '@/components/apps/jel/FooterApp.vue';
    import EspaciadorBase from '@/components/common/EspaciadorBase.vue';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();

  
     // DEFINIR EL TIPO DE DATOS
    interface ComponentData {
    liClass: string;
    rutaName: string;
    aClass: string;
    texto: string;
    iconClass: string;
    slash: string;
    spanClass: string;
    }

    // DEFINIR DATOS DEL COMPONENTE
    const components = ref<ComponentData[]>([]);

    // FUNCIÓN PARA CARGAR LOS COMPONENTES
    function loadComponents() {
    components.value = [
        { liClass: 'breadcrumb-item', rutaName: '/inst/acceso/', aClass: 'text-primary fs-6 fw-normal', texto: '', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/inst/acceso/permiso', aClass: 'text-primary fw-normal fs-6', texto: 'Rol', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

    // CRAGAR COMPONENTES EN LA TABLA
    onMounted(() => {
    loadComponents();
    });

</script>

<style lang="scss" scoped>

    @import "@/assets/tecdmx/sass/jel/_var.scss";

    .aside {
      width: 250px!important;
    }

    .article {
        width: 80%;
    }

    .bi {
        font-size: $text-md;
    }
    
    li {
        list-style: none;
        color: $bg-dark;
        font-size: $text-sm;
    }


    @media screen and (max-width: 992px) {

      .aside {
        width: 100px!important;
      }
    }

</style>
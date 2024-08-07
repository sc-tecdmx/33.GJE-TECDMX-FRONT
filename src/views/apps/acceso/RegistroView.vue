<template>

    <!--HEADER-->
    <header-control-acceso
    icon-class="bi bi-box-arrow-in-right fs-5  p-1"
    texto="Iniciar sesión"
    parrafo="Control de acceso"
    />
    <!--END HEADER-->

    <!--BREADCRUMS-->
    <bread-crumb-principal
    :dynamicComponents="components"
    />
    <!--END BREADCRUMS-->

    <!--CONTAINER LAYOUT-->
    <div class="container mt-3 ps-5 pe-5">

        <div class="layout w-100 mt-5 pt-5 bg-white">

            <!--CONTAINER-->
            <div class="container p-4">

                <!--FORMULARIO-->
                <form class="mt-4 pb-5">

                    <layout-user/>                  
                
                </form>
                <!--END FORMULARIO-->

            </div>
            <!--END CONTAINER-->

        </div>
        <!--ESPACIADOR-->
        <espaciador-base
        :ancho="100" 
        :alto="48"
        />
        <!--END ESPACIADOR-->

    </div>
    <!--END CONTAINER LAYOUT-->

    <!--FOOTER-->
    <footer-app/>
    <!--END FOOTER-->
</template>

<script setup lang="ts">
    import HeaderControlAcceso from '@/components/common/HeaderControlAcceso.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import LayoutUser from '@/components/apps/jel/LayoutUser.vue';
    import FooterApp from '@/components/apps/jel/FooterApp.vue';
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
        { liClass: 'breadcrumb-item', rutaName: '/inst/acceso/usuario', aClass: 'text-primary fw-normal fs-6', texto: 'Registro usuarios', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

  // CRAGAR COMPONENTES EN LA TABLA
  onMounted(() => {
    loadComponents();
    });


</script>

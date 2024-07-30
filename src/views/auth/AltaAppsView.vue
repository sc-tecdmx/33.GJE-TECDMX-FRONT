<template>
   
    <!--HEADER-->
    <header class="position-fixed top-0 start-0 w-100 header-ca">

        <div class="container-fluid">
            <div class="d-flex">
                <section class="d-flex">
                
                    <!--LOGO COMPONENT-->
                    <logo-component
                    :ancho="100"
                    />
                    <div class="header-ca__separator ms-2"></div>

                </section>

                <section class="w-100 d-flex justify-content-between align-items-center">

                    <p class="ps-3 parrafo fw-normal pb-2 fs-6">Control de acceso</p>

                    <lista-menu 
                    liClass="nav-item text-start pb-3"
                    aClass="nav-link text"
                    iconClass="bi bi-box-arrow-left"
                    texto="Cesrar sesión"
                    @click=""
                    />

                </section>
            </div>
        </div>
    </header>
    <!--END HEADER-->

    <!--BREADCRUMS-->
    <bread-crumb-principal
     :dynamicComponents="components"
     />
     <!--END BREADCRUMS-->

    <!--LAYOUT-->
    <div class="layout w-100 h-auto d-flex h-50 d-inline-block justify-content-center mt-5 pt-4">

        <!--CONTAINER-->
        <div class="container-fluid mt-5 p-0 pt-2 rounded contenedor">

             <!--LLAMAMOS LA SOMBRA-->
            <!--<sombra-formulario
            ancho="50"
            alto="260"
            />-->

            <!--ROW-->
            <div class="row">

                <!--ASIDE-->
                <div class="w-25 aisde border-end">
                    <ul class="">
                        <!--LI 1-->
                        <lista-menu 
                        liClass="nav-item text-start pt-3 pb-3"
                        aClass="nav-link text"
                        iconClass="bi bi-plus-square-fill p-2"
                        texto="Alta de aplicaciones"
                        @click=""
                        />
                        <!--END LI 1-->

                        <!--LI 2-->
                        <lista-menu 
                        liClass="nav-item text-start pb-3"
                        aClass="nav-link text"
                        iconClass="bi bi-people-fill p-2"
                        texto="Usuarios"
                        @click="consultas"
                        />
                        <!--END LI 2-->

                        <!--LI 3-->
                        <lista-menu 
                        liClass="nav-item text-start"
                        aClass="nav-link text"
                        iconClass="bi bi-person-fill-gear p-2"
                        texto="Asignar roles"
                        @click="consultas"
                        />
                        <!--END LI 3-->
                    </ul>
                </div>
                <!--END ASIDE-->

                <!--ARTICLE-->
                <div class="w-75 article  ps-5">

                    <t-1-component 
                    texto="Alta de aplicaciones"
                    />

                    
                    <!--FORM-->
                    <form class="w-50 mt-5 mb-5 ms-2" action="">
                    
                        <!--LLAMAMOS EL INPUT-->
                        <lbl-base
                        lbl="Ingresa la aplicación"
                        />
    
                        <div class="input-group input-group-sm rounded contenedor__inpt-group ">
                            <inpt-t-base
                            type="text"
                            class="form-control form-control-sm bg-transparent border-0"
                            aria-label="Amount (to the nearest dollar)"
                            placeholder=""
                            />
                            <div class="input-group-append">
                                <span
                                @click="openModal"
                                 class="input-group-text rounded-0 border-0 contenedor__inpt-group__icon">
                                    <icon-base
                                    iconClass="bi bi-plus-lg"
                                    />

                                    

                                 
                                </span>
                            </div>
                        </div>
                        <modal-control-usuario
                             
                                    :show="isModalVisible" 
                                    title="Alta de Aplicación"
                                    message=""
                                    @close="handleModalClose" 
                                    @select-layout="handleLayoutSelection" 
                                    >
                            
                                <layout-principal v-if="selectedLayout === 'LayoutPrincipal'" />
                       
                                    </modal-control-usuario>
                      
                            <component :is="selectedLayout" />
  
                    </form>
                    <!--END FORM-->

                </div>
                <!--END ARTICLE-->

            </div>
            <!--END ROW-->
           
        </div>
        <!--END CONTAINER-->
    </div>
    <!--END LAYOUT-->

</template>

<script setup lang="ts">
    import LogoComponent from '@/components/layout/logos/LogoComponent.vue';
    import InptTBase from '@/components/formulario/InptTBase.vue';
    import SombraFormulario from '@/components/common/SombraFormulario.vue';
    import BtnBase from '@/components/formulario/BtnBase.vue';
    import LblBase from '@/components/formulario/LblBase.vue';
    import IconBase from '@/components/common/IconBase.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import ListaMenu from '@/components/common/ListaMenu.vue';
    import VentanaModal from '@/components/common/VentanaModal.vue';
    import ModalControlUsuario from '@/components/common/ModalControlUsuario.vue';
    import LayoutPrincipal from '@/components/apps/jel/LayoutPrincipal.vue';
    import DashView from './DashView.vue';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();


    function consultas() {
    router.push({ name: 'jel-consultas' });
    }

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
        { liClass: 'breadcrumb-item', rutaName: '/', aClass: 'text-primary fs-6 fw-normal', texto: '', iconClass: 'bi bi-house-door-fill col', slash: '/', spanClass: 'span' },
        { liClass: 'breadcrumb-item', rutaName: '/', aClass: 'text-primary fw-normal fs-6', texto: 'Alta de aplicaciones', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

    // CRAGAR COMPONENTES EN LA TABLA
    onMounted(() => {
    loadComponents();
    });

    //VENTANA MODAL
 
const isModalVisible = ref(false);
const selectedLayout = ref<DefineComponent | null>(null);

const openModal = () => {
  isModalVisible.value = true; // Abre el modal
};


function handleLayoutSelection(layout: string) {
  switch (layout) {
    case 'layoutPrincipal':
      selectedLayout.value = LayoutPrincipal;
      break;
    default:
      selectedLayout.value = null;
  }
  // No se debe cerrar aquí, sino en el manejador del evento `close`
}

function handleModalClose() {
  isModalVisible.value = false; // Cierra el modal cuando se emite el evento de cierre
}
</script>

<style lang="scss" scoped>

    @import "../../assets/tecdmx/sass/jel/_var.scss";

    .header-ca {
        height: 54px;
        border-bottom: $border-width $border-style $border-color-gris;
        &__separator {
            width: 2px;
            height: 32px;
            background: $grey-claro;
            margin-top: 9px;
        }
    }

    .parrafo {
        color: $bg-dark;
    }

    .contenedor {
        background: $white;
        border: $border-width $border-style transparent;
        &__inpt-group {
            border: $border-width $border-style $border-color;
            &__icon {
                border-radius: 0px 4px 4px 0px!important;
            }
        }
       
    }

    .menu {
        width: 48px;
        height: 100%;
        
    }

    ul {
        height: 400px;
    }

    .bi {
        font-size: $text-md;
    }
    
    li {
        list-style: none;
        color: $bg-dark;
        font-size: 14px;
    }

</style>
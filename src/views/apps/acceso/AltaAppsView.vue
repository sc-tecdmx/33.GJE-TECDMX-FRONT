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
    <div class="layout w-100 h-auto d-flex h-50 d-inline-block justify-content-center mt-5 pt-4">

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
                <div class="article ps-5 z-1">

                    <t-1-component 
                    texto="Alta de aplicaciones"
                    />

                    <modal-control-usuario  
                    v-if="currentModal === 'ModalControlUsuario'" 
                    :show="isModalVisible" 
                    title="Alta de Aplicación"
                    :inputs="modalInputs"
                    message=""
                    @close="handleModalClose" 
                    @select-layout="handleLayoutSelection"
                    >
                    </modal-control-usuario>

                    <modal-control-usuario2
                    v-if="currentModal === 'ModalControlUsuario2'" 
                    :show="isModalVisible" 
                    title="Alta de módulo" 
                    :inputs="modalInputs"
                    message=""
                    @close="closeModal"
                    @select-layout="handleLayoutSelection" 
                    />

                    <modal-control-usuario3
                    v-if="currentModal === 'ModalControlUsuario3'" 
                    :show="isModalVisible" 
                    title="Alta de Submódulo" 
                    :inputs="modalInputsSubM"
                    message=""
                    @close="closeModal"
                    @select-layout="handleLayoutSelection" 
                    />

                    <modal-control-usuari4
                      v-if="currentModal === 'ModalControlUsuari4'" 
                    :show="isModalVisible" 
                    title="Alta de Ventana" 
                    :inputs="modalInputsVentana"
                    message=""
                    @close="closeModal"
                    @select-layout="handleLayoutSelection" 
                      />
                
                    <component 
                    :is="selectedLayout"
                    @open-modal="openModal" 
                    />

                </div>
                <!--END ARTICLE-->

            </div>
            <!--END ROW-->
           
        </div>
        <!--END CONTAINER-->

        <footer-app/>
    </div>
    <!--END LAYOUT-->



</template>

<script setup lang="ts">

    import HeaderControlAcceso from '@/components/common/HeaderControlAcceso.vue';
    import MenuControl from '@/components/apps/jel/MenuControl.vue';
    import BreadCrumbPrincipal from '@/components/apps/jel/BreadCrumbPrincipal.vue';
    import T1Component from '@/components/layout/T1Component.vue';
    import ModalControlUsuario from '@/components/common/ModalControlUsuario.vue';
    import ModalControlUsuario2 from '@/components/common/ModalControlUsuario2.vue';
    import AltaComponent from '@/components/apps/jel/AltaComponent.vue';
    import DatosControl from '@/components/apps/jel/DatosControl.vue';
    import DatosControl2 from '@/components/apps/jel/DatosControl2.vue';
    import DatosControl3 from '@/components/apps/jel/DatosControl3.vue';
    import ModalControlUsuario3 from '@/components/common/ModalControlUsuario3.vue';
    import DatosControl4 from '@/components/apps/jel/DatosControl4.vue';
    import ModalControlUsuari4 from '@/components/common/ModalControlUsuari4.vue';
    import FooterApp from '../../../components/apps/jel/FooterApp.vue';
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
        { liClass: 'breadcrumb-item', rutaName: '/inst/acceso/alta', aClass: 'text-primary fw-normal fs-6', texto: 'Alta de aplicaciones', iconClass: '', slash: '', spanClass: 'span' },
        // MÁS...
    ];
    }

   
    // CRAGAR COMPONENTES EN LA TABLA
    onMounted(() => {
    loadComponents();
    });

    //VENTANA MODAL
    
    // Definir los inputs del modal
    const modalInputs = ref([
      { id: '1', type: 'text', label: 'Tipo de opción', model: 'opcion' },
      { id: '2', type: 'text', label: 'Código', model: 'codigo' },
      { id: '3', type: 'text', label: 'Nombre', model: 'nombre' },
      { id: '4', type: 'text', label: 'Slug', model: 'slug' }
    ]);

    const modalInputsSubM = ref([
      { id: '1', type: 'text', label: 'Rol padre', model: 'rol' },
      { id: '2', type: 'text', label: 'Código', model: 'codigo' },
      { id: '3', type: 'text', label: 'Nombre', model: 'nombre' },

    ]);

    const modalInputsVentana = ref([
      { id: '1', type: 'text', label: 'Ventana', model: 'ventana' },
    ]);


    const isModalVisible = ref(false);
    const currentModal = ref<string | null>(null);
    const selectedLayout = ref<DefineComponent | null>(AltaComponent);

    function openModal(modalName: string) {
      currentModal.value = modalName;
      isModalVisible.value = true;
    }

    function closeModal() {
      isModalVisible.value = false;
    }

    function handleLayoutSelection(layout: string) {
      switch (layout) {
        case 'AltaComponent':
          selectedLayout.value = AltaComponent;
          break;
        case 'DatosControl':
          selectedLayout.value = DatosControl;
          break;
        case 'DatosControl2':
          selectedLayout.value = DatosControl2;
          break;
          case 'DatosControl3':
          selectedLayout.value = DatosControl3;
          break;
          case 'DatosControl4':
          selectedLayout.value = DatosControl4;
          break;
        default:
          selectedLayout.value = null;
      }
      closeModal();
    }

</script>

<style lang="scss" scoped>

    @import "@/assets/tecdmx/sass/jel/_var.scss";

    .aside {
      width: 250px!important;
    }

    .article {
        width: 80%;
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